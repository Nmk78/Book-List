import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, json } from "react-router-dom";

import Nav from "./Components/Nav";
import Book_detail from "./Components/Book_detail";

import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Book from "./Pages/Book";
import Create from "./Pages/Create";
import About from "./Pages/About";
// import axios from "axios";
import Edit_detail from "./Pages/Edit_detail";
import { useBooksContext } from "./Hooks/useBookController";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { useAuthContext } from './Hooks/useAuthContext'
import NotFound from "./Pages/NotFound";


function App() {
  const { books, dispatch } = useBooksContext();
  const { user } = useAuthContext()

  useEffect(() => {


    const fetch_books = async () => {
      const response = await fetch("http://localhost:4000/books"
    //   ,{headers: {
    //     'Authorization': `Bearer ${user.token}`
    //   }
    // }
    );
      
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_BOOKS", payload: json });
      }
    };

  
      fetch_books();
    
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="pages h-full py-5 bg-gray-200 flex-1">
          <Routes>
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/reviews" element={<Book books={books} />} />
            <Route path="/create" element={user ? <Create /> : <Login />} />
            <Route path="/edit/:id" element={<Edit_detail books={books} />} />
            <Route path="/about" element={<About />} />
            <Route path="/review/:id" element={<Book_detail books={books} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
