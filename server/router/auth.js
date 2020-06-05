const express = require("express");
const router = express.Router();

// import Controller
const { signup } = require("../controllers/auth");

router.get("/signup", signup);

module.exports = router;
