import { siteCriteria } from '../data.js'

export default function SiteSelection() {
  return (
    <section id="site" className="section-pad">
      <span className="eyebrow">Choosing the ground</span>
      <h2 className="h2">What makes a site safe for 100,000 years?</h2>
      <p className="mt-3 text-slate-400 max-w-2xl">
        Site selection is the first and most important barrier. Modern programs use 3D seismic
        imaging, borehole logging and even machine learning to predict long-term stability.
      </p>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {siteCriteria.map((c, i) => (
          <div key={c.title} className="card hover:border-amber-glow/50">
            <div className="text-amber-glow font-mono text-sm">
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3 className="mt-1 font-bold text-white">{c.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{c.text}</p>
          </div>
        ))}
        <div className="card bg-steel/40 border-dashed flex flex-col justify-center">
          <p className="text-sm text-slate-300">
            <span className="text-amber-glow font-semibold">Host rocks in use today:</span>{' '}
            crystalline granite (Finland, Sweden), salt formations (Germany&rsquo;s Konrad) and
            consolidated clays (France&rsquo;s Bure).
          </p>
        </div>
      </div>
    </section>
  )
}
