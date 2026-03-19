import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-800/50">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left Side: The Bio */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-gray-100 flex items-center gap-2">
            <span className="text-emerald-500 font-mono text-xl">&gt;</span> cat about_me.txt
          </h2>
          <div className="text-gray-400 space-y-4 leading-relaxed">
            <p>
              I am a Computer Science student driven by a deep fascination with how systems work at their core. My journey isn't just about writing code; it's about securing networks, optimizing algorithms at the hardware level, and building intelligent models.
            </p>
            <p>
              Right now, my focus is heavily split between <span className="text-emerald-400">Offensive/Defensive Security</span>, <span className="text-emerald-400">IoT hardware integrations</span>, and <span className="text-emerald-400">Machine Learning</span>. Whether I'm configuring an ESP32 or working on a constant-time Rust implementation, I love getting my hands dirty with complex technical challenges.
            </p>
            <p>
              When I'm not deep in a terminal, you can usually find me talking about cars, reading good books, or tinkering with my home lab setup.
            </p>
          </div>
        </div>

        {/* Right Side: Milestones (Replaces the old 1 YOE stat) */}
        <div className="w-full md:w-1/3 grid grid-cols-1 gap-4">
          <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 border-l-4 border-l-emerald-500">
            <h4 className="text-gray-100 font-bold text-lg">Smart India Hackathon</h4>
            <p className="text-emerald-400 font-mono text-sm mt-1">Runner-Up (2024)</p>
            <p className="text-gray-500 text-sm mt-2">Hardware Edition</p>
          </div>
          
          <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 border-l-4 border-l-emerald-500">
            <h4 className="text-gray-100 font-bold text-lg">National Univ of Singapore</h4>
            <p className="text-emerald-400 font-mono text-sm mt-1">Global Immersion Intern</p>
            <p className="text-gray-500 text-sm mt-2">AI/ML Focus</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;