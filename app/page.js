'use client'

import { lazy, Suspense } from 'react'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import FloatingMenu from './components/FloatingMenu'
import FloatingMusicControl from './components/FloatingMusicControl'

// Lazy load heavy components for better initial load performance
const WeddingDetails = lazy(() => import('./components/WeddingDetails'))
const LoveStory = lazy(() => import('./components/LoveStory'))
const Gallery = lazy(() => import('./components/Gallery'))
const RSVPForm = lazy(() => import('./components/RSVPForm'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

// Simple loading component for lazy loaded sections
const LoadingFallback = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="text-center">
      <div className="w-8 h-8 border-2 border-[#d4af37] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-[#d4af37]/60 text-sm">Loading...</p>
    </div>
  </div>
)

export default function Home() {
  return (
    <div className="min-h-screen">
      <FloatingMenu />
      <FloatingMusicControl />
      <Hero />
      <Countdown />
      <Suspense fallback={<LoadingFallback />}>
        <WeddingDetails />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <LoveStory />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Gallery />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <RSVPForm />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  )
}