const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  database: "node-complete",
  username: "root",
  password: "Pegasus@1111",
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
