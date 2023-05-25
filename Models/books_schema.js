const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Book_Schema = new Schema(
      {
            title :{
                  type: String,
                  required : true
            },
            author :{
                  type: String,
                  required : true
            },
            translated :{
                  type: Boolean,
                  required : true,
                  default: false
            },
            translator :{
                  type: String,
                  required : false
            },
            review :{
                  type: String,
                  required : true
            },
            reviewer :{
                  type: String,
                  required : true
            },
            owner :{
                  type: String,
                  required : true
            },
            book_number :{
                  type: Number,
                  required : true
            },
            category :{
                  type: Array,
                  required : true
            },
      },{timestamps :true}
)

module.exports = mongoose.model('Book',Book_Schema)


