const mongoose = require('mongoose')

const connect = (uri) => {
  mongoose.connect(uri, () => console.log('DB connected'))
}

module.exports = connect
