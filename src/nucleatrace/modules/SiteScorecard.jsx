import { useState } from 'react'
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip,
} from 'recharts'
import { realSites } from '../isotopes.js'
import { Panel, Field, Select } from '../ui.jsx'

const ROCKS = {
  granite: { name: 'Granite (crystalline)', stability: 9, geochem: 7 },
  clay: { name: 'Consolidated clay', stability: 7, geochem: 9 },
  salt: { name: 'Salt dome', stability: 8, geochem: 8 },
}

export default function SiteScorecard() {
  const [rock, setRock] = useState('granite')
  const [seismicity, setSeismicity] = useState(2) // 1 low .. 5 high
  const [gwFlow, setGwFlow] = useState(2) // 1 low .. 5 high
  const [depth, setDepth] = useState(500) // m

  const r = ROCKS[rock]
  const scores = {
    'Geological stability': r.stability,
    Hydrogeology: Math.round(Math.max(1, 10 - (gwFlow - 1) * 2.2)),
    Geochemistry: r.geochem,
    'Low seismicity': Math.round(Math.max(1, 10 - (seismicity - 1) * 2.2)),
    'Depth adequacy': Math.round(Math.max(1, Math.min(10, depth / 70))),
  }
  const total = Object.values(scores).reduce((a, b) => a + b, 0)
  const pct = Math.round((total / 50) * 100)

  const radarData = Object.entries(scores).map(([k, v]) => ({ criterion: k, score: v }))

  const verdict =
    pct >= 80 ? { t: 'Excellent host site', c: '#5ce1a6' }
    : pct >= 60 ? { t: 'Viable with mitigation', c: '#ffb627' }
    : { t: 'High risk — reconsider', c: '#ff7a7a' }

  const recommend = seismicity >= 4 ? 'salt dome / deep clay' : gwFlow >= 4 ? 'clay (low permeability)' : 'crystalline granite'

  return (
    <Panel title="DGR Site Safety Scorecard" subtitle="Weighted suitability across 5 IAEA criteria" tag="Module 6">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-3">
          <Field label="Host rock">
            <Select value={rock} onChange={setRock}
              options={Object.entries(ROCKS).map(([k, v]) => ({ value: k, label: v.name }))} />
          </Field>
          <Field label={`Seismicity index: ${seismicity} / 5`}>
            <input type="range" min="1" max="5" value={seismicity} onChange={(e) => setSeismicity(+e.target.value)} className="w-full" />
          </Field>
          <Field label={`Groundwater flow: ${gwFlow} / 5`}>
            <input type="range" min="1" max="5" value={gwFlow} onChange={(e) => setGwFlow(+e.target.value)} className="w-full" />
          </Field>
          <Field label={`Depth: ${depth} m`}>
            <input type="range" min="200" max="900" step="10" value={depth} onChange={(e) => setDepth(+e.target.value)} className="w-full" />
          </Field>
        </div>

        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData} outerRadius="72%">
              <PolarGrid stroke="#1c2940" />
              <PolarAngleAxis dataKey="criterion" tick={{ fill: '#94a3b8', fontSize: 9 }} />
              <PolarRadiusAxis domain={[0, 10]} tick={false} axisLine={false} />
              <Radar dataKey="score" stroke="#ffb627" fill="#ffb627" fillOpacity={0.35} />
              <Tooltip contentStyle={{ background: '#0a0f1a', border: '1px solid #1c2940', borderRadius: 12, fontSize: 12 }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        <div className="text-3xl font-extrabold" style={{ color: verdict.c }}>{pct}%</div>
        <div>
          <div className="font-semibold" style={{ color: verdict.c }}>{verdict.t}</div>
          <div className="text-xs text-slate-400">Recommended host rock: {recommend}</div>
        </div>
      </div>

      <div className="mt-5">
        <div className="text-xs text-slate-400 mb-2">Compare with real repositories</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {realSites.map((s) => (
            <div key={s.name} className="bg-ink border border-steel rounded-lg p-2.5">
              <div className="text-xs font-semibold text-white">{s.name}</div>
              <div className="text-[11px] text-slate-400 mt-1">{s.rock} · {s.depth} m</div>
              <div className="text-[11px] text-slate-500">{s.capacity}</div>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  )
}
