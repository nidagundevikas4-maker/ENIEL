import { useState } from 'react'
import { Panel, Field } from '../ui.jsx'

export default function DbdComparator() {
  const [volume, setVolume] = useState(2000) // tonnes
  const [budget, setBudget] = useState(5) // $B
  const [depth, setDepth] = useState(2) // km capability

  // Simple scoring heuristic. DBD favours small volume, low budget, deep capability.
  const dbdScore =
    (volume < 3000 ? 3 : volume < 8000 ? 1 : -1) +
    (budget < 6 ? 2 : 0) +
    (depth >= 1 ? 2 : 0)
  const dgrScore =
    (volume >= 3000 ? 3 : 1) +
    (budget >= 6 ? 2 : 0) +
    (depth < 1 ? 1 : 0) + 1 // DGR is the proven baseline

  const winner = dbdScore > dgrScore ? 'DBD' : 'DGR'

  return (
    <Panel title="Deep Borehole vs DGR Comparator" subtitle="Which disposal route fits the scenario?" tag="Module 8">
      <div className="grid sm:grid-cols-3 gap-3 mb-5">
        <Field label={`Waste volume: ${volume.toLocaleString()} t`}>
          <input type="range" min="100" max="15000" step="100" value={volume} onChange={(e) => setVolume(+e.target.value)} className="w-full" />
        </Field>
        <Field label={`Budget: $${budget}B`}>
          <input type="range" min="1" max="12" value={budget} onChange={(e) => setBudget(+e.target.value)} className="w-full" />
        </Field>
        <Field label={`Depth capability: ${depth} km`}>
          <input type="range" min="0.5" max="5" step="0.5" value={depth} onChange={(e) => setDepth(+e.target.value)} className="w-full" />
        </Field>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Column
          title="Deep Borehole (DBD)"
          win={winner === 'DBD'}
          points={[
            '1–5 km boreholes',
            'Lower cost, faster build',
            'Minimal human-intrusion risk',
            'Best for small HLW / DSRS volumes',
          ]}
        />
        <Column
          title="Deep Geological Repository"
          win={winner === 'DGR'}
          points={[
            'Several hundred metres deep',
            'Proven, large capacity',
            'Retrievable designs possible',
            'Best for large waste inventories',
          ]}
        />
      </div>

      <div className="mt-4 rounded-xl border border-amber-glow/40 bg-amber-glow/10 px-4 py-3 text-sm">
        <span className="text-slate-300">Recommended route: </span>
        <span className="text-amber-glow font-bold">{winner === 'DBD' ? 'Deep Borehole Disposal' : 'Deep Geological Repository'}</span>
      </div>

      <p className="mt-3 text-xs text-slate-500">
        Cost context from the review: Yucca Mountain research cost ~$9 B before cancellation; Onkalo
        took decades to construct.
      </p>
    </Panel>
  )
}

function Column({ title, points, win }) {
  return (
    <div className={`rounded-xl border p-4 transition ${win ? 'border-amber-glow bg-amber-glow/5' : 'border-steel'}`}>
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-bold text-white text-sm">{title}</h4>
        {win && <span className="text-[10px] uppercase tracking-wider text-amber-glow">recommended</span>}
      </div>
      <ul className="space-y-1.5">
        {points.map((p) => (
          <li key={p} className="text-xs text-slate-300 flex gap-2">
            <span className="text-amber-glow">▸</span>{p}
          </li>
        ))}
      </ul>
    </div>
  )
}
