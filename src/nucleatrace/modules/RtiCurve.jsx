import { useMemo } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine,
  ResponsiveContainer, Legend,
} from 'recharts'
import { buildRtiCurve, milestones, SAFE } from '../rti.js'
import { Panel, Toggle } from '../ui.jsx'

export default function RtiCurve({ showHLW, setShowHLW, showSNF, setShowSNF, transmute, setTransmute, currentYear }) {
  const data = useMemo(() => buildRtiCurve(), [])

  const safeYear = transmute ? SAFE.transmuted : SAFE.snf

  return (
    <Panel
      title="Radiotoxicity vs Time (RTI)"
      subtitle="Toxicity relative to natural uranium ore, log–log scale"
      tag="Module 2"
    >
      <div className="flex flex-wrap gap-2 mb-4">
        <Toggle checked={showHLW} onChange={setShowHLW} label="HLW (vitrified glass)" />
        <Toggle checked={showSNF} onChange={setShowSNF} label="Spent fuel (SNF)" />
        <Toggle checked={transmute} onChange={setTransmute} label="Gen-IV transmutation" />
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 12, bottom: 4, left: 0 }}>
            <CartesianGrid stroke="#1c2940" strokeDasharray="3 3" />
            <XAxis
              dataKey="year"
              scale="log"
              type="number"
              domain={[1, 1e7]}
              ticks={[1, 100, 10000, 1000000]}
              tickFormatter={(v) => (v >= 1e6 ? '1M' : v >= 1000 ? `${v / 1000}k` : v)}
              stroke="#64748b"
              tick={{ fontSize: 11 }}
              label={{ value: 'years', position: 'insideBottomRight', offset: -2, fill: '#64748b', fontSize: 11 }}
            />
            <YAxis
              scale="log"
              domain={[1, 1e6]}
              ticks={[1, 100, 10000, 1000000]}
              tickFormatter={(v) => (v >= 1e6 ? '1M' : v >= 1000 ? `${v / 1000}k` : v)}
              stroke="#64748b"
              tick={{ fontSize: 11 }}
              width={42}
            />
            <Tooltip
              contentStyle={{ background: '#0a0f1a', border: '1px solid #1c2940', borderRadius: 12, fontSize: 12 }}
              labelFormatter={(v) => `Year ${Number(v).toLocaleString()}`}
              formatter={(v, n) => [`RTI ${Math.round(v).toLocaleString()}`, n]}
            />
            <Legend wrapperStyle={{ fontSize: 11 }} />

            {/* uranium-ore baseline */}
            <ReferenceLine y={1} stroke="#5ce1a6" strokeDasharray="6 4"
              label={{ value: 'uranium ore', fill: '#5ce1a6', fontSize: 10, position: 'insideTopLeft' }} />
            {/* safe-equivalence vertical line */}
            <ReferenceLine x={safeYear} stroke="#ffb627" strokeDasharray="4 4"
              label={{ value: 'safe', fill: '#ffb627', fontSize: 10, position: 'top' }} />
            {/* current time marker */}
            {currentYear && (
              <ReferenceLine x={currentYear} stroke="#ffffff" strokeOpacity={0.5} />
            )}
            {milestones.map((m) => (
              <ReferenceLine key={m.year} x={m.year} stroke="#1c2940" />
            ))}

            {showHLW && <Line type="monotone" dataKey="hlw" name="HLW" stroke="#ffb627" dot={false} strokeWidth={2} />}
            {showSNF && !transmute && <Line type="monotone" dataKey="snf" name="SNF" stroke="#ff7a7a" dot={false} strokeWidth={2} />}
            {transmute && <Line type="monotone" dataKey="transmuted" name="Transmuted" stroke="#5ce1a6" dot={false} strokeWidth={2} />}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-3 text-xs text-slate-500">
        HLW reaches uranium-ore toxicity at ~3,000 y and SNF at ~100,000 y. With Gen-IV
        transmutation of minor actinides, the curve drops to safe levels in only{' '}
        <span className="text-radium">~{SAFE.transmuted} years</span>.
      </p>
    </Panel>
  )
}
