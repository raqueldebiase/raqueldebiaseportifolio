'use client';

import React from "react";


const Hero = () => {
  
  return (
    <div className="p-4 mt-32 md:mt-24 text-white grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">

      <div className="flex flex-col items-start md:items-start">
        <h1 className="text-6xl md:text-9xl font-thin mb-8">
          RAQUEL DE<br />BIASE
        </h1>
        <h2 className="text-4xl mb-8 font-thin">
          Frontend Developer
        </h2>
      </div>

      <div className="flex flex-col justify-end mb-16 md:my-0 md:items-end">
        <ul className="font-thin text-xl md:text-2xl italic text-start">
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>React JS</li>
          <li>NEXT JS</li>
          <li>Angular</li>
        </ul>
      </div>

      <div className="hidden md:block"></div>

      <div className="flex flex-col items-end text-end md:items-end md:text-end">
        <p className={`text-2xl md:text-3xl my-8 font-thin relative overflow-hidden`}>
         With three years of experience in web development, I am deeply passionate about integrating cutting-edge technologies, design principles, accessibility, and thorough documentation. As a Frontend Developer, my goal is to harmonize web tools with user needs by applying theories from visual arts and information science. I strive to create intuitive and engaging user experiences that are both aesthetically pleasing and highly functional.
        </p>
      </div>
    </div>
  );
};

export default Hero;
