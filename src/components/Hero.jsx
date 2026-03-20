import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  
  // Upgraded terminal text with visual loading bars and a more technical layout
  const fullText = `> system.boot()
> initializing core_modules...
  [██████████████████] 100%
> identity: student @ KIIT
> target_lock: [cyber_sec, iot, ml]
> rust_compiler: online
> establishing secure connection...
> root@aditya:~# `;

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 25); // Faster typing speed for a snappier boot sequence
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="min-h-[85vh] flex flex-col md:flex-row items-center justify-between max-w-[90%] 2xl:max-w-[1400px] mx-auto px-6 py-20 bg-transparent text-white">
      
      {/* LEFT SIDE: Visual Tags & Less Text */}
      <div className="flex-1 space-y-8 md:pr-12 z-10 w-full">
        
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <p className="text-emerald-400 font-mono text-xs uppercase tracking-widest">
              System.Status: Online
            </p>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 pb-2">
            Aditya Alok
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-400 font-mono mt-2">
            Systems Builder & Sec Ops_
          </h2>
        </div>

        {/* Visual Focus Badges instead of a paragraph */}
        <div className="flex flex-wrap gap-3">
          <div className="px-4 py-2 border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 font-mono text-sm shadow-[0_0_10px_rgba(16,185,129,0.1)]">
            [ CYBER_SECURITY ]
          </div>
          <div className="px-4 py-2 border border-blue-500/30 bg-blue-500/5 text-blue-400 font-mono text-sm shadow-[0_0_10px_rgba(59,130,246,0.1)]">
            [ IoT_HARDWARE ]
          </div>
          <div className="px-4 py-2 border border-purple-500/30 bg-purple-500/5 text-purple-400 font-mono text-sm shadow-[0_0_10px_rgba(168,85,247,0.1)]">
            [ AI/ML ]
          </div>
        </div>

        <p className="text-gray-500 font-mono text-sm max-w-lg border-l-2 border-gray-700 pl-4">
          &gt; Executing hardware-level optimizations & building attack-resistant systems.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a 
            href="#contacts" 
            className="px-8 py-4 bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 rounded-md font-mono text-sm shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]"
          >
            init_contact()
          </a> 
          <a 
            href="https://drive.google.com/file/d/14RKoHgdZ83goGyE3wfzkb8RsEy-d3r-6/view?usp=drivesdk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-4 border border-gray-700 text-gray-300 hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300 rounded-md font-mono text-sm bg-[#121212]/50 backdrop-blur-sm group"
          >
            view_resume<span className="text-emerald-500 group-hover:text-white transition-colors">.pdf</span>
          </a>
        </div>
      </div>

      {/* RIGHT SIDE: Taller, more dominant Terminal Window */}
      <div className="flex-1 w-full mt-16 md:mt-0 z-10 relative group">
        
        {/* Glowing backplate */}
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative bg-[#050505] rounded-lg border border-gray-800 shadow-2xl overflow-hidden min-h-[420px] flex flex-col">
          
          {/* Terminal Header */}
          <div className="bg-[#111] px-4 py-3 border-b border-gray-800 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-xs font-mono text-gray-500">root@aditya-dev: ~</span>
            <div className="flex gap-1">
              <span className="w-1 h-3 bg-emerald-500 animate-pulse"></span>
              <span className="w-1 h-3 bg-emerald-500 animate-pulse delay-75"></span>
              <span className="w-1 h-3 bg-emerald-500 animate-pulse delay-150"></span>
            </div>
          </div>
          
          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm md:text-base text-emerald-400 flex-grow whitespace-pre-wrap relative leading-relaxed">
            
            {/* Fake CRT Scanline Effect Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none"></div>

            <div className="relative z-10">
              {text}
              <span className="animate-pulse inline-block w-2.5 h-5 bg-emerald-500 ml-1 align-middle shadow-[0_0_8px_#10b981]"></span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;