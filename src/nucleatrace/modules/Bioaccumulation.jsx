import { useState } from 'react'
import { trophicLevels } from '../isotopes.js'
import { Panel, Field } from '../ui.jsx'

export default function Bioaccumulation() {
  const [soilConc, setSoilConc] = useState(50) // Bq/kg in soil/water

  // Cumulative biomagnification up the chain.
  let conc = soilConc
  const levels = trophicLevels.map((l, i) => {
    if (i > 0) conc = conc * l.factor
    return { ...l, conc }
  })

  const WHO = 1000 // Bq/kg food guideline
  const maxConc = levels[levels.length - 1].conc

  return (
    <Panel
      title="Bioaccumulation & Food-Chain Magnification"
      subtitle="Cs-137 climbing the trophic ladder"
      tag="Module 5"
    >
      <Field label={`Initial soil/water concentration: ${soilConc} Bq/kg`}>
        <input
          type="range" min="1" max="500" value={soilConc}
          onChange={(e) => setSoilConc(Number(e.target.value))}
          className="w-full max-w-sm"
        />
      </Field>

      <div className="mt-5 space-y-3">
        {levels.map((l, i) => {
          const over = l.conc > WHO
          const h = Math.max(6, (Math.log10(Math.max(l.conc, 1)) / Math.log10(Math.max(maxConc, 10))) * 100)
          return (
            <div key={l.level} className="flex items-center gap-3">
              <span className="w-28 shrink-0 text-xs">
                <span className="text-slate-200">{l.level}</span>
                {i > 0 && <span className="text-slate-500"> ×{l.factor}</span>}
              </span>
              <div className="flex-1 h-8 bg-ink rounded-lg overflow-hidden relative">
                <div
                  className="h-full transition-all duration-500"
                  style={{ width: `${h}%`, background: over ? '#ff7a7a' : '#5ce1a6' }}
                />
                <span className="absolute inset-y-0 left-2 flex items-center text-[11px] font-mono text-white/90">
                  {Math.round(l.conc).toLocaleString()} Bq/kg
                </span>
              </div>
              <span className="w-32 shrink-0 text-[11px] text-slate-500 hidden sm:block">{l.species}</span>
            </div>
          )
        })}
      </div>

      <div className="mt-4 text-sm">
        <span className="text-slate-400">Top-predator / human level: </span>
        <span className={maxConc > WHO ? 'text-red-300 font-semibold' : 'text-radium font-semibold'}>
          {Math.round(maxConc).toLocaleString()} Bq/kg
        </span>
        <span className="text-slate-500"> — WHO food guideline ≈ {WHO.toLocaleString()} Bq/kg</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {['Carp', 'Pike', 'Bluegill sunfish', 'House mice'].map((s) => (
          <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-steel text-slate-300">{s}</span>
        ))}
      </div>
    </Panel>
  )
}
