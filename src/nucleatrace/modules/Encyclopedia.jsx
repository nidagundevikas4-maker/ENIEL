import { isotopes } from '../isotopes.js'
import { fmtYears } from '../rti.js'
import { Panel } from '../ui.jsx'

const dangerColor = { high: '#ff7a7a', medium: '#ffb627', low: '#5ce1a6' }

export default function Encyclopedia({ isoKey }) {
  const iso = isotopes[isoKey]
  return (
    <Panel title="Isotope Encyclopedia" subtitle={isoKey} tag="Module 7">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-14 h-14 rounded-xl grid place-items-center font-bold text-ink text-sm text-center leading-tight"
          style={{ background: dangerColor[iso.danger] }}
        >
          {isoKey}
        </div>
        <div>
          <div className="text-white font-bold">{iso.name}</div>
          <div className="text-xs text-slate-400">
            {iso.decayMode} · t½ {fmtYears(iso.halfLifeYears)}
          </div>
        </div>
      </div>

      <dl className="space-y-3 text-sm">
        <Row label="Target organ" value={iso.organ} />
        <Row label="Environmental mobility" value={iso.mobility} />
        <Row label="Safety guideline" value={iso.whoLimit} />
      </dl>

      <div className="mt-4 rounded-xl bg-ink border border-steel p-3">
        <div className="text-[10px] uppercase tracking-wider text-amber-glow mb-1">Case study</div>
        <p className="text-xs text-slate-300 leading-relaxed">{iso.caseStudy}</p>
      </div>
    </Panel>
  )
}

function Row({ label, value }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-wider text-slate-500">{label}</dt>
      <dd className="text-slate-200 mt-0.5">{value}</dd>
    </div>
  )
}
