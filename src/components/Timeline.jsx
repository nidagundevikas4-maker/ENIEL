import { useState } from 'react'
import { timeline } from '../data.js'

export default function Timeline() {
  const [active, setActive] = useState(0)

  return (
    <section id="history" className="section-pad">
      <span className="eyebrow">1950s → today</span>
      <h2 className="h2">A 70-year search for a permanent solution</h2>
      <p className="mt-3 text-slate-400 max-w-2xl">
        Click any milestone to read what happened. The idea is old — but only one repository
        is operating today.
      </p>

      {/* rail */}
      <div className="mt-12 relative">
        <div className="absolute left-0 right-0 top-[14px] h-0.5 bg-steel hidden sm:block" />
        <div
          className="absolute left-0 top-[14px] h-0.5 bg-amber-glow hidden sm:block transition-all duration-500"
          style={{ width: `${(active / (timeline.length - 1)) * 100}%` }}
        />

        <ol className="grid sm:grid-cols-7 gap-6 sm:gap-2 relative">
          {timeline.map((item, i) => {
            const done = i <= active
            return (
              <li key={item.year} className="flex sm:flex-col items-center sm:text-center gap-3">
                <button
                  onClick={() => setActive(i)}
                  className={`relative z-10 w-7 h-7 shrink-0 rounded-full border-2 transition ${
                    done
                      ? 'bg-amber-glow border-amber-glow'
                      : 'bg-ink border-steel hover:border-slate-400'
                  }`}
                  aria-label={item.year}
                />
                <button
                  onClick={() => setActive(i)}
                  className={`text-sm font-semibold transition ${
                    i === active ? 'text-amber-glow' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {item.year}
                </button>
              </li>
            )
          })}
        </ol>
      </div>

      {/* detail card */}
      <div key={active} className="mt-10 card animate-floatUp max-w-3xl">
        <div className="text-amber-glow font-mono text-sm">{timeline[active].year}</div>
        <h3 className="mt-1 text-2xl font-bold text-white">{timeline[active].title}</h3>
        <p className="mt-3 text-slate-300 leading-relaxed">{timeline[active].text}</p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => setActive((a) => Math.max(0, a - 1))}
            disabled={active === 0}
            className="px-4 py-2 rounded-lg border border-steel text-sm disabled:opacity-40 hover:border-amber-glow transition"
          >
            ← Previous
          </button>
          <button
            onClick={() => setActive((a) => Math.min(timeline.length - 1, a + 1))}
            disabled={active === timeline.length - 1}
            className="px-4 py-2 rounded-lg border border-steel text-sm disabled:opacity-40 hover:border-amber-glow transition"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  )
}
