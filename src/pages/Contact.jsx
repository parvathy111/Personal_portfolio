import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-gray-800 overflow-hidden">
      {/* Background shapes (optional) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute w-72 h-72 bg-purple-500 rounded-full opacity-20 top-0 left-[-60px] blur-3xl"></div>
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full opacity-20 bottom-0 right-[-60px] blur-3xl"></div>
      </div>

      {/* Contact Card */}
      <div
        data-aos="fade-up"
        className="relative z-10 max-w-xl mx-auto bg-gray/90 backdrop-blur-md p-10 rounded-2xl shadow-xl"
      >
        <h2 className="text-4xl font-bold text-center text-white mb-8">Contact Me</h2>

        <div className="space-y-5 text-center text-lg">
          <p className="text-blue-700">📧 Email: parvathykv.871@gmail.com</p>
          <p className="text-blue-700">📱 Phone: +91-9846801513</p>
          <p className="text-blue-700">
            🔗 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/parvathykv"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              Parvathy K V
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
