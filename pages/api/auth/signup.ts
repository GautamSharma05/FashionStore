import dbConnector from "../../../database/database";
import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/User";

var CryptoJS = require("crypto-js");

dbConnector();
type ResponseData = {
  success: boolean;
  message: string;
};

const signUp = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
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
    user.save((error: any) => {
      if (error) {
        return res
          .status(400)
          .json({ success: false, message: "User Already Exist" });
      }
      res.status(200).json({
        success: true,
        message: "You Successfully Created Your Account",
      });
    });
  }
};

export default signUp;
