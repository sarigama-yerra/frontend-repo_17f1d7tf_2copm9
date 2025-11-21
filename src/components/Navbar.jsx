import { Menu, Code2, Palette } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="relative z-10 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white/90">
          <div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-md">
            <Code2 className="h-6 w-6" />
          </div>
          <div className="leading-tight">
            <p className="text-sm uppercase tracking-widest text-white/60">Portfolio</p>
            <h1 className="font-bold text-lg">Dev × Design</h1>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-white/80">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <button className="md:hidden h-10 w-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white/80">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
