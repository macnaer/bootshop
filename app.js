const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const errorController = require("./controller/errorController");

const PORT = 8000;
const app = express();

// Include Sequalize
const sequalize = require("./helper/database");

// Include Models
const Product = require("./models/product");
const User = require("./models/users");
const Cart = require("./models/cart");
const CarItem = require("./models/cartItem");

// Routes middleware
const adminRoutes = require("./routes/adminRoutes");
const mainRoutes = require("./routes/mainRoutes");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "static")));
app.use("/admin", express.static(__dirname + "/static"));

app.use(adminRoutes);
app.use(mainRoutes);
app.use(errorController.get404);

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

// Relations
Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CarItem });
Product.belongsToMany(Cart, { through: CarItem });

sequalize
  .sync({ force: true })
  .then((connectionRezult) => {
    return User.findByPk(1);
  })
  .then((user) => {
    console.log("user => ", user);
    if (!user) {
      return User.create({
        name: "master",
        email: "master@example.com",
        password: "masterpass",
      });
    }
    return user;
  })
  .then((user) => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
