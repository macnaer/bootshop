const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const errorController = require("./controller/errorController");

const PORT = 8000;
const app = express();

// Include Sequalize
const sequalize = require("./helper/database");

// Routes middleware
const adminRoutes = require("./routes/adminRoutes");
const mainRoutes = require("./routes/mainRoutes");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "static")));

app.use("/admin", adminRoutes);
app.use(mainRoutes);

app.use(errorController.get404);

sequalize
  .sync()
  .then((connectionRezult) => {
    //console.log("connectionRezult = ", connectionRezult);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
