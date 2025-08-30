import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-16 bg-gradient-to-b from-rose-50 to-slate-100">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <Heart className="w-8 h-8 text-rose-500 fill-rose-400" />
                        <h3 className="text-3xl font-light text-slate-800">Contact Us</h3>
                        <Heart className="w-8 h-8 text-rose-500 fill-rose-400" />
                    </div>
                    <p className="text-lg text-slate-600">
                        Have questions about our special day? We'd love to hear from you!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 shadow-lg border border-rose-100/50"
                    >
                        <h4 className="text-2xl font-semibold text-slate-800 mb-6">Bride's Family</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-rose-500" />
                                <span className="text-slate-600">patinya.family@email.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-rose-500" />
                                <span className="text-slate-600">+66 (0) 123-456-789</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 shadow-lg border border-rose-100/50"
                    >
                        <h4 className="text-2xl font-semibold text-slate-800 mb-6">Groom's Family</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-rose-500" />
                                <span className="text-slate-600">groom.family@email.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-rose-500" />
                                <span className="text-slate-600">+66 (0) 987-654-321</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-rose-500 to-amber-500 rounded-3xl p-8 text-white text-center mb-12"
                >
                    <h4 className="text-2xl font-semibold mb-4">Wedding Registry</h4>
                    <p className="text-lg leading-relaxed mb-6">
                        Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift,
                        we would be grateful for contributions toward our dream honeymoon.
                    </p>
                    <div className="flex items-center justify-center gap-3">
                        <MapPin className="w-5 h-5" />
                        <span className="text-lg">Destination: Maldives 🏝️</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="flex justify-center gap-6 mb-8">
                        <a href="#" className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href="#" className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                            <Facebook className="w-6 h-6" />
                        </a>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-slate-600 mb-4">
                        <span>Made with</span>
                        <Heart className="w-4 h-4 text-rose-500 fill-rose-400 animate-pulse" />
                        <span>for Patinya & Dar</span>
                    </div>

                    <p className="text-slate-500">
                        © 2026 • Save the Date: March 07, 2026
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}