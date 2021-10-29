const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 1,
    required: true,
    min: 1,
    max: 5,
  },
  reviewText: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  reviews: [reviewSchema],
});

mongoose.model("Food", foodSchema);
