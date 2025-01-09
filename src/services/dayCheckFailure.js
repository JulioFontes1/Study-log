import { User } from "../models/userModel.js"
import { daysCount } from "../models/dayCheckModel.js";
import { CronJob } from "cron";

import { getNormalizedCurrentDate } from "./getCurrentDate.js";

const registerMissedDayCheck = async () => {
  const date = getNormalizedCurrentDate()
  try {
    const allUsers = await User.find()

    const dayRegistered = await daysCount.find({date})

    allUsers.forEach(async user => {
      const day = dayRegistered.some(e => e.user.equals(user._id))
      

      if(day){
        return
      }

      const data = {
        summary: "Dia de ofensiva não registrado",
        status: false,
        user: user._id,
      }
      const newDayCheck = new daysCount({
        summary: data.summary,
        status: data.status,
        user: data.user,
        date
      })
    
      await newDayCheck.save()

    })


  } catch (error) {
    console.log(error)
  }
}



const job = new CronJob(
	'59 59 23 * * *', 
	() => registerMissedDayCheck()
);


export { job }
