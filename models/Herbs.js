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
    type: Array,
    required: true
  },
  channels: {
      type: Array,
  }, 
  category: {
    type: String,
    required: true
  },
  actions: {
      type: Array,
  },
  image: {
    type: String,
    required: true,
  },
  cloudinaryId: {
    type: String,
    required: true,
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

})

module.exports = mongoose.model('Herbs', HerbSchema)
