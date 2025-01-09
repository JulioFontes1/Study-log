import express from "express";
import cors from "cors";

import { connectDataBase } from "./db/db.connection.js"

import userRouter from './routers/userRouters.js'
import daysRouter from './routers/daysRouters.js'
import { job } from "./services/dayCheckFailure.js";


export const app = express();


app.use(express.json())
app.use(cors());

app.use('/user', userRouter)
app.use('/day', daysRouter)

app.listen(process.env.PORT || 3000, () => console.log("Started"));
connectDataBase()
job.start()
