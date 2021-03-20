const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: String,
  position: {
    type: String,
    enum: ["defender", "attacker", "versatile"],
  },
  level: Number,
  availability: {
    monday: [String],
    tuesday: [String],
    wednesday: [String],
    thursday: [String],
    friday: [String],
    saturday: [String],
    sunday: [String],
  }
});

module.exports = mongoose.model("Player", playerSchema);
