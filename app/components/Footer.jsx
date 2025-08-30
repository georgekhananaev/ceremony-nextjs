'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import settings from '../config/settings';

export default function Footer() {
    const { couple, social } = settings;
    
    const socialLinks = [
        { name: 'IG', href: `https://instagram.com/${social.instagram.wedding.replace('@', '')}` },
        { name: 'FB', href: social.facebook.eventPage },
        { name: social.instagram.hashtag, href: `https://instagram.com/explore/tags/${social.instagram.hashtag.replace('#', '')}` }
    ];

    return (
        <footer className="py-20 bg-[#1a1a1a] relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-5">
                <div 
                    className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%]"
                    style={{
                        backgroundImage: `
                            radial-gradient(circle at 20% 80%, #ff6b6b 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #d4af37 0%, transparent 50%)
                        `,
                        animation: 'float 25s ease-in-out infinite'
                    }}
                />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    {/* Names */}
                    <motion.h3 
                        className="font-playfair text-6xl md:text-7xl font-black mb-8 text-gradient-gold"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        {settings.couple.bride.name[0]} & {settings.couple.groom.name[0]}
                    </motion.h3>

                    {/* Contact Info */}
                    <p className="text-lg text-[#faf8f3] opacity-80 leading-relaxed mb-12">
                        We can't wait to celebrate with you<br/>
                        For any questions, please contact us at<br/>
                        <a 
                            href={`mailto:${settings.couple.email}`}
                            className="text-[#d4af37] hover:text-[#ff6b6b] transition-colors duration-300"
                        >
                            {settings.couple.email}
                        </a>
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-6 mb-16">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ 
                                    scale: 1.1,
                                    rotate: 45,
                                    backgroundColor: '#d4af37'
                                }}
                                className="w-14 h-14 border border-[#d4af37] flex items-center justify-center text-[#d4af37] hover:text-[#1a1a1a] transition-all duration-300"
                            >
                                <motion.span
                                    whileHover={{ rotate: -45 }}
                                    className="text-sm font-medium"
                                >
                                    {link.name}
                                </motion.span>
                            </motion.a>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8"></div>

                    {/* Copyright and Credits */}
                    <div className="space-y-4">
                        <p className="text-sm text-[#faf8f3] opacity-50">
                            © {new Date(settings.wedding.date).getFullYear()} {settings.couple.bride.name} & {settings.couple.groom.name}. All rights reserved.
                        </p>
                        
                        {/* Animated Heart */}
                        <motion.div
                            animate={{ 
                                scale: [1, 1.2, 1],
                            }}
                            transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="inline-block"
                        >
                            <Heart className="w-6 h-6 text-[#ff6b6b] fill-[#ff6b6b] mx-auto" />
                        </motion.div>

                        <p className="text-xs text-[#faf8f3] opacity-30 tracking-wider uppercase">
                            Made with love for our special day
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}