import express from "express";
import cors from "cors";

import { run } from "./src/db/db.connection.js"
import { userCadasters, userLogin } from "./src/routers/userRouters.js"
import { daysCheks, getDay } from "./src/routers/daysRouters.js";

run()





const app = express();

app.use(express.json())
app.use(cors());

app.post('/register', userCadasters)
app.post('/daycheck', daysCheks)
app.get('/day/:userId/:dayId', getDay)
app.get('/login', userLogin)

app.listen(3000, () => console.log("Started"));