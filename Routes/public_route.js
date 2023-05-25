const express = require("express");

const {
  get_all_books,
  get_a_book

} = require("../Controllers/book_controller");

//Middleware


const router = express.Router();

//Get one
router.get('/:id', get_a_book);

//Get all
router.get("/", get_all_books);


module.exports = router;
