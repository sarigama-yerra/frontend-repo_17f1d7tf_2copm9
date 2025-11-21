import { Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-white text-2xl sm:text-3xl font-bold">Let’s build something great</h2>
            <p className="text-white/70 mt-2 max-w-xl">Tell me about your product, timeline, and goals. I’ll get back within 24 hours with next steps.</p>

            <div className="mt-8 flex items-center gap-3 text-white/80">
              <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">🚀</div>
              <p>Available for freelance and collabs</p>
            </div>
          </div>

          <form className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Name" />
              <input type="email" className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Email" />
            </div>
            <input className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Project / Company" />
            <textarea rows={4} className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="What are we building?" />
            <button type="button" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 font-semibold shadow-lg hover:shadow-xl transition">
              Send message
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
