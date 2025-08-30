'use client'

import React from 'react';
import { motion } from 'framer-motion';
import settings from '../config/settings';

export default function Gallery() {
  const photos = settings.gallery;

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
          <h2 className="font-playfair text-[clamp(3rem,8vw,5rem)] font-thin tracking-[0.02em] mb-5">
            <span className="bg-gradient-to-r from-[#faf8f3] via-[#d4af37] to-[#faf8f3] bg-clip-text text-transparent">
              OUR MOMENTS
            </span>
          </h2>
          <p className="text-lg font-light tracking-[2px] uppercase opacity-60 text-[#faf8f3]">
            A Collection of Memories
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-[2px] bg-[#1a1a1a] p-[2px] rounded-2xl overflow-hidden">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="aspect-square relative overflow-hidden cursor-pointer group"
              whileHover={{ scale: 0.95 }}
            >
              <img 
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-[#faf8f3] italic opacity-80">
            "Every picture tells a story, but our story is just beginning..."
          </p>
        </motion.div>
      </div>
    </section>
  );
}