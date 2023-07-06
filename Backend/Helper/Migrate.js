//add models and migrate that models
const sequelize = require("./Connect");
const user = require("../Models/user.model");
const Slider = require("../Models/slider.model");
const updategame = require("../Models/updategame.model");
const newname = require("../Models/newname.model");
const populargame = require("../Models/populargame.model");
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
