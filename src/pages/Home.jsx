import React from 'react';
import profilepic from '../assets/profile.png';

const Home = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 ">
      <div className='w-1/4 bg-black max-h-screen'>
        <h1 className='text-white font-bold font-serif'></h1>
      </div>
      <div className="text-center p-6 pt-15 w-3/4 animate-fade-in-up bg-white">
        <h1 className="text-gray-900 text-3xl md:text-4xl font-bold font-serif mb-4 p-10 mt-8">
          Hi, I'm Parvathy K V
        </h1>

        <img
          src={profilepic}
          alt="Profile"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-gray-400 shadow-lg mx-auto transition-transform duration-500 hover:scale-105"
        />

        <h3 className="font-semibold text-gray-700 text-xl md:text-2xl mt-4 tracking-wide">
          Software Engineer
        </h3>

        <div className="mt-4 p-4 mx-auto max-w-md text-sm md:text-base bg-white rounded shadow">
          <p className="text-gray-600 text-justify leading-relaxed">
            I'm an MCA student with hands-on experience in full stack development using React,
            Node.js, MongoDB, and Django. I enjoy creating user-friendly interfaces and learning new technologies to improve my craft.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
