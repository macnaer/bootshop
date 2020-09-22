const Sequalize = require("sequelize");

const sequalize = require("../helper/database");

const Cart = sequalize.define("cart", {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Cart;
