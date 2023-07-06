const { DataTypes } = require("sequelize");
const sequelize = require("../Helper/Connect");

const Slider = sequelize.define("slider", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  imgurl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Slider;
