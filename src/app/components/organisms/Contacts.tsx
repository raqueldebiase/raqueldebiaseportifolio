/* eslint-disable react/no-unescaped-entities */
// src/components/organisms/Contacts.tsx
import React from 'react';
import FormSection from '../molecules/FormSection';

const Contacts = () => {
  return (
    <div className="bg-primary h-screen">
      <h2 className="text-4xl font-thin text-white text-center pt-16 pb-4">Contacts.</h2>
      <p className="text-2xl font-thin text-white text-center">Let's talk about!</p>
      <FormSection />
    </div>
  );
};

export default Contacts;
