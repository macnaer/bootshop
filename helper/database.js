const Sequalize = require("sequelize");

const { DATABASENAME, PASSWORD, USERNAME, HOSTNAME } =  require("./config");

const sequalize = new Sequalize(DATABASENAME, USERNAME, PASSWORD, {
  dialect: "mysql",
  host: HOSTNAME
});

module.exports = sequalize;
