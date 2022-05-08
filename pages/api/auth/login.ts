import dbConnector from "../../../database/database";
import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

dbConnector();

const login = async (req: NextApiRequest, res: NextApiResponse) => {};

export default login;
