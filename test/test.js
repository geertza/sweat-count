const mpcha = require("mocha")

const workout = require("../models/model")
describe('save',function(){
    it("Save record", function(){
        var Workout = new workout({
            type : 'cardio',
            name: 'run',
            duration: '20',
            distance: '2'
        })
        Workout.save().then(function(){
            Assert(Workout.isNew===false);
            done();
        });
    })
})