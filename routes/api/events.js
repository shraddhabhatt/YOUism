// Node Dependencies
var express = require('express');
var router = express.Router();
const eventController = require("../../controllers/eventController");

router.route("/")
   .post(eventController.create)
   .get(eventController.findAll);

module.exports = router;