const router = require("express").Router();
const Workout = require("../models/model");

//create workout
router.post("/api/workouts", ({ body }, res) => {
  console.log("api get ");
    Workout.create(body)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//add exercise
router.put("/api/workouts/:id", (req, res ) => {
console.log("router.put id ")
    const exercise = req.body;
Workout.findByIdAndUpdate( req.params.id,
    {
        $push: {
            exercises: exercise
        }
    })
    .then(dbWorkouts =>{
        res.json(dbWorkouts)
    }).catch(err => {
        res.status(400).json(err)
    })      
});

//get last workout
router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkouts => {
        res.json(dbWorkouts)
    })
    .catch(err => {
        console.log(err)
      res.status(400)(err);
    });
});

//get workouts
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .sort({"day": 1})
        .limit(5)
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;