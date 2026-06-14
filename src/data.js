// All content sourced from the review paper:
// "Geological Disposal Techniques for High-Level Nuclear Waste and their
//  Impact on Environment: A Review" — Tejas L, Yashwanth R, Sindhu C,
//  Trilokchandran B, RV College of Engineering, Bangalore.

export const paper = {
  title:
    'Geological Disposal Techniques for High-Level Nuclear Waste and their Impact on Environment',
  type: 'Review Paper',
  authors: [
    { name: 'Vikas Sidagouda Nidagunde', dept: '' },
    { name: 'Darshan J', dept: '' },
    { name: 'Pushkar K P', dept: '' },
    { name: 'Ronith Mahaa', dept: '' },
    { name: 'A Charan Preeth', dept: '' },
    { name: 'Dr Lokeshari M', dept: 'Faculty Guide' },
  ],
  institution: 'RV College of Engineering, Bangalore, India',
  abstract:
    'The safe disposal of high-level nuclear waste (HLW), including spent nuclear fuel (SNF), is an inherent challenge for the sustainable use of nuclear energy. Deep geological repositories (DGRs) are the universally accepted solution for long-term isolation of HLW from the biosphere. This review summarizes current advances in DGRs, with an emphasis on site selection criteria, engineered barrier systems (EBS), and long-term safety assessments.',
  keywords: [
    'high-level nuclear waste',
    'deep geological repositories',
    'site selection',
    'engineered barrier systems',
    'safety assessments',
    'borehole disposal',
  ],
}

export const wasteTypes = [
  {
    code: 'LLW',
    name: 'Low-Level Waste',
    color: '#5ce1a6',
    sources: 'Hospitals, research facilities, power plants, decommissioning',
    desc: 'Contaminated clothing, tools, filters and medical materials with low radioactivity.',
    management:
      'Compacted or incinerated, then disposed of in shallow land burial or stored until decay (days to years).',
    example: 'Gloves or rags used in nuclear facilities',
  },
  {
    code: 'ILW',
    name: 'Intermediate-Level Waste',
    color: '#7cc4ff',
    sources: 'Power plant operations, fuel cycle, decommissioning',
    desc: 'More radioactive than LLW — needs shielding but not cooling. Reactor components, sludges, resins.',
    management:
      'Solidified (e.g. in concrete) and stored in engineered facilities or intermediate-depth repositories.',
    example: 'Used reactor filters or contaminated metal parts',
  },
  {
    code: 'HLW',
    name: 'High-Level Waste',
    color: '#ffb627',
    sources: 'Nuclear reactors and fuel reprocessing plants',
    desc: 'Highly radioactive, heat-generating waste — primarily spent fuel or reprocessing byproducts.',
    management:
      'Heavy shielding and cooling; stored in pools or dry casks, with long-term plans for deep geological repositories.',
    example: 'Spent fuel rods — hazardous for thousands to millions of years',
  },
  {
    code: 'TRU',
    name: 'Transuranic Waste',
    color: '#ff7a7a',
    sources: 'Nuclear weapons programs and some research reactors',
    desc: 'Contains elements heavier than uranium (e.g. plutonium) with very long half-lives.',
    management:
      'Stored or disposed of in deep geological repositories due to long-term radioactivity.',
    example: 'Contaminated equipment from plutonium processing',
  },
]

export const timeline = [
  {
    year: '1950s',
    title: 'The concept is born',
    text: 'Deep geological disposal first suggested as a means of isolating radioactive waste.',
  },
  {
    year: '1957',
    title: 'US National Academy of Sciences',
    text: 'Assessed deep borehole disposal as a possible method for isolating nuclear waste — a key conceptual step.',
  },
  {
    year: '1965–1978',
    title: 'Asse II salt mine, Germany',
    text: 'Used as a research mine from 1965; radioactive waste deposited 1967–1978. Leakage later became a problem.',
  },
  {
    year: '1988',
    title: 'Forsmark, Sweden',
    text: 'Started running a DGR for low- and intermediate-level waste in crystalline rock.',
  },
  {
    year: '1999',
    title: 'WIPP, USA — first operating DGR',
    text: 'The Waste Isolation Pilot Plant: the only DGR currently in operation. Handles defense-related transuranic waste.',
  },
  {
    year: '2004',
    title: 'Onkalo, Finland',
    text: 'The most cutting-edge HLW repository, built with KBS-3 technology. Originally scheduled to open in 2023.',
  },
  {
    year: '2006–2007',
    title: 'Formal recognition',
    text: "DGR formally recognized as a key waste-management strategy by the EU's CARD project and the IGD-TP platform.",
  },
]

