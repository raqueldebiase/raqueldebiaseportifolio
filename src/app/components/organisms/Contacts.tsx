/* eslint-disable react/no-unescaped-entities */
// src/components/organisms/Contacts.tsx
import React from 'react';
import FormSection from '../molecules/FormSection';
import SocialLinks from '../molecules/SocialLinks';

const Contacts = () => {
  return (
    <div className="bg-primary h-screen w-full flex flex-col justify-center items-center" id="contacts">
      <div className="text-center">
        <h2 className="text-4xl font-thin text-white pt-16 pb-4">Contacts.</h2>
        <p className="text-2xl font-thin text-white">Let's talk about!</p>
      </div>
      <FormSection />
      <div className="mt-8 flex flex-col justify-center items-center gap-4">
        <p className="text-2xl font-thin text-white">My Social Medias</p>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Contacts;
