import React, { useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SkillBar from './components/SkillBar'
import AboutMe from './components/AboutMe'
import Project from './components/Project'
import Contacts from './components/Contacts'
import AnimatedSection from './components/AnimatedSection'
import { Analytics } from "@vercel/analytics/react"

function App() {
  // Logic to track mouse movement for the background glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-transparent min-h-screen text-white pt-20 relative z-10">
      <Navbar />
      
      <main className="space-y-10">
        <Hero />
        
        <AnimatedSection>
          <SkillBar />
        </AnimatedSection>

        <AnimatedSection>
          <AboutMe />
        </AnimatedSection>

        <AnimatedSection>
          <Project />
        </AnimatedSection>

        <AnimatedSection>
          <Contacts />
        </AnimatedSection>
      </main>

      <Analytics />
    </div>
  )
}

export default App