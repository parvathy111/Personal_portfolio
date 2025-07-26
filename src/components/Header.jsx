import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ArticleIcon from '@mui/icons-material/Article';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent hover:bg-gradient-to-r from-gray-900 via-slate-900 to-purple-900 transition duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-center items-center relative">
        
        {/* Desktop Menu (Centered) */}
        <nav className="hidden md:flex space-x-10 text-white text-sm md:text-base font-medium items-center">
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

        {/* Mobile Hamburger Button (Positioned Absolute to Right) */}
        <div className="md:hidden text-white cursor-pointer absolute right-4" onClick={toggleMenu}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-gray-900 via-slate-900 to-purple-900 text-white px-4 pb-4 space-y-2 text-center">
          <a href="#home" className="py-2 flex justify-center items-center gap-2 hover:text-purple-300" onClick={toggleMenu}>
            <HomeIcon fontSize="small" /> Home
          </a>
          <a href="#about" className="py-2 flex justify-center items-center gap-2 hover:text-purple-300" onClick={toggleMenu}>
            <InfoIcon fontSize="small" /> About
          </a>
          <a href="#project" className="py-2 flex justify-center items-center gap-2 hover:text-purple-300" onClick={toggleMenu}>
            <WorkIcon fontSize="small" /> Projects
          </a>
          <a href="#contact" className="py-2 flex justify-center items-center gap-2 hover:text-purple-300" onClick={toggleMenu}>
            <ContactMailIcon fontSize="small" /> Contact
          </a>
          <a href="#resume" className="py-2 flex justify-center items-center gap-2 hover:text-purple-300" onClick={toggleMenu}>
            <ArticleIcon fontSize="small" /> Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
