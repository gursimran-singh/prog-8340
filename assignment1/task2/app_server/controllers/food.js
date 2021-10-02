const foodlist = function (req, res) {
  res.render("foodlist", {
    title: "Punjabi Tadka, Authentic Vegetarian Resturant - List",
    title_content: "Food List",
  });
};

const favouriteFood = function (req, res) {
  res.render("favourite-food", {
    title: "Punjabi Tadka, Authentic Vegetarian Resturant - Favourite",
    title_content: "Favourite Food",
    food: "Kadai Paneer"
  });
};

module.exports = {
  foodlist,
  favouriteFood,
};
