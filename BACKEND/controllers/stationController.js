const Station = require("../models/stationModel");
const asyncHandler = require("express-async-handler");

const getStations = asyncHandler(async (req, res) => {
  const stations = await Station.find();
  res.json(stations);
});

const createStation = asyncHandler(async (req, res) => {
  const {
    name,
    category,
    address,
    district,
    hours,
    days,
    image,
    phone,
    description,
  } = req.body;

  if (
    !name ||
    !category ||
    !address ||
    !district ||
    !hours ||
    !days ||
    !image ||
    !phone ||
    !description
  ) {
    res.status(400);
    throw new Error("Please Fill all the Fields");
  } else {
    const station = new Station({
      name,
      category,
      address,
      district,
      hours,
      days,
      image,
      phone,
      description,
    });

    const createdStation = await station.save();

    res.status(201).json(createdStation);
  }
});

module.exports = { getStations, createStation };
