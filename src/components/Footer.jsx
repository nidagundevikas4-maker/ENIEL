import { paper } from '../data.js'

export default function Footer() {
  return (
    <footer className="border-t border-steel bg-ink">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        <div className="grid sm:grid-cols-[1fr,auto] gap-6 items-start">
          <div>
            <h3 className="text-white font-bold">{paper.title}</h3>
            <p className="mt-2 text-sm text-slate-400 max-w-xl">{paper.abstract}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {paper.keywords.map((k) => (
                <span
                  key={k}
                  className="text-xs px-2.5 py-1 rounded-full bg-steel text-slate-300"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
          <div className="text-sm text-slate-400 sm:text-right">
            <div className="text-slate-200 font-semibold">Authors</div>
            {paper.authors.map((a) => (
              <div key={a.name}>{a.name}</div>
            ))}
            <div className="mt-2 text-xs text-slate-500">{paper.institution}</div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-steel text-xs text-slate-600">
          Interactive review website · built to showcase the paper. Content sourced from the
          review; figures are illustrative.
        </div>
      </div>
    </footer>
  )
}
