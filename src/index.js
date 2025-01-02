import express from "express";
import cors from "cors";

import { run } from "./db/db.connection.js"

import userRouter from './routers/userRouters.js'
import daysRouter from './routers/daysRouters.js'
import job from "./services/failure.js";

export const app = express();
run()



app.use(express.json())
app.use(cors());

app.use('/user', userRouter)
app.use('/day', daysRouter)

app.listen(3000, () => console.log("Started"));
job.start()