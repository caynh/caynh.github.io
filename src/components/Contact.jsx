import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { motion as m } from 'motion/react';


export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false); //Tracks sending state

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true); //Disable button

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
          setIsSending(false);
        },
        (error) => {
          toast.error('Failed to send email. Please try again.')
          console.log('FAILED...', error.text);
          setIsSending(false);
        },
      );
  };

  return (
    <m.div 
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{duration: 0.75, ease: "easeOut"}}>
      <Toaster position="bottom-center" reverseOrder={false} />
        <form className = "fixed flex flex-col h-screen text-left justify-center py-55 px-15 mt-20 ml-50 leading-[1.8]'ref={form} onSubmit={sendEmail}">
          <label className="text-3xl">Name</label>
          <input type="text" name="user_name" className="p-5 mt-2 mb-2 w-150 bg-zinc-300 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-600 text-2xl" required />
          <label className='text-3xl'>Email</label>
          <input type="email" name="user_email" className="p-5 mt-2 mb-2 w-150 bg-zinc-300 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-600 text-2xl" required />
          <label className='text-3xl'>Message</label>
          <textarea name="message" minlength="5" placeholder="Minimum of at least 5 characters" maxlength="500" className="resize-none pt-2 py-25 px-5 mt-2 mb-2 w-200 h-250 bg-zinc-300 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-600 text-2xl" required />
          <button className={`p-2 rounded-lg m-4 bg-zinc-300 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-600 dark:text-white`}>
            {isSending ? 'Send' : 'Send'}
          </button>
        </form>
        <header className="fixed text-center justify-center left-10 px-12 mt-25 text-3xl">
        <h1>Let's Connect!</h1>
        </header>
    </m.div>
  );
};