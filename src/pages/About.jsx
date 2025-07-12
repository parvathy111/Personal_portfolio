import React from 'react';

import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import tailwindIcon from '../assets/tailwindcss.png';
import jsIcon from '../assets/js.png';
import reactIcon from '../assets/react.png';
import pythonIcon from '../assets/python.png';
import djangoIcon from '../assets/django.png';
import sqlIcon from '../assets/sql.png';
import gitIcon from '../assets/git.png';
import githubIcon from '../assets/github.png';

const skills = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'Tailwind CSS', icon: tailwindIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'Django', icon: djangoIcon },
  { name: 'SQL', icon: sqlIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'Github', icon: githubIcon },
];

const About = () => {
  return (
    <div className="relative min-h-screen px-4 py-12 flex flex-col items-center bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white overflow-hidden">
      
      {/* Decorative background circles */}
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full opacity-20 top-0 left-[-60px] blur-3xl"></div>
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full opacity-20 bottom-0 right-[-60px] blur-3xl"></div>

      <h2 className="text-3xl font-bold mb-4 pt-20 z-10">About Me</h2>

      <p className="max-w-2xl text-center text-gray-300 mb-10 z-10">
        I’m an MCA student with a strong interest in full stack development. I enjoy working on both
        frontend and backend using modern technologies to build clean, efficient applications.
      </p>

      <h3 className="text-2xl font-semibold mb-6 z-10">My Skills</h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 z-10">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
            <p className="text-gray-200 font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
