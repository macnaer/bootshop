const Sequalize = require("sequelize");
const sequelize = require("../helper/database");

const User = sequelize.define("user", {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequalize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequalize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequalize.STRING,
    allowNull: false,
  },
});

module.exports = User;
