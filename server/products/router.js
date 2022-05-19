const express = require('express')
const Model = require('./model')
const router = express.Router()

router.get('/', async (req, res) => {
  const products = await Model.find()
  res.json(products)
})

router.get('/:id', async (req, res) => {
  const products = await Model.find({
    _id: req.params.id
  })
  res.json(products)
})

router.post('/', async (req, res) => {
  const newProduct = new Model({
    name: req.body.name,
    code: req.body.code
  })

  await newProduct.save()

  res.json(newProduct)
})

module.exports = router
