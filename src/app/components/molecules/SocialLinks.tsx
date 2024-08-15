// src/components/molecules/SocialLinks.tsx
import React from 'react';
import SocialLink from '../atoms/SocialLink';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialLinks: React.FC = () => (
  <div className="flex space-x-4">
    <SocialLink 
      href="https://www.linkedin.com/in/seu-perfil" 
      icon={<FaLinkedin size={36} />} 
      label="LinkedIn"
      className="hover:scale-110"
    />
    <SocialLink 
      href="https://github.com/seu-usuario" 
      icon={<FaGithub size={36} />} 
      label="GitHub"
      className="hover:scale-110"
    />
  </div>
);

export default SocialLinks;
