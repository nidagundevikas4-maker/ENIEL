// Radionuclide reference data for the NucleaTrace simulator.
// Half-lives, decay modes and biological/environmental notes are real,
// commonly-cited values. Decay chains are simplified to the key generations.

// y = years. Helpers for sub-year half-lives.
const DAY = 1 / 365.25
const HOUR = DAY / 24
const MIN = HOUR / 60

// Each chain node: nuclide, half-life label + numeric years, decay mode,
// energy (MeV, approx total decay energy), and whether it is stable.
export const isotopes = {
  'Cs-137': {
    name: 'Caesium-137',
    halfLifeLabel: '30.17 years',
    halfLifeYears: 30.17,
    decayMode: 'β⁻',
    danger: 'high',
    organ: 'Muscle & soft tissue (mimics potassium)',
    mobility: 'Moderate — binds strongly to clay, but highly mobile in sandy & acidic soils',
    whoLimit: '1000 Bq/kg (food, EU)',
    caseStudy:
      'Chernobyl (1986): Cs-137 contaminated vast soil areas and bioaccumulated in fish (carp, pike); still detected decades later.',
    chain: [
      { nuclide: 'Cs-137', hl: '30.17 y', years: 30.17, mode: 'β⁻', energy: 1.18 },
      { nuclide: 'Ba-137m', hl: '2.55 min', years: 2.55 * MIN, mode: 'γ (IT)', energy: 0.66 },
      { nuclide: 'Ba-137', hl: 'stable', years: Infinity, mode: '—', energy: 0, stable: true },
    ],
  },
  'Sr-90': {
    name: 'Strontium-90',
    halfLifeLabel: '28.8 years',
    halfLifeYears: 28.8,
    decayMode: 'β⁻',
    danger: 'high',
    organ: 'Bone & teeth (mimics calcium) — "bone seeker"',
    mobility: 'High — very mobile in groundwater, readily taken up by plants',
    whoLimit: '100 Bq/kg (food)',
    caseStudy:
      'Chernobyl & Hanford: Sr-90 raised concerns over uptake into vegetation and the dairy food chain.',
    chain: [
      { nuclide: 'Sr-90', hl: '28.8 y', years: 28.8, mode: 'β⁻', energy: 0.55 },
      { nuclide: 'Y-90', hl: '64.1 h', years: 64.1 * HOUR, mode: 'β⁻', energy: 2.28 },
      { nuclide: 'Zr-90', hl: 'stable', years: Infinity, mode: '—', energy: 0, stable: true },
    ],
  },
  'I-131': {
    name: 'Iodine-131',
    halfLifeLabel: '8.02 days',
    halfLifeYears: 8.02 * DAY,
    decayMode: 'β⁻',
    danger: 'medium',
    organ: 'Thyroid gland',
    mobility: 'Very high — volatile and water-soluble, but short-lived',
    whoLimit: '100 Bq/L (drinking water)',
    caseStudy:
      'Fukushima (2011) & Chernobyl: airborne I-131 drove thyroid exposure; decays away within months.',
    chain: [
      { nuclide: 'I-131', hl: '8.02 d', years: 8.02 * DAY, mode: 'β⁻', energy: 0.97 },
      { nuclide: 'Xe-131', hl: 'stable', years: Infinity, mode: '—', energy: 0, stable: true },
    ],
  },
  'Np-237': {
    name: 'Neptunium-237',
    halfLifeLabel: '2.14 million years',
    halfLifeYears: 2.144e6,
    decayMode: 'α',
    danger: 'high',
    organ: 'Bone & liver',
    mobility: 'Relatively mobile actinide under oxidizing conditions — key long-term dose driver',
    whoLimit: 'No food limit — disposal-controlled',
    caseStudy:
      'Drives SNF retention times: for Np-237, calculated retention can exceed 42 million years.',
    chain: [
      { nuclide: 'Np-237', hl: '2.14 My', years: 2.144e6, mode: 'α', energy: 4.96 },
      { nuclide: 'Pa-233', hl: '27.0 d', years: 26.97 * DAY, mode: 'β⁻', energy: 0.57 },
      { nuclide: 'U-233', hl: '159,200 y', years: 1.592e5, mode: 'α', energy: 4.91 },
      { nuclide: 'Th-229', hl: '7,917 y', years: 7917, mode: 'α', energy: 5.17 },
      { nuclide: 'Bi-209', hl: '~stable', years: Infinity, mode: 'α (~2×10¹⁹ y)', energy: 3.14, stable: true },
    ],
  },
  'Pu-239': {
    name: 'Plutonium-239',
    halfLifeLabel: '24,110 years',
    halfLifeYears: 24110,
    decayMode: 'α',
    danger: 'high',
    organ: 'Bone surfaces, liver & lungs (if inhaled)',
    mobility: 'Low — low solubility, strongly sorbed; mainly an inhalation hazard',
    whoLimit: 'No food limit — disposal-controlled',
    caseStudy:
      'Hanford Site: plutonium contamination raised bioavailability concerns in vegetation and wildlife.',
    chain: [
      { nuclide: 'Pu-239', hl: '24,110 y', years: 24110, mode: 'α', energy: 5.24 },
      { nuclide: 'U-235', hl: '704 My', years: 7.04e8, mode: 'α', energy: 4.68 },
      { nuclide: 'Th-231', hl: '25.5 h', years: 25.5 * HOUR, mode: 'β⁻', energy: 0.39 },
      { nuclide: 'Pa-231', hl: '32,760 y', years: 32760, mode: 'α', energy: 5.15 },
      { nuclide: 'Pb-207', hl: 'stable', years: Infinity, mode: '—', energy: 0, stable: true },
    ],
  },
  'Am-241': {
    name: 'Americium-241',
    halfLifeLabel: '432.2 years',
    halfLifeYears: 432.2,
    decayMode: 'α',
    danger: 'high',
    organ: 'Bone & liver',
    mobility: 'Low — strongly sorbed onto minerals; dominant heat source in medium-term SNF',
    whoLimit: 'No food limit — disposal-controlled',
    caseStudy:
      'A major contributor to HLW radiotoxicity in the 100–10,000 year window before decaying to Np-237.',
    chain: [
      { nuclide: 'Am-241', hl: '432.2 y', years: 432.2, mode: 'α', energy: 5.64 },
      { nuclide: 'Np-237', hl: '2.14 My', years: 2.144e6, mode: 'α', energy: 4.96 },
      { nuclide: 'Pa-233', hl: '27.0 d', years: 26.97 * DAY, mode: 'β⁻', energy: 0.57 },
      { nuclide: 'U-233', hl: '159,200 y', years: 1.592e5, mode: 'α', energy: 4.91 },
      { nuclide: 'Th-229', hl: '7,917 y', years: 7917, mode: 'α', energy: 5.17 },
    ],
  },
}

