import React from 'react';

const SkillBar = () => {
  const skills = [
    { 
      category: "Languages", 
      items: ["Rust", "C/C++", "Python", "Java", "JavaScript", "Bash Scripting"]
    },
    { 
      category: "Hardware & Embedded", 
      items: ["ESP32", "Raspberry Pi (4B/Zero 2W)", "Arduino", "Embedded C++"]
    },
    { 
      category: "Infra & DevOps", 
      items: ["Proxmox VE", "TrueNAS", "Docker", "Linux Admin", "Git", "Cloud Foundations"]
    },
    { 
      category: "Domains", 
      items: ["Cybersecurity", "IoT", "AI/ML", "Cloud Computing"]
    }
  ];

  return (
    <section id="skills" className="max-w-[90%] 2xl:max-w-[1400px] mx-auto px-6 py-20 border-t border-gray-800/50">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 flex items-center gap-3 tracking-tight">
            <span className="text-emerald-500 font-mono text-2xl">&gt;</span> sudo apt install skills
          </h2>
          <p className="text-gray-500 font-mono text-sm mt-3 ml-8">
            Scanning local repositories... Found 4 core modules.
          </p>
        </div>

        {/* --- AWS BADGE DISPLAY --- */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-orange-500/20 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
          
          <div className="relative bg-[#050505] border border-orange-500/30 rounded-lg p-2 flex items-center gap-4 pr-6 overflow-hidden">
            <img 
              src="/aws-badge.png" 
              alt="AWS Academy Graduate - Cloud Foundations" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
            <div className="font-mono text-left">
              <p className="text-orange-500 text-[10px] font-bold uppercase tracking-widest leading-none mb-1">
                Verified_Credential
              </p>
              <h4 className="text-gray-200 text-xs md:text-sm font-bold leading-tight">
                AWS Academy Graduate
              </h4>
              <p className="text-gray-500 text-[10px] mt-1">
                Cloud Foundations
              </p>
            </div>
            
            <div className="absolute top-1 right-1">
              <svg className="w-3 h-3 text-orange-500/50" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((group, index) => (
          <div key={index} className="bg-[#050505] p-6 rounded-lg border border-gray-800 hover:border-emerald-500/40 transition-all duration-500 group relative">
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-mono text-emerald-500/50">MOD_0{index + 1}</span>
            </div>

            <h3 className="text-emerald-400 font-mono text-xs mb-6 uppercase tracking-[0.2em] border-b border-gray-800 pb-2">
              {group.category}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-[#111] border border-gray-800 text-gray-400 text-[11px] font-mono rounded hover:text-emerald-400 hover:border-emerald-500/30 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillBar;