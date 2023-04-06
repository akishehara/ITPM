const Station = require("../models/stationModel");
const asyncHandler = require("express-async-handler");

const getStations = asyncHandler(async (req, res) => {
  const stations = await Station.find();
  res.json(stations);
});

module.exports = { getStations };
