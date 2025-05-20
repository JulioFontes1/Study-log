import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config();

async function connectDataBase() {

  try {
    await mongoose.connect(process.env.DATA_BASE_KEY);
    console.log("Connected");
  } catch (error) {
    console.error("Erro na conexão", error);
  }
}

export { connectDataBase };
