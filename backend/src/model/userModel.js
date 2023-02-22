const mongoose = require("mongoose");

const userData = mongoose.Schema(
  {
    email: {
      type: String,
      lowercase: true,
      trim: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    mobile: {
      type: String,
    },
    password: {
      type: String,
    },
    photo: {
      type: String,
    },
    createdDate: { type: Date, default: Date.now() },
  },
  {
    versionKey: false,
  }
);

const userModel = mongoose.model("user", userData);
module.exports = userModel;
