const express = require("express");
const { getStations } = require("../controllers/stationController");

const router = express.Router();

router.route("/").get(getStations);
//router.route("/create").post()
//router.route("/:id").get().put().delete();

module.exports = router;
