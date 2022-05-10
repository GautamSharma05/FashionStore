import dbConnector from "../../../database/database";
import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/User";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");
dbConnector();

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    let user = await User.findOne({ email: req.body.email });
    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
    if (user) {
      if (req.body.email == user.email && req.body.password == decryptedPass) {
        var token = jwt.sign(
          { email: user.email, name: user.name },
          process.env.SECRET_KEY,
          { expiresIn: "2d" }
        );
        return res.status(200).json({ success: true, token });
      } else {
        return res
          .status(400)
          .json({ success: false, error: "Invalid-Crendential" });
      }
    } else {
      return res.status(400).json({ success: false, error: "No User Found" });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
  let users = await User.find();
  res.status(200).json({ users });
};

export default login;
