import React, { useEffect, useState } from "react";
import { useNavigate,useParams   } from "react-router-dom";
import loading from "../assets/loading.gif";

// import Delete from "./delete";
import del from "../assets/del.svg";
import edit from "../assets/edit.svg";
import axios from "axios";

const Book_detail = ({ books }) => {

  let param = useParams().id;


  const navigate = useNavigate();

  const [book, setBook] = useState();

  let filter_fn = (books) => {
    if (books) {
      setBook(books.find((element) => element._id == param));
      // console.log(book);
    }
  };

  useEffect(() => {
    filter_fn(books);
  }, [books]);

  console.log("Single Book", book);


  const URL = "http://localhost:4000/books/";

  const deleteBook = ( ) => {

    axios
      .delete(`${URL}${book._id}`)
      .then((response) => {
        console.log(response.data);
        console.log("Resp.data.message");
        // navigate("/books", { replace: true });
        navigate(-1)
      })
      .catch((error) => {
        console.log(error);
        console.log("Error.message");
      });
  };

  return book ? (
    <>
      <div className="p-3 text-sm w-full h-full mx-auto md:w-3/4 lg:w-2/4 xl:w-1/4 flex justify-around m-3 md:scale-110 lg:scale-125">
        <div className="w-full h-4/6 flex items-center justify-center">
          <div
            className="
                  flex
                  flex-col
                  justify-between
                  border-r-4
                  w-64
                  h-80
                  bg-sky-950
                  text-white 
                  p-4 
                  md:p-8 md:pr-4 md:text-lg
                  rounded-l-2xl
                  skew-y-6
                  shadow-2xl 
                  shadow-gray-800 
                "
          >
            <div className=" font-bold">
              <p className="font-bold text-green-500 mr-1 border-b-4">Title:</p>
              {book.title}
            </div>

            <div className="bg-gradient-to-tr from-orange-500 to-yellow-300 text-white font-bold w-20 text-center rounded-md">
              {book.got_by}
            </div>

            <div className="flex items-center justify-between">
              <div className="text-orange-500 w-1/5 text-center text-xl font-bolder ">
                <p className="text-blue text-sm">Book number</p>
                {book.book_number}
              </div>
              <div className="text-center w-3/5 border-l-2">
                <p className="font-bold underline text-yellow-500">Author</p>
                {book.author}
              </div>
            </div>
          </div>

          <div
            className="
                  flex
                  flex-col
                  content-start
                  justify-between
                  border-l-4
                  w-64
                  h-80
                  bg-sky-950
                  text-white 
                  p-4 
                  md:p-8 md:pL-4 md:text-lg
                  rounded-r-2xl
                  -skew-y-6
                  shadow-2xl 
                  shadow-gray-800 
                "
          >
            <div className=" font-bold ">
              <p className="font-bold text-green-500 mr-1 mb-auto border-b-4">
                Genres:
              </p>
              <div className="flex flex-wrap">
                {book.category.map((gen) => {
                  return (
                    <div className="max-w-max px-1 m-1 bg-green-700 rounded-full text-sm text-center">
                      #{gen}
                    </div>
                  );
                })}
              </div>
            </div>
            {book.translated ? (
              <div className="my-4 mb-auto text-green-400 font-bold">
                Translated by
                <p className="font-bold text-yellow-400">{book.translator}</p>
              </div>
            ) : (
              <div className="my-4 mb-auto text-yellow-400 font-bold">
                Origional
              </div>
            )}

            <div className="flex w-full justify-around">
              <div className="delBtn">
                <a href={`/edit/${book._id}`}>
                <button className=" p-1 text-sm px-2 ">
                  <img src={edit} className="w-7" alt="" />
                </button>
                </a>
              </div>

              <div className="delBtn ">
                <a href="/books">
                <button
                  data-modal-target="popup-modal"
                  className=" p-1 text-sm px-2 rounded-md"
                  onClick={deleteBook}
                >
                  <img src={del} className="w-8" alt="" />
                </button>
                </a>
              </div>

              {/* <Delete /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="flex justify-center items-center w-full h-full">
      <img src={loading} alt="Loading" className="w-5 md:w-10 lg:w-20" />
    </div>
  );
};

export default Book_detail;
