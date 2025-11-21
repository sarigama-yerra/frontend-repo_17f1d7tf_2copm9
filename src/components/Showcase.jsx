import { motion } from 'framer-motion'
import { Figma, Code2, MonitorSmartphone, Rocket } from 'lucide-react'

const cards = [
  {
    icon: <Figma className="h-6 w-6" />,
    title: 'Product Design',
    desc: 'Wireframes, flows, and high‑fidelity UI kits with component systems.'
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: 'Frontend Engineering',
    desc: 'Modern React, animations, accessibility, and performance tuning.'
  },
  {
    icon: <MonitorSmartphone className="h-6 w-6" />,
    title: 'Responsive Experiences',
    desc: 'Pixel‑perfect layouts from mobile to desktop with adaptive patterns.'
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'Shipping & Iteration',
    desc: 'From MVP to production with quality gates and UX polish.'
  }
]

export default function Showcase() {
  return (
    <section id="skills" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(56,189,248,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-white/90 backdrop-blur hover:bg-white/10 hover:border-white/20 transition"
            >
              <div className="h-11 w-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-4">
                {c.icon}
              </div>
              <h3 className="font-semibold text-white mb-1">{c.title}</h3>
              <p className="text-sm text-white/70">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
