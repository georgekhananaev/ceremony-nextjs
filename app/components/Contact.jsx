'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            details: ["patinya@wedding.com", "dar@wedding.com"],
            color: "from-[#ff6b6b] to-[#ffc4c4]"
        },
        {
            icon: Phone,
            title: "Phone",
            details: ["+66 123 456 789", "+66 987 654 321"],
            color: "from-[#d4af37] to-[#e6c757]"
        },
        {
            icon: MapPin,
            title: "Venue",
            details: ["The Botanical Loft", "456 Modern Avenue"],
            color: "from-[#87a878] to-[#a8c89a]"
        },
        {
            icon: Clock,
            title: "Timeline",
            details: ["Ceremony: 4:00 PM", "Reception: 7:00 PM"],
            color: "from-[#ff6b6b] to-[#d4af37]"
        }
    ];

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
                    <h2 className="font-playfair text-[clamp(3rem,8vw,5rem)] font-black mb-5 text-gradient-gold">
                        GET IN TOUCH
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
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass p-8 text-center group hover:shadow-2xl transition-all duration-300 rounded-2xl"
                                whileHover={{ y: -10 }}
                            >
                                <motion.div 
                                    className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-full mx-auto mb-6 flex items-center justify-center`}
                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Icon className="w-10 h-10 text-white" />
                                </motion.div>
                                
                                <h3 className="text-xl font-semibold mb-4 text-[#d4af37]">
                                    {item.title}
                                </h3>
                                
                                <div className="space-y-2">
                                    {item.details.map((detail, idx) => (
                                        <p key={idx} className="text-[#faf8f3] opacity-70 hover:opacity-100 transition-opacity">
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 glass p-2 rounded-2xl overflow-hidden"
                >
                    <div className="aspect-video bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-xl flex items-center justify-center">
                        <div className="text-center">
                            <MapPin className="w-16 h-16 text-[#d4af37] mx-auto mb-4" />
                            <p className="text-[#faf8f3] opacity-60">Interactive Map Coming Soon</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}