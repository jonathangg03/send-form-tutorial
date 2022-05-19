const express = require('express')
const router = require('./users/router')
const dbConnect = require('./db')
const app = express()

dbConnect('your_DB_URI')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/users', router)

app.listen(3001, () => console.log('Listen on: http://localhost:3001'))
