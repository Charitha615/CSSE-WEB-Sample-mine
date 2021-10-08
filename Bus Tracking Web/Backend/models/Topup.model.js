const mongoose = require("mongoose");

const TopListSchema = new mongoose.Schema(
  {
    accountId: {type: String,trim: true,requried: true},
    accountName: {type: String,trim: true,requried: true},
    cardId: {type: String,trim: true,requried: true},
    latestPayment: {type: String,trim: true,requried: true},
    latestPaymentDate: {type: String,trim: true,requried: true},
    currentBalance: {type: String,trim: true,requried: true},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TopupPayment", TopListSchema);
