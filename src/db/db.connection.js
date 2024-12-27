import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config();

async function run() {

  try {
    await mongoose.connect(process.env.DATA_BASE_KEY);
    console.log("Connected");
  } catch (error) {
    console.log(error)
  }
}

export { run };
