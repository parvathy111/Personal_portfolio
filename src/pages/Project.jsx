import React from 'react';

const Projects = () => {
  const projectData = [
    {
      title: 'Anganwadi Automation System',
      desc: 'MERN stack-based web application to manage Anganwadi centers with daily tracking, vaccine management, messaging, and user roles (Admin, Supervisor, Worker, Beneficiary).',
      link: 'https://github.com/yourusername/anganwadi-automation',
    },
    {
      title: 'Student Marks Portal',
      desc: 'A Django project to manage and display student marks, semester-wise reports, and admin dashboard functionality.',
      link: 'https://github.com/yourusername/student-marks-portal',
    },
    {
      title: 'Personal Portfolio',
      desc: 'A responsive personal portfolio website built using React and Tailwind CSS. It showcases my skills, projects, and background with a clean and modern UI design.',
      link: 'https://github.com/yourusername/personal-portfolio',
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 px-4 py-20 flex flex-col items-center overflow-hidden">
      
      {/* Floating abstract circles in background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
       <div className="absolute w-72 h-72 bg-purple-500 rounded-full opacity-20 top-0 left-[-60px] blur-3xl"></div>
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full opacity-20 bottom-0 right-[-60px] blur-3xl"></div>
      </div>

      {/* Heading */}
      <h2 className="text-4xl font-bold text-white mb-12 z-10 mt-10">Projects</h2>

      {/* Cards */}
      <div className="grid gap-8 max-w-5xl w-full md:grid-cols-2 z-10">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-gray backdrop-blur-lg p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-300 mb-2">{project.title}</h3>
            <p className="text-gray-400">{project.desc}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 text-blue-600 font-medium hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
