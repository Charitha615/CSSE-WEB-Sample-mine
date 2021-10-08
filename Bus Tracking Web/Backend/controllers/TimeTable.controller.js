const TimeTable = require("../models/TimeTable.model");
const messages = require("../messages/messages");

const TopListController = {
  // create timetable backend function
  createTimeTable: async (req, res) => {

    try {
      const {
        route,
        routePath,
        dateAndtime,
        start,
        destination,

      } = req.body;


      const newTimeTable = new TimeTable({
        route,
        routePath,
        dateAndtime,
        start,
        destination,
      });

      console.log("newTimeTable Details : ", newTimeTable);
      await newTimeTable.save();

      return res.status(200).json({
        code: messages.SuccessCode,
        success: messages.Success,
        status: messages.SuccessStatus,
        data: newTimeTable,
        message: "newTimeTable is created successfully.",
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

  // get all timetables backend function
  getAllTimeTable: async (req, res) => {
    await TimeTable.find()
      .then((data) => {
        const count = data.length;
        res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          data: data,
          message: "All TimeTable are Received " + count,
        });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  },

  // get timetable by id backend function
  getTimeTableByRoute: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const TripHistoryDetails = await TimeTable.find({route: req.params.id });

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: TripHistoryDetails,
          message: "The Trip History details recieved",
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

  // delete time slot by id backend function
  DeleteByID: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const Job = await TimeTable.findByIdAndDelete(req.params.id);

        return res.status(200).json({
          code: messages.SuccessCode,
          success: messages.Success,
          status: messages.SuccessStatus,
          data: Job,
          message: "Time slot is deleted!",
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
