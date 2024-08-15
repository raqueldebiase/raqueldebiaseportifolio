// src/components/atoms/TextArea.tsx
import React from 'react';

interface TextAreaProps {
  id: string;
  placeholder: string;
  label: string;
  rows: number;
}

const TextArea: React.FC<TextAreaProps> = ({ id, placeholder, label, rows }) => (
  <div className="relative py-8">
    <textarea
      id={id}
      rows={rows}
      placeholder={placeholder}
      className="w-full px-4 py-2 border-b-2 border-white bg-transparent text-white placeholder-transparent focus:outline-none peer"
    />
    <label
      htmlFor={id}
      className="absolute top-2 left-2 text-white text-lg uppercase font-thin transition-all duration-300 transform scale-75 origin-top-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 peer-focus:text-primary peer-focus:scale-100 peer-focus:-translate-y-4 peer-focus:bg-primary peer-focus:text-white px-1"
    >
      {label}
    </label>
  </div>
);

export default TextArea;
