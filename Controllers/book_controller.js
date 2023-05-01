const Book = require("../Models/books_schema");
const mongoose = require("mongoose");

// get a book via ID
const get_a_book = async (req, res) => {
  const { id } = req.params;

      try {
            if (mongoose.Types.ObjectId.isValid(id)) {
                  const book = await Book.findById(id);
                  if (book) {
                    return res.status(200).json(book);
                  } 
                }
                res.status(400).json({ msg: "No book found" });    
      } catch (error) {
            console.log(error)
      }

};

//get all books
const get_all_books = async (req, res) => {
  const books = await Book.find({}).sort({ createdAt: -1 });
  res.status(200).json(books);
};

// creata a book
const create_book = async (req, res) => {
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
    const book = await Book.create({
      title,
      author,
      translated,
      translator,
      got_by,
      book_number,
      category,
    });
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

// delete a book
const delete_a_book = async (req, res) => {
      const { id } = req.params;
    
          try {
                if (mongoose.Types.ObjectId.isValid(id)) {
                      const book = await Book.findOneAndDelete({ _id: id });
                      if (book) {
                        return res.status(200).json(book);
                      } 
                      res.status(404).json({ msg: "No book found" })
                    }
                    res.status(404).json({ msg: "No book found" });    
          } catch (error) {
                console.log(error)
          }
    
    };

//update a book
const update_a_book = async (req, res) => {
      const { id } = req.params;
    
          try {
                if (mongoose.Types.ObjectId.isValid(id)) {
                      const book = await Book.findOneAndUpdate({ _id: id });
                      if (book) {
                        return res.status(200).json(book);
                      } 
                      res.status(404).json({ msg: "No book found" })
                    }
                    res.status(404).json({ msg: "No book found" });    
          } catch (error) {
                console.log(error)
          }
    
    };



module.exports = {
  create_book,
  get_all_books,
  get_a_book,
  delete_a_book,
};
