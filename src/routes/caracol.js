const express = require("express")
const router = express.Router();

const controller = require("../controllers/caracolController")

router.get("/:n", controller)

module.exports = router;