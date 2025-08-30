'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import settings from '../config/settings';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date(`${settings.wedding.date}T${settings.wedding.ceremony.time}:00`).getTime();
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="countdown" className="min-h-screen flex items-center justify-center py-20 bg-[#1a1a1a]">
      <div className="max-w-6xl w-full mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-[clamp(3rem,8vw,5rem)] font-thin tracking-[0.02em] mb-5">
            <span className="bg-gradient-to-r from-[#faf8f3] via-[#d4af37] to-[#faf8f3] bg-clip-text text-transparent">
              THE COUNTDOWN
            </span>
          </h2>
          <p className="text-lg font-light tracking-[2px] uppercase opacity-60 text-[#faf8f3]">
            Until We Say I Do
          </p>
        </motion.div>

        <div className="flex justify-center gap-8 flex-wrap">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <motion.div
              key={unit}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center min-w-[120px]"
            >
              <div className="font-playfair text-[5rem] font-black leading-none text-gradient-gold">
                {String(value).padStart(unit === 'days' ? 3 : 2, '0')}
              </div>
              <div className="text-sm tracking-[2px] uppercase mt-2 opacity-60 text-[#faf8f3]">
                {unit}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}