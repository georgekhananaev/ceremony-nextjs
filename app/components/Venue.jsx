'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import settings from '../config/settings';

export default function Venue() {
    const { venue, venueGallery } = settings;
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setSelectedImage(venueGallery.images[index]);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const goToPrevious = () => {
        const newIndex = currentIndex === 0 ? venueGallery.images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setSelectedImage(venueGallery.images[newIndex]);
    };

    const goToNext = () => {
        const newIndex = currentIndex === venueGallery.images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setSelectedImage(venueGallery.images[newIndex]);
    };

    return (
        <>
            <section className="min-h-screen py-20 bg-[#faf8f3] relative overflow-hidden">
                {/* Hero Banner with Wide Image */}
                <div className="relative h-[60vh] mb-20">
                    <div className="absolute inset-0">
                        <Image
                            src={venueGallery.heroImage}
                            alt={venue.name}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/50 to-[#1a1a1a]/80"></div>
                    </div>
                    
                    <motion.div 
                        className="absolute inset-0 flex items-center justify-center text-center z-10"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <motion.p 
                                className="text-[#d4af37] text-sm tracking-[4px] uppercase mb-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                Our Venue
                            </motion.p>
                            <motion.h2 
                                className="font-playfair text-[clamp(3rem,8vw,6rem)] font-black text-white leading-tight"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                {venue.name}
                            </motion.h2>
                            <motion.p 
                                className="text-white/80 text-lg mt-4 max-w-2xl mx-auto px-6"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.7 }}
                                viewport={{ once: true }}
                            >
                                {venue.address.district}, {venue.address.city}
                            </motion.p>
                        </div>
                    </motion.div>
                </div>

                {/* Venue Gallery Grid */}
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h3 className="font-playfair text-4xl font-bold text-[#1a1a1a] mb-4">
                            Explore The Venue
                        </h3>
                        <p className="text-lg text-[#1a1a1a]/60">
                            Click on any image to view in full size
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {venueGallery.images.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="relative aspect-square cursor-pointer group overflow-hidden rounded-2xl"
                                onClick={() => openLightbox(index)}
                            >
                                <Image
                                    src={image.url}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <p className="text-white font-medium text-lg">{image.caption}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Lightbox */}
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
                            <Image
                                src={selectedImage.url}
                                alt={selectedImage.alt}
                                fill
                                className="object-contain"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a1a1a] to-transparent p-6">
                                <p className="text-white text-center text-lg">{selectedImage.caption}</p>
                            </div>
                        </motion.div>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {venueGallery.images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                        index === currentIndex 
                                            ? 'bg-[#d4af37] w-8' 
                                            : 'bg-white/50 hover:bg-white'
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