import dbConnector from "../../../database/database";
import type { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../models/Product";
dbConnector();
type ResponseData = {
  success: boolean;
  message: any;
};
const addProduct = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        for (let i = 0; i < req.body.length; i++) {
          let product = new Product({
            productname: req.body[i].productname,
            productcategory: req.body[i].productcategory,
            producttype: req.body[i].producttype,
            productsubcategory: req.body[i].productsubcategory,
            productdescrition: req.body[i].productdescrition,
            productprice: req.body[i].productprice,
            productquantity: req.body[i].productquantity,
            productsizes: req.body[i].productsizes,
            productcolors: req.body[i].productcolors,
            productimages: req.body[i].productimages,
          });
          product.save((error: any) => {
            if (error) {
              res.status(400).json({ success: false, message: error });
            }
            res
              .status(200)
              .json({ success: true, message: "Product Added Successfully" });
          });
        }
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }

      break;
    case "GET":
      try {
        let products = await Product.find();
        if (!products) {
          res
            .status(400)
            .json({ success: true, message: "Products Not Found" });
        }
        res.status(200).json({ success: true, message: products });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }

      break;

    default:
      break;
  }
};

export default addProduct;
