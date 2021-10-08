const TripHistory = require("../models/TripHistory.model");
const messages = require("../messages/messages");

const TopListController = {
  createTripHistory: async (req, res) => {

    try {
      const {
        tripId,
        date,
        dates,
        route,
        totalFee,
        topUpsAtTheStations,
        numberOfStops,
        creditDeductionStatus

      } = req.body;


      const newTripHistory = new TripHistory({
        tripId,
        dates,
        date,
        route,
        totalFee,
        topUpsAtTheStations,
        numberOfStops,
        creditDeductionStatus
      });

      console.log("TripHistory Details : ", newTripHistory);
      await newTripHistory.save();

      return res.status(200).json({
        code: messages.SuccessCode,
        success: messages.Success,
        status: messages.SuccessStatus,
        data: newTripHistory,
        message: "TripHistory is created successfully.",
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

  getTripHistoryDetailsByDate: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const TripHistoryDetails = await TripHistory.find({date: req.params.id });

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: TripHistoryDetails,
          message: "The TripHistory detail recieved",
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

module.exports = TopListController;
