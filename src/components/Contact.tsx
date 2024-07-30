import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: { target: any; preventDefault: () => void; }) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_qchsqzq', 'template_m3bcd0v', form.current, 'q_vWlh1UvGMBcWJop') 
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
            alert('Email sent successfully!');
          },
          (error) => {
            console.error('FAILED...', error.text);
            alert('Failed to send email. Please try again.');
          }
        );
    }

    e.target.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-Color2 to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-white">
          Contact <span className="text-green-500">Me!</span>
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="user_name"
              required
              type="text"
              placeholder="Enter your Name!"
              className="w-full p-3 bg-gray-800 text-white rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              name="user_email" 
              required
              type="email"
              placeholder="Email address"
              className="w-full p-3 bg-gray-800 text-white rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="user_phone" 
              required
              type="tel"
              placeholder="Mobile Number"
              className="w-full p-3 bg-gray-800 text-white rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              name="subject" 
              required
              type="text"
              placeholder="Email subject"
              className="w-full p-3 bg-gray-800 text-white rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <textarea
            name="message" 
            required
            placeholder="Your message"
            className="w-full p-3 bg-gray-800 text-white rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 h-32 resize-none"
          ></textarea>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="h-10 w-32 rounded-xl border-2 border-Color3 text-Color3 font-acme text-lg flex justify-center items-center hover:underline active:bg-slate-700 mx-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
