const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

const mognoURL = 'mongodb://localhost:27017/movieapp'
mongoose.connect(mognoURL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('berhasil konek ke database')
}).catch((err) => {
  console.log('gagal konek ke database')
})

const directory = path.join(__dirname, '/statics/')
app.use(express.static(directory))
app.use(cors())

app.use(bodyParser.json({
  extends: true,
  limit: '20mb'
}))

app.use(bodyParser.urlencoded({
  extends: true,
  limit: '20mb'
}))

// list route
app.use('/user', require('./routes/User'))
app.use('/movie', require('./routes/Movie'))
app.use('/order', require('./routes/Order'))

app.listen(5005 , function () {
  console.log('Server telah dijalankan di port 5005')
})
