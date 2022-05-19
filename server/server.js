const express = require('express')
const router = require('./users/router')
const dbConnect = require('./db')
const app = express()

dbConnect(
  'mongodb+srv://testingDB:abcde12345@cluster0.ipm0m.mongodb.net/send-form-tutorial?retryWrites=true&w=majority'
)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/users', router)

app.listen(3001, () => console.log('Listen on: http://localhost:3001'))
