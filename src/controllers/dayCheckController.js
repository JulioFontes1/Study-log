import { daysCount } from "../models/dayCheckModel.js";

import { getNormalizedCurrentDate, getDayAndMonth} from "../services/getCurrentDate.js";

const registerDayCheck = async (req, res) => {
  const date = getNormalizedCurrentDate();
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
    console.error("Erro na requisição");
  }
};

const getAllDaysByUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const days = await daysCount.find({ user: userId})
    res.json({days});
  } catch (error) {
    console.error("Erro na requisição");
  }
};

const getDayByDate = async (req, res) => {
  const { userId, day } = req.params;

  try {
    const allDays = await daysCount.find({ user: userId })


    const normalizedDate = new Date(getDayAndMonth(day))
    
    const currentDate = await allDays.find((e) => {return e.date.toISOString() === normalizedDate.toISOString()})

    if(!currentDate){
      res.status(400).json({msg: "Dia não registrado"})
      return
    }

    res.status(200).json({msg: currentDate})

  } catch (error) {
    console.error("Erro na requisição");
  }
}


export { registerDayCheck, getAllDaysByUser, getDayByDate };
