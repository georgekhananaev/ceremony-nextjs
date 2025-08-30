'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ScrollIndicator({ 
  text = 'Scroll Down',
  onClick,
  className = '',
  showText = true,
  color = '#d4af37'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {showText && (
        <span className="text-sm uppercase tracking-wider" style={{ color }}>
          {text}
        </span>
      )}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-6 h-6" style={{ color }} />
      </motion.div>
    </motion.div>
  );
}