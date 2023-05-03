import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="sticky top-0 z-10 flex flex-row w-full items-center justify-between bg-white p-1 text-sky-800 drop-shadow-lg ">
      <Link to="/" className="fluid flex flex-row ml-5">
        <h2 className="sm:text-2xl lg:text-3xl font-bold text-blue-500">
          C
        </h2>
        <h2 className="sm:text-2xl lg:text-3xl font-bold text-red-500">
          S
        </h2>
        <h2 className="sm:text-2xl lg:text-3xl font-bold text-yellow-500">
          5
        </h2>
        <h2 className="sm:text-2xl lg:text-3xl font-bold text-green-500">
          0
        </h2>
        <h2 className="sm:text-2xl lg:text-3xl font-bold underline ml-5">
          Book List Tracker
        </h2>
      </Link>
      <div className="flex flex-row space-x-8 ml-auto mr-8 p-3">
        <Link to="/books">
          <h3 className="lg:text-2xl  sm:text-xl hover:underline font-bold duration-2000 w-25">
            Books
          </h3>
        </Link>
        <Link to="/create">
          <h3 className="lg:text-2xl  sm:text-xl hover:underline font-bold duration-2000 w-25">Create</h3>
        </Link>
        <Link to="/about">
          <h3 className="lg:text-2xl  sm:text-xl hover:underline font-bold duration-2000 w-25">About</h3>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
