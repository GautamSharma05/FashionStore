import dbConnector from "../../../database/database";
import type { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../models/Product";
dbConnector();

const addProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    let product = new Product(req.body);
    product.save();
  }
  let products = await Product.find();
  res.status(200).json({ products });
};

export default addProduct;
