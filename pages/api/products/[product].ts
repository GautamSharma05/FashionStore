import dbConnector from "../../../database/database";
import type { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../models/Product";

dbConnector();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { product },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const productById = await Product.findById(product);
        if (!productById) {
          res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, product: productById });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;

    default:
      break;
  }
};
