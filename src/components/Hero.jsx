import React, { useState, useEffect } from 'react';

const Hero = () => {
  // Simple typing effect for the terminal
  const [text, setText] = useState('');
  const fullText = "> system.boot()\n> loading modules...\n> status: student [kiit]\n> focus: [cyber_security, iot, ai/ml]\n> rust_compiler: ready\n> awaiting input_";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Speed of typing
    return () => clearInterval(typingInterval);
  }, []);

  return (
    // We use a dark slate background, ensuring it takes up at least screen height
    <section id="home" className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20 bg-[#121212] text-white">
      
      {/* LEFT SIDE: The Introduction */}
      <div className="flex-1 space-y-6 md:pr-12 z-10">
        <div className="space-y-2">
          <p className="text-emerald-400 font-mono text-sm uppercase tracking-widest">
            // Fresher & Undergraduate
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-100">
            Aditya Alok<span className="text-emerald-500">.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-400">
            CS Student & Systems Builder
          </h2>
        </div>

        <p className="text-gray-400 max-w-lg leading-relaxed text-lg">
          Focused on the intersection of <span className="text-emerald-400 font-medium">Cyber Security</span>, <span className="text-emerald-400 font-medium">IoT</span>, and <span className="text-emerald-400 font-medium">Machine Learning</span>. Currently researching hardware-level optimizations and building robust systems.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a 
            href="#contacts" 
            className="px-6 py-3 bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 rounded-md font-mono text-sm"
          >
            init_contact()
          </a> 
          <a 
            href="https://drive.google.com/file/d/1tVrvW5yYycQIRF9AO6zoldv_0SlDK5bi/view?usp=drivesdk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-6 py-3 border border-gray-700 text-gray-300 hover:border-gray-400 hover:text-white transition-all duration-300 rounded-md font-mono text-sm"
          >
            view_resume.pdf
          </a>
        </div>
      </div>

      {/* RIGHT SIDE: The Terminal Window (Replaces Profile Pic) */}
      <div className="flex-1 w-full mt-12 md:mt-0 z-10">
        <div className="bg-[#0a0a0a] rounded-lg border border-gray-800 shadow-2xl overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-[#1a1a1a] px-4 py-2 border-b border-gray-800 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="ml-2 text-xs font-mono text-gray-500">aditya@portfolio: ~</span>
          </div>
          
          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm md:text-base text-gray-300 min-h-[250px] whitespace-pre-wrap">
            {text}
            <span className="animate-pulse inline-block w-2 h-5 bg-emerald-500 ml-1 align-middle"></span>
          </div>
        </div>
      </div>

      {/* Subtle Background Glow Effect (Optional, using Tailwind arbitrary values) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

    </section>
  );
};

export default Hero;