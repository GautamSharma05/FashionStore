const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    phone: { type: Number, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    isEmailVerfied: { type: Boolean, default: false },
    ROLE: { type: String, default: "user" },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("User", UserSchema);
