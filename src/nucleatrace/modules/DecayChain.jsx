import { isotopes, modeColor } from '../isotopes.js'
import { fmtYears } from '../rti.js'
import { Panel } from '../ui.jsx'

// progress: 0..1 over the chain (driven by the global time slider).
export default function DecayChain({ isoKey, progress }) {
  const iso = isotopes[isoKey]
  const chain = iso.chain
  // Which node is "active" — scaled across chain length by progress.
  const activeIndex = Math.min(chain.length - 1, Math.floor(progress * chain.length))

  return (
    <Panel
      title="Decay Chain Visualizer"
      subtitle={`${iso.name} → daughter products`}
      tag="Module 1"
    >
      <div className="space-y-2">
        {chain.map((node, i) => {
          const reached = i <= activeIndex
          const color = modeColor(node.mode)
          return (
            <div key={node.nuclide}>
              <div
                className={`flex items-center gap-3 rounded-xl border p-3 transition-all duration-500 ${
                  reached ? 'opacity-100' : 'opacity-35'
                }`}
                style={{
                  borderColor: reached ? color + '88' : '#1c2940',
                  background: reached ? color + '11' : 'transparent',
                  boxShadow: i === activeIndex ? `0 0 16px ${color}55` : 'none',
                }}
              >
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ background: color, boxShadow: i === activeIndex ? `0 0 10px ${color}` : 'none' }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-bold text-white">{node.nuclide}</span>
                    {node.stable && (
                      <span className="text-[10px] uppercase tracking-wider text-radium">stable</span>
                    )}
                  </div>
                  <div className="text-xs text-slate-400">
                    t½ {node.hl}
                    {node.energy > 0 && <> · {node.energy} MeV</>}
                  </div>
                </div>
                <span
                  className="text-xs font-mono px-2 py-1 rounded-md shrink-0"
                  style={{ background: color + '22', color }}
                >
                  {node.mode}
                </span>
              </div>
              {i < chain.length - 1 && (
                <div className="flex justify-start pl-[1.1rem] py-0.5">
                  <span className={`text-slate-600 ${i < activeIndex ? 'text-amber-glow' : ''}`}>↓</span>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-xs">
        <Legend color="#ff7a7a" label="α alpha" />
        <Legend color="#7cc4ff" label="β⁻ beta" />
        <Legend color="#c39bff" label="γ gamma" />
        <Legend color="#5ce1a6" label="stable" />
      </div>
      <p className="mt-3 text-xs text-slate-500">
        Parent half-life: <span className="text-slate-300">{fmtYears(iso.halfLifeYears)}</span>. Move
        the time slider above to advance the chain.
      </p>
    </Panel>
  )
}

function Legend({ color, label }) {
  return (
    <span className="flex items-center gap-1.5 text-slate-400">
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
      {label}
    </span>
  )
}
