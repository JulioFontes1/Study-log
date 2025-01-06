import express from 'express';
import { daysCheks, getDay } from '../controllers/dayCheckController.js';
import { checkToken } from '../middleware/jwt.middleware.js'

const router = express.Router()

router.post('/daycheck', daysCheks)
router.get('/:dayId', checkToken, getDay)

export default router