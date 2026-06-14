// Shared UI primitives for NucleaTrace modules.

export function Panel({ title, subtitle, tag, children, className = '' }) {
  return (
    <section className={`bg-slab border border-steel rounded-2xl p-5 sm:p-6 ${className}`}>
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          {subtitle && <p className="text-xs text-slate-400 mt-1">{subtitle}</p>}
        </div>
        {tag && (
          <span className="shrink-0 text-[10px] uppercase tracking-wider font-semibold text-amber-glow bg-amber-glow/10 px-2 py-1 rounded-full">
            {tag}
          </span>
        )}
      </div>
      {children}
    </section>
  )
}

export function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-xs text-slate-400 mb-1.5">{label}</span>
      {children}
    </label>
  )
}

export function Select({ value, onChange, options, className = '' }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full bg-ink border border-steel rounded-lg px-3 py-2 text-sm text-slate-200 focus:border-amber-glow outline-none ${className}`}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  )
}

export function Toggle({ checked, onChange, label }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`flex items-center gap-2 text-sm px-3 py-2 rounded-lg border transition ${
        checked ? 'border-amber-glow text-white bg-amber-glow/10' : 'border-steel text-slate-400'
      }`}
    >
      <span
        className={`w-9 h-5 rounded-full relative transition ${checked ? 'bg-amber-glow' : 'bg-steel'}`}
      >
        <span
          className={`absolute top-0.5 w-4 h-4 rounded-full bg-ink transition-all ${
            checked ? 'left-[1.15rem]' : 'left-0.5'
          }`}
        />
      </span>
      {label}
    </button>
  )
}
