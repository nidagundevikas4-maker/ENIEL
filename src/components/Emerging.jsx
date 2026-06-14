import { emerging } from '../data.js'

export default function Emerging() {
  return (
    <section id="future" className="section-pad">
      <span className="eyebrow">What&rsquo;s next</span>
      <h2 className="h2">Emerging technologies</h2>
      <p className="mt-3 text-slate-400 max-w-2xl">
        Beyond conventional repositories, researchers are working to make waste safer, cheaper to
        store, and shorter-lived.
      </p>

      <div className="mt-10 grid sm:grid-cols-2 gap-6">
        {emerging.map((e, i) => (
          <div key={e.title} className="card relative overflow-hidden group">
            <div className="absolute -right-6 -top-6 text-7xl font-extrabold text-steel/60 select-none">
              {i + 1}
            </div>
            <h3 className="text-lg font-bold text-white relative">{e.title}</h3>
            <p className="mt-3 text-sm text-slate-300 relative">{e.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
