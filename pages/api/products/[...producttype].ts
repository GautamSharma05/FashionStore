import dbConnector from "../../../database/database";
import type { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../models/Product";

dbConnector();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { producttype },
    method,
  } = req;
  switch (method) {
    case "GET":
      try {
        const product = await Product.find({
          productcategory: producttype[0],
          producttype: producttype[1],
        });
        if (!product) {
          res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, product: product });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }

      break;

    default:
      break;
  }
};
