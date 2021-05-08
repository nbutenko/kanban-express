const mongoose = require("mongoose");
const { Schema } = mongoose;

const cardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  status: String,
  priority: Number,
});

module.exports = mongoose.model("Card", cardSchema);
