const mongoose = require('mongoose')

const HerbSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  latinName: {
    type: String,
    required: true,
    unique: true,
  },
  commonName: {
    type: String,
  },
  temp: {
    type: String,
    required: true
  },
  properties: {
    type: String,
    required: true
  },
  channels: {
      type: String
  }, 
  category: {
    type: String,
    required: true
  },
  actions: {
      type: String
  },
  image: {
    type: String,
    required: true,
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

})

module.exports = mongoose.model('Herbs', HerbSchema)
