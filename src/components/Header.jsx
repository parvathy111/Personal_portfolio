import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ArticleIcon from '@mui/icons-material/Article';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent hover:bg-gradient-to-r from-gray-900 via-slate-900 to-purple-900 transition duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-center items-center">
        <nav className="space-x-10 text-white text-sm md:text-base font-medium flex items-center">
          <a href="#home" className="flex items-center gap-1 hover:text-purple-300 transition">
            <HomeIcon fontSize="small" /> Home
          </a>
          <a href="#about" className="flex items-center gap-1 hover:text-purple-300 transition">
            <InfoIcon fontSize="small" /> About
          </a>
          <a href="#project" className="flex items-center gap-1 hover:text-purple-300 transition">
            <WorkIcon fontSize="small" /> Projects
          </a>
          <a href="#contact" className="flex items-center gap-1 hover:text-purple-300 transition">
            <ContactMailIcon fontSize="small" /> Contact
          </a>
          <a href="#resume" className="flex items-center gap-1 hover:text-purple-300 transition">
            <ArticleIcon fontSize="small" /> Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
