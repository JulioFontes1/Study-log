import mongoose from "mongoose";

const dayCheckSchema = new mongoose.Schema({
  summary: { type: String, required: true },
  status: { type: Boolean, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
  date: { type: Date, required: true },
});

const daysCount = mongoose.model("daysChecks", dayCheckSchema);

export { daysCount };
