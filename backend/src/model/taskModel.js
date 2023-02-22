const mongoose = require("mongoose");

const taskData = mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
    },
    createdDate: { type: Date, default: Date.now() },
  },
  {
    versionKey: false,
  }
);

const taskModel = mongoose.model("tasks", taskData);
module.exports = taskModel;
