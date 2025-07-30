import { useEffect } from 'react'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from "./Components/Navbar.jsx"
import { Homepage as Home } from "./Components/Homepage.jsx"  // Changed to named import
import About from "./Components/About.jsx"
import Skills from "./Components/Skills.jsx"
import Projects from "./Components/Projects.jsx"
import Contact from "./Components/Contact.jsx"
import Experience from './Components/Experience'
import Connect from "./Components/Connect.jsx"
import Footer from './Components/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <main className="bg-background min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Connect />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
