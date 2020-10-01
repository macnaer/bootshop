const Sequalize = require("sequelize");
const sequalize = require("../helper/database");

const OrderItem = sequalize.define("orderItem", {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity: Sequalize.INTEGER,
});

module.exports = OrderItem;
