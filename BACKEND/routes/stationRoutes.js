const express = require("express");
const {
  getStations,
  createStation,
} = require("../controllers/stationController");

const router = express.Router();

router.route("/").get(getStations);
router.route("/create").post(createStation);
//router.route("/:id").get().put().delete();

module.exports = router;
