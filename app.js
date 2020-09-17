const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const errorController = require("./controller/errorController");

const PORT = 8000;
const app = express();

// Include Sequalize
const sequalize = require("./helper/database");

// Include Models
const User = require("./models/users");

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

sequalize
  .sync()
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
