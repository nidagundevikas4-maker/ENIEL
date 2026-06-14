import { useEffect, useState } from 'react'

const links = [
  { id: 'types', label: 'Waste Types' },
  { id: 'history', label: 'History' },
  { id: 'impact', label: 'Impact' },
  { id: 'barriers', label: 'Barriers' },
  { id: 'decay', label: 'Radiotoxicity' },
  { id: 'site', label: 'Site Selection' },
  { id: 'future', label: 'Future' },
]

export default function Nav({ onLaunch }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur border-b border-steel' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-bold text-white">
          <Trefoil />
          <span className="hidden sm:inline">DGR Review</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="hover:text-amber-glow transition-colors">
              {l.label}
            </a>
          ))}
          <button
            onClick={onLaunch}
            className="px-4 py-1.5 rounded-full bg-amber-glow text-ink font-semibold hover:brightness-110 transition"
          >
            NucleaTrace ↗
          </button>
        </div>

        <button
          className="md:hidden text-slate-200"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink/95 border-b border-steel px-5 pb-4 flex flex-col gap-3 text-slate-300">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="hover:text-amber-glow transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false)
              onLaunch?.()
            }}
            className="mt-1 px-4 py-2 rounded-full bg-amber-glow text-ink font-semibold w-fit"
          >
            Launch NucleaTrace ↗
          </button>
        </div>
      )}
    </header>
  )
}

function Trefoil() {
  return (
    <svg width="26" height="26" viewBox="0 0 100 100" className="text-amber-glow">
      <circle cx="50" cy="50" r="9" fill="currentColor" />
      <g fill="currentColor">
        <path d="M50 50 L82 50 A32 32 0 0 1 50 82 Z" transform="rotate(30 50 50)" />
        <path d="M50 50 L82 50 A32 32 0 0 1 50 82 Z" transform="rotate(150 50 50)" />
        <path d="M50 50 L82 50 A32 32 0 0 1 50 82 Z" transform="rotate(270 50 50)" />
      </g>
    </svg>
  )
}
