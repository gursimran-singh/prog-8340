const index = function (req, res) {
  res.render("index", { title: "Gursimran Singh" });
};

module.exports = {
  index,
};
