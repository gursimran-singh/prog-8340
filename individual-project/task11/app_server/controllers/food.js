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

const _renderCreatePage = function (req, res) {
  res.render("create-new-food", {
    title: "Create New Food",
  });
};

const addNewFood = function (req, res) {
  _renderCreatePage(req, res);
};

const doAddNewFood = function (req, res) {
  const path = "/api/foods";
  const postdata = {
    name: req.body.name,
    type: req.body.type,
    price: req.body.price,
    rating: req.body.rating,
    image: req.body.image,
    description: req.body.description,
    reviews: [
      {
        author: req.body.review1_author,
        rating: req.body.review1_rating,
        reviewText: req.body.review1_reviewText,
      },
      {
        author: req.body.review2_author,
        rating: req.body.review2_rating,
        reviewText: req.body.review2_reviewText,
      }
    ]
  };
  console.log('post data: ', postdata);
  const requestOptions = {
    url: apiOptions.server + path,
    method: "POST",
    json: postdata,
  };
  request(requestOptions, (err, response, body) => {
    if (response.statusCode == 201) {
      res.redirect("/");
    }
  });
};

module.exports = {
  foodlist,
  foodInfo,
  doAddNewFood,
  addNewFood,
};
