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

const getStationById = asyncHandler(async (req, res) => {
  const station = await Station.findById(req.params.id);

  if (station) {
    res.json(station);
  } else {
    res.status(404).json({ message: "Station not found" });
  }
});

const updateStation = asyncHandler(async (req, res) => {
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

  const station = await Station.findById(req.params.id);

  if (station) {
    station.name = name;
    station.category = category;
    station.address = address;
    station.district = district;
    station.hours = hours;
    station.days = days;
    station.image = image;
    station.phone = phone;
    station.description = description;

    const updatedStation = await station.save();
    res.json(updatedStation);
  } else {
    res.status(404);
    throw new Error("Station not found");
  }
});

const deleteStation = asyncHandler(async (req, res) => {
  const station = await Station.findById(req.params.id);

  if (station) {
    await station.remove();
    res.json({ message: "Station Removed" });
  } else {
    res.status(404);
    throw new Error("Station not found");
  }
});

module.exports = {
  getStations,
  createStation,
  getStationById,
  updateStation,
  deleteStation,
};
