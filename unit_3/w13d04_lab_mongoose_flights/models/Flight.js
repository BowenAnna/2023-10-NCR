const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const destinationSchema = new mongoose.Schema({
  airport: {
    type: String,
    enum: ["AUS", "DAL", "LAX", "SAN", "SEA"],
    required: true,
  },
  arrival: { type: Date, required: true },
});

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"],
    required: true,
  },
  flightNo: { type: Number, min: 10, max: 9999, required: true },
  departs: {
    type: Date,
    default: Date.now + 365 * 24 * 60 * 60 * 1000,
    required: true,
  },
  airport: {
    type: String,
    enum: ["AUS", "DAL", "LAX", "SAN", "SEA"],
    default: "SAN",
    required: true,
  },
  destinations: { type: [destinationSchema], required: true },
});

const Flight = mongoose.model("Flight", flightSchema);
module.exports = Flight;