// Engineered Barrier System — ordered from waste outward to host rock.
export const barriers = [
  {
    id: 'wasteform',
    name: 'Wasteform',
    short: 'Borosilicate glass',
    color: '#ffb627',
    lifetime: '~1 million years',
    detail:
      'Durable wasteforms immobilize the waste. Borosilicate glass (used in France & the UK) corrodes at only ~0.1 µm/yr in non-saturated conditions. New iron-phosphate glasses promise even better chemical durability.',
  },
  {
    id: 'container',
    name: 'Container',
    short: 'Copper canister + cast-iron insert',
    color: '#d98c5f',
    lifetime: '~100,000 years',
    detail:
      "Copper canisters with cast-iron inserts (Sweden's KBS-3 concept) resist corrosion in reducing environments. Composite stainless-steel / nickel-alloy containers are being developed for saline groundwater.",
  },
  {
    id: 'buffer',
    name: 'Backfill & Buffer',
    short: 'Compacted bentonite clay',
    color: '#8a9bb5',
    lifetime: 'Self-sealing',
    detail:
      "Bentonite clay swells on contact with water, sealing voids and limiting radionuclide migration. Finland's Olkiluoto uses highly compacted bentonite; geopolymers are being researched as alternatives.",
  },
  {
    id: 'rock',
    name: 'Natural Rock',
    short: 'Stable host geology',
    color: '#4a5a73',
    lifetime: 'Geological timescales',
    detail:
      'The surrounding geology itself is a barrier — chosen for stability and its ability to trap any radioactive particles that might escape. Several hundred metres below the surface.',
  },
]

export const impacts = [
  {
    title: 'Soil Contamination',
    icon: 'soil',
    points: [
      'Radionuclides enter soil via accidents, disposal or fallout. Sandy soils leach faster; clay soils retain due to higher adsorption.',
      'They impair microbial activity and nutrient cycling, reducing soil fertility and agricultural productivity.',
      'Cesium-137 is more bioavailable in acidic soils. Lime can reduce uptake into crops.',
    ],
  },
  {
    title: 'Water & Groundwater',
    icon: 'water',
    points: [
      'Cs-137 and Sr-90 are highly mobile and leach into water through precipitation or irrigation.',
      'Runoff contaminates rivers, lakes and oceans, causing bioaccumulation in aquatic food webs.',
      'Contaminated aquifers can remain degraded for decades to centuries from uranium and tritium.',
    ],
  },
  {
    title: 'Airborne Particles',
    icon: 'air',
    points: [
      'Radioactive dust spreads via wind; Cs-137 and I-131 stay airborne for extended periods.',
      'Radioactive aerosols may alter local climates by affecting solar radiation absorption.',
      'Global dispersal (Chernobyl, Fukushima) raises international safety concerns.',
    ],
  },
  {
    title: 'Biological Effects',
    icon: 'bio',
    points: [
      'Bioaccumulation and biomagnification concentrate radionuclides up the food chain (e.g. Cs-137 in carp & pike).',
      'Radiation induces DNA mutations — altered morphology in plants, limb deformities in Chernobyl wild boars, reduced fertility in medaka fish.',
      'Loss of key species disrupts food webs and reduces ecosystem resilience and biodiversity.',
    ],
  },
]

