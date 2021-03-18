const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: String,
  level: Number,
});

module.exports = mongoose.model("Player", playerSchema);
