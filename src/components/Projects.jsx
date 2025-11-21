import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Interactive Dashboard',
    desc: 'A modern analytics UI with theming, charts, and motion.',
    tags: ['React', 'Tailwind', 'Framer Motion']
  },
  {
    title: 'Design System Starter',
    desc: 'Tokens, components, accessibility, and documentation.',
    tags: ['Design', 'Accessibility', 'Docs']
  },
  {
    title: '3D Landing Concept',
    desc: 'Spline‑powered hero with layered gradients and CTA.',
    tags: ['Spline', 'Brand', 'WebGL']
  }
]

export default function Projects() {
  return (
    <section id="work" className="relative py-20 bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-white text-2xl sm:text-3xl font-bold">Selected Work</h2>
          <p className="text-white/70 mt-1">A mix of engineering and design explorations</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.07, duration: 0.55 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5 text-white/90 backdrop-blur hover:from-white/10 hover:border-white/20 transition group"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <p className="text-sm text-white/70 mt-1">{p.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <button className="h-9 w-9 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center hover:text-white">
                    <Github className="h-4 w-4" />
                  </button>
                  <button className="h-9 w-9 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center hover:text-white">
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/10 text-white/70">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
