import { useState } from 'react'
import { barriers } from '../data.js'

export default function BarrierExplorer() {
  const [active, setActive] = useState('container')
  const b = barriers.find((x) => x.id === active)

  return (
    <section id="barriers" className="section-pad">
      <span className="eyebrow">Engineered Barrier System (EBS)</span>
      <h2 className="h2">Defence in depth — layer by layer</h2>
      <p className="mt-3 text-slate-400 max-w-2xl">
        No single barrier is trusted alone. Each layer buys time so radionuclides decay before
        they can ever reach the biosphere. Tap a ring to inspect it.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
        {/* nested-ring diagram */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80">
            {barriers.map((layer, i) => {
              const size = 100 - i * 22 // outer to inner
              const isActive = layer.id === active
              return (
                <button
                  key={layer.id}
                  onClick={() => setActive(layer.id)}
                  className="absolute rounded-full flex items-start justify-center transition-all duration-300"
                  style={{
                    width: `${size}%`,
                    height: `${size}%`,
                    top: `${(100 - size) / 2}%`,
                    left: `${(100 - size) / 2}%`,
                    backgroundColor: layer.color + (isActive ? 'ee' : '55'),
                    boxShadow: isActive ? `0 0 28px ${layer.color}aa` : 'none',
                    border: isActive ? `2px solid ${layer.color}` : '2px solid transparent',
                    zIndex: i,
                  }}
                  aria-label={layer.name}
                >
                  <span
                    className="mt-2 text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-ink/70"
                    style={{ color: layer.color }}
                  >
                    {layer.name}
                  </span>
                </button>
              )
            })}
            {/* glowing core = waste */}
            <div className="absolute inset-0 m-auto w-6 h-6 rounded-full bg-amber-glow animate-pulseGlow" style={{ zIndex: 10 }} />
          </div>
        </div>

        {/* detail */}
        <div>
          <div className="flex gap-2 flex-wrap mb-5">
            {barriers.map((layer) => (
              <button
                key={layer.id}
                onClick={() => setActive(layer.id)}
                className={`text-xs px-3 py-1.5 rounded-full border transition ${
                  layer.id === active ? 'border-amber-glow text-white' : 'border-steel text-slate-400'
                }`}
              >
                {layer.name}
              </button>
            ))}
          </div>

          <div key={b.id} className="card animate-floatUp">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h3 className="text-2xl font-bold text-white">{b.name}</h3>
              <span
                className="text-xs font-mono px-3 py-1 rounded-full"
                style={{ backgroundColor: b.color + '22', color: b.color }}
              >
                {b.lifetime}
              </span>
            </div>
            <div className="mt-1 text-sm font-medium" style={{ color: b.color }}>
              {b.short}
            </div>
            <p className="mt-4 text-slate-300 leading-relaxed">{b.detail}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
