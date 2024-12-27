import { User } from "../db/user.db.schema.js"
import { daysCount } from "../db/dayCheck.schema.js";

const daysCheks = async (req, res) => {
  try {
    const { summary, status, user } = req.body;

    const newDayCheck = new daysCount({ summary, status, user });

    await newDayCheck.save();

    return res.status(201).json({ message: 'Dia registrado com sucesso!' })
  } catch (error) {
    console.log(error);
  }
};

const getDay = async (req, res) => {
  try {
    const { userId, dayId } = req.params
    const { summary } = req.body
    const day = await daysCount.findById(dayId)

    res.send(day)    
  } catch (error) {
    console.log(error)
  }
}

export { daysCheks, getDay }
