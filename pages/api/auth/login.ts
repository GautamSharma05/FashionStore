import dbConnector from "../../../database/database";
import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/User";

dbConnector();

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    let user = new User();
  }
};

export default login;