export const isotopeKeys = Object.keys(isotopes)

export const decayModeColor = {
  'α': '#ff7a7a',
  'β⁻': '#7cc4ff',
  'γ (IT)': '#c39bff',
  'γ': '#c39bff',
  '—': '#5ce1a6',
}
export function modeColor(mode) {
  if (!mode) return '#5ce1a6'
  if (mode.startsWith('α')) return '#ff7a7a'
  if (mode.startsWith('β')) return '#7cc4ff'
  if (mode.startsWith('γ')) return '#c39bff'
  return '#5ce1a6'
}

// ---- Module 3: Engineered Barrier System lifetimes (from the paper) ----
// lifetime (y) = thickness (µm) / corrosionRate (µm/y) where applicable.
export const ebsBarriers = [
  { id: 'glass', name: 'Borosilicate glass', thicknessUm: 100000, baseRate: 0.1, baseLifetime: 1_000_000, note: 'Corrodes ~0.1 µm/y in non-saturated conditions.' },
  { id: 'copper', name: 'Copper canister', thicknessUm: 50000, baseRate: 0.5, baseLifetime: 100_000, note: 'KBS-3 concept; corrosion-resistant in reducing environments.' },
  { id: 'steel', name: 'Carbon steel canister', thicknessUm: 2000, baseRate: 3, baseLifetime: 660, note: '2 mm at 3 µm/y ≈ 660 y; stainless lasts far longer.' },
  { id: 'bentonite', name: 'Bentonite clay buffer', thicknessUm: null, baseRate: null, baseLifetime: 1_000_000, note: 'Self-sealing swelling clay; effective over geological timescales.' },
]

// ---- Module 6: real DGR sites for comparison ----
export const realSites = [
  { name: 'Onkalo (Finland)', rock: 'Granite', seismicity: 1, gwFlow: 1, depth: 450, capacity: '6,500 t' },
  { name: 'Forsmark (Sweden)', rock: 'Granite', seismicity: 1, gwFlow: 2, depth: 500, capacity: '12,000 t' },
  { name: 'Bure (France)', rock: 'Clay', seismicity: 2, gwFlow: 1, depth: 500, capacity: 'planned' },
  { name: 'WIPP (USA)', rock: 'Salt', seismicity: 3, gwFlow: 1, depth: 655, capacity: 'TRU only' },
]

// ---- Module 5: trophic levels & biomagnification ----
export const trophicLevels = [
  { level: 'Soil / Water', factor: 1, species: 'contamination source' },
  { level: 'Plants / Algae', factor: 3, species: 'Brassica rapa, aquatic plants' },
  { level: 'Herbivore fish', factor: 5, species: 'carp, bluegill sunfish' },
  { level: 'Predator fish', factor: 4, species: 'pike' },
  { level: 'Apex / Human', factor: 2, species: 'house mice, humans' },
]

// ---- Module 4: environmental pathway stages ----
export const pathwayStages = [
  { id: 'ebs', name: 'EBS breach', baseDelay: 0, note: 'Radionuclides escape the engineered barriers.' },
  { id: 'soil', name: 'Soil', baseDelay: 50, note: 'Adsorption depends on soil texture & pH.' },
  { id: 'groundwater', name: 'Groundwater', baseDelay: 200, note: 'Transport via aquifer flow.' },
  { id: 'surface', name: 'Surface water', baseDelay: 100, note: 'Rivers, lakes — bioaccumulation begins.' },
  { id: 'food', name: 'Food chain', baseDelay: 20, note: 'Uptake into crops, fish, livestock.' },
  { id: 'human', name: 'Human', baseDelay: 5, note: 'Ingestion / inhalation endpoint.' },
]

export const soilTypes = {
  sandy: { name: 'Sandy', attenuation: 0.85, note: 'Fast leaching, low retention' },
  clay: { name: 'Clay', attenuation: 0.3, note: 'High adsorption, slow transport' },
  acidic: { name: 'Acidic', attenuation: 0.95, note: 'High bioavailability, more uptake' },
}
