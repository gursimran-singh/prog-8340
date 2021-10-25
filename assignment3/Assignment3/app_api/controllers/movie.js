
const mongoose = require("mongoose");
const movie = mongoose.model("Movie");

var sendJSONResponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};

const getMovies = function (req, res) {
  movie.find().exec((err, moviedata) => {
    if (err) {
      sendJSONResponse(res, 404, err);
      return;
    }
    sendJSONResponse(res, 200, moviedata);
  });
};


const createMovie = function (req, res) {
  movie.create(req.body, (err, moviedata) => {
    if (err) {
      console.log(err);
      sendJSONResponse(res, 400, err);
      return;
    }
    sendJSONResponse(res, 201, moviedata);
  });
};
const getSingleMovie = function (req, res) {
  movie.findById(req.params.movieid).exec((err, moviedata) => {
    if (!moviedata) {
      sendJSONResponse(res, 404, { message: "movieid not found" });
    } else if (err) {
      sendJSONResponse(res, 404, err);
    } else {
      sendJSONResponse(res, 200, moviedata);
    }
  });
};
const updateMovie = function (req, res) {
  res.status(200).json({ message: "success" });
};
const deleteMovie = function (req, res) {
  res.status(200).json({ message: "success" });
};

module.exports = {
  getMovies,
  createMovie,
  getSingleMovie,
  updateMovie,
  deleteMovie,
};
