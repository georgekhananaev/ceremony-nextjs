import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

export default function Gallery() {
    // Using beautiful stock photos from Unsplash
    const photos = [
        {
            url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80",
            alt: "Romantic couple photo"
        },
        {
            url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&q=80",
            alt: "Beautiful wedding rings"
        },
        {
            url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500&q=80",
            alt: "Engagement photo"
        },
        {
            url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500&q=80",
            alt: "Wedding bouquet"
        },
        {
            url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=500&q=80",
            alt: "Couple walking together"
        },
        {
            url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=500&q=80",
            alt: "Wedding celebration"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-amber-25 to-rose-50">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full mb-6">
                        <Camera className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-6">
                        Our <span className="text-rose-500">Moments</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        A collection of our most cherished memories together,
                        capturing the joy and love we share every day.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
                                <img
                                    src={photo.url}
                                    alt={photo.alt}
                                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-lg text-slate-600 italic">
                        "Every picture tells a story, but our story is just beginning..."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}