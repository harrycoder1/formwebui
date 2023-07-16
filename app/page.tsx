import Image from 'next/image'
import BgContianerClr from './components/BgContianerClr'
import Hero from './components/Hero'
import ActionSection from './components/ActionSection'
import AboutUs from './components/AboutUs'
import Testominals from './components/Testominals'
import Footer from './components/Footer'

export default function Home() {
  return (
<>
<Hero />
<ActionSection />
<AboutUs />
<Testominals />
</>
  )
}
