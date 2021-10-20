import mongoose from "mongoose"

const emailSchema = new mongoose.Schema({
  email: {
    type: mongoose.SchemaTypes.Email,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  inputDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Email', emailSchema)