import express from 'express'
const router = express.Router()

import rateLimiter from 'express-rate-limit'
const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: 'Too many requests from this IP, please try again after 15 minutes',
})

import { register, login, updateUser, deleteUser, updateDbUser, getUsers } from '../controllers/authController.js'
import authenticateUser from '../middleware/auth.js'
import User from '../models/User.js'

// user management of their own data
router.route('/register').post(apiLimiter, register);
router.route('/login').post(apiLimiter, login)
router.route('/updateUser').patch(authenticateUser, updateUser);

// admin management of database users
router.route('/allUsers').get(getUsers)
router.route('/:id').patch(updateDbUser)
router.route('/:id').delete(deleteUser)

export default router
