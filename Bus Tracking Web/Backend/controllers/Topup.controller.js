const TopUp = require("../models/Topup.model");
const messages = require("../messages/messages");

const TopUpController = {
  // backend for Card Top Up 
  createTopUp: async (req, res) => {

    try {
      const {
        accountId,
        accountName,
        cardId,
        latestPayment,
        latestPaymentDate,
        currentBalance,
      } = req.body;

      const newTopUp = new TopUp({
        accountId,
        accountName,
        cardId,
        latestPayment,
        latestPaymentDate,
        currentBalance,
      });

      await newTopUp.save();

      return res.status(200).json({
        code: messages.SuccessCode,
        success: messages.Success,
        status: messages.SuccessStatus,
        data: newTopUp,
        message: "TopUp is created successfully.",
      });
    } catch (err) {
      return res.status(500).json({
        code: messages.InternalCode,
        success: messages.NotSuccess,
        status: messages.InternalStatus,
        message: err.message,
      });
    }
  },
  getTopUpDetailsByJobID: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const JobDetails = await TopUp.findById({ _id: req.params.id });

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: JobDetails,
          message: "The Topup details recieved",
        });
      }
    } catch (err) {
      return res.status(500).json({
        code: messages.InternalCode,
        success: messages.NotSuccess,
        status: messages.InternalStatus,
        message: err.message,
      });
    }
  },

  UpdateTopPaymentByID: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        console.log("Stage 01");
        const {
          latestPayment,
          latestPaymentDate,
          currentBalance,

        } = req.body;

        await TopUp.findByIdAndUpdate(req.params.id, {
          latestPayment,
          latestPaymentDate,
          currentBalance,
        });

        const Jobs = await TopUp.findById(req.params.id);

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: Jobs,
          message: "TopUp deatils is Updated.",
        });
      }
    } catch (err) {
      return res.status(500).json({
        code: messages.InternalCode,
        success: messages.NotSuccess,
        status: messages.InternalStatus,
        message: err.message,
      });
    }
  },
}

module.exports = TopUpController;
