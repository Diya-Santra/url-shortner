import { User } from "../models/user.model.js"
import { v4 as uuidv4 } from 'uuid';
import { setSession } from "../services/auth.services.js";

const registerController = async (req, res) => {
  const { username, email, password } = req.body
  const user = await User.create({
    userName: username,
    email,
    password
  })
  const uid = uuidv4();
  setSession(uid, user);

  res.cookie("sessionId", uid);
  res.redirect("/");
}

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
    password
  });
  if (!user) {
    res.json({
      message: "User doesn't exist"
    })
    return;
  }

  const uid = uuidv4();
  setSession(uid, user.userName);
  res.cookie("sessionId", uid)
  res.redirect("/");
}

export {
  registerController,
  loginController
}
