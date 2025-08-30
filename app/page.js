'use client'

import Hero from './components/Hero'
import Countdown from './components/Countdown'
import WeddingDetails from './components/WeddingDetails'
import LoveStory from './components/LoveStory'
import Gallery from './components/Gallery'
import RSVPForm from './components/RSVPForm'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Countdown />
      <WeddingDetails />
      <LoveStory />
      <Gallery />
      <Contact />
      <RSVPForm />
      <Footer />
    </div>
  )
}