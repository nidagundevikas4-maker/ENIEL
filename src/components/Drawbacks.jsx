import { drawbacks } from '../data.js'

export default function Drawbacks() {
  return (
    <section id="drawbacks" className="section-pad">
      <span className="eyebrow">The hard problems</span>
      <h2 className="h2">Why no country has fully solved this yet</h2>
      <p className="mt-3 text-slate-400 max-w-2xl">
        Deep geological disposal is the accepted solution — but it carries real technical,
        political and economic challenges.
      </p>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {drawbacks.map((d) => (
          <div key={d.title} className="card hover:border-red-400/40">
            <h3 className="font-bold text-white text-sm flex items-center gap-2">
              <span className="text-red-400">!</span>
              {d.title}
            </h3>
            <p className="mt-2 text-sm text-slate-400">{d.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
