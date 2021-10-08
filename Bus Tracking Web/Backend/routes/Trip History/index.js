const routes = require("express").Router();
const TripHistory = require("../../controllers/TripHistory..controller");

routes.post("/create-TripHistory", TripHistory.createTripHistory);
routes.get("/getAllTripHistory/:id", TripHistory.getTripHistoryDetailsByDate);

module.exports = routes;
