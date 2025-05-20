import express from 'express'
import { loginUser, registerUser, validateToken, getUsers } from '../controllers/userController.js'

import { authenticateToken } from '../middleware/authMiddleware.js'
const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/validation', authenticateToken, validateToken)


export default router
