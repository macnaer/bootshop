const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const errorController = require("./controller/errorController");

const PORT = 8000;
const app = express();

// Routes middleware
// const adminRoutes = require("./routes/adminRoutes");
const mainRoutes = require("./routes/mainRoutes");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "static")));
app.use("/admin", express.static(__dirname + "/static"));
app.use("/admin/edit-product", express.static(__dirname + "/static"));
app.use("/products", express.static(__dirname + "/static"));

app.use((req, res, next) => {
  // User.findByPk(1)
  //   .then((user) => {
  //     req.user = user;
  //     next();
  //   })
  //   .catch((err) => console.log(err));
});

// app.use(adminRoutes);
app.use(mainRoutes);
app.use(errorController.get404);

mongoose
  .connect(
    "mongodb+srv://admin:bootshop_admin@cluster0.x6bhk.mongodb.net/bootsoop?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    console.log("result ", result);
    app.listen(3000, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
