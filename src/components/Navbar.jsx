import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-[90%] 2xl:max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Updated Brand Identity */}
        <a href="#home" className="text-xl font-bold text-white tracking-tighter flex items-center gap-2 group">
          <span className="text-emerald-500 font-mono transition-transform group-hover:-translate-x-1">root@</span>
          AdityaAlok<span className="text-emerald-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <a href="#about" className="text-gray-400 hover:text-emerald-400 font-mono text-xs uppercase tracking-widest transition-colors">
            01_About
          </a>
          <a href="#skills" className="text-gray-400 hover:text-emerald-400 font-mono text-xs uppercase tracking-widest transition-colors">
            02_Stack
          </a>
          <a href="#projects" className="text-gray-400 hover:text-emerald-400 font-mono text-xs uppercase tracking-widest transition-colors">
            03_Projects
          </a>
          <a href="#contacts" className="px-4 py-2 border border-emerald-500/50 text-emerald-400 font-mono text-xs rounded hover:bg-emerald-500/10 transition-all">
            Execute_Contact()
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-400">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f0f0f] border-b border-gray-800 py-6 px-6 space-y-4 flex flex-col items-center animate-in fade-in slide-in-from-top-4">
          <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-400 font-mono">./about</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="text-gray-400 font-mono">./stack</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-400 font-mono">./projects</a>
          <a href="#contacts" onClick={() => setIsOpen(false)} className="text-emerald-400 font-mono border border-emerald-500/30 px-4 py-2 rounded">./contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;