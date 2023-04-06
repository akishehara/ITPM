const express = require("express");
const stations = require("./data/stations");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.get("/api/stations", (req, res) => {
  res.json(stations);
});

app.listen(5000, console.log("Server started on PORT 5000"));
