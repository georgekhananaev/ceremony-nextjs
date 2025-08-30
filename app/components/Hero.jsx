import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Heart } from 'lucide-react';

export default function Hero() {
  const petals = Array.from({ length: 15 }); // Create 15 petals

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-amber-50 overflow-hidden">
      {/* Floral background */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518895318323-c6ea58b50f75?auto=format&fit=crop&w=1920&q=80)' }}
      ></div>
      
      {/* Floating Petals */}
      <div className="absolute inset-0 pointer-events-none">
        {petals.map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-rose-200/50 rounded-full"
            style={{
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ top: '-10%', opacity: 0 }}
            animate={{
              top: '110%',
              x: (Math.random() - 0.5) * 300,
              rotate: Math.random() * 360,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'loop',
              delay: Math.random() * 15,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Heart decoration */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <Heart className="w-16 h-16 text-rose-400 fill-rose-300" />
            <div className="absolute inset-0 animate-ping">
              <Heart className="w-16 h-16 text-rose-300 opacity-20" />
            </div>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-light text-slate-800 mb-4 tracking-tight">
            <span className="block text-4xl md:text-5xl text-rose-500 font-script mb-2">You're Invited to Celebrate</span>
            <span className="bg-gradient-to-r from-rose-500 via-rose-600 to-amber-500 bg-clip-text text-transparent">
              Patinya
            </span>
            <span className="block text-3xl md:text-4xl text-slate-600 font-light mt-4">&</span>
            <span className="bg-gradient-to-r from-amber-500 via-rose-600 to-rose-500 bg-clip-text text-transparent">
              Dar
            </span>
          </h1>
        </motion.div>

        {/* Wedding date */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-rose-200/50">
            <Calendar className="w-5 h-5 text-rose-500" />
            <span className="text-xl text-slate-700 font-medium">March 07, 2026</span>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-rose-200/50">
            <MapPin className="w-5 h-5 text-rose-500" />
            <span className="text-xl text-slate-700 font-medium">Royal Gardens, Bangkok</span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col items-center justify-center animate-bounce"
        >
          <p className="text-rose-500 text-sm mb-1">Scroll</p>
          <div className="w-6 h-10 border-2 border-rose-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-rose-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}