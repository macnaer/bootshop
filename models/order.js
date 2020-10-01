const Sequalize = require("sequelize");

const sequalize = require("../helper/database");

const Order = sequalize.define("order", {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Order;
