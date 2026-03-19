import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SkillBar from './components/SkillBar'
import AboutMe from './components/AboutMe'
import Project from './components/Project'
// IMPORTANT: Make sure this matches your exact file name. 
// If your file is still named "Contatcs.jsx", change the import below to match!
import Contacts from './components/Contatcs.jsx' 
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    // The pt-20 adds padding to the top so your fixed Navbar doesn't cover the Hero section
    <div className="bg-[#121212] min-h-screen text-white pt-20"> 
      <Navbar /> 
      
      <main>
        <Hero /> 
        <SkillBar />
        <AboutMe />
        <Project />
        <Contacts />
      </main>

      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default App