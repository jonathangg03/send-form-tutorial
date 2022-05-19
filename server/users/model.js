const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const UserSchema = new Schema({
  name: {
    required: true,
    type: String
  },
  age: Number,
  email: String
})

module.exports = model('users', UserSchema)
