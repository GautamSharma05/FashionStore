const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    productname: { type: String, require: true },
    productcategory: { type: String, require: true },
    producttype: { type: String, require: true },
    productsubcategory: { type: String, require: true },
    productdescrition: { type: String, require: true },
    productprice: { type: Number, require: true },
    productquantity: { type: Number, require: true },
    productsizes: {
      type: Array,
      index: {
        dropDups: true,
      },
      require: true,
    },
    productcolors: {
      type: Array,
      index: {
        dropDups: true,
      },
      require: true,
    },
    productimages: {
      type: Array,
      index: {
        dropDups: true,
      },
      require: true,
    },
  },
  { timestamp: true }
);

mongoose.models = {};
export default mongoose.model("Product", ProductSchema);
