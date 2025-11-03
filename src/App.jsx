import { useState } from 'react'
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
  

  return (
    <>
      <Navbar />
      <Hero />
      <SkillBar />
      <AboutMe />
      <Project />
      <Contacts />
 
    </>
  )
}

export default App
