const request = require("request");
const apiOptions = {
  server: "http://localhost:3000",
};

const listMovies = function (req, res) {
  const path = "/api/movies";
  const requestOptions = {
    url: apiOptions.server + path,
    method: "get",
    json: {},
  };
  request(requestOptions, (err, response, body) => {
    if (response.statusCode == 200 && body.length) {
      _renderHomePage(req, res, body);
    }
  });
};

const _renderHomePage = function (req, res, body) {
  res.render("list-display", {
    title: "Movie List",
    movieArray: body,
  });
};

const _renderDetailPage = function (req, res, responseBody) {
  res.render("display", {
    title: "Movie Info",
    currentMovie: responseBody,
  });
};

const displayMovie = function (req, res) {
  const path = `/api/movie/${req.params.movieid}`;
  const requestOptions = {
    url: apiOptions.server + path,
    method: "get",
    json: {},
  };
  request(requestOptions, (err, response, body) => {
    console.log(body);
    if (response.statusCode == 200) {
      _renderDetailPage(req, res, body);
    }
  });
};

const _renderCreatePage = function (req, res) {
  res.render("create-new-movie", {
    title: "Create New Movie",
  });
};

const addNewMovie = function (req, res) {
  _renderCreatePage(req, res);
};

const doAddNewMovie = function (req, res) {
  const path = "/api/movies";
  const postdata = {
    name: req.body.name,
    genre: req.body.genre,
    price: req.body.price,
    rating: req.body.rating,
    image: req.body.image,
    cast: [
      {
        director: req.body.director,
        actors: req.body.cast
      }
    ]
  };
  const requestOptions = {
    url: apiOptions.server + path,
    method: "POST",
    json: postdata,
  };
  request(requestOptions, (err, response, body) => {
    if (response.statusCode == 201) {
      res.redirect("/list");
    }
  });
};

module.exports = {
  listMovies,
  displayMovie,
  addNewMovie,
  doAddNewMovie
};
