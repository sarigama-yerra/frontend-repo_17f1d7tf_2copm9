import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Showcase />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 py-10 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white/60 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Dev × Design. All rights reserved.</p>
          <p className="text-white/50">Built with React, Tailwind, Framer Motion, and Spline.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
