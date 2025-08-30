'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Sparkles, Calendar } from 'lucide-react';
import settings from '../config/settings';

export default function LoveStory() {
  const iconMap = {
    'Heart': Heart,
    'MapPin': MapPin,
    'Sparkles': Sparkles,
    'Calendar': Calendar
  };

  const colorMap = {
    'Heart': "from-[#ff6b6b] to-[#ffc4c4]",
    'MapPin': "from-[#87a878] to-[#a8c89a]",
    'Sparkles': "from-[#d4af37] to-[#e6c757]",
    'Calendar': "from-[#ff6b6b] to-[#d4af37]"
  };

  const milestones = settings.loveStory.map(story => ({
    date: story.date,
    title: story.title,
    description: story.description,
    icon: iconMap[story.icon] || Heart,
    color: colorMap[story.icon] || "from-[#ff6b6b] to-[#ffc4c4]"
  }));

  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-[#1a1a1a]">
      <div className="max-w-6xl w-full mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-[clamp(3rem,8vw,5rem)] font-black mb-5 text-gradient-gold">
            OUR LOVE STORY
          </h2>
          <p className="text-lg font-light tracking-[2px] uppercase opacity-60 text-[#faf8f3]">
            Every Chapter Led Us Here
          </p>
        </motion.div>

        {/* Mobile-First Timeline */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-[#ff6b6b] via-[#d4af37] to-[#87a878]"></div>
          
          {/* Mobile Vertical Line */}
          <div className="lg:hidden absolute left-8 top-0 h-full w-[2px] bg-gradient-to-b from-[#ff6b6b] via-[#d4af37] to-[#87a878]"></div>
          
          <div className="space-y-12 lg:space-y-24">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Desktop Spacer */}
                  <div className="hidden lg:block w-1/2" />
                  
                  {/* Icon Circle */}
                  <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 z-10">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full lg:w-1/2 ${
                    index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'
                  } pl-24 lg:pl-0 lg:pr-0`}>
                    <motion.div 
                      className="glass p-6 lg:p-8 hover:shadow-2xl transition-shadow duration-300 rounded-2xl"
                      whileHover={{ y: -5 }}
                    >
                      <div className={`${
                        index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                      } text-left`}>
                        <span className="inline-block px-3 py-1 bg-[#d4af37]/20 text-[#d4af37] text-sm font-medium rounded-full mb-3">
                          {milestone.date}
                        </span>
                        <h3 className="text-2xl lg:text-3xl font-playfair font-bold mb-2 text-[#faf8f3]">
                          {milestone.title}
                        </h3>
                        <p className="text-base lg:text-lg opacity-70 leading-relaxed text-[#faf8f3]">
                          {milestone.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-xl lg:text-2xl font-playfair italic text-[#d4af37]">
            "From that first coffee to forever"
          </p>
        </motion.div>
      </div>
    </section>
  );
}