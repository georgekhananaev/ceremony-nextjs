'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Calendar, Music, Utensils, Camera, Heart, Users, Sparkles, ChevronRight, Palette, Gift } from 'lucide-react';
import settings from '../config/settings';

export default function WeddingDetails() {
  const { wedding, venue, events, social } = settings;
  const [activeTab, setActiveTab] = useState(0);
  
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
    <section className="min-h-screen py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Elegant Gradient Background - Same as Hero */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]"/>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af3715] via-transparent to-[#ff6b6b10]"/>
        <div className="absolute inset-0 bg-gradient-to-bl from-[#87a87810] via-transparent to-transparent"/>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(212,175,55,0.08)_0%,_transparent_40%)]"/>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(135,168,120,0.06)_0%,_transparent_40%)]"/>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#d4af37]/20 rounded-full"
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

        {/* Main Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
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
                    <MapPin className="w-5 h-5 text-[#d4af37]" />
                    <span className="text-sm font-medium tracking-wider text-[#d4af37]/80 uppercase">
                      The Venue
                    </span>
                  </motion.div>
                  
                  <h3 className="font-playfair text-5xl lg:text-6xl font-thin text-[#faf8f3] mb-6">
                    {venue.name}
                  </h3>
                  
                  <div className="space-y-3 text-[#faf8f3]/70">
                    <p className="text-lg">{venue.address.street}</p>
                    <p className="text-lg">{venue.address.district}</p>
                    <p className="text-lg">{venue.address.city}, {venue.address.country}</p>
                    <p className="text-sm mt-6 text-[#d4af37]/60">{venue.parking}</p>
                  </div>

                  <motion.a
                    href={venue.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-8 px-6 py-3 border border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-all duration-300 rounded-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MapPin className="w-4 h-4" />
                    View on Map
                    <ChevronRight className="w-4 h-4" />
                  </motion.a>
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
                  <Icon className="w-4 h-4" />
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
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-[#d4af37]/60" />
                        <span className="text-[#faf8f3]/70">{detailTabs[activeTab].content.time}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-[#d4af37]/60" />
                        <span className="text-[#faf8f3]/70">{detailTabs[activeTab].content.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-[#d4af37]/60" />
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
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[0.5px] h-full bg-gradient-to-b from-transparent via-[#d4af37]/30 to-transparent" />
            
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
                        <Icon className="w-5 h-5 text-[#d4af37]" />
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
            <Camera className="w-8 h-8 text-[#d4af37] mx-auto mb-4" />
            <p className="text-sm tracking-wider text-[#faf8f3]/60 uppercase mb-2">
              Share Your Moments
            </p>
            <p className="font-playfair text-3xl text-[#d4af37]">
              {social.instagram.hashtag}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}