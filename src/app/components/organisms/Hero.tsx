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
        <p className={`text-3xl md:text-4xl my-8 font-thin relative overflow-hidden`}>
          Hello! I&apos;m Raquel, a frontend developer passionate about transforming ideas into impactful digital experiences. With a keen eye for design and strong <span className={`relative`}>web development</span> skills, I create intuitive and <span className={`relative`}>responsive interfaces</span> that delight users. Let&apos;s work together to bring your next project to life!
        </p>
      </div>
    </div>
  );
};

export default Hero;
