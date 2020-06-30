var express = require("express");
var router = express.Router();
const path = require('path')
// Import the model (burger.js) to use its database functions.
// var model = require("../model/model.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, '../views/', 'index.html'));
});
  
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, '../views/', 'exercise.html'));
  })
  router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/', 'stats.html'));
    })
  

// Export routes for server.js to use.
module.exports = router;
