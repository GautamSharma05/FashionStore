import dbConnector from "../../../database/database";
import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/User";

dbConnector();
var CryptoJS = require("crypto-js");
const signUp = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    const { name, email, phone } = req.body;
    let user = new User({
      name,
      email,
      phone,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString(),
    });
    user.save();
  }
  let users = await User.find();
  res.status(200).json({ users });
};

export default signUp;
