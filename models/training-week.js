const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trainingWeekSchema = new Schema({
  date: Date,
  monday: {
    "_1800": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_1830": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_1900": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_1930": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_2000": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_2030": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_2100": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
  },
  tuesday: {
    "_1800": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_1830": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_1900": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_1930": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_2000": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_2030": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_2100": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
  },
  wednesday: {
    "_1800": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_1830": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_1900": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_1930": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_2000": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_2030": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_2100": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
  },
  thursday: {
    "_1800": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_1830": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_1900": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_1930": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_2000": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_2030": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_2100": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
  },
  friday: {
    "_1800": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_1830": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_1900": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_1930": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_2000": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_2030": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_2100": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
  },
  saturday: {
    "_1800": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_1830": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_1900": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_1930": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_2000": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_2030": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_2100": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
  },
  sunday: {
    "_1800": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_1830": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_1900": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_1930": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_2000": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_2030": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
    "_2100": {
      "defender_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "defender_2": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_1": { type: Schema.Types.ObjectId, ref: "Player" },
      "attacker_2": { type: Schema.Types.ObjectId, ref: "Player" },
    },
  }
});

module.exports = mongoose.model("TrainingWeek", trainingWeekSchema);
