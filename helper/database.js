const Sequalize = require("sequelize");
const DBHOST = process.env.DBHOST;
const DBUSERNAME = process.env.DBUSERNAME;
const PASSWORD = process.env.PASSWORD;
const DATABASENAME = process.env.DATABASENAME;

const sequalize = new Sequalize(DATABASENAME, DBUSERNAME, PASSWORD, {
  dialect: "mysql",
  host: "194.44.93.225",
});

module.exports = sequalize;
