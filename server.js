require('dotenv').config()

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

//middleware
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

