import express from 'express';
import { daysCheks, getDay, getOneDay } from '../controllers/dayCheckController.js';
import { checkToken } from '../middleware/jwt.middleware.js'

const router = express.Router()

router.post('/daycheck', daysCheks)
router.get('/:userId', checkToken, getDay)
router.get('/:userId/:day', checkToken, getOneDay) // Falta criar o controller


export default router