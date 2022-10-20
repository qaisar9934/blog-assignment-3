const express = require("express");
const { create } = require("express-handlebars");
const userRoute = require("./routes/user");
const app = express();
const path = require("path");
const hbs = create({
  extname: "hbs",
  defaultLayout: false,
  layoutsDir: "views/layouts/",
});
const port = process.env.PORT || 8000;
const flash = require("connect-flash");
const bodyParser = require("body-parser");
const session = require("express-session");

app.use(express.static(__dirname + "/public"));

// Register `hbs.engine` with the Express app.
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views/"));

app.use(
  session({
    cookie: { maxAge: 60000 },
    secret: "blog-1016",
    resave: false,
    saveUninitialized: false,
  })
);

// to able to send flash messages like 'User registered successfully'
app.use(flash());

// to get input of forms
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/", userRoute);

app.listen(port, function () {
  console.log(`App listening on port ${port}`);
});
