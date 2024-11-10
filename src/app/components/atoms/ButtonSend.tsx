// src/components/atoms/ButtonSend.tsx
import React from 'react';

interface ButtonSendProps {
  type?: 'button' | 'submit' | 'reset'; 
  onClick?: () => void;
  className?: string; 
  children: React.ReactNode; 
}

const ButtonSend: React.FC<ButtonSendProps> = ({
  type = 'button', 
  onClick,
  className = '',
  children
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`bg-white text-primary px-4 py-2 rounded border border-transparent transition-colors duration-300 hover:bg-primary hover:text-white hover:border-white ${className}`}
  >
    {children}
  </button>
);

export default ButtonSend;
