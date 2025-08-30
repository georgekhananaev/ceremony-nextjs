'use client'

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import settings from '../config/settings';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

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
    <div className="h-screen relative flex items-center justify-center overflow-hidden">
      {/* Elegant Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]"/>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af3710] via-transparent to-[#ff6b6b08]"/>
      </div>

      {/* Animated Light Beams */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[150%] h-[1px] bg-gradient-to-r from-transparent via-[#d4af3730] to-transparent"
          initial={{ x: '-150%', y: '100vh', rotate: -45 }}
          animate={{ x: '150%', y: '-100vh' }}
          transition={{ duration: 8, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[150%] h-[1px] bg-gradient-to-r from-transparent via-[#ff6b6b20] to-transparent"
          initial={{ x: '150%', y: '100vh', rotate: 45 }}
          animate={{ x: '-150%', y: '-100vh' }}
          transition={{ duration: 10, repeat: Infinity, repeatDelay: 5, ease: "linear" }}
        />
      </div>

      {/* Elegant Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large background circle */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.03) 0%, transparent 70%)',
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Elegant floating orbs */}
        <motion.div
          className="absolute top-[15%] right-[10%] w-32 h-32"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#d4af3715] to-transparent blur-xl"/>
        </motion.div>
        
        <motion.div
          className="absolute bottom-[20%] left-[5%] w-40 h-40"
          animate={{ 
            y: [0, 40, 0],
            x: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#ff6b6b10] to-transparent blur-2xl"/>
        </motion.div>

        {/* Subtle particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#d4af37] rounded-full opacity-30"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 50
            }}
            animate={{ 
              y: -50,
              x: Math.random() * window.innerWidth
            }}
            transition={{ 
              duration: 15 + i * 5,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center z-10 relative px-6 max-w-6xl mx-auto">
        {/* Elegant date badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-4 mb-12"
        >
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#d4af37]"/>
          <span className="text-xs tracking-[4px] text-[#d4af37] font-light uppercase">
            {settings.wedding.displayDate}
          </span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#d4af37]"/>
        </motion.div>

        {/* Names with elegant styling */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Bride name */}
            <motion.h1
              className="font-playfair text-[clamp(3rem,10vw,7rem)] font-thin tracking-[0.02em] leading-[1.1]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-[#faf8f3] via-[#d4af37] to-[#faf8f3] bg-clip-text text-transparent">
                {settings.couple.bride.name.toUpperCase()}
              </span>
            </motion.h1>
            
            {/* Elegant separator */}
            <motion.div 
              className="flex items-center justify-center my-8 gap-8"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div 
                className="flex-1 h-[0.5px] bg-gradient-to-r from-transparent via-[#d4af3750] to-transparent"
                animate={{ scaleX: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative">
                <motion.span 
                  className="text-[#ff6b6b] text-3xl font-thin italic font-playfair relative z-10"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  &
                </motion.span>
                {/* Pulsing hearts around the ampersand */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute w-20 h-20">
                    {[0, 72, 144, 216, 288].map((rotation, i) => (
                      <motion.div
                        key={i}
                        className="absolute top-0 left-1/2 -translate-x-1/2"
                        style={{ transform: `rotate(${rotation}deg) translateY(-25px)` }}
                        animate={{ 
                          opacity: [0.2, 0.6, 0.2],
                          scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeInOut"
                        }}
                      >
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full blur-[1px]"/>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                {/* Glowing ring */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.1, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-16 h-16 border border-[#d4af3730] rounded-full"/>
                </motion.div>
              </div>
              <motion.div 
                className="flex-1 h-[0.5px] bg-gradient-to-l from-transparent via-[#d4af3750] to-transparent"
                animate={{ scaleX: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            
            {/* Groom name */}
            <motion.h1
              className="font-playfair text-[clamp(3rem,10vw,7rem)] font-thin tracking-[0.02em] leading-[1.1]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <span className="bg-gradient-to-r from-[#faf8f3] via-[#d4af37] to-[#faf8f3] bg-clip-text text-transparent">
                {settings.couple.groom.name.toUpperCase()}
              </span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12 space-y-2"
          >
            <p className="text-sm tracking-[3px] uppercase text-[#87a878] font-light">
              Are Getting Married
            </p>
            {settings.venue?.name && (
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-[0.5px] bg-[#87a87850]"/>
                <p className="text-xs tracking-[2px] uppercase text-[#d4af3770]">
                  {settings.venue.name}
                </p>
                <div className="w-8 h-[0.5px] bg-[#87a87850]"/>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        onClick={scrollToNext}
      >
        <div className="flex flex-col items-center gap-3">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[30px] h-[50px] border border-[#d4af3750] rounded-full flex items-start justify-center p-2 group-hover:border-[#d4af37] transition-colors"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-[#d4af37] rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}