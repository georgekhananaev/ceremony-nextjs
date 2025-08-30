'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingMusicControl() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100 && !hasStarted) {
        setIsVisible(true);
        setHasStarted(true);
        
        // Try to play immediately on scroll
        if (audioRef.current && !isPlaying) {
          audioRef.current.play().then(() => {
            setIsPlaying(true);
          }).catch(error => {
            console.log('Autoplay on scroll failed:', error);
          });
        }
      }
      
      // Also try to play if already visible but not playing
      if (hasStarted && !isPlaying && audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Silently fail, will retry on next scroll
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasStarted, isPlaying]);

  // Separate effect to handle autoplay
  useEffect(() => {
    if (hasStarted && audioRef.current && !isPlaying) {
      // Try to play immediately
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch(error => {
          console.log('Autoplay prevented, user interaction required:', error);
          // If autoplay fails, we'll play on first user interaction
          const playOnInteraction = () => {
            if (audioRef.current && !isPlaying) {
              audioRef.current.play().then(() => {
                setIsPlaying(true);
                document.removeEventListener('click', playOnInteraction);
                document.removeEventListener('scroll', playOnInteraction);
                document.removeEventListener('touchstart', playOnInteraction);
              }).catch(err => console.log('Play failed:', err));
            }
          };
          
          document.addEventListener('click', playOnInteraction, { once: true });
          document.addEventListener('scroll', playOnInteraction, { once: true });
          document.addEventListener('touchstart', playOnInteraction, { once: true });
        });
      }
    }
  }, [hasStarted, isPlaying]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(error => {
          console.log('Audio playback failed:', error);
        });
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music.mp3"
        preload="auto"
        playsInline
      />
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-6 left-6 z-[100]"
          >
            <motion.button
              onClick={toggleMusic}
              className="relative w-12 h-12 bg-[#1a1a1a]/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#d4af37]/30 hover:border-[#d4af37] transition-colors group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? (
                <Volume2 className="w-5 h-5 text-[#d4af37]" />
              ) : (
                <VolumeX className="w-5 h-5 text-[#d4af37]/60" />
              )}
              
              {/* Pulse effect when playing */}
              {isPlaying && (
                <motion.div
                  className="absolute inset-0 rounded-full border border-[#d4af37]/50"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ pointerEvents: 'none' }}
                />
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}