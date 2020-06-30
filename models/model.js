const mongoose = require('mongoose')
const schema = mongoose.Schema;

const fitRecord = new schema(
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
					required: "how many minutes",
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

const workout = mongoose.model('workout',fitRecord);

module.exports = workout
         
