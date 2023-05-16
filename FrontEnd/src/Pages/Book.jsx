import React from "react";


const Book = ({books}) => {
console.log(books)
  return (
    <>
      <div className="w-full flex justify-around grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 p-3">
        {books &&
          books.map((book) => {
            return (
              
              <a
              href={`/books/${book._id}`}
              key={book._id}
               className="flex flex-col justify-center items-center ">
                <div
                  className="
                  border-b-4
                  w-44
                  h-60
                  m-3
                  bg-sky-950
                  text-white 
                  p-2 md:p-4
                  rounded-r-2xl
                  rounded-l-md
                  flex
                  flex-col
                  justify-around
                  mb-1
                "
                >
                  <div className=" font-bold ">
                    <p className="font-bold text-green-500 mr-1 border-b-4">
                      Title:
                    </p>
                    {book.title}
                  </div>
                  <div className="text-center self-end">
                    <p className="font-bold underline text-yellow-500">Author</p> {book.author}
                  </div>
                </div>
                {/* <p className="animate-pulse font-bold italic underline text-orange-600 text-xl ">Tap for details</p> */}
              </a>
            );
          })}

      </div>
    </>
  );
};

export default Book;
