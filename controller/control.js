var express = require("express");
var router = express.Router();
const path = require('path')
const workout = require('../models/model')
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

// router.get("/api/workouts", (req, res) => {
//       workout.find({})
//         .then(dbWorkouts => {
//           res.json(dbWorkouts);
//         })
//         .catch(err => {
//           console.log("get /api/workouts err =",err)
//         });
//     }); 

// router.post("/api/workouts", (body, res) => {
//  workout.create(body)
//  .then(dbWorkouts => {
//     res.json(dbWorkouts);
//   })
//     .catch(err => {
//       console.log("post /api/workouts err =",err)
//     });
// });

// router.put("/api/workouts/:id", (req, res ) => {
//   const exercise = req.body;
//   workout.findByIdAndUpdate( req.params.id,
//       { $push: {exercises: exercise}})
//       .then(dbWorkouts =>{
//           res.json(dbWorkouts)
//       }).catch(err => {
//         console.log("put /api/workouts/:id err =",err);
//       })      
//   });

//   //get workouts 
// router.get("/api/workouts/range", (req, res) => {
//   workout.find({})
//       .sort({"day": 1})
//       .limit(5)
//       .then(dbWorkouts => {
//           res.json(dbWorkouts);
//       })
//       .catch(err => {
//         console.log("get /api/workouts/range err =",err);
//       });
// });

// Export routes for server.js to use.
module.exports = router;
