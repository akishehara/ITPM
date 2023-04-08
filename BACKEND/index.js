const express = require("express");
const reviews = require("./data/reviews");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const reviewRoutes = require("./routes/noteRoutes");

const app = express();
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.get("/api/reviews", (req, res) => {
  res.json(reviews);
});

app.get("/api/reviews/:id", (req, res) => {
  const review = reviews.find((n) => n._id === req.params.id);

  res.send(review);
});

app.use("/api/reviews", reviewRoutes);  

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server started on PORT ${PORT}`));
