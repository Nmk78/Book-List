import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./Components/Nav";
import Book_detail from "./Components/Book_detail";


import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Book from "./Pages/Book";
import Create from "./Pages/Create";
import About from "./Pages/About";
import axios from "axios";
// import Delete from "./Components/delete";



function App() {

  const [books, setBooks] = useState(null);

  useEffect(() => {

    const fetch_books = async () => {
      const response = await axios
        .get("http://localhost:4000/books")
        .then((response) => {
          setBooks(response.data);
          // console.log(books);
        });
    };

    fetch_books();
    // console.log(books)
  }, []);

  return (
    <>
      <BrowserRouter >
        <Nav />
        <div className="pages h-full py-5 bg-gray-200 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Book books={books} />} />
            <Route path="/create" element={<Create />} />
            <Route path="/about" element={<About />} />
            <Route path="/books/:id" element={<Book_detail books={books} />} />
            {/* <Route path="/books/a" element={<Delete books={books} />} /> */}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
