import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.DATA_BASE_KEY)

async function run() {

  try {
    mongoose.set('debug', true);
    await mongoose.connect("mongodb+srv://julio2006ofc:12345@cluster0.yctme.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected");
  } catch (error) {
    console.log(error)
  }
}

run()

export { run };
