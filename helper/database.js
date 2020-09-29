const Sequalize = require("sequelize");
const DBHOST = process.env.DBHOST;
const DBUSERNAME = process.env.DBUSERNAME;
const PASSWORD = process.env.PASSWORD;
const DATABASENAME = process.env.DATABASENAME;

const sequalize = new Sequalize("bootshop", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequalize;
