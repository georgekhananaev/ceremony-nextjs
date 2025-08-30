import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Camera, Music, Utensils } from 'lucide-react';

export default function WeddingDetails() {
    const events = [
        {
            title: "Ceremony",
            time: "4:00 PM",
            location: "Royal Gardens Chapel",
            address: "123 Romantic Lane, Bangkok 10400",
            icon: Camera,
            description: "Join us as we exchange vows surrounded by nature's beauty"
        },
        {
            title: "Cocktail Hour",
            time: "5:30 PM",
            location: "Garden Terrace",
            address: "Royal Gardens Resort",
            icon: Music,
            description: "Celebrate with drinks and light appetizers"
        },
        {
            title: "Reception",
            time: "7:00 PM",
            location: "Grand Ballroom",
            address: "Royal Gardens Resort",
            icon: Utensils,
            description: "Dinner, dancing, and celebration under the stars"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-rose-50 relative overflow-hidden">
            <div
                className="absolute top-0 left-0 w-1/3 h-full bg-no-repeat bg-left-top opacity-10"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=60)'}}
            ></div>
            <div
                className="absolute bottom-0 right-0 w-1/3 h-full bg-no-repeat bg-right-bottom opacity-10"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=60)', transform: 'scaleX(-1)'}}
            ></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-6">
                        Wedding <span className="text-rose-500">Details</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        We can't wait to celebrate this special day with our loved ones.
                        Here's everything you need to know about our wedding celebration.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {events.map((event, index) => {
                        const IconComponent = event.icon;
                        return (
                            <motion.div
                                key={event.title}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-rose-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                            >
                                <div className="text-center mb-6">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-slate-800 mb-2">{event.title}</h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-slate-600">
                                        <Clock className="w-5 h-5 text-rose-500 flex-shrink-0" />
                                        <span className="font-medium">{event.time}</span>
                                    </div>

                                    <div className="flex items-start gap-3 text-slate-600">
                                        <MapPin className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">{event.location}</p>
                                            <p className="text-sm text-slate-500">{event.address}</p>
                                        </div>
                                    </div>

                                    <p className="text-slate-600 leading-relaxed pt-2">{event.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-rose-500 to-amber-500 rounded-3xl p-8 text-white max-w-3xl mx-auto shadow-xl hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-semibold mb-4">Dress Code</h3>
                        <p className="text-lg leading-relaxed">
                            We kindly request cocktail attire for our special day.
                            Think elegant and sophisticated - we can't wait to see you dressed up!
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}