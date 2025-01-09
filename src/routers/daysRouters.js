import express from 'express';
import { registerDayCheck, getAllDaysByUser, getDayByDate } from '../controllers/dayCheckController.js';
import { authenticateToken } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/daycheck', registerDayCheck)
router.get('/:userId', authenticateToken, getAllDaysByUser)
router.get('/:userId/:day', authenticateToken, getDayByDate) 


export default router