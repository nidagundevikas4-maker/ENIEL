// Radiotoxicity model shared by the NucleaTrace modules.
// Relative Toxicity Index (RTI) vs natural uranium ore (RTI = 1).
// Calibrated to the review: HLW ≈ uranium ore at ~3,000 y, SNF at ~100,000 y.

export const SAFE = {
  hlw: 3000,
  snf: 100000,
  transmuted: 300, // Gen-IV transmutation removes most actinides
}

const START_RTI = 1e6

function rtiAt(years, safeYears) {
  const y = Math.max(years, 1)
  const frac = Math.log10(y) / Math.log10(safeYears)
  const val = START_RTI * Math.pow(10, -frac * 6)
  return Math.max(1, val)
}

// Log-spaced curve from 1 to 1e7 years.
export function buildRtiCurve(points = 70) {
  const data = []
  for (let i = 0; i < points; i++) {
    const logY = (i / (points - 1)) * 7 // 10^0 .. 10^7
    const year = Math.round(Math.pow(10, logY))
    data.push({
      year,
      hlw: rtiAt(year, SAFE.hlw),
      snf: rtiAt(year, SAFE.snf),
      transmuted: rtiAt(year, SAFE.transmuted),
    })
  }
  return data
}

export const milestones = [
  { year: 100, label: '100 y' },
  { year: 1000, label: '1,000 y' },
  { year: 10000, label: '10,000 y' },
  { year: 1000000, label: '1 M y' },
]

export function fmtYears(y) {
  if (!isFinite(y)) return '∞'
  if (y >= 1e6) return `${(y / 1e6).toFixed(2)} My`
  if (y >= 1000) return `${(y / 1000).toFixed(y >= 1e4 ? 0 : 1)}k y`
  if (y >= 1) return `${Math.round(y)} y`
  const days = y * 365.25
  if (days >= 1) return `${days.toFixed(1)} d`
  const mins = days * 24 * 60
  return `${mins.toFixed(1)} min`
}
