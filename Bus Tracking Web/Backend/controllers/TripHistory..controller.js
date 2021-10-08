const TripHistory = require("../models/TripHistory.model");
const messages = require("../messages/messages");

const TopListController = {
  createTripHistory: async (req, res) => {

    try {
      const {
        trip_id,
        date,
        dates,
        route,
        total_fee,
        top_ups_at_the_stations,
        number_of_stops,
        credit_deduction_status

      } = req.body;


      const newTripHistory = new TripHistory({
        trip_id,
        dates,
        date,
        route,
        total_fee,
        top_ups_at_the_stations,
        number_of_stops,
        credit_deduction_status
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
