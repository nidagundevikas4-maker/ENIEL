import { impacts, caseStudies } from '../data.js'

const icons = {
  soil: 'M3 17h18M5 17V9l7-4 7 4v8M9 17v-4h6v4',
  water: 'M12 3c4 5 6 8 6 11a6 6 0 1 1-12 0c0-3 2-6 6-11Z',
  air: 'M3 8h11a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h9',
  bio: 'M12 2v20M12 7c-3-3-7-2-7-2s-1 4 2 6m5-4c3-3 7-2 7-2s1 4-2 6',
}

export default function Impacts() {
  return (
    <section id="impact" className="section-pad">
      <span className="eyebrow">Why it matters</span>
      <h2 className="h2">What happens when containment fails</h2>
      <p className="mt-3 text-slate-400 max-w-2xl">
        The whole point of a repository is to prevent these pathways. Past accidents show the
        stakes across soil, water, air and living systems.
      </p>

      <div className="mt-10 grid sm:grid-cols-2 gap-6">
        {impacts.map((im) => (
          <div key={im.title} className="card hover:border-amber-glow/50">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-steel grid place-items-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffb627" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d={icons[im.icon]} />
                </svg>
              </span>
              <h3 className="text-lg font-bold text-white">{im.title}</h3>
            </div>
            <ul className="mt-4 space-y-3">
              {im.points.map((p, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-300">
                  <span className="text-amber-glow mt-1">▸</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* case studies */}
      <h3 className="mt-14 text-xl font-bold text-white">Real-world case studies</h3>
      <div className="mt-5 grid sm:grid-cols-3 gap-4">
        {caseStudies.map((c) => (
          <div key={c.name} className="card border-l-4 border-l-red-400/70">
            <div className="flex items-baseline justify-between">
              <h4 className="font-bold text-white">{c.name}</h4>
              <span className="text-xs font-mono text-slate-500">{c.year}</span>
            </div>
            <p className="mt-2 text-sm text-slate-400">{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
