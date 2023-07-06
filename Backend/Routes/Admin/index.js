const express = require("express");
const router = express.Router();
const AuthController = require("../../Controllers/AuthController");
const verifyToken = require("../../Middleware/Auth");

const { Validation } = require("../../Middleware/Validate");

router.post("/register", Validation, AuthController.Register);
router.post("/login", AuthController.Loging);
module.exports = router;
