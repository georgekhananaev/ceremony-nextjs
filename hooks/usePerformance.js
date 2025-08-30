import { useState, useEffect } from 'react';
import { getDeviceCapabilities } from '../utils/performance';

export const usePerformance = () => {
  const [capabilities, setCapabilities] = useState(() => getDeviceCapabilities());

  useEffect(() => {
    const updateCapabilities = () => {
      setCapabilities(getDeviceCapabilities());
    };

    // Update on resize
    window.addEventListener('resize', updateCapabilities);
    
    // Update on connection change
    if (navigator.connection) {
      navigator.connection.addEventListener('change', updateCapabilities);
    }

    // Update on reduced motion preference change
    const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionMediaQuery.addEventListener) {
      motionMediaQuery.addEventListener('change', updateCapabilities);
    } else {
      motionMediaQuery.addListener(updateCapabilities);
    }

    return () => {
      window.removeEventListener('resize', updateCapabilities);
      if (navigator.connection) {
        navigator.connection.removeEventListener('change', updateCapabilities);
      }
      if (motionMediaQuery.removeEventListener) {
        motionMediaQuery.removeEventListener('change', updateCapabilities);
      } else {
        motionMediaQuery.removeListener(updateCapabilities);
      }
    };
  }, []);

  return capabilities;
};

export default usePerformance;