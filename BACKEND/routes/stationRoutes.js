const express = require("express");
const {
  getStations,
  createStation,
  getStationById,
  updateStation,
  deleteStation,
} = require("../controllers/stationController");

const router = express.Router();

router.route("/").get(getStations);
router.route("/create").post(createStation);
router
  .route("/:id")
  .get(getStationById)
  .put(updateStation)
  .delete(deleteStation);

module.exports = router;
