const express = require("express");
const {
  getReviews,
  createReview,
  getReviewById,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");

const router = express.Router();

router.route("/").get(getReviews);
router.route("/create").post(createReview);
router.route("/:id").get(getReviewById).put(updateReview).delete(deleteReview);

module.exports = router;
