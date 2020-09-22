const Sequalize = require("sequelize");
const sequalize = require("../helper/database");

const CartItem = sequalize.define("cartItem", {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity: Sequalize.INTEGER,
});

module.exports = CartItem;
