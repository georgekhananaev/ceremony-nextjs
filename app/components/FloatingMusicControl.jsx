'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingMusicControl() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }

    // Listen for custom play music event
    const handlePlayMusicEvent = () => {
      setIsVisible(true); // Show the music button
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setHasAutoPlayed(true);
        }).catch(error => {
          console.log('Audio playback failed:', error);
        });
      }
    };

    window.addEventListener('playBackgroundMusic', handlePlayMusicEvent);
    
    return () => {
      window.removeEventListener('playBackgroundMusic', handlePlayMusicEvent);
    };
  }, [isPlaying]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show the music button when scrolling past 100px
      if (currentScrollY > 100 && !isVisible) {
        setIsVisible(true);
        
        // Try autoplay only once when first visible
        if (!hasAutoPlayed && audioRef.current) {
          audioRef.current.play().then(() => {
            setIsPlaying(true);
            setHasAutoPlayed(true);
          }).catch(error => {
            console.log('Autoplay failed, user interaction required:', error);
            // Set hasAutoPlayed to true even on failure to prevent retry
            setHasAutoPlayed(true);
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial scroll position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, hasAutoPlayed]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        // Pause the music
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Play the music
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