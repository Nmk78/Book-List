import React, { useEffect, useState } from "react";
import axios from "axios";
import edit from "../assets/edit_hero.svg";
import { Navigate, useParams } from "react-router-dom";
import { useAuthContext } from '../Hooks/useAuthContext'

const EditDetail = ({ books }) => {
  const {user} = useAuthContext()

  const [book, setBook] = useState(null);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [bookNumber, setBookNumber] = useState("");
  const [review, setReview] = useState("");
  const [reviewer, setReviewer] = useState(user.email);
  const [translated, setTranslated] = useState(false);
  const [translator, setTranslator] = useState("");
  const [category, setCategory] = useState([]);

  const { id } = useParams();

  const filterBook = async () => {
    console.log("Filtering books");
    if (books) {
      const selectedBook = books.find((element) => element._id === id);
      console.log("Selected Book:", selectedBook);
      if (selectedBook) {
        setBook(selectedBook);
        setTitle(selectedBook.title);
        setAuthor(selectedBook.author);
        setBookNumber(selectedBook.book_number);
        setReview(selectedBook.review);
        setReviewer(selectedBook.reviewer);
        setTranslated(selectedBook.translated);
        setTranslator(selectedBook.translator);
        setCategory(selectedBook.category);
      }
    }
  };

  useEffect(() => {
    filterBook();
  }, [books, id]);

  const submitHandler = async (e) => {
    if(!user){
      
      return
    }
    e.preventDefault();

    const bookDetail = {
      title,
      author,
      translated,
      translator,
      review,
      bookNumber,
      category,
    };



    try {
      const url = `http://localhost:4000/books/${book._id}`;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`
        },
      };

      await submit();

      const response = await axios.patch(url, bookDetail, config);
      if (response.status >= 200 && response.status < 300) {
      // <Navigate to='/reviews'/>
        setTitle("");
        setAuthor("");
        setBookNumber("");
        setReview("");
        setReviewer("")
        setTranslated(false);
        setTranslator("");
        setCategory([]);
        setOwner("");
        }
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const submit = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000); // simulate asynchronous behavior
    });
  };

  return (
    <div className="p-5 flex flex-col lg:flex-row h-full justify-center items-center">
      <div className="felx flex-col w-full my-auto lg:w-1/3 lg:h-3/4 lg:justify-self-start lg:flex lg:items-center self-start bg-white">
        <a href={`/review/${book?._id}`}>
          <img
            src={edit}
            alt="man-reading-book"
            className="w-2/3 lg:w-full mx-auto object-cover"
          />
          <p className="animate-pulse flex justify-center items-center text-2xl font-medium italic text-gray-400">
            Tap to see reviews
          </p>
        </a>
      </div>

      <div>
        <form
          className="h-full w-full lg:w-3/4 flex flex-col lg:justify-self-start mx-auto "
          onSubmit={submitHandler}
        >
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="book"
              id="book"
              className="block py-1.5 px-0 w-full text-2xl text-blue-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-700 font-bold dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required={true}
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <label
              htmlFor="book"
              className="peer-focus:font-xl absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Book
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="author"
              id="author"
              className="block py-1.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-700 font-bold dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required={true}
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
            />
            <label
              htmlFor="author"
              className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Author
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="book_number"
                id="book_number"
                className="block py-1.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-700 font-bold dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                onChange={(e) => setBookNumber(e.target.value)}
                value={bookNumber}
              />
              <label
                htmlFor="book_number"
                className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Book number
              </label>
            </div>
            {/* <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="review"
                id="review"
                className="block py-1.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-700 font-bold dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                onChange={(e) => setGotBy(e.target.value)}
                value={gotBy}
              />
              <label
                htmlFor="review"
                className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Got by
              </label>
            </div> */}
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-3 group bg-gray-300 rounded-lg">
              <div className="flex items-center pl-3 cursor-pointer">
                <input
                  id="translated"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 "
                  onChange={(e) => setTranslated(e.target.checked)}
                  checked={translated}
                />
                <label
                  htmlFor="translated"
                  className="w-full py-3 ml-2 text-2xl font-medium text-gray-900 dark:text-gray-500 font-bold cursor-pointer"
                >
                  Translated
                </label>
              </div>
            </div>
            {translated ? (
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="translator"
                  id="translator"
                  className="block py-1.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-700 font-bold dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                  onChange={(e) => setTranslator(e.target.value)}
                  value={translator}
                />
                <label
                  htmlFor="translator"
                  className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Translator
                </label>
              </div>
            ) : (
              <></>
            )}
            {/* <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="translator"
                id="translator"
                className="block py-1.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-700 font-bold dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                onChange={(e) => setTranslator(e.target.value)}
                value={translator}
              />
              <label
                htmlFor="translator"
                className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Translator
              </label>
            </div> */}
          </div>

          <label
            htmlFor="category"
            className="w-full py-1 ml-2 text-2xl font-medium text-gray-900 dark:text-gray-500 font-bold"
          >
            Add category
          </label>
          <div className="flex">
            <input
              type="text"
              id="category"
              required={true}
              maxLength="25"
              className="mt-1.5 max-w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl p-1.5  dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue-700 font-bold dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder='"Fiction","Classics","Biography"'
              onChange={(e) => {
                // setCategory_list(e.target.value.split(","));
                setCategory(e.target.value.split(","));
              }}
              value={category}
            />
          </div>

          <div className="pb-10 w-full mr-0 my-2 flex flex-wrap content-start bg-gray-300 rounded-lg lg:w-3/4 lg:justify-self-start ">
            {category?.length > 0 ? (
              category.map((category, index) => {
                return (
                  <div
                    key={index}
                    className="max-w-fit h-6 px-2 py-1 mt-2 ml-2 bg-green-600 text-white font-bold rounded-full text-sm text-center"
                  >
                    #{category}
                  </div>
                );
              })
            ) : (
              <div className="max-w-fit h-6 px-2 py-1 mt-2 ml-2 text-gray-500 font-bold rounded-full text-sm text-center">
                #no_category
              </div>
            )}
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <textarea
              rows={8}
              className="block w-full px-0 text-sm text-gray-800 rounded-lg px-3 py-3  border-0 bg-gray-300 focus:ring-0 dark:text-gray-500 font-bold  dark:placeholder-gray-400"
              placeholder="Review...."
              required={false}
              onChange={(e) => setReview(e.target.value)}
              defaultValue={review}
              name="review"
              id="review"

            />

          </div>
          
          <button
            type="submit"
            className=" mb-28 md:mb-0 mt-2 text-white bg-gray-400 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800"
          >
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditDetail;
