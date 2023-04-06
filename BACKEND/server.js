const express = require("express");
const stores = require("./data/stores");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.get("/api/stores", (req, res) => {
  res.json(stores);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));

//fuel stations-ravini
const stations = require("./data/stations");
//const connectDB = require("./config/db");

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.get("/api/stations", (req, res) => {
  res.json(stations);
});

app.get("/api/stations/:id", (req, res) => {
  const station = stations.find((n) => n._id === req.params.id);

  res.send(station);
});
