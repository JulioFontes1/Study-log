import mongoose from "mongoose";

const dayCheckSchema = new mongoose.Schema({
  summary: { type: String, required: true }, // O campo 'summary' é obrigatório
  status: { type: Boolean, required: true }, // Certifique-se de que 'status' também esteja definido
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Referência ao usuário
  date: { type: Date, required: true },
});

const daysCount = mongoose.model("daysChecks", dayCheckSchema);

export { daysCount };
