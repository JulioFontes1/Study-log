import { User } from "../models/user.db.schema.js"
import { daysCount } from "../models/dayCheck.schema.js";
import { CronJob } from "cron";

// const checkFailure = async () => {
//   const data = {
//     summary: "Dia de ofensiva não registrado",
//     status: false,
//     user: "6765b39188963a240e127dc2"
//   }
//   const newDayCheck = new daysCount({
//     summary: data.summary,
//     status: data.status,
//     user: data.user
//   })

//   await newDayCheck.save()
// }



const job = new CronJob(
	'0 0 14 * * *', // cronTime
	// await checkFailure(), 
	
);

const getDayByDate = async (date) => {
  const days = new Date(date)
  days.setUTCHours(3, 0, 0, 0)
  console.log(days)
  try {
     const day = await daysCount.findOne({date: days})

     console.log(day)
  } catch (error) {
    console.log(error)
  }
}

export default job