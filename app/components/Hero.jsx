'use client'

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById('countdown');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="h-screen relative flex items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d] overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, #ff6b6b 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, #ffc4c4 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, #87a878 0%, transparent 30%)
            `,
            animation: 'float 20s ease-in-out infinite'
          }}
        />
      </div>

      {/* Floating Modern Flowers */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-[10%] left-[10%] w-16 h-16 opacity-30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        >
          <svg viewBox="0 0 100 100">
            <path d="M50 10 Q30 30 20 50 Q30 70 50 90 Q70 70 80 50 Q70 30 50 10" fill="#ff6b6b" opacity="0.3"/>
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute top-[60%] right-[15%] w-20 h-20 opacity-30"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`
          }}
        >
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="5" fill="#d4af37"/>
            <circle cx="50" cy="30" r="12" fill="#ffc4c4" opacity="0.5"/>
            <circle cx="30" cy="50" r="12" fill="#ffc4c4" opacity="0.5"/>
            <circle cx="70" cy="50" r="12" fill="#ffc4c4" opacity="0.5"/>
            <circle cx="50" cy="70" r="12" fill="#ffc4c4" opacity="0.5"/>
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-[20%] left-[20%] w-24 h-24 opacity-30"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{
            transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04}px)`
          }}
        >
          <svg viewBox="0 0 100 100">
            <polygon points="50,10 60,40 90,40 65,60 75,90 50,70 25,90 35,60 10,40 40,40" fill="#87a878" opacity="0.3"/>
          </svg>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 relative px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-sm tracking-[4px] text-[#d4af37] mb-8 font-medium"
        >
          SAVE THE DATE
        </motion.div>

        <div className="relative mb-8">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="font-playfair text-[clamp(4rem,12vw,8rem)] font-black leading-[0.9] tracking-[-2px]"
          >
            <span className="block text-gradient-gold">PATINYA</span>
            
            <motion.span 
              className="block text-5xl font-light my-8 text-[#ff6b6b] relative"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <span className="relative inline-block">
                &
                <span className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 w-20 h-[1px] bg-[#d4af37]"></span>
                <span className="absolute right-[-100px] top-1/2 transform -translate-y-1/2 w-20 h-[1px] bg-[#d4af37]"></span>
              </span>
            </motion.span>
            
            <span className="block text-gradient-gold">DAR</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg font-light tracking-[3px] uppercase text-[#87a878]"
        >
          March 07, 2026
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToNext}
      >
        <span className="text-xs tracking-[2px] uppercase text-[#d4af37]">Scroll</span>
        <div className="w-[1px] h-10 bg-[#d4af37] relative overflow-hidden">
          <div className="absolute w-full h-5 bg-[#ff6b6b] animate-scrollDown"></div>
        </div>
      </motion.div>
    </div>
  );
}