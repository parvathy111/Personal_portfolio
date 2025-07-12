import React from "react";
import profilepic from "../assets/profile.png";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-800 via-slate-900 to-purple-900 text-white">

      {/* Main Flex Row */}
      <div className="flex flex-col md:flex-row flex-grow py-30 md:py-0 ">
        {/* Left Section */}
        <div className="w-full md:w-[48%] flex flex-col items-center justify-center px-4 py-10 md:py-20 gap-3 md:gap-5">
          <h1
            className="text-3xl md:text-4xl font-bold font-serif text-center md:text-left leading-snug
            transition-all duration-300 hover:text-purple-400 hover:tracking-wider"
          >
            Hi, I'm Parvathy K V
          </h1>

          <img
            src={profilepic}
            alt="Profile"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-gray-300 shadow-xl 
            transition-transform duration-300 hover:scale-105"
          />

          <h3
            className="font-medium text-gray-300 text-lg md:text-xl text-center md:text-left
            transition-all duration-300 hover:text-white hover:scale-105 hover:underline underline-offset-4"
          >
            Software Engineer
          </h3>
        </div>

        {/* Divider for Desktop */}
        <div className="hidden md:flex items-center justify-center">
          <div className="w-px h-48 bg-gray-500 opacity-40"></div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[48%] flex items-center justify-center px-4 py-6">
          <div
            className="backdrop-blur-md p-4 rounded-xl shadow-md max-w-lg text-gray-200 text-sm md:text-base leading-relaxed text-justify 
          transition-all duration-1000 hover:shadow-xl"
          >
            <p className="transition-colors duration-300 hover:text-purple-200">
              I'm an MCA student with hands-on experience in full stack
              development using
              <span className="hover:text-yellow-300 transition px-1">React</span>
              ,
              <span className="hover:text-green-300 transition px-1">
                Node.js
              </span>
              ,
              <span className="hover:text-blue-300 transition px-1">MongoDB</span>
              , and
              <span className="hover:text-pink-300 transition px-1">Django</span>.
              I enjoy building user-friendly interfaces and love exploring new
              technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Tagline at Bottom */}
      <div className="w-full flex justify-center py-1 mb-10">
        <p className="text-sm md:text-base text-gray-400 italic text-center">
          Code. Create. Inspire.
        </p>
      </div>
    </div>
  );
};

export default Home;
