'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import settings from '../config/settings';
import { usePerformance } from '../../hooks/usePerformance';

export default function Contact() {
    const { couple, venue, wedding } = settings;
    const performance = usePerformance();
    
    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            details: [couple.bride.email, couple.groom.email],
            color: "from-[#ff6b6b] to-[#ffc4c4]"
        },
        {
            icon: Phone,
            title: "Phone",
            details: [couple.bride.phone, couple.groom.phone],
            color: "from-[#d4af37] to-[#e6c757]"
        },
        {
            icon: MapPin,
            title: "Venue",
            details: [venue.name, venue.address.district],
            color: "from-[#87a878] to-[#a8c89a]"
        },
        {
            icon: Clock,
            title: "Timeline",
            details: [
                `Ceremony: ${wedding.ceremony.displayTime}`,
                `Reception: ${wedding.reception.displayTime}`
            ],
            color: "from-[#ff6b6b] to-[#d4af37]"
        }
    ];

    const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5799!2d${venue.coordinates.lng}!3d${venue.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ0JzMyLjAiTiAxMDDCsDM0JzMxLjUiRQ!5e0!3m2!1sen!2sth!4v1635835200000!5m2!1sen!2sth`;

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-[#1a1a1a] relative overflow-hidden">
            {/* Elegant Gradient Mesh Background - same as Hero */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]"/>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af3715] via-transparent to-[#ff6b6b10]"/>
                <div className="absolute inset-0 bg-gradient-to-bl from-[#87a87810] via-transparent to-transparent"/>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(212,175,55,0.08)_0%,_transparent_40%)]"/>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(135,168,120,0.06)_0%,_transparent_40%)]"/>
            </div>

            {/* Floating Particles - reduced based on performance */}
            {performance.particleCount > 0 && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(Math.min(performance.particleCount, 20))].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-[#d4af37]/20 rounded-full will-change-transform"
                            style={{
                                left: `${(i * 13) % 100}%`,
                                top: `${(i * 17) % 100}%`
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
            )}

            <div className="max-w-6xl w-full mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: performance.animationLevel === 'none' ? 0 : 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: performance.animationLevel === 'none' ? 0 : 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-playfair text-[clamp(3rem,8vw,5rem)] font-thin tracking-[0.02em] mb-5">
                        <span className="bg-gradient-to-r from-[#faf8f3] via-[#d4af37] to-[#faf8f3] bg-clip-text text-transparent">
                            GET IN TOUCH
                        </span>
                    </h2>
                    <p className="text-lg font-light tracking-[2px] uppercase opacity-60 text-[#faf8f3]">
                        We'd Love To Hear From You
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contactInfo.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: performance.animationLevel === 'none' ? 0 : 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: performance.animationLevel === 'none' ? 0 : 0.6, delay: performance.animationLevel === 'none' ? 0 : index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass p-8 text-center group hover:shadow-2xl transition-all duration-300 rounded-2xl"
                                whileHover={performance.animationLevel === 'full' ? { y: -10 } : {}}
                            >
                                <motion.div 
                                    className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-full mx-auto mb-6 flex items-center justify-center`}
                                    whileHover={performance.animationLevel === 'full' ? { scale: 1.1, rotate: 360 } : {}}
                                    transition={performance.animationLevel === 'full' ? { duration: 0.5 } : {}}
                                >
                                    <Icon className="w-10 h-10 text-white" />
                                </motion.div>
                                
                                <h3 className="text-xl font-semibold mb-4 text-[#d4af37]">
                                    {item.title}
                                </h3>
                                
                                <div className="space-y-2">
                                    {item.details.map((detail, idx) => (
                                        <p key={idx} className="text-[#faf8f3] opacity-70 hover:opacity-100 transition-opacity text-sm">
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Venue Details & Map */}
                <motion.div
                    initial={{ opacity: 0, y: performance.animationLevel === 'none' ? 0 : 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: performance.animationLevel === 'none' ? 0 : 0.8, delay: performance.animationLevel === 'none' ? 0 : 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 grid lg:grid-cols-2 gap-8"
                >
                    {/* Venue Information */}
                    <div className="glass p-8 rounded-2xl">
                        <h3 className="font-playfair text-3xl font-bold mb-6 text-[#d4af37]">
                            {venue.name}
                        </h3>
                        
                        <div className="space-y-4 mb-8">
                            <p className="text-[#faf8f3] opacity-80">
                                {venue.address.street}<br/>
                                {venue.address.district}<br/>
                                {venue.address.city}, {venue.address.postalCode}<br/>
                                {venue.address.country}
                            </p>
                            
                            <div className="pt-4 border-t border-[#d4af37]/20">
                                <p className="text-[#faf8f3] opacity-60 mb-2">
                                    {venue.parking}
                                </p>
                                <p className="text-[#faf8f3] opacity-60">
                                    GPS: {venue.coordinates.lat}, {venue.coordinates.lng}
                                </p>
                            </div>
                        </div>

                        <motion.a
                            href={venue.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-all duration-300"
                            whileHover={performance.animationLevel === 'full' ? { scale: 1.05 } : {}}
                            whileTap={performance.animationLevel === 'full' ? { scale: 0.95 } : {}}
                        >
                            <MapPin className="w-5 h-5" />
                            Get Directions
                            <ExternalLink className="w-4 h-4" />
                        </motion.a>
                    </div>

                    {/* Google Map */}
                    <div className="glass p-2 rounded-2xl overflow-hidden">
                        <iframe
                            src={mapUrl}
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-xl"
                            title="Wedding Venue Location"
                        ></iframe>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}