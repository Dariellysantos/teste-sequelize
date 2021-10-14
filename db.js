const Sequelize = require("sequelize");
const sequilize = new Sequelize(
  "tabela_teste_selecao",
  "dariellysantos",
  "123456",
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequilize;
