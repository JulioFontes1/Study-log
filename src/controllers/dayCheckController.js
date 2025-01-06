import jwt from "jsonwebtoken"

import { User } from "../models/user.db.schema.js";
import { daysCount } from "../models/dayCheck.schema.js";

import currentDate from "../services/currentDate.js";
import { checkToken } from "../middleware/jwt.middleware.js";

const daysCheks = async (req, res) => {
  const date = currentDate();
  try {
    const { summary, status, user } = req.body;

    const days = await daysCount.find({ user });

    const dayRegistered = days.find((e) => { return e.date.getTime() === date.getTime()})

    if (dayRegistered) {
      return res.status(401).json({ message: "Dia já foi registrado!" });
    }
    const newDayCheck = new daysCount({ summary, status, user, date });

    await newDayCheck.save();

    return res.status(201).json({ message: "Dia registrado com sucesso!" });
  } catch (error) {
    console.log(error);
  }
};

const getDay = async (req, res) => {
  try {
    const { userId, dayId } = req.params;
    const { summary } = req.body;
    const day = await daysCount.findById(dayId);

    res.send(day);
  } catch (error) {
    console.log(error);
  }
};



export { daysCheks, getDay };
