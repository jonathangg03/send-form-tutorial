const express = require('express')
const Model = require('./model')
const router = express.Router()

router.get('/', async (req, res) => {
  const allUsers = await Model.find()
  res.json(allUsers)
})

router.get('/:name', async (req, res) => {
  const allUsers = await Model.find({
    name: req.params.name
  })
  res.json(allUsers)
})

router.post('/', async (req, res) => {
  try {
    const newUser = new Model({
      name: req.body.name,
      age: req.body.age,
      email: req.body.email
    })

    console.log(req.body)

    await newUser.save()
    res.json(newUser)
  } catch (error) {
    console.log(error.message)
  }
})

module.exports = router
