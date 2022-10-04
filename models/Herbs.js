const mongoose = require('mongoose')

const HerbSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  latinName: {
    type: String,
    required: true,
  },
  commonName: {
    type: String,
    required: true,
  },
  temp: {
    type: String,
    required: true
  },
  flavor: {
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
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

})

module.exports = mongoose.model('Herbs', HerbSchema)
