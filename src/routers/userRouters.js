import { User } from "../db/user.db.schema.js";

const userCadasters = async (req, res) => {
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

    return res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (error) {
    console.log(error);
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).send("Email incorreto");
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).send("Senha incorreta");
    }

    res.statu(200).send("Usuário Logado");
  } catch (error) {
    console.log(error);

    res.status(500).send("Erro do servidor");
  }
};

export { userCadasters, userLogin };
