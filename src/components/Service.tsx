import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen relative bg-Color1 py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-[568px] mx-auto font-alata mt-12">
        <h2 className="text-2xl sm:text-[28px] font-bold mb-6">
          <span className="text-white">My</span>
          <span className="text-green-500"> Service</span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-28 ">
        <div className="w-96 h-80 bg-Color2 rounded-xl border-2 border-white cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
          <h1 className="text-white font-roboto text-[28px] font-bold flex justify-center items-center mt-7 cursor-pointer hover:bg-Color1">01</h1>
          <h2 className="text-Color3 font-roboto font-bold flex justify-center text-[20px] mt-4 cursor-pointer hover:bg-Color1">UI/UX Design</h2>
          <p className="text-white sm:text-lg leading-relaxed font-sans text-[20px] p-6 flex justify-center font-thin cursor-pointer hover:bg-Color1">I design user-friendly and visually attractive interfaces.
           My goal is to create designs that look great and work well.</p>
        </div>
        <div className="w-96 h-80 bg-Color2 rounded-xl border-2 border-white cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
          <h1 className="text-white font-roboto text-[28px] font-bold flex justify-center items-center mt-7 cursor-pointer hover:bg-Color1">02</h1>
          <h2 className="text-Color3 font-roboto font-bold flex justify-center text-[20px] mt-4 cursor-pointer hover:bg-Color1">Web Development</h2>
          <p className="text-white leading-relaxed sm:text-lg font-sans text-[20px] p-6 flex justify-center font-thin cursor-pointer hover:bg-Color1">I build and maintain websites that are functional, fast, and user-friendly. 
           </p>
        </div>
        <div className="w-96 h-80 bg-Color2 rounded-xl border-2 border-white cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
          <h1 className="text-white font-roboto text-[28px] font-bold flex justify-center items-center mt-7 cursor-pointer hover:bg-Color1">03</h1>
          <h2 className="text-Color3 font-roboto font-bold flex justify-center text-[20px] mt-4 cursor-pointer hover:bg-Color1">Database Management</h2>
          <p className="text-white leading-relaxed sm:text-lg font-sans text-[20px] p-6 flex justify-center font-thin cursor-pointer hover:bg-Color1">I organize and manage databases to ensure your data is accurate, secure, and easily accessible.
           </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;