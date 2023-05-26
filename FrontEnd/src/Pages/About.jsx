import React from "react";
import mongo from "../assets/mongodb.svg";
import express from "../assets/express.svg";
import react from "../assets/react.svg";
import nodejs from "../assets/nodejs.svg";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-20 h-full">
      <p className="text-4xl md:text-6xl font-bold text-blue-500">HEllO</p>
      <p className="text-3xl md:text-4xl font-bold text-red-500 text-center">
        This is my CS50 final project.
      </p>
      <p className="text-3xl md:text-xl font-bold text-yellow-500">and</p>
      <p className="text-md md:text-xl font-bold text-green-500 text-center">
        This is my very first Full Stack React App. I curious about how websites
        work behind my sences. That's why I created this app.
      </p>

      <div className="flex items-center justify-center mt-8 lg:mt-36 flex-col lg:flex-row">
        <p className="text-4xl md:text-5xl font-bold text-red-500 mt-10">
          I made this with
        </p>
        <div className="flex">
          <img
            className="w-1/4"
            src={mongo}
            alt="mongodb logo"
          />
          <img
            className="w-1/4"
            src={express}
            alt="expressjs logo"
          />
          <img
            className="w-1/4"
            src={react}
            alt="reactjs logo"
          />
          <img
            className="w-1/4"
            src={nodejs}
            alt="nodejs logo"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
