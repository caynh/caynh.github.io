import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
         import.meta.env.VITE_EMAIL_SERVICE_ID,
         import.meta.env.VITE_EMAIL_TEMPLATE_ID,
         form.current,
         import.meta.env.VITE_EMAIL_PUBLIC_KEY
)
      .then(
        () => {
          toast.success('Email sent successfully!');
          form.current.reset();
        },
        (error) => {
          toast.error('Failed to send email. Please try again.')
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false} />
        <form className = 'flex flex-col fixed text-left pt-20 text-2xl'ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" className='bg-zinc-300 hover:bg-zinc-100' />
          <label>Email</label>
          <input type="email" name="user_email" className='bg-zinc-300 hover:bg-zinc-100' />
          <label>Message</label>
          <textarea name="message" className='bg-zinc-300 hover:bg-zinc-100' />
          <input type="submit" value="Send" />
        </form>
    </div>
  );
};