const Sequalize = require("sequelize");

const sequalize = new Sequalize("intershop", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequalize;
