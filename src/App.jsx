import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './Pages/Hero'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Experience from './Pages/Experience'
import Education from './Pages/Education'
import Contact from './Pages/Contact'

function App() {
  return (
    <div style={{ backgroundColor: '#F4EEDD', color: '#221C12' }} className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
