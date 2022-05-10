const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, require: true },
    productid: { type: mongoose.Types.ObjectId, require: true },
    rating: { type: Number, min: 1, max: 5 },
    customerreview: { type: String },
    customerphotoreviews: {
      type: Array,
      index: {
        dropDups: true,
      },
    },
  },
  { timestamps: true }
);

const ProductSchema = new mongoose.Schema(
  {
    productname: { type: String, require: true },
    productcategory: { type: String, require: true },
    producttype: { type: String, require: true },
    productsubcategory: { type: String, require: true },
    productdescription: { type: String, require: true },
    productoriginalprice: { type: Number, require: true },
    productdiscountprice: { type: Number, require: true },
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
    customerphotoreviews: {
      type: Array,
      index: {
        dropDups: true,
      },
    },
    customerrating: [RatingSchema],
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("Product", ProductSchema);
