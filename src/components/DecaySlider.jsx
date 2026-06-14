import { useMemo, useState } from 'react'
import { decayKey } from '../data.js'

// Log scale slider: position 0..1000 maps to ~1 .. 1,000,000 years.
const MAX_POS = 1000
function posToYears(pos) {
  const years = Math.pow(10, (pos / MAX_POS) * 6) // 10^0 .. 10^6
  return Math.round(years)
}
function fmtYears(y) {
  if (y >= 1_000_000) return `${(y / 1_000_000).toFixed(1)}M`
  if (y >= 1000) return `${(y / 1000).toFixed(y >= 10000 ? 0 : 1)}k`
  return `${y}`
}
// Relative toxicity index ~ decays log-linearly toward "safe" (RTI = 1) at the
// safe-year mark. Clamped to [1, 1e6] for display.
function rti(years, safeYears) {
  const startRTI = 1e6
  const frac = Math.log10(Math.max(years, 1)) / Math.log10(safeYears)
  const val = startRTI * Math.pow(10, -frac * 6)
  return Math.max(1, val)
}

export default function DecaySlider() {
  const [pos, setPos] = useState(260)
  const years = posToYears(pos)

  const hlw = useMemo(() => rti(years, decayKey.hlwSafeYears), [years])
  const snf = useMemo(() => rti(years, decayKey.snfSafeYears), [years])

  const hlwSafe = years >= decayKey.hlwSafeYears
  const snfSafe = years >= decayKey.snfSafeYears

  const barH = (val) => {
    const h = (Math.log10(val) / 6) * 100
    return Math.max(2, Math.min(100, h))
  }

  return (
    <section id="decay" className="section-pad">
      <span className="eyebrow">Long-term safety assessment</span>
      <h2 className="h2">How long until the waste is &ldquo;safe&rdquo;?</h2>
      <p className="mt-3 text-slate-400 max-w-2xl">
        Toxicity is compared against natural uranium ore (the dashed line). Drag through time and
        watch radioactivity fall. HLW matches uranium ore at ~3,000 years — but spent fuel needs
        ~100,000.
      </p>

      <div className="mt-10 card">
        <div className="grid sm:grid-cols-[1fr,auto] gap-6 items-end">
          {/* bars */}
          <div className="flex items-end gap-10 h-56 border-b border-steel relative pl-2">
            {/* uranium-ore reference line at bottom */}
            <div className="absolute left-0 right-0 bottom-0 border-t border-dashed border-radium/60">
              <span className="absolute -top-5 right-0 text-[11px] text-radium">
                natural uranium ore (safe baseline)
              </span>
            </div>

            <Bar
              label="HLW"
              color="#ffb627"
              height={barH(hlw)}
              safe={hlwSafe}
            />
            <Bar
              label="Spent Fuel"
              color="#ff7a7a"
              height={barH(snf)}
              safe={snfSafe}
            />
          </div>

          {/* readout */}
          <div className="text-right">
            <div className="text-5xl font-extrabold text-white font-mono">{fmtYears(years)}</div>
            <div className="text-sm text-slate-400">years after disposal</div>
          </div>
        </div>

        {/* slider */}
        <input
          type="range"
          min="0"
          max={MAX_POS}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="w-full mt-8"
          aria-label="Years after disposal"
        />
        <div className="flex justify-between text-xs text-slate-500 font-mono mt-2">
          <span>1 yr</span>
          <span>1,000</span>
          <span>100,000</span>
          <span>1,000,000</span>
        </div>

        {/* status chips */}
        <div className="mt-6 flex flex-wrap gap-3">
          <StatusChip safe={hlwSafe} label="HLW" safeYears="3,000 yrs" />
          <StatusChip safe={snfSafe} label="Spent fuel (SNF)" safeYears="100,000 yrs" />
        </div>
      </div>

      <div className="mt-6 grid sm:grid-cols-3 gap-4">
        <Fact label="Dose limit — natural processes" value={decayKey.doseLimitNatural} />
        <Fact label="Dose limit — human intrusion" value={decayKey.doseLimitIntrusion} />
        <Fact label="Background radiation" value={decayKey.background} />
      </div>
      <p className="mt-4 text-xs text-slate-500 max-w-2xl">
        Illustrative model based on the review&rsquo;s relative-toxicity-index (RTI) figures. For
        Np-237 (half-life 2.1 million years), calculated retention times can exceed 42 million
        years.
      </p>
    </section>
  )
}

function Bar({ label, color, height, safe }) {
  return (
    <div className="flex flex-col items-center justify-end h-full">
      <div
        className="w-16 sm:w-20 rounded-t-lg transition-all duration-300"
        style={{
          height: `${height}%`,
          backgroundColor: safe ? '#5ce1a6' : color,
          boxShadow: `0 0 18px ${safe ? '#5ce1a6' : color}66`,
        }}
      />
      <span className="mt-2 text-sm font-semibold text-slate-200">{label}</span>
    </div>
  )
}

function StatusChip({ safe, label, safeYears }) {
  return (
    <div
      className={`px-4 py-2 rounded-lg border text-sm flex items-center gap-2 ${
        safe ? 'border-radium/60 text-radium bg-radium/10' : 'border-steel text-slate-300'
      }`}
    >
      <span className="font-semibold">{label}</span>
      <span className="text-xs opacity-80">
        {safe ? '✓ below uranium-ore toxicity' : `dangerous until ~${safeYears}`}
      </span>
    </div>
  )
}

function Fact({ label, value }) {
  return (
    <div className="card py-4">
      <div className="text-xs uppercase tracking-wider text-slate-500">{label}</div>
      <div className="mt-1 text-lg font-bold text-amber-glow font-mono">{value}</div>
    </div>
  )
}
