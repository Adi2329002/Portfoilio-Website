import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Fixed to top, z-index high to stay above content, semi-transparent black with a blur effect
    <nav className="fixed w-full top-0 z-50 bg-[#121212]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Left Side: Logo */}
        <a href="#home" className="text-xl font-bold text-white tracking-wider flex items-center gap-1">
          <span className="text-emerald-500 font-mono">~/</span>
          Aditya<span className="text-emerald-500">.</span>dev
        </a>

        {/* Right Side: Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-400 hover:text-emerald-400 font-mono text-sm transition-colors">
            ./about
          </a>
          <a href="#projects" className="text-gray-400 hover:text-emerald-400 font-mono text-sm transition-colors">
            ./projects
          </a>
          <a href="#contacts" className="text-gray-400 hover:text-emerald-400 font-mono text-sm transition-colors">
            ./contact
          </a>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-400 hover:text-emerald-400 focus:outline-none transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-b border-gray-800 absolute w-full">
          <div className="px-6 pt-2 pb-4 space-y-2 flex flex-col">
            <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 text-gray-400 hover:text-emerald-400 font-mono text-sm border-b border-gray-800/50">
              ./about
            </a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="block py-2 text-gray-400 hover:text-emerald-400 font-mono text-sm border-b border-gray-800/50">
              ./projects
            </a>
            <a href="#contacts" onClick={() => setIsOpen(false)} className="block py-2 text-gray-400 hover:text-emerald-400 font-mono text-sm">
              ./contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;