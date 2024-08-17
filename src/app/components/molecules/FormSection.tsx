// src/components/molecules/FormSection.tsx

'use client';

import React, { useState } from 'react';
import InputField from '../atoms/InputField';
import TextArea from '../atoms/TextArea';
import ButtonSend from '../atoms/ButtonSend';

const FormSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <form className="w-full mx-auto max-w-4xl p-8" onSubmit={handleSubmit}>
      <InputField
        id="name"
        type="text"
        placeholder="Your Name"
        label="What's your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputField
        id="email"
        type="email"
        placeholder="Your Email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextArea
        id="message"
        placeholder="Your Message"
        label="Message"
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex justify-center pt-16">
        <ButtonSend type="submit" className="w-48 py-4 uppercase">
          {status === 'sending' ? 'Sending...' : 'Send'}
        </ButtonSend>
      </div>
      {status === 'success' && <p className="text-green-500 text-center mt-4">Message sent successfully!</p>}
      {status === 'error' && <p className="text-red-500 texte-center mt-4">There was an error sending your message. Please try again.</p>}
    </form>
  );
};

export default FormSection;
