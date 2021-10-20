import mongoose from "mongoose"

const cakeEnquire = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: true
  },
  dateOfEvent: {
    type: Date,
    required: true
  },
  partyOccasion: {
    type: String,
    required: true
  },
  cakeTaste: {
    type: String,
    required: true
  },
  cakeTopper: {
    type: Boolean,
    required: true
  },
  extraDetails: {
    type: Text,
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
    default: Date.now
  }
})

module.exports = mongoose.model('Enquire', cakeEnquire)