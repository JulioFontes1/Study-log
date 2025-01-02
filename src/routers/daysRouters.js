import express from 'express';
import { daysCheks, getDay } from '../controllers/dayCheckController.js';

const router = express.Router()

router.post('/daycheck', daysCheks)
router.get('/:dayId', getDay)

export default router