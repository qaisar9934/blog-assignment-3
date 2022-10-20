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
  let company_name = req.body.company_name.trim();
  let street_address = req.body.street_address.trim();
  let street_address2 = req.body.street_address2.trim();
  let city = req.body.city.trim();
  let postcode = req.body.postcode.trim();
  let country = req.body.country.trim();
  let tax_id = req.body.tax_id.trim();
  let password = req.body.password.trim();
  let confirm_password = req.body.confirm_password.trim();
  let error = false;

  if (first_name == "") {
    error = true;
    req.flash("first_name_error", "Firstname is required!");
  } else if (!/^[a-zA-Z ]*$/.test(first_name)) {
    error = true;
    req.flash("first_name_error", "No special character allowed in firstname!");
  } else if (first_name.length < 6) {
    error = true;
    req.flash("first_name_error", "Firstname should be 6 characters long!");
  } else if (first_name.length > 12) {
    error = true;
    req.flash("first_name_error", "Firstname should not exceed 12 characters!");
  }

  if (last_name == "") {
    error = true;
    req.flash("last_name_error", "Lastname is required!");
  } else if (!/^[a-zA-Z ]*$/.test(last_name)) {
    error = true;
    req.flash("last_name_error", "No special character allowed in lastname!");
  } else if (last_name.length < 6) {
    error = true;
    req.flash("last_name_error", "Lastname should be 6 characters long!");
  } else if (last_name.length > 12) {
    error = true;
    req.flash("last_name_error", "Lastname should be 12 characters long!");
  }

  if (email == "") {
    error = true;
    req.flash("email_error", "Email field is required!");
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    error = true;
    req.flash("email_error", "Enter email in proper format!");
  }

  if (phone_number == "") {
    error = true;
    req.flash("phone_error", "Phone number field is required!");
  } else if (!/^[0-9]*$/.test(phone_number)) {
    error = true;
    req.flash("phone_error", "Only letters allowed for phone number!");
  }

  if (company_name != "" && !/^[a-zA-Z ]*$/.test(company_name)) {
    error = true;
    req.flash("company_name_error", "Only letters allowed for company name!");
  } else if (company_name != "" && company_name.length < 6) {
    error = true;
    req.flash(
      "company_name_error",
      "Company name should be 6 characters long!"
    );
  } else if (company_name != "" && company_name.length > 12) {
    error = true;
    req.flash(
      "company_name_error",
      "Company name should not exceed 12 characters!"
    );
  }

  if (street_address == "") {
    error = true;
    req.flash("street_address_error", "Street address field is required!");
  } else if (street_address.length < 6) {
    error = true;
    req.flash(
      "street_address_error",
      "Street address should be 6 characters long!"
    );
  } else if (street_address.length > 100) {
    error = true;
    req.flash(
      "street_address_error",
      "Street address should not exceed 100 characters!"
    );
  }

  if (city == "") {
    error = true;
    req.flash("city_error", "City field is required!");
  } else if (!/^[a-zA-Z ]*$/.test(city)) {
    error = true;
    req.flash("city_error", "Only letters allowed for city name!");
  } else if (city.length < 6) {
    error = true;
    req.flash("city_error", "City name should be 6 characters long!");
  } else if (city.length > 12) {
    error = true;
    req.flash("city_error", "City name should not exceed 12 characters!");
  }

  if (postcode == "") {
    error = true;
    req.flash("postcode_error", "Postcode field is required!");
  } else if (!/^[0-9]*$/.test(postcode)) {
    error = true;
    req.flash("postcode_error", "Only numbers allowed for postcode field!");
  } else if (!/^.{5,}$/.test(postcode)) {
    error = true;
    req.flash("postcode_error", "Postcode should be 5 characters long!");
  }

  if (country == "") {
    error = true;
    req.flash("country_error", "Country field is required!");
  } else if (!/^[a-zA-Z]*$/.test(country)) {
    error = true;
    req.flash("country_error", "Only alphabets allowed for country!");
  } else if (country.length < 6) {
    error = true;
    req.flash("country_error", "Country name should be 6 characters long!");
  } else if (country.length > 12) {
    error = true;
    req.flash("country_error", "Country name should not exceed 12 characters!");
  }

  if (password == "") {
    error = true;
    req.flash("password_error", "Password field is required!");
  } else if (!/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(password)) {
    error = true;
    req.flash(
      "password_error",
      "Password should contain one letter and one number atleast!"
    );
  } else if (password.length < 6) {
    error = true;
    req.flash("password_error", "Password shoulbe be 6 characters long!");
  } else if (password.length > 12) {
    error = true;
    req.flash("password_error", "Password must not exceed 12 characters!");
  }

  if (confirm_password == "") {
    error = true;
    req.flash("confirm_password_error", "Confirm password field is required!");
  } else if (password != confirm_password) {
    error = true;
    req.flash("confirm_password_error", "Incorrect confirm password!");
  }

  if (error) {
    res.render("register", {
      first_name_error: req.flash("first_name_error"),
      last_name_error: req.flash("last_name_error"),
      email_error: req.flash("email_error"),
      phone_error: req.flash("phone_error"),
      company_name_error: req.flash("company_name_error"),
      street_address_error: req.flash("street_address_error"),
      city_error: req.flash("city_error"),
      postcode_error: req.flash("postcode_error"),
      country_error: req.flash("country_error"),
      password_error: req.flash("password_error"),
      confirm_password_error: req.flash("confirm_password_error"),
      form: {
        first_name,
        last_name,
        email,
        phone_number,
        company_name,
        street_address,
        street_address2,
        city,
        postcode,
        country,
        tax_id,
        password,
      },
    });
  } else {
    res.render("wellcome", { user: first_name + " " + last_name });
  }

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
