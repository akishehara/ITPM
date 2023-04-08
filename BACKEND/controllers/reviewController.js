const Review = require("../models/reviewModel");
const asyncHandler = require("express-async-handler");

const getReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find();
  res.json(reviews);
});

const createReview = asyncHandler(async (req, res) => {
  const { title, content, service } = req.body;

  if (!title || !content || !service) {
    res.status(400);
    throw new Error("Please Fill all the Fields");
  } else {
    const review = new Review({ title, content, service });

    const createdReview = await review.save();

    res.status(201).json(createReview);
  }
});

const getReviewById = asyncHandler(async (req, res) => {
  const review = await Review.findById(req.params.id);

  if (review) {
    res.json(review);
  } else {
    res.status(404).json({ message: "Review not found" });
  }
});

const updateReview = asyncHandler(async (req, res) => {
  const { title, content, service } = req.body;

  const review = await Review.findById(req.params.id);

  if (review) {
    review.title = title;
    review.content = content;
    review.service = service;

    const updatedReview = await review.save();
    res.json(updatedReview);
  } else {
    res.status(404);
    throw new Error("Review not found");
  }
});

const deleteReview = asyncHandler(async (req, res) => {
  const review = await Review.findById(req.params.id);

  if (review) {
    await review.remove();
    res.json({ message: "Review removed" });
  } else {
    res.status(404);
    throw new Error("Review not found");
  }
});

module.exports = {
  getReviews,
  createReview,
  getReviewById,
  updateReview,
  deleteReview,
};
