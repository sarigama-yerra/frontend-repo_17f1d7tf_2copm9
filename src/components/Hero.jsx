import Spline from '@splinetool/react-spline'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] lg:min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 backdrop-blur px-3 py-1 text-xs text-white/80 mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Creative Developer & Designer
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
            I build delightful software with a designer's eye
          </h2>
          
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            Frontend experiences, polished UI, and smooth micro‑interactions. From concept to production with a focus on craft.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#work" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-slate-900/20 hover:shadow-xl hover:scale-[1.01] transition">
              See my work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white px-5 py-3 font-semibold backdrop-blur hover:bg-white/15 transition">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
