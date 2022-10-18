const { urlencoded } = require("body-parser");

const home = (req, res, next) => {
  res.render("home");
};

const loginView = (req, res, next) => {
  res.render("login");
};

const login = (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  if (username == "") {
    req.flash("username_error", "Username field is required!");
  } else if (!/^[A-Za-z0-9 ]+$/.test(username)) {
    req.flash("username_error", "No special character allowed for username");
  }

  if (password == "") {
    req.flash("password_error", "Password field is required!");
  }

  res.render("login", {
    username_error: req.flash("username_error"),
    password_error: req.flash("password_error"),
    username,
  });
};

const registerView = (req, res, next) => {
  res.render("register");
};

const register = (req, res, next) => {
  let first_name = req.body.first_name.trim();
  let last_name = req.body.last_name.trim();
  let email = req.body.email.trim();
  let phone_number = req.body.phone_number.trim();
  let street_address = req.body.street_address.trim();
  let street_address2 = req.body.street_address2.trim();
  let city = req.body.city.trim();
  let postcode = req.body.postcode.trim();
  let country = req.body.country.trim();
  let tax_id = req.body.tax_id.trim();
  let password = req.body.password.trim();
  let confirm_password = req.body.confirm_password.trim();

  if (first_name == "") {
    req.flash("first_name_error", "Firstname is required!");
  } else if (first_name.length < 6) {
    req.flash("first_name_error", "Firstname should be 6 characters long!");
  } else if (first_name.length > 12) {
    req.flash("first_name_error", "Firstname should not exceed 12 characters!");
  } else if (!/^[a-zA-Z ]*$/.test(first_name)) {
    req.flash("first_name_error", "No special character allowed in firstname!");
  }

  if (last_name == "") {
    req.flash("last_name_error", "Lastname is required!");
  } else if (!/^[a-zA-Z ]*$/.test(last_name)) {
    req.flash("last_name_error", "No special character allowed in lastname!");
  }
  res.render("register", {
    first_name_error: req.flash("first_name_error"),
    last_name_error: req.flash("last_name_error"),
    form: {
      first_name,
      last_name,
      email,
      phone_number,
      street_address,
      street_address2,
      city,
      postcode,
      country,
      tax_id,
    },
  });
  // res.render("wellcome", { user: first_name + " " + last_name });
};

const article = (req, res, next) => {
  res.render("article");
};

//export controller functions
module.exports = {
  home,
  loginView,
  login,
  registerView,
  register,
  article,
};
