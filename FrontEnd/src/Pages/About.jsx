import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-20 h-full">
      <p className="text-4xl md:text-6xl font-bold text-blue-500">HEllO</p>
      <p className="text-3xl md:text-4xl font-bold text-red-500 text-center">This is my CS50 final project.</p>
      <p className="text-3xl md:text-xl font-bold text-yellow-500">and</p>
      <p className="text-md md:text-xl font-bold text-green-500 text-center">This is my very first Full Stack React App. I curious about how 
        websites work behind my sences. That's why I created this app.</p>
    </div>
  );
};

export default About;
