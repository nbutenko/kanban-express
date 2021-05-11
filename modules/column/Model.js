const mongoose = require("mongoose");
const { Schema } = mongoose;

const columnSchema = new Schema({
  title: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Column", columnSchema);
