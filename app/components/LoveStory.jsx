'use client'

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import settings from '../config/settings';

export default function LoveStory() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);
  
  // Map images to milestones
  const imageMap = {
    0: '/love-story/coffe.webp',
    1: '/love-story/first_adventure.webp',
    2: '/love-story/proposal.webp',
    3: '/love-story/wedding.webp'
  };
  
  const milestones = settings.loveStory.map((story, idx) => ({
    ...story,
    id: idx,
    image: imageMap[idx]
  }));

  return (
    <section id="love-story" className="min-h-screen py-40 bg-[#0a0a0a] relative overflow-hidden">
      {/* Elegant Gradient Background - Same as Hero */}
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

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#d4af37]/20 rounded-full"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`
            }}
            animate={{
              y: [-20, -120],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 10 + (i % 3) * 5,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Elegant Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          {/* Decorative Line */}
          <motion.div
            className="h-[0.5px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          <motion.h2
            className="font-playfair text-[clamp(4rem,10vw,7rem)] font-thin leading-[0.9] tracking-[0.02em]"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="block bg-gradient-to-r from-[#faf8f3] via-[#d4af37] to-[#faf8f3] bg-clip-text text-transparent">
              OUR
            </span>
            <span className="block bg-gradient-to-r from-[#faf8f3] via-[#d4af37] to-[#faf8f3] bg-clip-text text-transparent mt-2">
              JOURNEY
            </span>
          </motion.h2>

          <motion.p
            className="mt-8 text-sm font-light tracking-[0.3em] uppercase text-[#faf8f3]/40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            A Collection of Moments
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="w-px h-12 bg-gradient-to-b from-[#d4af37]/30 to-transparent"
              animate={{ scaleY: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        {/* Minimalist Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Golden Thread - Hidden on mobile, visible on desktop */}
          <motion.div
            className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-[0.5px] h-full"
            style={{
              background: "linear-gradient(to bottom, transparent, #d4af37, #d4af37, transparent)",
              opacity: 0.2
            }}
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {/* Milestone Cards */}
          <div className="space-y-32">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Content */}
                  <motion.div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                      isEven ? '' : 'lg:[direction:rtl]'
                    }`}
                    initial={{ x: isEven ? -50 : 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {/* Text Content */}
                    <div className={`${isEven ? 'lg:text-right' : 'lg:text-left lg:[direction:ltr]'} text-center lg:text-inherit`}>
                      <motion.div
                        animate={{
                          opacity: isHovered ? 1 : 0.7,
                          y: isHovered ? -5 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Date */}
                        <p className="text-xs tracking-[0.3em] uppercase text-[#d4af37]/50 mb-4">
                          {milestone.date}
                        </p>

                        {/* Title */}
                        <h3 className="font-playfair text-4xl lg:text-5xl font-thin text-[#faf8f3]/90 mb-4 leading-tight">
                          {milestone.title}
                        </h3>

                        {/* Description */}
                        <p className="text-base text-[#faf8f3]/50 font-light leading-relaxed max-w-sm mx-auto lg:mx-0 lg:ml-auto">
                          {milestone.description}
                        </p>

                        {/* Decorative Element */}
                        <div className={`mt-6 flex ${isEven ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
                          <motion.div
                            className="h-[0.5px] bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent"
                            initial={{ width: 0 }}
                            animate={{ width: isHovered ? 100 : 50 }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Visual Element - Image */}
                    <div className={`${isEven ? '' : 'lg:[direction:ltr]'} flex ${isEven ? 'lg:justify-start' : 'lg:justify-end'} justify-center`}>
                      <div className="relative w-64 h-64 lg:w-80 lg:h-80 group">
                        {/* Image Container */}
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                          {milestone.image && (
                            <Image
                              src={milestone.image}
                              alt={milestone.title}
                              fill
                              className={`object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                              sizes="(max-width: 768px) 256px, 320px"
                            />
                          )}
                          {/* Overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
                        </div>

                        {/* Border Rings */}
                        <div className={`absolute inset-0 rounded-full border-2 border-[#d4af37]/20 transition-all duration-500 ${isHovered ? 'scale-105 border-[#d4af37]/40' : 'scale-100'}`} />
                        <div className={`absolute inset-2 rounded-full border border-[#faf8f3]/10 transition-all duration-700 ${isHovered ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`} />

                        {/* Number Overlay (subtle, on top of image) */}
                        {/*<div className={`absolute inset-0 flex items-end justify-center pb-8 pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>*/}
                        {/*  <span className="font-playfair text-5xl lg:text-6xl font-thin text-[#faf8f3]/30">*/}
                        {/*    {String(index + 1).padStart(2, '0')}*/}
                        {/*  </span>*/}
                        {/*</div>*/}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Elegant Footer Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="mt-40 text-center"
        >
          <div className="max-w-3xl mx-auto">
            {/* Decorative Elements */}
            <div className="flex items-center justify-center mb-12">
              <motion.div
                className="h-[0.5px] w-24 bg-gradient-to-r from-transparent to-[#d4af37]/20"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              />
              <div className="w-2 h-2 bg-[#d4af37]/20 rounded-full mx-6" />
              <motion.div
                className="h-[0.5px] w-24 bg-gradient-to-l from-transparent to-[#d4af37]/20"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              />
            </div>

            {/* Quote */}
            <motion.blockquote
              className="relative"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="font-playfair text-3xl lg:text-4xl font-thin italic text-[#faf8f3]/70 leading-relaxed">
                "In all the world, there is no heart for me like yours.
                <span className="block mt-2">In all the world, there is no love for you like mine."</span>
              </p>
              <cite className="block mt-8 text-xs tracking-[0.3em] uppercase text-[#d4af37]/40 not-italic">
                — Maya Angelou
              </cite>
            </motion.blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}