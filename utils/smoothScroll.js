// Optimized smooth scroll utility for mobile devices
// Prevents flickering and janky scroll behavior on iOS and other mobile browsers

export const smoothScrollTo = (targetId, options = {}) => {
  const {
    offset = 0,
    duration = 800,
    easing = 'easeInOutCubic',
    callback = null
  } = options;

  const element = document.getElementById(targetId);
  if (!element) return;

  // Check if native smooth scrolling is supported and not on iOS
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isMobile = window.innerWidth < 768;

  // Use native smooth scroll for desktop or non-iOS devices
  if (!isMobile || (!isIOS && !isSafari)) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    if (callback) {
      setTimeout(callback, duration);
    }
    return;
  }

  // Custom smooth scroll implementation for mobile/iOS
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  // Easing functions
  const easingFunctions = {
    linear: t => t,
    easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    easeOutCubic: t => 1 - Math.pow(1 - t, 3),
    easeInCubic: t => t * t * t
  };

  const ease = easingFunctions[easing] || easingFunctions.easeInOutCubic;

  // Disable pointer events during scroll to prevent flickering
  document.body.style.pointerEvents = 'none';

  const animation = currentTime => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easedProgress = ease(progress);
    
    window.scrollTo(0, startPosition + distance * easedProgress);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      // Re-enable pointer events
      document.body.style.pointerEvents = '';
      if (callback) callback();
    }
  };

  requestAnimationFrame(animation);
};

// Debounced scroll handler for better performance
export const createScrollHandler = (callback, delay = 100) => {
  let timeoutId;
  let ticking = false;

  return () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback();
    }, delay);
  };
};

// Passive event listener support check
export const supportsPassive = () => {
  let passiveSupported = false;

  try {
    const options = {
      get passive() {
        passiveSupported = true;
        return false;
      }
    };

    window.addEventListener('test', null, options);
    window.removeEventListener('test', null, options);
  } catch (err) {
    passiveSupported = false;
  }

  return passiveSupported;
};

// Add smooth scroll behavior with proper mobile optimization
export const initSmoothScroll = () => {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    document.documentElement.style.scrollBehavior = 'auto';
    return;
  }

  // Apply optimized scroll settings for mobile
  const isMobile = window.innerWidth < 768;
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (isMobile) {
    // Disable smooth scroll CSS on mobile to prevent conflicts
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Add iOS-specific optimizations
    if (isIOS) {
      document.documentElement.style.webkitOverflowScrolling = 'touch';
      
      // Prevent bounce effect that can cause flickering
      document.body.style.overscrollBehavior = 'none';
    }
  } else {
    // Use native smooth scroll on desktop
    document.documentElement.style.scrollBehavior = 'smooth';
  }
};

// Export utility to disable smooth scroll temporarily
export const disableSmoothScroll = () => {
  document.documentElement.style.scrollBehavior = 'auto';
};

// Export utility to enable smooth scroll
export const enableSmoothScroll = () => {
  initSmoothScroll();
};