require('dotenv').config()
const cors = require('cors')

const express = require('express')
const mongoose = require('mongoose')
const route = require('./Routes/book_route')

const app = express()

app.listen(process.env.PORT, ()=>{
      console.log('Server is running on port ' + process.env.PORT)
})

//To display HomePage
app.get('/', (req, res) => {
      res.end('Hello World!')

})

//New added
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
extended: true
}));

//middleware
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
      console.log(req.path, req.method)
      next()
})

app.use('/books',route)

mongoose.connect(process.env.Mongo_URI)
      .then(()=>{
            console.log('Connected to MongoDB')
      })
      .catch((error)=>{
            console.log(error)
      })

