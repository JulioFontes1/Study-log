import dotenv from "dotenv";
import  jwt from "jsonwebtoken";

dotenv.config();

const authenticateToken  = (req, res, next) => {
  const token = req.headers['authorization']

  if(!token){
    return res.status(401).json({msg: "Acesso negado"})
  }

  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret)
    next()
  } catch (error) {
    res.status(400).json({msg: "Token Inválido"})
  }
}

export { authenticateToken }