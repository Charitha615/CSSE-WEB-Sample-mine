const mongoose = require("mongoose");

const TripHistory = new mongoose.Schema(
  {
    tripId: {type: String,trim: true,requried: true},
    date: {type: String,trim: true,requried: true},
    dates: {type: String,trim: true,requried: true},
    route: {type: String,trim: true,requried: true},
    totalFee: {type: String,trim: true,requried: true},
    topUpsAtTheStations: {type: String,trim: true,requried: true},
    numberOfStops: {type: String,trim: true,requried: true},
    creditDeductionStatus: {type: String,trim: true,requried: true}

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TripHistory", TripHistory);
