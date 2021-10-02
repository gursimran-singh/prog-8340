const index = function (req, res) {
  res.render("index", {
    title: "Punjabi Tadka, Authentic Vegetarian Resturant - Home"
  });
};

module.exports = {
  index,
};
