const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const usersControllers = require("../controllers/users");

router.post("/signup", usersControllers.signup);
router.post("/login", usersControllers.login);

module.exports = router;
