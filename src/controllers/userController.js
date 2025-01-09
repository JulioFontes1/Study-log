import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    
    const usersName = await User.findOne({ userName: userName });
    const usersEmail = await User.findOne({ email: email });

    if (usersName || usersEmail) {
      res.status(401).send("Usuário já cadastrado!");
      return;
    }

    const newUser = new User({ userName, email, password });
    await newUser.save();

    return res.status(201).send("Usuário criado com sucesso");
  } catch (error) {
    console.error("Erro na requisição");
  }
};

const loginUser = async (req, res) => {

  const secret = process.env.SECRET

  try {
    const { email, password } = req.body;

    

    const user = await User.findOne({ email });
    const isMatch = await user.comparePassword(password)


    if (!user || !isMatch) {
      return res.status(400).json({msg: "Credenciais incorretas"});
    }


    let token = jwt.sign({
      id: user._id
    }, secret, { expiresIn: '3h' })

    res.status(200).json( {msg: "Usuário Logado", token, userId: user._id, name: user.userName} );
  } catch (error) {
    console.error("Erro na requisição");

    res.status(500).send("Erro do servidor");
  }
};

const validateToken = async (req, res) => {
  res.status(200).json({msg: "Token válido"})
}

export { registerUser, loginUser, validateToken };
