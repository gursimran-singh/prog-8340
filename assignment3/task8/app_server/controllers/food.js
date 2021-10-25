const request = require("request");
const apiOptions = {
  server: "http://localhost:3000",
};

const foodlist = function (req, res) {
  const path = "/api/foods";
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
  res.render("foodlist", {
    title: "Punjabi Tadka, Authentic Vegetarian Resturant - List",
    title_content: "Food List",
    tagline: "Here is a list of food we are serving today",
    foodArray: body,
  });
};

const _renderDetailPage = function (req, res, responseBody) {
  res.render("food-info", {
    title: "Punjabi Tadka, Authentic Vegetarian Resturant - Favourite",
    currentFood: responseBody,
  });
};

const foodInfo = function (req, res) {
  const path = `/api/foods/${req.params.foodid}`;
  const requestOptions = {
    url: apiOptions.server + path,
    method: "get",
    json: {},
  };
  request(requestOptions, (err, response, body) => {
    if (response.statusCode == 200) {
      _renderDetailPage(req, res, body);
    }
  });
};

module.exports = {
  foodlist,
  foodInfo,
};
