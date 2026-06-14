import { useState } from 'react'
import { ebsBarriers } from '../isotopes.js'
import { fmtYears, SAFE } from '../rti.js'
import { Panel, Toggle } from '../ui.jsx'

export default function EbsIntegrity() {
  const [rateMult, setRateMult] = useState(1) // user corrosion-rate multiplier
  const [mic, setMic] = useState(false) // microbially induced corrosion

  const effMult = rateMult * (mic ? 5 : 1)

  const rows = ebsBarriers.map((b) => {
    let life = b.baseLifetime
    if (b.thicknessUm && b.baseRate) {
      life = b.thicknessUm / (b.baseRate * effMult)
    }
    return { ...b, life }
  })

  const maxLife = Math.max(...rows.map((r) => r.life), SAFE.snf)
  const barW = (life) => `${Math.max(2, (Math.log10(life) / Math.log10(maxLife)) * 100)}%`

  return (
    <Panel
      title="EBS Barrier Integrity Timeline"
      subtitle="Does each barrier outlast the peak radiotoxicity period?"
      tag="Module 3"
    >
      <div className="flex flex-wrap items-end gap-4 mb-5">
        <label className="text-sm">
          <span className="block text-xs text-slate-400 mb-1">
            Corrosion-rate factor: <span className="text-amber-glow font-mono">×{effMult.toFixed(1)}</span>
          </span>
          <input
            type="range" min="0.5" max="5" step="0.5" value={rateMult}
            onChange={(e) => setRateMult(Number(e.target.value))}
            className="w-44"
          />
        </label>
        <Toggle checked={mic} onChange={setMic} label="Microbial corrosion (MIC ×5)" />
      </div>

      <div className="space-y-3">
        {rows.map((r) => {
          const survives = r.life >= SAFE.snf
          return (
            <div key={r.id}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-200">{r.name}</span>
                <span className={`font-mono ${survives ? 'text-radium' : 'text-amber-glow'}`}>
                  {fmtYears(r.life)}
                </span>
              </div>
              <div className="h-3 bg-ink rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: barW(r.life),
                    background: survives ? '#5ce1a6' : '#ffb627',
                  }}
                />
              </div>
            </div>
          )
        })}

        {/* SNF peak radiotoxicity reference */}
        <div className="pt-1">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-red-300">SNF peak radiotoxicity</span>
            <span className="font-mono text-red-300">{fmtYears(SAFE.snf)}</span>
          </div>
          <div className="h-3 bg-ink rounded-full overflow-hidden">
            <div className="h-full rounded-full bg-red-400/70" style={{ width: barW(SAFE.snf) }} />
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-slate-500">
        Lifetime = thickness ÷ corrosion rate. Bars in <span className="text-radium">green</span>{' '}
        outlast the 100,000-year SNF danger window. Increase corrosion or enable MIC to watch metal
        barriers fail early.
      </p>
    </Panel>
  )
}
