import React from "react";
import pagenotfound from "../assets/page-not-found.svg";

const NotFound = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <img className="md:w-2/3 lg:w-1/3" src={pagenotfound} alt="Page Not Found" />
      <p className="text-2xl md:text-4xl  text-sky-600 font-bold text-start">
        Page not found
      </p>
    </div>
  );
};

export default NotFound;
