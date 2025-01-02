import express from 'express'
import { userLogin, userCadasters } from '../controllers/userController.js'

const router = express.Router()

router.post('/register', userCadasters)
router.get('/login', userLogin)

export default router
