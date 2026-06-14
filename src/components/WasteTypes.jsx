import { useState } from 'react'
import { wasteTypes } from '../data.js'

export default function WasteTypes() {
  const [active, setActive] = useState(2) // HLW by default
  const t = wasteTypes[active]

  return (
    <section id="types" className="section-pad">
      <span className="eyebrow">The four classes</span>
      <h2 className="h2">Not all nuclear waste is equal</h2>
      <p className="mt-3 text-slate-400 max-w-2xl">
        Waste is classified by how radioactive it is and how long it stays dangerous. This
        review focuses on the hardest problem of all — high-level waste.
      </p>

      <div className="mt-10 grid md:grid-cols-[260px,1fr] gap-6">
        {/* selector */}
        <div className="flex md:flex-col gap-3 overflow-x-auto">
          {wasteTypes.map((w, i) => (
            <button
              key={w.code}
              onClick={() => setActive(i)}
              className={`text-left rounded-xl px-4 py-3 border transition min-w-[150px] ${
                i === active
                  ? 'bg-steel border-amber-glow'
                  : 'bg-slab border-steel hover:border-slate-500'
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: w.color }}
                />
                <span className="font-bold text-white">{w.code}</span>
              </div>
              <div className="text-xs text-slate-400 mt-1">{w.name}</div>
            </button>
          ))}
        </div>

        {/* detail panel */}
        <div className="card" style={{ borderColor: t.color + '55' }}>
          <div className="flex items-center gap-3">
            <span
              className="px-3 py-1 rounded-full text-ink font-bold text-sm"
              style={{ backgroundColor: t.color }}
            >
              {t.code}
            </span>
            <h3 className="text-xl font-bold text-white">{t.name}</h3>
          </div>
          <p className="mt-4 text-slate-300">{t.desc}</p>

          <dl className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
            <Field label="Sources" value={t.sources} />
            <Field label="Management" value={t.management} />
          </dl>

          <div className="mt-5 text-sm text-slate-400">
            <span className="text-amber-glow font-semibold">Example: </span>
            {t.example}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, value }) {
  return (
    <div className="bg-ink/50 rounded-lg p-4 border border-steel">
      <dt className="text-xs uppercase tracking-wider text-slate-500">{label}</dt>
      <dd className="mt-1 text-slate-200">{value}</dd>
    </div>
  )
}
