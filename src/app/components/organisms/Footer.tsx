// src/components/organisms/Footer.tsx
import React from 'react';

const Footer = () => (
  <footer className="bg-primary text-white py-8">
  <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-end">
    <div className="text-center md:text-left mb-4 md:mb-0">
      <h4 className="text-1xl font-thin">Raquel De Biase</h4>
      <p className="text-sm mt-2 font-thin">Lisbon, Portugal</p>
      <p className="text-sm font-thin">raqueldebiase@gmail.com</p>
    </div>
    <div className="text-center md:text-right">
      <p className="text-sm font-thin">&copy; {new Date().getFullYear()} Raquel De Biase. All rights reserved.</p>
    </div>
  </div>
</footer>

);

export default Footer;
