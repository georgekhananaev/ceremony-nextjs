'use client';

import { motion } from 'framer-motion';

export default function FloatingParticles({ 
  count = 20,
  colors = ['#d4af37', '#ff6b6b', '#4a90e2'],
  sizes = { min: 2, max: 6 },
  duration = { min: 15, max: 30 },
  className = ''
}) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * (sizes.max - sizes.min) + sizes.min,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * (duration.max - duration.min) + duration.min,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-20"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: `${particle.x}%`,
            bottom: '-10px'
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.random() * 200 - 100],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
}