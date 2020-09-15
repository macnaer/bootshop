const Sequalize = require("sequelize");
const DBHOST = process.env.DBHOST;
const DBUSERNAME = process.env.DBUSERNAME;
const PASSWORD = process.env.PASSWORD;
const DATABASENAME = process.env.DATABASENAME;

console.log("HOSTNAME", DBHOST);
console.log("DBUSERNAME", DBUSERNAME);
console.log("DATABASENAME", DATABASENAME);
console.log("PASSWORD", PASSWORD);

const sequalize = new Sequalize(DATABASENAME, DBUSERNAME, PASSWORD, {
  dialect: "mysql",
  host: DBHOST,
});

module.exports = sequalize;
