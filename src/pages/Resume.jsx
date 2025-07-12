import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-gray-800 overflow-hidden">
      {/* Background designs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20 top-0 left-10 animate-ping"></div>
        <div className="absolute w-80 h-80 bg-purple-200 rounded-full blur-2xl opacity-20 bottom-10 right-10 animate-pulse"></div>
      </div>

      {/* Resume content */}
      <div
        data-aos="fade-up"
        className="relative z-10 max-w-xl mx-auto bg-gray/90 backdrop-blur-lg p-10 rounded-3xl shadow-xl text-center"
      >
        <h2 className="text-4xl font-bold text-gray-100 mb-6">Resume</h2>
        <p className="text-gray-300 mb-6 text-base md:text-lg">
          Click the button below to download my resume:
        </p>

        <a
          href="/Resume parvathykv.pdf"
          download
          className="inline-block bg-blue-600 text-white px-6 py-3 text-sm font-semibold rounded-full hover:bg-blue-700 shadow-md transition"
        >
          📄 Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
