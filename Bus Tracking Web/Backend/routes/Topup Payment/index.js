const routes = require("express").Router();
const TopupRoutes = require("../../controllers/Topup.controller");

routes.post("/create-TopList", TopupRoutes.createTopUp);
routes.put("/update-Topup/:id", TopupRoutes.UpdateTopPaymentByID);
routes.get("/getAllTopListbyID/:id", TopupRoutes.getTopUpDetailsByJobID);

module.exports = routes;
