const mongoose = require("mongoose");
const food = mongoose.model("Food");

var sendJSONResponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};

const getFoods = function (req, res) {
  food.find().exec((err, fooddata) => {
    if (err) {
      sendJSONResponse(res, 404, err);
      return;
    }
    sendJSONResponse(res, 200, fooddata);
  });
};
const createFood = function (req, res) {
  food.create(req.body, (err, fooddata) => {
    if (err) {
      console.log(err);
      sendJSONResponse(res, 400, err);
      return;
    }
    sendJSONResponse(res, 201, fooddata);
  });
};
const getSingleFood = function (req, res) {
  food.findById(req.params.foodid).exec((err, fooddata) => {
    if (!fooddata) {
      sendJSONResponse(res, 404, { message: "foodid not found" });
    } else if (err) {
      sendJSONResponse(res, 404, err);
    } else {
      sendJSONResponse(res, 200, fooddata);
    }
  });
};
const updateFood = function (req, res) {
  if (!req.params.foodid) {
    sendJSONResponse(res, 404, { message: "Not found, foodid is required" });
  } else {
    food.findById(req.params.foodid).exec((err, fooddata) => {
      if (!fooddata) {
        sendJSONResponse(res, 404, { message: "foodid not found" });
      } else if (err) {
        sendJSONResponse(res, 400, err);
      } else {
        fooddata.name = req.body.name;
        fooddata.type = req.body.type;
        fooddata.save((err, fooddata) => {
          if (err) {
            sendJSONResponse(res, 400, err);
          } else {
            sendJSONResponse(res, 200, fooddata);
          }
        });
      }
    });
  }
};
const deleteFood = function (req, res) {
  const foodid = req.params.foodid;
  if (foodid) {
    food.findByIdAndRemove(foodid).exec((err, fooddata) => {
      if (err) {
        sendJSONResponse(res, 404, err);
      } else {
        sendJSONResponse(res, 204, null);
      }
    });
  } else {
    sendJSONResponse(res, 404, { message: "No foodid found" });
  }
};

module.exports = {
  getFoods,
  createFood,
  getSingleFood,
  updateFood,
  deleteFood,
};
