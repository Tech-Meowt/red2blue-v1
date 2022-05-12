import express from 'express'
const router = express.Router()

import rateLimiter from 'express-rate-limit'
const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: 'Too many requests from this IP, please try again after 15 minutes',
})

import { register, login, updateUser, adminUpdateUser, createDbUser } from '../controllers/authController.js'
import authenticateUser from '../middleware/auth.js'
import User from '../models/User.js'

router.route('/register').post(apiLimiter, register)
router.route('/login').post(apiLimiter, login)
router.route('/addUser').post(createDbUser)
router.route('/updateUser').patch(authenticateUser, updateUser)
router.route('/allUsers').get((req, res) => {
  User.find((error, data) => {
    if (error) {
      console.log(error)
    } else {
      res.json(data)
      console.log(data)
    }
  })
})
router.route('/:id').patch(adminUpdateUser)
router.route('/:id').patch((req, res) => {
  User.findByIdAndUpdate((error, data) => {
    if (error) {
      console.log(error)
    } else {
      res.json(data)
      console.log(data)
    }
  })
})

export default router
