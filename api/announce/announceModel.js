const mongoose = require("mongoose");

const { Schema } = mongoose;

const announceSchema = new Schema({
  thisWeek: {
    userName: String,
    userId: String,
    zar: [{ text: String }],
  },
  lastWeek: {
    userName: String,
    userId: String,
    zar: [{ text: String }],
  },
  beforeWeek: {
    userName: String,
    userId: String,
    zar: [{ text: String }],
  },
});

module.exports = mongoose.model("announces", announceSchema);
