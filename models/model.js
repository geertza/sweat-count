const mongoose = require('mongoose')
const schema = mongoose.Schema;

// //mongodb connect
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://workout', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//    useFindAndModify: false,
   
// });
// // Connection URL
// const url = 'mongodb://localhost:27017';
 
// // Database Name
// const dbName = 'workout';
// mongoose.connection.once('open',function(){
//     console.log('Mongo connected')
// }).on('err',function(){
//     console.log('mongo error',err)
// })
//build param for database
const workoutSchema = new schema(
	{
		day: {
			type: Date,
			default: Date.now,
		},
		exercises: [
			{
				type: {
					type: String,
					trim: true,
					required: "exercise type",
				},
				name: {
					type: String,
					trim: true,
					required: "exercise name",
				},
				duration: {
					type: Number,
				},
				weight: {
					type: Number,
				},
				reps: {
					type: Number,
				},
				sets: {
					type: Number,
				},
				distance: {
					type: Number,
				},
			},
		],
	},
	{
		toJSON: {
			// include any virtual properties
			virtuals: true,
		},
	}
);
//export schema and activation for database
const workout = mongoose.model('workout',workoutSchema);

module.exports = workout
         
