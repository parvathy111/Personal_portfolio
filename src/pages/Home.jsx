import React from 'react'
import profilepic from '../assets/profile.jpg'


const Home = () => {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-purple-800 px-4">
      <div className="text-center p-6 max-w-xl w-full">
        <h1 className="text-white text-3xl md:text-4xl font-bold font-serif mb-4">
          Hi, I'm Parvathy K V
        </h1>

        <img
          src={profilepic}
          alt="Profile"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gray-300 shadow-md mx-auto"
        />

        <h3 className="font-semibold text-white text-xl md:text-2xl mt-4">
          Software Engineer
        </h3>

        <div className="mt-4 p-4 mx-auto max-w-md text-sm md:text-base">
          <p className="text-black text-justify">
            MCA student with hands-on experience in web development using React,
            Node.js, MongoDB, and Django. Passionate about building user-friendly
            applications and continuously learning new technologies.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
