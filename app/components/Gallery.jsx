'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import settings from '../config/settings';

export default function Gallery() {
  const photos = settings.gallery;
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(photos[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(photos[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(photos[newIndex]);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <>
      <section className="min-h-screen flex items-center justify-center py-20 bg-[#1a1a1a]">

        <div className="max-w-6xl w-full mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div 
              className="h-[0.5px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent mb-12"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            
            <h2 className="font-playfair text-[clamp(3rem,8vw,5rem)] font-thin tracking-[0.02em] mb-5">
              <span className="bg-gradient-to-r from-[#faf8f3] via-[#d4af37] to-[#faf8f3] bg-clip-text text-transparent">
                OUR MOMENTS
              </span>
            </h2>
            <p className="text-lg font-light tracking-[2px] uppercase opacity-60 text-[#faf8f3]">
              A Collection of Memories
            </p>
            <p className="text-sm text-[#d4af37]/50 mt-4">
              Click on any image to view in full size
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square relative overflow-hidden cursor-pointer group rounded-xl lg:rounded-2xl"
                whileHover={{ scale: 0.98 }}
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                
                {/* Overlay with caption and icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute inset-0 flex flex-col justify-between p-4">
                    <div className="flex justify-end">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      {photo.caption && (
                        <p className="text-white text-sm lg:text-base font-light">
                          {photo.caption}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Golden border on hover */}
                <div className="absolute inset-0 border-2 border-[#d4af37] opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-xl lg:rounded-2xl pointer-events-none" />
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
            <p className="text-lg text-[#faf8f3] italic opacity-80 font-playfair">
              "Every picture tells a story, but our story is just beginning..."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lightbox - EXACT same as Venue */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1a1a1a]/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-[#d4af37] transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#d4af37] transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#d4af37] transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a1a1a] to-transparent p-6">
                <p className="text-white text-center text-lg">{selectedImage.caption}</p>
              </div>
            </motion.div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {photos.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-[#d4af37]' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    openLightbox(index);
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}