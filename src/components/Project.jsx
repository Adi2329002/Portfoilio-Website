import React from 'react';

const Project = () => {
  const projects = [
    {
      title: "Search and Rescue Bot",
      type: "SIH 2024 / Robotics",
      description: "Runner-up project at the Smart India Hackathon 2024 (Hardware Edition). Engineered a hardware-based search and rescue robot designed to navigate hazardous environments and assist in disaster recovery operations.",
      stack: ["Robotics", "IoT", "Hardware Design", "Microcontrollers"],
      repo: null 
    },
    {
      title: "Health Insurance Cross-Sell",
      type: "Machine Learning (NUS)",
      description: "Developed during the NUS Global Immersion program. Led a team to build an AI model analyzing customer data to predict cross-selling opportunities for health insurance using advanced data science techniques.",
      stack: ["Python", "Scikit-Learn", "Data Analytics"],
      repo: null 
    },
    {
      title: "Rust TCP Packet Sniffer",
      type: "Systems / Security",
      description: "A high-performance network packet sniffer built from scratch in Rust. Intercepts and logs TCP traffic for deep packet inspection and network security monitoring.",
      stack: ["Rust", "TCP/IP", "Libpcap", "Networking"],
      repo: "https://github.com/Adi2329002/Rust-TCP-packet-Sniffer" 
    },
    {
      title: "AI Virtual Mouse",
      type: "Computer Vision",
      description: "A production-ready application for real-time hand tracking and gesture recognition, allowing users to control their system interface entirely through a webcam feed.",
      stack: ["Python", "MediaPipe", "PyQt6", "OpenCV"],
      repo: "https://github.com/Adi2329002/AI_Virtual_Mouse" 
    },
    {
      title: "BharatDocs",
      type: "Full-Stack Web App",
      description: "A cloud-first word processor reimagined for Indian linguistic diversity. Features real-time multilingual translation, voice typing tuned for Indian accents, and AI-assisted academic summarization.",
      stack: ["Next.js", "Convex", "Clerk Auth", "Tailwind CSS"],
      repo: "https://github.com/Adi2329002/Indian_Word_Prossecor" 
    },
    {
      title: "Market Analysis & Nash Eq.",
      type: "Game Theory / ML",
      description: "An analytical model applying Game Theory and Nash Equilibrium concepts to market analysis. Uses data-driven techniques to simulate competitive market strategies.",
      stack: ["Python", "Game Theory", "Data Analysis", "Pandas"],
      repo: "https://github.com/Adi2329002/Market-analysis-Nash-equilibrium-" 
    },
    {
      title: "Proxmox Virtualized Server",
      type: "Infrastructure / DevOps",
      description: "Engineered a bare-metal home server using Proxmox VE and TrueNAS. Hosted virtual machines and containers for cybersecurity deployment, network testing, and self-hosted services.",
      stack: ["Proxmox", "TrueNAS", "Linux", "Networking"],
      repo: null 
    }
  ];

  return (
    <section id="projects" className="max-w-[90%] 2xl:max-w-[1400px] mx-auto px-6 py-20 border-t border-gray-800/50">
      
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 flex items-center gap-3 tracking-tight">
          <span className="text-emerald-500 font-mono text-2xl">&gt;</span> ls -la ./projects
        </h2>
        <p className="text-gray-500 font-mono text-sm mt-3 ml-8">
          drwxr-xr-x  aditya  admin  Deployed Systems & Architecture
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#050505] p-8 rounded-lg border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 group flex flex-col h-full relative overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-emerald-400 font-mono text-xs mb-3 tracking-widest uppercase">[{project.type}]</p>
                <h3 className="text-2xl font-bold text-gray-100 group-hover:text-emerald-400 transition-colors duration-300">{project.title}</h3>
              </div>
              
              {project.repo ? (
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-400 transition-colors p-2 bg-gray-900 rounded-md border border-gray-800 hover:border-emerald-500/50">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              ) : (
                <div className="text-gray-600 font-mono text-xs px-2 py-1 bg-gray-900 rounded border border-gray-800 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> Local / Private
                </div>
              )}
            </div>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-800/50">
              {project.stack.map((tech, i) => (
                <span key={i} className="px-2 py-1 bg-[#111] border border-gray-800 text-gray-400 text-xs font-mono rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;