export default function Conclusion() {
  return (
    <section id="conclusion" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink to-[#0c1322]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-amber-glow/5 blur-3xl" />
      <div className="relative section-pad text-center">
        <span className="eyebrow inline-block">Conclusion</span>
        <h2 className="h2 max-w-3xl mx-auto">
          Deep geological repositories remain the foundation for HLW disposal
        </h2>
        <p className="mt-5 text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Success depends on careful site selection, sophisticated engineered barrier systems and
          meticulous safety evaluations to guarantee containment over thousands of years. Advances
          in materials science, predictive modeling and alternatives like deep borehole disposal
          are improving viability — but political, security and public concerns must also be
          addressed.
        </p>
        <p className="mt-5 text-amber-glow font-semibold max-w-2xl mx-auto">
          Future priorities: optimize transmutation to reduce waste longevity, scale up deep
          borehole disposal, and improve long-term predictive models.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="/ENVIRONMENT.pdf"
            className="px-6 py-3 rounded-full bg-amber-glow text-ink font-semibold hover:brightness-110 transition"
          >
            ↓ Read the full paper (PDF)
          </a>
          <a
            href="#top"
            className="px-6 py-3 rounded-full border border-steel text-slate-200 hover:border-amber-glow transition"
          >
            Back to top
          </a>
        </div>
      </div>
    </section>
  )
}
