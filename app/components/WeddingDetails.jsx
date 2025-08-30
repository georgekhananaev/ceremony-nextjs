'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Calendar, Music, Utensils, Camera, Heart, Users, Sparkles, Palette, Gift, CalendarPlus, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import settings from '../config/settings';
import Lightbox from './shared/Lightbox';

export default function WeddingDetails() {
  const { wedding, venue, events, social, venueGallery } = settings;
  const [activeTab, setActiveTab] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [calendarUrl, setCalendarUrl] = useState('#');
  const [mounted, setMounted] = useState(false);
  
  // Generate Google Calendar URL on client side only
  React.useEffect(() => {
    setMounted(true);
    const startDate = new Date(`${wedding.date}T${wedding.ceremony.time}:00`);
    const endDate = new Date(`${wedding.date}T${wedding.reception.endTime}:00`);
    
    // Format dates for Google Calendar (YYYYMMDDTHHmmss)
    const formatDate = (date) => {
      return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    };
    
    const eventDetails = {
      text: `${settings.couple.bride.name} & ${settings.couple.groom.name}'s Wedding`,
      dates: `${formatDate(startDate)}/${formatDate(endDate)}`,
      details: `Join us for our wedding celebration!\n\nCeremony: ${wedding.ceremony.displayTime}\nReception: ${wedding.reception.displayTime}\n\nDress Code: ${events.ceremony.dressCode}\n\nWedding Website: ${window.location.origin}`,
      location: `${venue.name}, ${venue.address.street}, ${venue.address.district}, ${venue.address.city}, ${venue.address.country}`,
      ctz: 'Asia/Bangkok' // Adjust timezone as needed
    };
    
    const baseUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
    const params = new URLSearchParams({
      text: eventDetails.text,
      dates: eventDetails.dates,
      details: eventDetails.details,
      location: eventDetails.location,
      ctz: eventDetails.ctz
    });
    
    setCalendarUrl(`${baseUrl}&${params.toString()}`);
  }, []);
  
  // Lightbox functions
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const navigateToImage = (index) => {
    setCurrentIndex(index);
  };
  
  // Timeline data
  const timeline = [
    {
      time: wedding.ceremony.displayTime,
      title: "Guest Arrival",
      description: "Welcome drinks and mingling",
      icon: Users
    },
    {
      time: wedding.ceremony.displayTime,
      title: "Wedding Ceremony",
      description: "Exchange of vows in the garden",
      icon: Heart
    },
    {
      time: wedding.cocktailHour.displayTime,
      title: "Cocktail Hour",
      description: "Champagne, canapés & live music",
      icon: Music
    },
    {
      time: wedding.reception.displayTime,
      title: "Dinner Reception",
      description: "Multi-course dinner service",
      icon: Utensils
    },
    {
      time: "9:00 PM",
      title: "First Dance & Party",
      description: "Dancing under the stars",
      icon: Sparkles
    },
    {
      time: wedding.reception.displayEndTime,
      title: "Grand Finale",
      description: "Sparkler send-off",
      icon: Sparkles
    }
  ];

  // Detail tabs
  const detailTabs = [
    {
      title: "The Ceremony",
      icon: Heart,
      content: {
        title: events.ceremony.title,
        time: wedding.ceremony.displayTime,
        location: venue.ceremonyLocation,
        duration: "30 minutes",
        notes: [
          "Garden ceremony with natural backdrop",
          "Unplugged ceremony - please no phones",
          "Professional photography provided",
          "Reserved seating for family"
        ]
      }
    },
    {
      title: "The Reception",
      icon: Music,
      content: {
        title: events.reception.title,
        time: wedding.reception.displayTime,
        location: "Grand Ballroom",
        duration: `Until ${wedding.reception.displayEndTime}`,
        notes: events.reception.features
      }
    },
    {
      title: "Dress Code",
      icon: Palette,
      content: {
        title: "Attire Guidelines",
        time: events.ceremony.dressCode,
        location: "Color Palette",
        duration: events.ceremony.colors.join(', '),
        notes: [
          "Formal/Cocktail attire requested",
          "Light, breathable fabrics recommended",
          "Ladies: Block heels suggested for garden",
          "Gentlemen: Suit jacket optional after ceremony"
        ]
      }
    },
    {
      title: "Guest Info",
      icon: Gift,
      content: {
        title: "Important Information",
        time: "RSVP by",
        location: wedding.displayDate,
        duration: "Accommodations",
        notes: [
          "Hotel blocks available nearby",
          "Shuttle service from select hotels",
          "Dietary restrictions accommodated",
          `Wedding hashtag: ${social.instagram.hashtag}`
        ]
      }
    }
  ];

  return (
    <>
      <section id="wedding-details" className="min-h-screen py-20 bg-[#0a0a0a] relative overflow-hidden">
        {/* Elegant Gradient Background - Same as Hero */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]"/>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af3715] via-transparent to-[#ff6b6b10]"/>
          <div className="absolute inset-0 bg-gradient-to-bl from-[#87a87810] via-transparent to-transparent"/>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(212,175,55,0.08)_0%,_transparent_40%)]"/>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(135,168,120,0.06)_0%,_transparent_40%)]"/>
        </div>

        {/* Floating Particles - reduced based on performance */}
        {mounted && performance.particleCount > 0 && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(Math.min(performance.particleCount, 15))].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#d4af37]/20 rounded-full will-change-transform"
                style={{
                  left: `${(i * 19) % 100}%`,
                  top: `${(i * 13) % 100}%`
                }}
                animate={{ 
                  y: [-20, -120],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 12 + (i % 3) * 4,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        )}

        <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div 
              className="h-[0.5px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent mb-12"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            
            <h2 className="font-playfair text-[clamp(3.5rem,9vw,6rem)] font-thin tracking-[0.02em] mb-6">
              <span className="bg-gradient-to-r from-[#faf8f3] via-[#d4af37] to-[#faf8f3] bg-clip-text text-transparent">
                WEDDING DETAILS
              </span>
            </h2>
            <p className="text-lg font-light tracking-[0.2em] uppercase text-[#faf8f3]/40">
              Everything You Need To Know
            </p>
          </motion.div>

          {/* Main Venue Card with Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            {/* Hero Banner with Wide Image */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden mb-8">
              <Image
                src={venueGallery.heroImage}
                alt={venue.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]/80"></div>
              
              <motion.div 
                className="absolute inset-0 flex items-center justify-center text-center z-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <div>
                  <motion.h3 
                    className="drop-shadow-[2px_2px_4px_black] font-playfair text-[clamp(3rem,7vw,5rem)] font-thin tracking-[0.02em] leading-tight"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="bg-gradient-to-r from-[#faf8f3] via-[#d4af19] to-[#faf8f3] bg-clip-text text-transparent">
                      {venue.name.toUpperCase()}
                    </span>
                  </motion.h3>
                  <motion.p 
                    className="text-white/80 text-xl mt-4 max-w-2xl mx-auto px-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    The Venue of the Wedding
                  </motion.p>
                </div>
              </motion.div>
            </div>

            {/* Venue Info Card */}
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-50" />
              
              <div className="relative p-12 lg:p-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <motion.div 
                      className="inline-flex items-center gap-3 mb-6"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-sm font-medium tracking-wider text-[#d4af37]/80 uppercase">
                        Full Address
                      </span>
                    </motion.div>
                    
                    <div className="space-y-3 text-[#faf8f3]/70">
                      <p className="text-lg">{venue.address.street}</p>
                      <p className="text-lg">{venue.address.district}</p>
                      <p className="text-lg">{venue.address.city}, {venue.address.country}</p>
                      <p className="text-sm mt-6 text-[#d4af37]/60">{venue.parking}</p>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-8">
                      <motion.a
                        href={venue.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-all duration-300 rounded-full"
                        whileHover={performance.animationLevel === 'full' ? { scale: 1.05 } : {}}
                        whileTap={performance.animationLevel === 'full' ? { scale: 0.95 } : {}}
                      >
                        View on Map
                      </motion.a>
                      
                      {mounted && (
                        <motion.a
                          href={calendarUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 border border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-all duration-300 rounded-full"
                          whileHover={performance.animationLevel === 'full' ? { scale: 1.05 } : {}}
                          whileTap={performance.animationLevel === 'full' ? { scale: 0.95 } : {}}
                        >
                          Add to Calendar
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <motion.div
                      className="relative h-[400px] rounded-2xl overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent z-10" />
                      <img 
                        src={venue.imageUrl || "/botanical-house-bkk/1.jpg"}
                        alt={venue.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-6 left-6 z-20">
                        <p className="text-[#faf8f3]/80 text-sm tracking-wider uppercase">
                          {wedding.displayDate}
                        </p>
                        <p className="text-[#d4af37] text-lg">
                          {wedding.ceremony.displayTime} Onwards
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Venue Gallery Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="font-playfair text-4xl font-thin text-[#faf8f3] mb-4">
                Explore The Venue
              </h3>
              <p className="text-lg text-[#faf8f3]/60">
                Click on any image to view in full size
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {venueGallery.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-square cursor-pointer group overflow-hidden rounded-2xl"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white font-medium text-lg">{image.caption}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Detail Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {detailTabs.map((tab, index) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 ${
                      activeTab === index 
                        ? 'border-[#d4af37] bg-[#d4af37]/10 text-[#d4af37]' 
                        : 'border-white/10 text-[#faf8f3]/50 hover:border-[#d4af37]/50 hover:text-[#d4af37]/70'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm font-medium tracking-wider uppercase">
                      {tab.title}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-playfair text-3xl font-thin text-[#faf8f3] mb-6">
                        {detailTabs[activeTab].content.title}
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="text-[#d4af37]/60">•</span>
                          <span className="text-[#faf8f3]/70">{detailTabs[activeTab].content.time}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-[#d4af37]/60">•</span>
                          <span className="text-[#faf8f3]/70">{detailTabs[activeTab].content.location}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-[#d4af37]/60">•</span>
                          <span className="text-[#faf8f3]/70">{detailTabs[activeTab].content.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium tracking-wider text-[#d4af37]/80 uppercase mb-4">
                        Important Notes
                      </h4>
                      <ul className="space-y-3">
                        {detailTabs[activeTab].content.notes.map((note, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-[#d4af37] mt-1">•</span>
                            <span className="text-[#faf8f3]/60 text-sm">{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-4xl font-thin text-center text-[#faf8f3] mb-12">
              Wedding Day Timeline
            </h3>
            
            <div className="relative">
              {/* Timeline Line - hidden on mobile */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-[0.5px] h-full bg-gradient-to-b from-transparent via-[#d4af37]/30 to-transparent" />
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {timeline.map((item, index) => {
                  const Icon = item.icon;
                  const isEven = index % 2 === 0;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:flex-row gap-8`}
                    >
                      {/* Content */}
                      <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                        <motion.div 
                          className="inline-block"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-[#d4af37] text-sm tracking-wider uppercase mb-2">
                            {item.time}
                          </p>
                          <h4 className="font-playfair text-2xl text-[#faf8f3] mb-2">
                            {item.title}
                          </h4>
                          <p className="text-[#faf8f3]/50 text-sm">
                            {item.description}
                          </p>
                        </motion.div>
                      </div>
                      
                      {/* Icon Node */}
                      <motion.div 
                        className="relative z-10"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-12 h-12 bg-[#0a0a0a] rounded-full flex items-center justify-center border-2 border-[#d4af37]/30">
                          <span className="text-[#d4af37] text-xs font-bold">{index + 1}</span>
                        </div>
                      </motion.div>
                      
                      {/* Spacer for opposite side */}
                      <div className="flex-1 hidden lg:block" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Social Media & Hashtag */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <div className="inline-block bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-sm tracking-wider text-[#faf8f3]/60 uppercase mb-2">
                Share Your Moments
              </p>
              <p className="font-playfair text-2xl text-[#d4af37]">
                {social.instagram.hashtag}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={venueGallery.images}
        currentIndex={currentIndex}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        onNavigate={navigateToImage}
      />
    </>
  );
}