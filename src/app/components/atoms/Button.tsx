// src/components/atoms/Button.tsx
import React from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string; 
  
}

const Button: React.FC<ButtonProps> = ({ href, children, className }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`bg-primary bg-opacity-70  text-white px-4 py-2 rounded hover:bg-[rgba(0,0,0,0.7)] ${className}`}
  >
    {children}
  </a>
);

export default Button;
