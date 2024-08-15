// src/components/molecules/FormSection.tsx
import React from 'react';
import InputField from '../atoms/InputField';
import TextArea from '../atoms/TextArea';
import ButtonSend from '../atoms/ButtonSend';

const FormSection = () => (
  <form className="w-full mx-auto max-w-4xl p-8">
    <InputField
      id="name"
      type="text"
      placeholder="Your Name"
      label="What's your name"
    />
    <InputField
      id="email"
      type="email"
      placeholder="Your Email"
      label="Email"
    />
    <TextArea
      id="message"
      placeholder="Your Message"
      label="Message"
      rows={4}
    />
    <div className="flex justify-center pt-16">
      <ButtonSend type="submit" className="w-48 py-4 uppercase">
        Send
      </ButtonSend>
    </div>
  </form>
);

export default FormSection;
