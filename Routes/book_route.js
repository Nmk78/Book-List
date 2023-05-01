const express = require("express");

const {
  create_book,
  get_all_books,
  get_a_book,
  delete_a_book,
} = require("../Controllers/book_controller");

const router = express.Router();

//Get one
router.get('/:id', get_a_book);

//Get all
router.get("/", get_all_books);

//Post
router.post("/", create_book);

//Delete
router.delete("/:id", delete_a_book);

//Update
router.patch("/:id", (req, res) => {
  res.json({ msg: "Hola this is Books Update Page" });
});

module.exports = router;
