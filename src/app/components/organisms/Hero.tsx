// src/components/organisms/Hero.tsx

'use client';

import React, { useRef } from "react";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";

const Hero = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const isVisible = useIntersectionObserver(textRef);

  return (
    <div className="p-4 mt-40 md:mt-24 text-white grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
      {/* Primeira Seção */}
      <div className="flex flex-col items-start md:items-start">
        <div className="text-6xl md:text-9xl font-thin mb-8">
          RAQUEL DE<br />BIASE
        </div>
        <div className="text-4xl mb-8 font-thin">
          Frontend Developer
        </div>
      </div>

      {/* Segunda Seção */}
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

      {/* Terceira Seção (Vazio) */}
      <div className="hidden md:block"></div>

      {/* Quarta Seção */}
      <div className="flex flex-col items-end text-end md:items-end md:text-end">
        <p
          ref={textRef}
          className={`text-3xl md:text-4xl my-16 font-thin ${isVisible ? 'highlight' : ''}`}
        >
          Hello! I'm Raquel, a frontend developer passionate about transforming ideas into impactful digital experiences. With a keen eye for design and strong <span className={`highlight ${isVisible ? 'animate-background' : ''}`}>web development</span> skills, I create intuitive and <span className={`highlight ${isVisible ? 'animate-background' : ''}`}>responsive interfaces</span> that delight users. Let's work together to bring your next project to life!
        </p>
      </div>
    </div>
  );
};

export default Hero;
