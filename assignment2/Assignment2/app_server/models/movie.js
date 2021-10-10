const mongoose = require("mongoose");

const castSchema = mongoose.Schema({
  actors: {
    type: Array,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
});

const movieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 1,
    min: 1,
    max: 5,
  },
  image: {
    type: String,
    required: true,
  },
  cast: [castSchema],
});


mongoose.model('Movie', movieSchema);