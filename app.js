const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const errorController = require("./controller/errorController");
const session = require("express-session");

// Include Models
const User = require("./models/users");

// Include DATABASE Settings
const { DBUSERNAME, PASSWORD } = require("./helper/database");

const PORT = 8000;
const app = express();

// Routes middleware
const adminRoutes = require("./routes/adminRoutes");
const mainRoutes = require("./routes/mainRoutes");
const authRoutes = require("./routes/authRoutes");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "static")));
app.use(
  session({
    secret: "my super secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 6000,
    },
  })
);

app.use("/admin", express.static(__dirname + "/static"));
app.use("/admin/edit-product", express.static(__dirname + "/static"));
app.use("/products", express.static(__dirname + "/static"));

app.use((req, res, next) => {
  User.findById("5f7c9a32e5fc8528b0bc48b2")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use(adminRoutes);
app.use(mainRoutes);
app.use(authRoutes);
app.use(errorController.get404);

mongoose
  .connect(
    `mongodb+srv://${DBUSERNAME}:${PASSWORD}@cluster0.x6bhk.mongodb.net/bootsoop?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "master",
          email: "master@gmail.com",
          cart: {
            items: [],
          },
        });
        user.save();
      }
    });
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
