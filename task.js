const Sequelize = require("sequelize");
const database = require("./db");
const Id = require("./list");
//modelo task
const Task = database.define("task", {
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
Task.belongsTo(Id, {
  constraint: true,
  foreignKey: "id_list",
});
module.exports = Task;
