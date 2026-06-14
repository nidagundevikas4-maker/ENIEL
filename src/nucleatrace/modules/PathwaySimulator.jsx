import { useState } from 'react'
import { pathwayStages, soilTypes } from '../isotopes.js'
import { Panel, Field, Select } from '../ui.jsx'

export default function PathwaySimulator() {
  const [breachYear, setBreachYear] = useState(50000)
  const [soil, setSoil] = useState('clay')
  const [initial, setInitial] = useState(10000) // Bq/L at breach

  const att = soilTypes[soil].attenuation

  // Walk the pathway: each stage attenuates concentration and adds travel delay.
  let conc = initial
  let cumYears = breachYear
  const stages = pathwayStages.map((s, i) => {
    if (i > 0) {
      // soil/groundwater attenuate more strongly; food/human less so
      const factor = s.id === 'soil' || s.id === 'groundwater' ? att : 0.7
      conc = conc * factor
      cumYears += s.baseDelay * (s.id === 'groundwater' ? 1 / att : 1)
    }
    return { ...s, conc, year: Math.round(cumYears) }
  })

  const humanConc = stages[stages.length - 1].conc
  const SAFE_LIMIT = 100 // Bq/L drinking-water style threshold
  const unsafe = humanConc > SAFE_LIMIT

  return (
    <Panel
      title="Environmental Pathway Simulator"
      subtitle="If a barrier breaches, where do radionuclides go?"
      tag="Module 4"
    >
      <div className="grid sm:grid-cols-3 gap-3 mb-5">
        <Field label={`Breach year: ${breachYear.toLocaleString()}`}>
          <input
            type="range" min="100" max="200000" step="100" value={breachYear}
            onChange={(e) => setBreachYear(Number(e.target.value))}
            className="w-full"
          />
        </Field>
        <Field label="Soil type">
          <Select
            value={soil}
            onChange={setSoil}
            options={Object.entries(soilTypes).map(([k, v]) => ({ value: k, label: `${v.name} — ${v.note}` }))}
          />
        </Field>
        <Field label={`Initial conc: ${initial.toLocaleString()} Bq/L`}>
          <input
            type="range" min="100" max="100000" step="100" value={initial}
            onChange={(e) => setInitial(Number(e.target.value))}
            className="w-full"
          />
        </Field>
      </div>

      <ol className="space-y-2">
        {stages.map((s, i) => {
          const pct = Math.max(1, Math.min(100, (s.conc / initial) * 100))
          const danger = s.id === 'human' && unsafe
          return (
            <li key={s.id} className="flex items-center gap-3">
              <span className="w-24 shrink-0 text-xs text-slate-400">{s.name}</span>
              <div className="flex-1 h-7 bg-ink rounded-lg overflow-hidden relative">
                <div
                  className="h-full rounded-lg transition-all duration-500"
                  style={{
                    width: `${pct}%`,
                    background: danger ? '#ff7a7a' : i === 0 ? '#ffb627' : '#7cc4ff',
                  }}
                />
                <span className="absolute inset-y-0 left-2 flex items-center text-[11px] font-mono text-white/90">
                  {s.conc >= 1 ? Math.round(s.conc).toLocaleString() : s.conc.toFixed(1)} Bq/L
                </span>
              </div>
              <span className="w-20 shrink-0 text-right text-[11px] font-mono text-slate-500">
                yr {s.year.toLocaleString()}
              </span>
            </li>
          )
        })}
      </ol>

      <div
        className={`mt-4 rounded-xl px-4 py-3 text-sm border ${
          unsafe ? 'border-red-400/50 bg-red-400/10 text-red-200' : 'border-radium/50 bg-radium/10 text-radium'
        }`}
      >
        {unsafe ? '⚠ Human-endpoint concentration exceeds the safe threshold (100 Bq/L).'
          : '✓ Attenuation keeps the human endpoint below the safe threshold.'}
      </div>
    </Panel>
  )
}
