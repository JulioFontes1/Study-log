import { User } from "../models/user.db.schema.js"
import { daysCount } from "../models/dayCheck.schema.js";
import { CronJob } from "cron";

import currentDate from "./currentDate.js";

const checkFailure = async () => {
  const date = currentDate()
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
	() => checkFailure()
);


export { job }
