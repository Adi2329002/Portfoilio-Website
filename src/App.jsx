import { useState, useEffect } from 'react';
import './App.css'
import './components/Navbar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SkillBar from './components/SkillBar'
import AboutMe from './components/AboutMe'
import Project from './components/Project'
import Contacts from './components/Contatcs'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  // ADD THEME STATE
  const [theme, setTheme] = useState(() => 
    window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  );

  // ADD THE TOGGLE FUNCTION
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // ADD EFFECT TO UPDATE THE BODY CLASS
  useEffect(() => {
    document.body.className = theme + '-theme';
  }, [theme]);
  

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <SkillBar />
      <AboutMe />
      <Project />
      <Contacts />
 
    </>
  )
}

export default App
