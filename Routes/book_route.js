const express = require("express");

const router = express.Router();
const Book = require("../Models/books_schema");

router.get("/", (req, res) => {
  res.json({ msg: "Hola this is all Books" });
});

//Get
router.get("/:id", (req, res) => {
  res.json({ msg: "Hola this is One Book" });
});

//Post
router.post("/", async (req, res) => {
  const {
    title,
    author,
    translated,
    translator,
    got_by,
    book_number,
    category,
  } = req.body;

  try {
    const book = await  Book.create({
      title,
      author,
      translated,
      translator,
      got_by,
      book_number,
      category,
    });
    res.status(200).json(book)
  } catch (err) {
      res.status(400).json({msg: err.message})
//     console.log(err);
  }

});

//Delete
router.get("/:id", (req, res) => {
  res.json({ msg: "Hola this is Books Delete Page" });
});

//Update
router.get("/:id", (req, res) => {
  res.json({ msg: "Hola this is Books Update Page" });
});

module.exports = router;
