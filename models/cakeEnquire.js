const mongoose = require("mongoose")

const cakeEnquireSchema = new mongoose.Schema({
	// id: {
	//   type: String,
	//   required: false
	// },
	fullName: {
		type: String,
		required: false
	},
	email: {
		type: String,
		required: false,
		lowercase: true
	},
	dateOfEvent: {
		type: Date,
		required: false
	},
	partyOccasion: {
		type: String,
		required: false
	},
	cakeTaste: {
		type: String,
		required: false
	},
	cakeTopper: {
		type: Boolean,
		required: false
	},
	extraDetails: {
		type: String,
		required: false
	},
	/**
	 * Will need to add the functionality to be able to add an image and retrieve that image from the database
	 *image: {
		type: ////,
		required: false,
	}
	*/
	inputDate: {
		type: Date,
		required: true,
		default: () => Date.now()
	}
})

module.exports = mongoose.model('Enquire', cakeEnquireSchema)