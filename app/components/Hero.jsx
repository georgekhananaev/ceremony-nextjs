'use client'

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import settings from '../config/settings';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById('countdown');
    element?.scrollIntoView({ behavior: 'smooth' });
    
    // Trigger background music to play
    window.dispatchEvent(new Event('playBackgroundMusic'));
  };

  return (
    <div id="hero" className="h-screen relative flex items-center justify-center overflow-hidden">
      {/* Elegant Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]"/>
        {/* Multiple gradient overlays for better distribution */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af3715] via-transparent to-[#ff6b6b10]"/>
        <div className="absolute inset-0 bg-gradient-to-bl from-[#87a87810] via-transparent to-transparent"/>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-[#d4af3708] to-[#faf8f305]"/>
        {/* Radial gradients for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.1)_0%,_transparent_40%)]"/>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,107,107,0.08)_0%,_transparent_40%)]"/>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(135,168,120,0.05)_0%,_transparent_60%)]"/>
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
        
        {/* Elegant floating orbs - distributed across screen */}
        <motion.div
          className="absolute top-[15%] right-[10%] w-32 h-32"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#d4af3720] to-transparent blur-xl"/>
        </motion.div>
        
        <motion.div
          className="absolute bottom-[20%] left-[5%] w-40 h-40"
          animate={{ 
            y: [0, 40, 0],
            x: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#ff6b6b15] to-transparent blur-2xl"/>
        </motion.div>

        {/* Additional floating orbs for better distribution */}
        <motion.div
          className="absolute top-[60%] right-[25%] w-48 h-48"
          animate={{ 
            y: [0, 25, 0],
            x: [0, -15, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tl from-[#87a87815] to-transparent blur-2xl"/>
        </motion.div>

        <motion.div
          className="absolute top-[30%] left-[15%] w-36 h-36"
          animate={{ 
            y: [0, -35, 0],
            x: [0, 25, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#d4af3718] to-transparent blur-xl"/>
        </motion.div>

        <motion.div
          className="absolute bottom-[40%] right-[5%] w-28 h-28"
          animate={{ 
            y: [0, 20, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#faf8f310] to-transparent blur-xl"/>
        </motion.div>

        <motion.div
          className="absolute top-[10%] left-[40%] w-44 h-44"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-b from-[#d4af3712] to-transparent blur-2xl"/>
        </motion.div>

        {/* Subtle particles - floating upward like in LoveStory */}
        {isClient && [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#d4af37]/20 rounded-full"
            style={{
              left: `${(i * 13) % 100}%`,
              top: `${(i * 17) % 100}%`
            }}
            animate={{ 
              y: [-20, -120],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 8 + (i % 3) * 4,
              repeat: Infinity,
              delay: i * 0.3,
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
              className="font-playfair text-[clamp(3rem,14vw,7rem)] font-thin tracking-[0.02em] leading-[1.1]"
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
              className="relative flex items-center justify-center my-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {/* Infinity symbol background */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <svg width="300" height="100" viewBox="0 0 300 100" className="overflow-visible">
                  <motion.path
                    d="M 50 50 Q 100 20, 150 50 T 250 50 Q 200 80, 150 50 T 50 50"
                    stroke="#d4af37"
                    strokeWidth="0.5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
              </motion.div>
              
              {/* Main content */}
              <div className="relative flex items-center gap-8">
                {/* Left flourish */}
                <motion.div className="relative">
                  <svg width="120" height="40" viewBox="0 0 120 40" className="overflow-visible">
                    <motion.path
                      d="M 120 20 Q 60 10, 30 20 T 0 20"
                      stroke="url(#gradient-left)"
                      strokeWidth="1"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.9 }}
                    />
                    <defs>
                      <linearGradient id="gradient-left" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="100%" stopColor="#d4af37" stopOpacity="0.5" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Floating heart left */}
                  <motion.div
                    className="absolute left-10 top-1/2 -translate-y-1/2"
                    animate={{ 
                      y: [-10, -15, -10],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#ff6b6b" opacity="0.3">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </motion.div>
                </motion.div>

                {/* Center ampersand with elegant animation */}
                <motion.div className="relative px-6">
                  <motion.span 
                    className="text-[#d4af37] text-4xl font-thin italic font-playfair relative z-10 block"
                    animate={{ 
                      y: [0, -3, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    &
                  </motion.span>
                  
                  {/* Elegant circle decoration */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ scale: 1, rotate: 180 }}
                    transition={{ duration: 1.5, delay: 1 }}
                  >
                    <div className="relative w-14 h-14">
                      {/* Inner circle */}
                      <motion.div
                        className="absolute inset-0 rounded-full border border-[#d4af3720]"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 0.2, 0.5]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      />
                      {/* Outer dotted circle */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 56 56">
                        <circle
                          cx="28"
                          cy="28"
                          r="26"
                          fill="none"
                          stroke="#d4af37"
                          strokeWidth="0.5"
                          strokeDasharray="2 4"
                          opacity="0.3"
                        />
                      </svg>
                    </div>
                  </motion.div>
                  
                  {/* Sparkles */}
                  {[45, 135, 225, 315].map((angle, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-35px)`
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="w-1 h-1 bg-[#d4af37] rounded-full"/>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Right flourish */}
                <motion.div className="relative">
                  <svg width="120" height="40" viewBox="0 0 120 40" className="overflow-visible">
                    <motion.path
                      d="M 0 20 Q 60 10, 90 20 T 120 20"
                      stroke="url(#gradient-right)"
                      strokeWidth="1"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.9 }}
                    />
                    <defs>
                      <linearGradient id="gradient-right" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#d4af37" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Floating heart right */}
                  <motion.div
                    className="absolute right-10 top-1/2 -translate-y-1/2"
                    animate={{ 
                      y: [-10, -15, -10],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#ff6b6b" opacity="0.3">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Groom name */}
            <motion.h1
              className="font-playfair text-[clamp(3rem,14vw,7rem)] font-thin tracking-[0.02em] leading-[1.1]"
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
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer group"
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