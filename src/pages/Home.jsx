import React from 'react'
import profilepic from '../assets/profile.jpg'

const Home = () => {
  return (
    <div className='bg-purple-800'>
        <h1 className='text-black-800 text-3xl font-bold font-serif'>Hy I'm Parvathy K V</h1>
        <img src={profilepic} alt="Profile" className='w-24 h-24 rounded-full border-4 border-gray-300 shadow-md'/>
        <h3 className='font-bold text-2xl'>Software Engineer</h3>
        <div className='w-100 h-50 bg-amber-400'>
            <p>MCA student with hands-on experience in web development using React, Node.js, MongoDB, and Django. Passionate about building user-friendly applications and continuously learning new technologies.</p>
        </div>
    </div>
  )
}

export default Home