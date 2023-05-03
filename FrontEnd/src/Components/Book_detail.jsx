import React from "react";

const Book_detail = ({ books }) => {
//   console.log(books);


  return (
    <div
      className="border-b-4 m-3 bg-white text-white p-4 flex flex-row  "
    >
      {books &&
        books.map((book) => {

            const translator = (books) => {
                  return(<div className="my-2">
                  <p className="font-bold underline text-yellow-500">
                    Translator:
                  </p>
                  {book.translator}
                </div>)
            }


          return (
            <div div className="w-full flex justify-around m-3" key={book._id}>
              {/* a tag warp two side of book */}
              <div className="flex">
                <div
                  className="
                  flex
                  flex-col
                  justify-between
                  border-r-4
                  w-52
                  h-60
                  bg-sky-950
                  text-white 
                  p-4 
                  rounded-l-2xl
                  skew-y-6
                  shadow-2xl 
                  shadow-gray-800 
                "
                >
                  <div className=" font-bold">
                    <p className="font-bold text-green-500 mr-1 border-b-4">
                      Title:
                    </p>
                    {book.title}
                  </div>

                  <div className="text-red-700 font-bold bg-yellow-300 w-20 text-center rounded-full">
                    {book.got_by}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-orange-500 w-1/5 text-center text-xl font-bolder ">
                      <p className="text-blue text-sm">Book number</p>
                      {book.book_number}
                    </div>
                    <div className="text-center w-3/5 border-l-2">
                      <p className="font-bold underline text-yellow-500">
                        Author
                      </p>
                      {book.author}
                    </div>
                  </div>
                </div>

                <div
                  className="
                  flex
                  flex-col
                  
                  border-l-4
                  w-52
                  h-60
                  bg-sky-950
                  text-white 
                  p-4
                  rounded-r-2xl
                  -skew-y-6
                  shadow-2xl 
                  shadow-gray-800 
                "
                >
                  <div className=" font-bold ">
                    <p className="font-bold text-green-500 mr-1 border-b-4">
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
                  {book.translated ? translator(book) : <div className="my-4 text-yellow-400 font-bold">Origional</div>}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Book_detail;
