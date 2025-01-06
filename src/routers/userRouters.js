import express from 'express'
import { userLogin, userCadasters, validation } from '../controllers/userController.js'

import { checkToken } from '../middleware/jwt.middleware.js'
const router = express.Router()

router.post('/register', userCadasters)
router.post('/login', userLogin)
router.post('/validation', checkToken, validation)


export default router
