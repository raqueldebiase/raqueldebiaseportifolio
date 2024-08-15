// src/components/organisms/Footer.tsx
import React from 'react';
import SocialLinks from '../molecules/SocialLinks'; // Supondo que você tenha um componente de links sociais

const Footer = () => (
  <footer className="bg-primary text-white py-8 ">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-end">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h4 className="text-2xl font-thin">Raquel De Biase</h4>
        <p className="text-sm mt-2">Lisbon, Portugal</p>
        <p className="text-sm">Email: raqueldebiase@gmail.com</p>
      </div>
      <div className="text-center md:text-right">
        <p className="text-sm">&copy; {new Date().getFullYear()} Raquel De Biase. All rights reserved.</p>
        {/* <p className="text-sm">
          <a href="/privacy" className="hover:underline">Privacy Policy</a> | <a href="/terms" className="hover:underline">Terms of Service</a>
        </p> */}
      </div>
    </div>
  </footer>
);

export default Footer;
