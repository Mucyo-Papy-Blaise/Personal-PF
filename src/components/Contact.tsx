import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-Color2 to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-white">
          Contact <span className="text-green-500">Me!</span>
        </h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Enter your Name!"
              className="w-full p-3 bg-gray-800 text-white rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 bg-gray-800 text-white rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full p-3 bg-gray-800 text-white rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Email subject"
              className="w-full p-3 bg-gray-800 text-white rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <textarea
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