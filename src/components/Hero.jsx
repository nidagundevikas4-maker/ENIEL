import { paper } from '../data.js'

export default function Hero({ onLaunch }) {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* depth gradient: surface -> deep underground */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#0c1322] to-[#0a0f1a]" />
      <DepthBackdrop />

      <div className="relative section-pad pt-32 sm:pt-40 text-center">
        <span className="eyebrow inline-block">{paper.type}</span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-[1.1] max-w-4xl mx-auto">
          Burying the{' '}
          <span className="text-amber-glow">most dangerous waste</span> on Earth — safely,
          for a million years.
        </h1>
        <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
          {paper.title}: an interactive look at how deep geological repositories isolate
          high-level nuclear waste from the environment.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onLaunch}
            className="px-6 py-3 rounded-full bg-amber-glow text-ink font-semibold hover:brightness-110 transition"
          >
            🔬 Launch NucleaTrace Simulator
          </button>
          <a
            href="#barriers"
            className="px-6 py-3 rounded-full border border-steel text-slate-200 hover:border-amber-glow transition"
          >
            Explore the barriers
          </a>
        </div>

        {/* authors */}
        <div className="mt-14 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
          {paper.authors.map((a) => (
            <span key={a.name}>
              <span className="text-slate-200">{a.name}</span>
              {a.dept ? ` · ${a.dept}` : ''}
            </span>
          ))}
        </div>
        <p className="mt-2 text-xs text-slate-500">{paper.institution}</p>

        {/* stat strip */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <Stat value="500+ m" label="Typical repository depth" />
          <Stat value="100,000 yr" label="Copper canister lifetime" />
          <Stat value="1 only" label="Operating DGR (WIPP)" />
          <Stat value="0.1 µm/yr" label="Glass corrosion rate" />
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div className="card text-center py-5">
      <div className="text-2xl font-extrabold text-amber-glow">{value}</div>
      <div className="text-xs text-slate-400 mt-1">{label}</div>
    </div>
  )
}

function DepthBackdrop() {
  return (
    <div className="absolute inset-0 opacity-30" aria-hidden="true">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-amber-glow/10 blur-3xl animate-pulseGlow" />
      <svg className="absolute bottom-0 w-full" height="160" preserveAspectRatio="none" viewBox="0 0 1200 160">
        <path d="M0 80 Q300 40 600 80 T1200 80 V160 H0 Z" fill="#111a2b" opacity="0.8" />
        <path d="M0 110 Q300 70 600 110 T1200 110 V160 H0 Z" fill="#1c2940" opacity="0.6" />
      </svg>
    </div>
  )
}
