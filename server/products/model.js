const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const ProductsSchema = new Schema({
  name: {
    required: true,
    type: String
  },
  code: String
})

module.exports = model('product', ProductsSchema)
