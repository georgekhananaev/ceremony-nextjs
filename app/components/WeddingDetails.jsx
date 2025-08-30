'use client'

import React from 'react';
import { motion } from 'framer-motion';
import settings from '../config/settings';

export default function WeddingDetails() {
  const { wedding, venue, events } = settings;
  
  const details = [
    {
      number: '01',
      title: events.ceremony.title,
      text: `${wedding.ceremony.displayTime} Sharp\n${venue.ceremonyLocation}\nDress Code: ${events.ceremony.dressCode}\nColors: ${events.ceremony.colors.join(', ')}`
    },
    {
      number: '02',
      title: 'The Venue',
      text: `${venue.name}\n${venue.address.street}\n${venue.address.district}\n${venue.parking}`
    },
    {
      number: '03',
      title: events.reception.title,
      text: `Cocktails at ${wedding.cocktailHour.displayTime}\nDinner at ${wedding.reception.displayTime}\nDancing Until ${wedding.reception.displayEndTime}\n${events.reception.features.join(' • ')}`
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-[#faf8f3] text-[#1a1a1a]">
      <div className="max-w-6xl w-full mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-[clamp(3rem,8vw,5rem)] font-thin tracking-[0.02em] mb-5">
            <span className="bg-gradient-to-r from-[#1a1a1a] via-[#d4af37] to-[#1a1a1a] bg-clip-text text-transparent">
              WEDDING DETAILS
            </span>
          </h2>
          <p className="text-lg font-light tracking-[2px] uppercase opacity-60">
            Everything You Need To Know
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-dark p-10 relative overflow-hidden hover:-translate-y-2 transition-all duration-300 group rounded-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff6b6b] to-[#d4af37] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              
              <div className="font-playfair text-[4rem] font-black text-[#ff6b6b] leading-none mb-5">
                {detail.number}
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-playfair">
                {detail.title}
              </h3>
              <p className="text-base leading-relaxed opacity-80 whitespace-pre-line">
                {detail.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}