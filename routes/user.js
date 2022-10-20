const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/", userController.home);
router.get("/login", userController.loginView);
router.post("/login", userController.login);
router.get("/register", userController.registerView);
router.post("/register", userController.register);
router.get("/article/:id", userController.article);
router.get("/article/:id", userController.article);
router.get("/article/:id", userController.article);
router.get("/article/:id", userController.article);

module.exports = router; // export
