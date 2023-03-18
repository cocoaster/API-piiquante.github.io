const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();

saucesControllers = require("../controllers/sauces.js");

router.post("/", auth, saucesControllers.createSauce);

router.put("/:id", auth, saucesControllers.modifySauce);

router.delete("/:id", auth, saucesControllers.deleteSauce);

router.get("/:id", auth, saucesControllers.getOneSauce);

router.get("/", auth, saucesControllers.getAllSauces);

module.exports = router;
