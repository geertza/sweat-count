const mongoose = require('mongoose')
const workout = require('../models/model')
//mongodb connect
mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
   useFindAndModify: false
});
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'workout';
mongoose.connection.once('open',function(){
    console.log('Mongo connected')
}).on('err',function(){
    console.log('mongo error',err)
})
  
let seedData = [
    {
      day: new Date(new Date().setDate(new Date().getDate() - 10)),
      exercises: [
        {
          type: "resistance",
          name: "Bicep Curl",
          duration: 20,
          weight: 100,
          reps: 10,
          sets: 4
        }
      ]
    },
    {
      day: new Date(new Date().setDate(new Date().getDate() - 9)),
      exercises: [
        {
          type: "resistance",
          name: "Lateral Pull",
          duration: 20,
          weight: 300,
          reps: 10,
          sets: 4
        }
      ]
    },
    {
      day: new Date(new Date().setDate(new Date().getDate() - 8)),
      exercises: [
        {
          type: "resistance",
          name: "Push Press",
          duration: 25,
          weight: 185,
          reps: 8,
          sets: 4
        }
      ]
    },
    {
      day: new Date(new Date().setDate(new Date().getDate() - 7)),
      exercises: [
        {
          type: "cardio",
          name: "Running",
          duration: 25,
          distance: 4
        }
      ]
    },
    {
      day: new Date(new Date().setDate(new Date().getDate() - 6)),
      exercises: [
        {
          type: "resistance",
          name: "Bench Press",
          duration: 20,
          weight: 285,
          reps: 10,
          sets: 4
        }
      ]
    },
    {
      day: new Date(new Date().setDate(new Date().getDate() - 5)),
      exercises: [
        {
          type: "resistance",
          name: "Bench Press",
          duration: 20,
          weight: 300,
          reps: 10,
          sets: 4
        }
      ]
    },
    {
      day: new Date(new Date().setDate(new Date().getDate() - 4)),
      exercises: [
        {
          type: "resistance",
          name: "Quad Press",
          duration: 30,
          weight: 300,
          reps: 10,
          sets: 4
        }
      ]
    },
    {
      day: new Date(new Date().setDate(new Date().getDate() - 3)),
      exercises: [
        {
          type: "resistance",
          name: "Bench Press",
          duration: 20,
          weight: 300,
          reps: 10,
          sets: 4
        }
      ]
    },
    {
      day: new Date(new Date().setDate(new Date().getDate() - 2)),
      exercises: [
        {
          type: "resistance",
          name: "Military Press",
          duration: 20,
          weight: 300,
          reps: 10,
          sets: 4
        }
      ]
    },
    {
      day: new Date(new Date().setDate(new Date().getDate() - 1)),
      exercises: [
        {
          type: "resistance",
          name: "Bench",
          duration: 30,
          distance: 2
        }
      ]
    }
  ];
//add seed to database
  workout.collection.insertMany(seedData).then(() => {
    console.log('Success');
  })
  .catch(err => {
    console.log('Error', err);
  });