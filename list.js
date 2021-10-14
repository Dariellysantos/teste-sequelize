const Sequelize = require("sequelize");
const database = require("./db");
const Task = require("./task");

//modelo task
const List = database.define("list", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNul: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNul: false,
  },
  deletedAt: {
    type: Sequelize.DATE,
  },
});
module.exports = List;
