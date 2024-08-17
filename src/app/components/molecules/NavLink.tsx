// src/components/molecules/NavLinks.tsx

'use client';

import { useState } from 'react';
import Link from '../atoms/Link';
import { FiMenu, FiX } from 'react-icons/fi';

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button 
        className="md:hidden text-white text-2xl" 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      <nav
  className={`fixed top-0 right-0 w-full bg-primary text-white transform transition-transform duration-300 ease-in-out flex items-start justify-between flex-direction-row-reverse ${
    isOpen ? 'translate-x-0' : 'translate-x-full'
  } md:static md:flex md:flex-row md:gap-24 md:translate-x-0 md:bg-transparent md:w-auto`}
>

        <div className="flex justify-end items-center p-4 md:hidden">
          <button onClick={toggleMenu} aria-label="Close menu">
            <FiX className="text-white text-3xl" />
          </button>
        </div>

        <div className="flex flex-col gap-4 md:gap-8 p-4 md:flex-row md:p-0 md:gap-24">
          <Link href="#projects" onClick={toggleMenu}>projects</Link>
          <Link href="#contacts" onClick={toggleMenu}>contacts</Link>
          <Link href="https://github.com/raqueldebiase/" target="_blank" onClick={toggleMenu}>github</Link>
        </div>
      </nav>
    </>
  );
};

export default NavLinks;
