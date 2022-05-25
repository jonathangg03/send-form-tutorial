const express = require('express')
const router = require('./users/router')
const dbConnect = require('./db')
const path = require('path')
const cors = require('cors')
const app = express()

dbConnect('db_uri')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/users', router)
app.use('/frontend', express.static(path.join(__dirname, '/public')))

app.listen(3001, () => console.log('Listen on: http://localhost:3001'))
