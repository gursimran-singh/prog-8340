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
  movie.create(
    {
      name: req.body.name,
      genre: req.body.genre,
      rating: req.body.rating,
      price: req.body.price,
      image: req.body.image,
      cast: [
        {
          director: req.body.cast.director,
          actors: [
            req.body.cast.actor1,
            req.body.cast.actor2,
            req.body.cast.actor3,
          ],
        },
      ],
    },
    (err, moviedata) => {
      if (err) {
        console.log(err);
        sendJSONResponse(res, 400, err);
        return;
      }
      sendJSONResponse(res, 201, moviedata);
    }
  );
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
  if (!req.params.movieid) {
    sendJSONResponse(res, 404, { message: "Not found, movieid is required" });
  } else {
    movie.findById(req.params.movieid).exec((err, moviedata) => {
      if (!moviedata) {
        sendJSONResponse(res, 404, { message: "movieid not found" });
      } else if (err) {
        sendJSONResponse(res, 400, err);
      } else {
        moviedata.name = req.body.name;
        moviedata.genre = req.body.genre;
        moviedata.rating = req.body.rating;
        moviedata.price = req.body.price;
        moviedata.image = req.body.image;
        moviedata.cast[0].director = req.body.cast.director;
        moviedata.cast[0].actors[0] = req.body.cast.actor1;
        moviedata.cast[0].actors[1] = req.body.cast.actor2;
        moviedata.cast[0].actors[2] = req.body.cast.actor3;

        moviedata.save((err, moviedata) => {
          if (err) {
            sendJSONResponse(res, 400, err);
          } else {
            sendJSONResponse(res, 200, moviedata);
          }
        });
      }
    });
  }
};

const deleteMovie = function (req, res) {
  movie.findByIdAndDelete(req.params.movieid).exec((err, data) => {
    if (err) {
      sendJSONResponse(res, 400, err);
    } else {
      sendJSONResponse(res, 200, data);
    }
  });
};

module.exports = {
  getMovies,
  createMovie,
  getSingleMovie,
  updateMovie,
  deleteMovie,
};
