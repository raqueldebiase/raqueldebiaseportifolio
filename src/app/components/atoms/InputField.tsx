// src/components/atoms/InputField.tsx
import React from 'react';

interface InputFieldProps {
  id: string;
  type: string;
  placeholder: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ id, type, placeholder, label }) => (
  <div className="relative py-8">
    <input
      id={id}
      type={type}
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

export default InputField;
