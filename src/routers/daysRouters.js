import express from 'express';
import { daysCheks, getDay } from '../controllers/dayCheckController.js';

const router = express.Router()

router.post('/daycheck', daysCheks)
router.get('/', getDay)

export default router