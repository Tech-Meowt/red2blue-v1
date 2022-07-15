import express from 'express'
const router = express.Router()
import {v4 as uuidv4} from 'uuid'
import { generateTokens } from '../lib/jwt.js'
import {
  addRefreshTokenToWhitelist,
  createUserByEmailAndPassword,
  findUserByEmail,
  findRefreshTokenById,
  deleteRefreshToken,
  revokeTokens,
} from '../controllers/authController.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { hashToken } from '../lib/hashToken.js';

import rateLimiter from 'express-rate-limit'
const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: 'Too many requests from this IP, please try again after 15 minutes',
})

router.post('/register', async (req, res, next) => {
  try {
    const { email, password, firstName, lastName } = req.body
    if (!email || !password) {
      res.status(400);
      throw new Error('You must provide all values')
    }
    const existingUser = await findUserByEmail(email)
    if (existingUser) {
      res.status(400);
      throw new Error('Email already in use')
    }

    const user = await createUserByEmailAndPassword({ email, password, firstName, lastName })
    const jti = uuidv4()
    const { accessToken, refreshToken } = generateTokens(user, jti)
    await addRefreshTokenToWhitelist({ jti, refreshToken, userId: user.id })
    res.json({
      accessToken,
      refreshToken,
    });
  } catch (err) {
    next(err)
  }
})

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
    res.status(400);
    throw new Error('You must provide all values')
  }
    const existingUser = await findUserByEmail(email)
    if (!existingUser) {
      res.status(403);
      throw new Error('Invalid login credentials')
    }
    const validPassword = await bcrypt.compare(password, existingUser.password)
    if (!validPassword) {
      res.status(403)
      throw new Error('Invalid login credentials')
    }
    const jti = uuidv4()
    const { accessToken, refreshToken } = generateTokens(existingUser, jti)
    await addRefreshTokenToWhitelist({ jti, refreshToken, userId: existingUser.id })
    res.json({
      accessToken,
      refreshToken
    })
  } catch (err) {
    next(err)
  }
}, apiLimiter)

router.post('/refreshToken', async (req, res, next) => {
  try {
    const { refreshToken } = req.body
    if (!refreshToken) {
      res.status(400);
      throw new Error('Missing refresh token')
    }
    const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET)
    const savedRefreshToken = await findRefreshTokenById(payload.jti)

    if (!savedRefreshToken || savedRefreshToken.revoked === true) {
      res.status(401)
      throw new Error('Unauthorized');
    }
    const hashedToken = hashToken(refreshToken);
    if (hashedToken !== savedRefreshToken.hashedToken) {
      res.status(401)
      throw new Error('Unauthorized')
    }
    const user = await findUserById(payload.userId);
    if (!user) {
      res.status(401);
      throw new Error('Unauthorized');
    }
    await deleteRefreshToken(savedRefreshToken.id);
    const jti = uuidv4();
    const { accessToken, refreshToken: newRefreshToken } = generateTokens(
      user,
      jti
    );
    await addRefreshTokenToWhitelist({
      jti,
      refreshToken: newRefreshToken,
      userId: user.id,
    });
    res.json({
      accessToken,
      refreshToken: newRefreshToken,
    });
  } catch (err) {
next(err)
  }
})

// import { register, login, updateUser, deleteUser, createUser, updateDbUser, getUsers, getUserDetails  } from '../controllers/authController.js'
// import authenticateUser from '../middleware/auth.js'
// import User from '../models/User.js'

// // user management of their own data
// router.route('/register').post(apiLimiter, register);
// router.route('/login').post(apiLimiter, login)
// router.route('/updateUser').patch(authenticateUser, updateUser);

// // admin management of database users
// router.route('/allUsers').get(getUsers);
// router.route('/addUser').post(createUser);
// router.route('/:id').get(getUserDetails)
// router.route('/:id').patch(updateDbUser)
// router.route('/:id').delete(deleteUser)

export default router
