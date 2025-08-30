'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MapPin, Sparkles, Calendar, ChevronDown, Clock, Quote } from 'lucide-react';
import settings from '../config/settings';

export default function LoveStory() {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const iconMap = {
    'Heart': Heart,
    'MapPin': MapPin,
    'Sparkles': Sparkles,
    'Calendar': Calendar
  };

  const gradientMap = {
    'Heart': "from-rose-500 via-pink-500 to-red-400",
    'MapPin': "from-emerald-500 via-teal-500 to-cyan-500",
    'Sparkles': "from-amber-400 via-yellow-400 to-orange-400",
    'Calendar': "from-violet-500 via-purple-500 to-indigo-500"
  };

  const backgroundPatterns = {
    'Heart': "radial-gradient(circle at 20% 50%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)",
    'MapPin': "radial-gradient(circle at 80% 50%, rgba(135, 168, 120, 0.1) 0%, transparent 50%)",
    'Sparkles': "radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)",
    'Calendar': "radial-gradient(circle at 50% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)"
  };

  const milestones = settings.loveStory.map((story, idx) => ({
    ...story,
    icon: iconMap[story.icon] || Heart,
    gradient: gradientMap[story.icon] || gradientMap['Heart'],
    pattern: backgroundPatterns[story.icon] || backgroundPatterns['Heart'],
    id: idx
  }));

  return (
    <section className="min-h-screen py-32 bg-gradient-to-b from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <Quote className="w-12 h-12 text-[#d4af37] opacity-50" />
          </motion.div>
          
          <h2 className="font-playfair text-[clamp(3.5rem,9vw,6rem)] font-thin leading-tight mb-6">
            <motion.span 
              className="inline-block bg-gradient-to-r from-[#faf8f3] via-[#d4af37] to-[#faf8f3] bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Our Journey
            </motion.span>
          </h2>
          
          <motion.p 
            className="text-xl font-light tracking-[3px] uppercase text-[#d4af37]/70"
            initial={{ letterSpacing: "0px", opacity: 0 }}
            whileInView={{ letterSpacing: "3px", opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Every Moment Led Us Here
          </motion.p>
        </motion.div>

        {/* Modern Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isActive = activeIndex === milestone.id;
            
            return (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="relative group"
                onMouseEnter={() => setActiveIndex(milestone.id)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Card Container */}
                <motion.div
                  className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  style={{ background: milestone.pattern }}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${milestone.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative p-8 lg:p-10">
                    {/* Date Badge */}
                    <motion.div 
                      className="flex items-center gap-3 mb-6"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Clock className="w-4 h-4 text-[#d4af37]/60" />
                      <span className="text-sm font-medium tracking-wider text-[#d4af37]/80 uppercase">
                        {milestone.date}
                      </span>
                    </motion.div>

                    {/* Icon and Title Row */}
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        className={`relative flex-shrink-0`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${milestone.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
                        <div className={`relative w-16 h-16 bg-gradient-to-br ${milestone.gradient} rounded-2xl flex items-center justify-center shadow-2xl`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </motion.div>

                      <div className="flex-1">
                        <h3 className="text-3xl font-playfair font-light text-[#faf8f3] mb-3 group-hover:text-[#d4af37] transition-colors duration-300">
                          {milestone.title}
                        </h3>
                        
                        <AnimatePresence>
                          <motion.p 
                            className="text-lg text-[#faf8f3]/70 leading-relaxed"
                            initial={{ height: "auto" }}
                            animate={{ height: isActive ? "auto" : "auto" }}
                            transition={{ duration: 0.3 }}
                          >
                            {milestone.description}
                          </motion.p>
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <motion.div
                      className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-6 h-6 text-[#d4af37]" />
                    </motion.div>

                    {/* Progress Bar */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                      style={{ transformOrigin: "left" }}
                    />
                  </div>
                </motion.div>

                {/* Connection Line (for desktop) */}
                {index < milestones.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute -bottom-6 left-1/2 w-px h-12 bg-gradient-to-b from-[#d4af37]/30 to-transparent"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                    viewport={{ once: true }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Final Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-32 relative"
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-96 h-96 bg-gradient-to-r from-[#d4af37]/10 to-rose-500/10 rounded-full blur-3xl" />
          </motion.div>
          
          <div className="relative">
            <motion.div
              className="inline-flex items-center gap-4 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#d4af37]" />
              <Heart className="w-8 h-8 text-[#d4af37]" />
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#d4af37]" />
            </motion.div>
            
            <motion.p 
              className="text-2xl lg:text-3xl font-playfair italic text-transparent bg-gradient-to-r from-[#faf8f3] via-[#d4af37] to-[#faf8f3] bg-clip-text"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              "From that first coffee to forever"
            </motion.p>
            
            <motion.p
              className="mt-4 text-sm tracking-[3px] uppercase text-[#faf8f3]/40"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
            >
              Our Story Continues
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}