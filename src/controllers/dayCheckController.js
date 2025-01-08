import jwt from "jsonwebtoken"

import { User } from "../models/user.db.schema.js";
import { daysCount } from "../models/dayCheck.schema.js";

import currentDate from "../services/currentDate.js";
import { checkToken } from "../middleware/jwt.middleware.js";

const daysCheks = async (req, res) => {
  const date = currentDate();
  try {
    const { summary, status, user } = req.body;
    console.log(summary)

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
    const userId = req.params.userId;

    const days = await daysCount.find({ user: userId})
    res.json({days});
  } catch (error) {
    console.log(error);
  }
};

const getOneDay = async (req, res) => {
  const { userId, day } = req.params;

  try {
    const userConnected = await User.findById(userId)
    const allDays = await daysCount.find({ user: userId })

    const currentDate = await allDays.find((e) => {return e.date.getDate() == parseInt(day)})

    if(!currentDate){
      res.status(400).json({msg: "Dia não registrado"})
      return
    }

    res.status(200).json({msg: currentDate})

  } catch (error) {
    console.log(error)
  }
}


export { daysCheks, getDay, getOneDay };
