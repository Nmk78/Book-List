const express = require("express");

const router = express.Router();

//controller functions

const { loginUser, registerUser } = require("../Controllers/userController");

//login route
router.post("/login", loginUser);

//register route
router.post("/register", registerUser);

module.exports = router;
