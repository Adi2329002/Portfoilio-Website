import React from 'react';

const Project = () => {
  // Using your actual high-impact projects
  const projects = [
    {
      title: "Zero-Knowledge Vault",
      type: "Cybersecurity / Rust",
      description: "A full-stack password vault utilizing a Rust cryptographic engine compiled to WebAssembly (WASM). Features client-side ChaCha20-Poly1305 encryption to ensure zero-knowledge architecture, deployed via Docker Compose.",
      stack: ["Rust", "WASM", "Docker", "Cryptography"],
      repo: "https://github.com/Aditya0088" // Update with actual repo link
    },
    {
      title: "AI Demand Forecasting",
      type: "Machine Learning",
      description: "A professional time-series demand forecasting system. Implemented a Recurrent Neural Network (LSTM) to predict future inventory needs based on historical sales data with a 7-day walk-forward prediction.",
      stack: ["TensorFlow", "Django", "React", "Python"],
      repo: "https://github.com/Aditya0088" // Update with actual repo link
    },
    {
      title: "Network Packet Analyzer",
      type: "Systems / Security",
      description: "A high-performance network sniffer built from scratch. Implemented a rule-based threat detection engine capable of analyzing traffic in real-time for anomalous patterns.",
      stack: ["Rust", "Networking", "Security"],
      repo: "https://github.com/Aditya0088" // Update with actual repo link
    },
    {
      title: "AI Virtual Mouse",
      type: "Computer Vision",
      description: "A production-ready application for real-time hand tracking and gesture recognition, allowing users to control their system interface entirely through a webcam feed.",
      stack: ["Python", "MediaPipe", "PyQt6", "OpenCV"],
      repo: "https://github.com/Aditya0088" // Update with actual repo link
    }
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-800/50">
      <h2 className="text-3xl font-bold text-gray-100 mb-10 flex items-center gap-2">
        <span className="text-emerald-500 font-mono text-xl">&gt;</span> ls ./projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
            
            {/* Subtle glow effect on hover */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-emerald-400 font-mono text-xs mb-2">[{project.type}]</p>
                <h3 className="text-2xl font-bold text-gray-100">{project.title}</h3>
              </div>
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-400 transition-colors">
                {/* Minimalist GitHub Icon */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.stack.map((tech, i) => (
                <span key={i} className="px-2 py-1 bg-[#121212] border border-gray-700 text-gray-400 text-xs font-mono rounded">
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