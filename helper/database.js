const Sequalize = require("sequelize");
const DBHOST = process.env.DBHOST;
const DBUSERNAME = process.env.DBUSERNAME;
const PASSWORD = process.env.PASSWORD;
const DATABASENAME = process.env.DATABASENAME;

const sequalize = new Sequalize(DATABASENAME, DBUSERNAME, PASSWORD, {
  dialect: "mysql",
  host: "10.7.101.193",
});

module.exports = sequalize;
