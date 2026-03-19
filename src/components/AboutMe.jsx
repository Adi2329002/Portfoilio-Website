import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="max-w-[90%] 2xl:max-w-[1400px] mx-auto px-6 py-20 border-t border-gray-800/50 mt-10">
      
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 flex items-center gap-3 tracking-tight">
          <span className="text-emerald-500 font-mono text-2xl">&gt;</span> whoami
        </h2>
        <p className="text-gray-500 font-mono text-sm mt-3 ml-8">
          Retrieving user_profile.json... 200 OK
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* --- LEFT SIDE: Terminal Profile (Takes up 7/12 columns on large screens) --- */}
        <div className="lg:col-span-7 bg-[#050505] rounded-lg border border-gray-800 shadow-2xl overflow-hidden group relative">
          
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative z-10">
            <div className="bg-[#111] px-4 py-3 border-b border-gray-800 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-600"></div>
              <div className="w-3 h-3 rounded-full bg-gray-600"></div>
              <div className="w-3 h-3 rounded-full bg-gray-600"></div>
              <span className="ml-4 text-xs font-mono text-gray-500">profile.json</span>
            </div>
            
            <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
              <span className="text-gray-400">{"{"}</span>
              
              <div className="pl-6 py-1">
                <span className="text-blue-400">"name"</span><span className="text-gray-400">: </span>
                <span className="text-emerald-400">"Aditya Alok"</span><span className="text-gray-400">,</span>
              </div>
              
              <div className="pl-6 py-1">
                <span className="text-blue-400">"education"</span><span className="text-gray-400">: </span>
                <span className="text-emerald-400">"B.Tech CSCE @ KIIT University"</span><span className="text-gray-400">,</span>
              </div>
              
              <div className="pl-6 py-1">
                <span className="text-blue-400">"base_location"</span><span className="text-gray-400">: </span>
                <span className="text-emerald-400">"Patna, Bihar -&gt; Bhubaneswar"</span><span className="text-gray-400">,</span>
              </div>
              
              <div className="pl-6 py-1">
                <span className="text-blue-400">"current_focus"</span><span className="text-gray-400">: [</span>
                <br />
                <span className="pl-6 text-emerald-400">"Offensive/Defensive Security"</span><span className="text-gray-400">,</span>
                <br />
                <span className="pl-6 text-emerald-400">"Hardware Level Optimization"</span><span className="text-gray-400">,</span>
                <br />
                <span className="pl-6 text-emerald-400">"Machine Learning Models"</span>
                <br />
                <span className="text-gray-400">],</span>
              </div>
              
              <div className="pl-6 py-1">
                <span className="text-blue-400">"offline_interests"</span><span className="text-gray-400">: [</span>
                <span className="text-emerald-400">"Riding Bikes"</span><span className="text-gray-400">, </span>
                <span className="text-emerald-400">"Rock Music"</span><span className="text-gray-400">, </span>
                <span className="text-emerald-400">"Cars"</span><span className="text-gray-400">, </span>
                <span className="text-emerald-400">"Books"</span>
                <span className="text-gray-400">]</span>
              </div>
              
              <span className="text-gray-400">{"}"}</span>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: Milestones (Takes up 5/12 columns on large screens) --- */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Milestone 1: SIH */}
          <div className="bg-[#050505] p-6 rounded-lg border border-gray-800 border-l-4 border-l-emerald-500 hover:bg-[#111] transition-colors shadow-lg">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-gray-100 font-bold text-xl">Smart India Hackathon</h4>
              <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 font-mono text-xs rounded border border-emerald-500/30">2024</span>
            </div>
            <p className="text-emerald-400 font-mono text-sm mb-3">&gt; Runner-Up (Hardware Edition)</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Designed and engineered a hardware-based Search and Rescue Bot to navigate hazardous environments and assist in complex disaster recovery operations.
            </p>
          </div>
          
          {/* Milestone 2: NUS */}
          <div className="bg-[#050505] p-6 rounded-lg border border-gray-800 border-l-4 border-l-blue-500 hover:bg-[#111] transition-colors shadow-lg">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-gray-100 font-bold text-xl">National Univ. of Singapore</h4>
              <span className="px-2 py-1 bg-blue-500/10 text-blue-400 font-mono text-xs rounded border border-blue-500/30">2025</span>
            </div>
            <p className="text-blue-400 font-mono text-sm mb-3">&gt; Global Immersion Intern</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Collaborated on advanced data science and Machine Learning projects, specifically leading a team to build an AI model for health insurance cross-sell predictions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutMe;