const express = require("express");
const stores = require("./data/stores");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.get("/api/stores", (req, res) => {
  res.json(stores);
});

app.listen(5000, console.log("Server started on PORT 5000"));

//fuel stations-ravini
const stations = require("./data/stations");

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.get("/api/stations", (req, res) => {
  res.json(stations);
});
