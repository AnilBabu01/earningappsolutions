const { DataTypes } = require("sequelize");
const sequelize = require("../Helper/Connect");

const Populargame = sequelize.define("populargame", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  gamename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gameversion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gamedownload: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gamebonus: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  gameimg: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  downloadurl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Populargame;
