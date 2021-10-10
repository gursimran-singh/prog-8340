const listMovies = function (req, res) {
  res.render("list-display", {
    title: "Movie List",
    movieArray: [
      {
        name: "Avengers - End Game",
        director: "Anthony and Joe Russo ",
        price: "3.25",
        rating: 4,
        image: "/images/endgame.jpg",
      },
      {
        name: "Justice League",
        director: "Zack Synder",
        price: "2.25",
        rating: 5,
        image: "/images/justiceleague.jpeg",
      },
      {
        name: "Alita - Battle Angel",
        director: "Robert Rodriguez",
        price: "1.25",
        rating: 4,
        image: "/images/alita.jpeg",
      },
      {
        name: "Wonder Women",
        director: "Patty Jenkins",
        price: "1.25",
        rating: 4,
        image: "/images/wonder.jpeg",
      },
    ],
  });
};

const displayMovie = function (req, res) {
  res.render("display", {
    title: "NOT IMPLEMENTED!!",
  });
};

module.exports = {
  listMovies,
  displayMovie,
};
