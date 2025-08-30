'use client'

import Hero from './components/Hero'
import WeddingDetails from './components/WeddingDetails'
import LoveStory from './components/LoveStory'
import Gallery from './components/Gallery'
import RSVPForm from './components/RSVPForm'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WeddingDetails />
      <LoveStory />
      <Gallery />
      <RSVPForm />
      <Footer />
    </div>
  )
}