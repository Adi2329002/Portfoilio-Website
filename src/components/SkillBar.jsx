import React from 'react';

const SkillBar = () => {
  // Organizing your skills into categories for a cleaner look
  const skills = [
    { category: "Languages", items: ["Rust", "Python", "C++", "Java", "JavaScript"] },
    { category: "Hardware & Systems", items: ["ESP32", "Raspberry Pi", "Linux", "Proxmox"] },
    { category: "Security & ML", items: ["Defensive Hacking", "Cryptography", "TensorFlow", "PyTorch"] },
    { category: "Web & Tools", items: ["React", "Django", "Git", "Docker"] }
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-800/50">
      <h2 className="text-3xl font-bold text-gray-100 mb-10 flex items-center gap-2">
        <span className="text-emerald-500 font-mono text-xl">&gt;</span> ./tech_stack
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skillGroup, index) => (
          <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 hover:border-emerald-500/50 transition-colors duration-300">
            <h3 className="text-emerald-400 font-mono text-sm mb-4">[{skillGroup.category}]</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, i) => (
                <span key={i} className="px-3 py-1 bg-[#121212] border border-gray-700 text-gray-300 text-xs font-mono rounded-md">
                  {item}
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