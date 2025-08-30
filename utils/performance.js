// Performance utilities for optimizing animations and effects based on device capabilities

export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

export const isTablet = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= 768 && window.innerWidth < 1024;
};

export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const isSlowDevice = () => {
  if (typeof window === 'undefined' || !navigator.hardwareConcurrency) return false;
  return navigator.hardwareConcurrency < 4;
};

export const isSlowConnection = () => {
  if (typeof window === 'undefined' || !navigator.connection) return false;
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (!connection || !connection.effectiveType) return false;
  return connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g' || connection.effectiveType === '3g';
};

export const shouldReduceAnimations = () => {
  return isMobile() || isSlowDevice() || prefersReducedMotion() || isSlowConnection();
};

export const getParticleCount = (defaultCount = 20) => {
  if (prefersReducedMotion() || isSlowDevice() || isSlowConnection()) {
    return 0;
  }
  if (isMobile()) {
    return Math.min(5, defaultCount);
  }
  if (isTablet()) {
    return Math.min(10, defaultCount);
  }
  return defaultCount;
};

export const getAnimationDuration = (defaultDuration = 1) => {
  if (shouldReduceAnimations()) {
    return 0;
  }
  if (isMobile()) {
    return defaultDuration * 0.5;
  }
  return defaultDuration;
};

// Throttle function for performance optimization
export const throttle = (func, delay) => {
  let timeoutId;
  let lastExecTime = 0;
  
  return function (...args) {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

// Debounce function for performance optimization
export const debounce = (func, delay) => {
  let timeoutId;
  
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  if (typeof window === 'undefined' || !window.performance) return null;
  
  const navigation = performance.getEntriesByType('navigation')[0];
  const paint = performance.getEntriesByType('paint');
  
  return {
    navigationTiming: navigation,
    paintTiming: paint,
    memory: performance.memory,
  };
};

// Device capability detection
export const getDeviceCapabilities = () => {
  if (typeof window === 'undefined') {
    return {
      isMobile: false,
      isTablet: false,
      isSlowDevice: false,
      hasReducedMotion: false,
      hasSlowConnection: false,
      shouldOptimize: false,
      particleCount: 20,
      animationLevel: 'full',
    };
  }
  
  const mobile = isMobile();
  const tablet = isTablet();
  const slow = isSlowDevice();
  const reducedMotion = prefersReducedMotion();
  const slowConnection = isSlowConnection();
  
  let animationLevel = 'full';
  if (reducedMotion || slow || slowConnection) {
    animationLevel = 'none';
  } else if (mobile) {
    animationLevel = 'minimal';
  } else if (tablet) {
    animationLevel = 'moderate';
  }
  
  return {
    isMobile: mobile,
    isTablet: tablet,
    isSlowDevice: slow,
    hasReducedMotion: reducedMotion,
    hasSlowConnection: slowConnection,
    shouldOptimize: mobile || tablet || slow || reducedMotion || slowConnection,
    particleCount: getParticleCount(),
    animationLevel,
  };
};