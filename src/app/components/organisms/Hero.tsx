/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const Hero = () => (
  <div className=" p-4 mt-24 text-white grid grid-cols-2 grid-rows-2 gap-4 position: sticky">
    <div className="col-span-1 row-span-1 flex items-center justify-start">
      <div>
        <div className="text-6xl md:text-9xl font-thin mb-8">
          RAQUEL DE<br />BIASE
        </div>
        <div className="text-4xl mb-8 font-thin">
          Frontend Developer
        </div>
      </div>
    </div>
    <div className="col-span-1 row-span-1 flex justify-end items-end">
      <ul className="font-thin text-2xl italic text-end">
        <li>JavaScript</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>React JS</li>
        <li>NEXT JS</li>
        <li>Angular</li>
      </ul>
    </div>
    <div className="col-span-1 row-span-1"></div>
    <div className="col-span-1 row-span-1 flex items-center justify-end text-end">
      <p className="text-4xl font-thin">
      Hello! I'm Raquel, a frontend developer passionate about transforming ideas into impactful digital experiences. With a keen eye for design and strong web development skills, I create intuitive and responsive interfaces that delight users. Let's work together to bring your next project to life!
      </p>
    </div>
  </div>
);

export default Hero;
