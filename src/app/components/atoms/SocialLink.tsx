import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label, className }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className={`flex items-center text-2xl justify-center w-12 h-12 rounded-full bg-primary text-white hover:bg-opacity-80 transition-all duration-300 ${className}`}
    aria-label={label}
  >
    {icon}
  </a>
);

export default SocialLink;
