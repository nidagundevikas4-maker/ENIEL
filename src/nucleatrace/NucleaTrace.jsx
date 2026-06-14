import { useState } from 'react'
import { isotopeKeys, isotopes } from './isotopes.js'
import { fmtYears } from './rti.js'
import { Select } from './ui.jsx'
import DecayChain from './modules/DecayChain.jsx'
import RtiCurve from './modules/RtiCurve.jsx'
import EbsIntegrity from './modules/EbsIntegrity.jsx'
import PathwaySimulator from './modules/PathwaySimulator.jsx'
import Bioaccumulation from './modules/Bioaccumulation.jsx'
import SiteScorecard from './modules/SiteScorecard.jsx'
import Encyclopedia from './modules/Encyclopedia.jsx'
import DbdComparator from './modules/DbdComparator.jsx'

const MAX_POS = 1000
const posToYears = (pos) => Math.round(Math.pow(10, (pos / MAX_POS) * 7)) // 1 .. 1e7

export default function NucleaTrace({ onBack }) {
  const [isoKey, setIsoKey] = useState('Np-237')
  const [timePos, setTimePos] = useState(400)

  // RTI curve controls (shared so the header time marker lines up)
  const [showHLW, setShowHLW] = useState(true)
  const [showSNF, setShowSNF] = useState(true)
  const [transmute, setTransmute] = useState(false)

  const years = posToYears(timePos)
  const progress = timePos / MAX_POS

  return (
    <div className="min-h-screen bg-ink">
      {/* sticky control header */}
      <header className="sticky top-0 z-40 bg-ink/95 backdrop-blur border-b border-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <button
                onClick={onBack}
                className="text-sm text-slate-400 hover:text-amber-glow transition flex items-center gap-1"
              >
                ← Review
              </button>
              <div className="h-5 w-px bg-steel" />
              <div>
                <h1 className="font-extrabold text-white leading-none flex items-center gap-2">
                  <span className="text-amber-glow">Nuclea</span>Trace
                </h1>
                <p className="text-[11px] text-slate-500 leading-none mt-1">
                  Decay Chain &amp; Environmental Radiotoxicity Simulator
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-44">
                <Select
                  value={isoKey}
                  onChange={setIsoKey}
                  options={isotopeKeys.map((k) => ({ value: k, label: `${k} — ${isotopes[k].name}` }))}
                />
              </div>
            </div>
          </div>

          {/* global time slider */}
          <div className="mt-3 flex items-center gap-3">
            <span className="text-[11px] text-slate-500 w-20 shrink-0">Time elapsed</span>
            <input
              type="range" min="0" max={MAX_POS} value={timePos}
              onChange={(e) => setTimePos(+e.target.value)}
              className="flex-1"
              aria-label="Time elapsed"
            />
            <span className="text-sm font-mono text-amber-glow w-24 text-right shrink-0">
              {fmtYears(years)}
            </span>
          </div>
        </div>
      </header>

      {/* dashboard grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-5">
        <div className="grid lg:grid-cols-3 gap-5">
          <DecayChain isoKey={isoKey} progress={progress} />
          <div className="lg:col-span-2">
            <RtiCurve
              showHLW={showHLW} setShowHLW={setShowHLW}
              showSNF={showSNF} setShowSNF={setShowSNF}
              transmute={transmute} setTransmute={setTransmute}
              currentYear={years}
            />
          </div>
        </div>

        <EbsIntegrity />

        <div className="grid lg:grid-cols-2 gap-5">
          <PathwaySimulator />
          <Bioaccumulation />
        </div>

        <SiteScorecard />

        <div className="grid lg:grid-cols-2 gap-5">
          <Encyclopedia isoKey={isoKey} />
          <DbdComparator />
        </div>

        <footer className="text-center text-xs text-slate-600 py-6">
          NucleaTrace · built on the review by Vikas Sidagouda Nidagunde, Darshan J, Pushkar K P,
          Ronith Mahaa, A Charan Preeth &amp; Dr Lokeshari M · RV College of Engineering. Values are
          illustrative, derived from the paper.
        </footer>
      </main>
    </div>
  )
}