export const caseStudies = [
  {
    name: 'Chernobyl',
    year: '1986',
    text: 'High levels of Cs-137 and Sr-90 contaminated soils, altered microbial communities and reduced fertility.',
  },
  {
    name: 'Hanford Site, USA',
    year: '—',
    text: 'Plutonium and strontium contamination raised concerns about bioavailability and uptake by vegetation.',
  },
  {
    name: 'Fukushima',
    year: '2011',
    text: 'Surface-water contamination impacted food webs and fisheries; airborne isotopes dispersed widely.',
  },
]

export const siteCriteria = [
  {
    title: 'Geological Stability',
    text: 'Host rock must resist earthquakes, erosion and landslides. Common hosts: crystalline granite, salt formations, consolidated clays.',
  },
  {
    title: 'Hydrogeology',
    text: 'Low groundwater flow minimizes radionuclide transport. Stagnant-pore-water clays or salt domes are preferred.',
  },
  {
    title: 'Geochemistry',
    text: 'Reducing conditions limit radionuclide solubility. Bentonite clays sorb radionuclides, enhancing containment.',
  },
  {
    title: 'Low Seismicity',
    text: 'Sites with minimal earthquake risk are prioritized to prevent structural damage to the repository.',
  },
  {
    title: 'Social & Regulatory',
    text: "Public acceptance, land availability and regulations matter. Sweden's Forsmark was chosen after extensive stakeholder engagement.",
  },
]

export const drawbacks = [
  {
    title: 'Geological Instability',
    text: 'Seismic, volcanic or glacial events over millions of years could disrupt containment and release radionuclides.',
  },
  {
    title: 'Public & Political Opposition',
    text: 'Anti-nuclear sentiment delayed or stopped projects — Yucca Mountain was cancelled; Gorleben was protested.',
  },
  {
    title: 'Corrosion & Barrier Failure',
    text: 'Microbially induced corrosion (MIC) can rust metal containers, especially in anaerobic conditions.',
  },
  {
    title: 'Permanence vs. Retrievability',
    text: 'Retrievable designs cost more to seal; permanent sealing risks future inaccessibility if needed.',
  },
  {
    title: 'Costly Delays',
    text: 'DGRs need billions and decades. Yucca Mountain cost $9 billion in research before cancellation.',
  },
  {
    title: 'Human Intrusion',
    text: 'Future drilling or mining could breach repositories — Asse II leaked radioactive brine through poor sealing.',
  },
  {
    title: 'Limited Capacity',
    text: 'Onkalo (6,500 t) and Forsmark (12,000 t) are small relative to global waste volumes, requiring many repositories.',
  },
  {
    title: 'Social & Environmental',
    text: 'Construction disturbs habitats and communities; resistance from local and indigenous groups can halt projects.',
  },
]

export const emerging = [
  {
    title: 'Deep Borehole Disposal (DBD)',
    text: 'Drilling 1–5 km boreholes, sealing waste in containers and backfilling with bentonite or cement. Lower cost, faster construction, minimal intrusion risk. Explored by the UK, US and Australia.',
  },
  {
    title: 'Partitioning & Transmutation',
    text: 'Converting long-lived isotopes into shorter-lived ones to reduce waste longevity and toxicity. Generation IV reactors can transmute minor actinides.',
  },
  {
    title: 'Synroc (Synthetic Rock)',
    text: 'A synthetic-rock wasteform offering improved containment compared with conventional materials.',
  },
  {
    title: 'Robotics & Modular Storage',
    text: 'Robotics for waste handling and monitoring, plus modular dry-storage systems as flexible, secure temporary solutions.',
  },
]

// Radiotoxicity vs. natural uranium ore (relative toxicity index, RTI).
// HLW reaches uranium-ore toxicity at ~3,000 yrs; SNF at ~100,000 yrs.
export const decayKey = {
  hlwSafeYears: 3000,
  snfSafeYears: 100000,
  doseLimitNatural: '0.3 mSv/y',
  doseLimitIntrusion: '10 mSv/y',
  background: '1,000–10,000 µSv/y',
}
