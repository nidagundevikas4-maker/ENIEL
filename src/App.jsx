import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import WasteTypes from './components/WasteTypes.jsx'
import Timeline from './components/Timeline.jsx'
import Impacts from './components/Impacts.jsx'
import BarrierExplorer from './components/BarrierExplorer.jsx'
import DecaySlider from './components/DecaySlider.jsx'
import SiteSelection from './components/SiteSelection.jsx'
import Drawbacks from './components/Drawbacks.jsx'
import Emerging from './components/Emerging.jsx'
import Conclusion from './components/Conclusion.jsx'
import Footer from './components/Footer.jsx'
import NucleaTrace from './nucleatrace/NucleaTrace.jsx'

function Divider() {
  return <div className="strata" aria-hidden="true" />
}

export default function App() {
  const [view, setView] = useState('review') // 'review' | 'simulator'

  if (view === 'simulator') {
    return <NucleaTrace onBack={() => setView('review')} />
  }

  return (
    <div className="min-h-screen">
      <Nav onLaunch={() => setView('simulator')} />
      <main>
        <Hero onLaunch={() => setView('simulator')} />
        <Divider />
        <WasteTypes />
        <Divider />
        <Timeline />
        <Divider />
        <Impacts />
        <Divider />
        <BarrierExplorer />
        <Divider />
        <DecaySlider />
        <Divider />
        <SiteSelection />
        <Divider />
        <Drawbacks />
        <Divider />
        <Emerging />
        <Divider />
        <Conclusion />
      </main>
      <Footer />
    </div>
  )
}
