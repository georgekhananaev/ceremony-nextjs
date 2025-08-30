'use client';

import { motion } from 'framer-motion';

export default function GradientBackground({ 
  variant = 'default',
  className = '',
  children 
}) {
  const variants = {
    default: {
      gradient: 'from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a]',
      opacity: 0.7
    },
    light: {
      gradient: 'from-[#3a3a3a] via-[#2a2a2a] to-[#1a1a1a]',
      opacity: 0.6
    },
    dark: {
      gradient: 'from-[#1a1a1a] via-[#0a0a0a] to-black',
      opacity: 0.8
    }
  };

  const selectedVariant = variants[variant] || variants.default;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: selectedVariant.opacity }}
        transition={{ duration: 1.5 }}
        className={`absolute inset-0 bg-gradient-to-br ${selectedVariant.gradient}`}
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="0.5" opacity="0.05"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)"/%3E%3C/svg%3E')] opacity-20" />
      {children}
    </div>
  );
}