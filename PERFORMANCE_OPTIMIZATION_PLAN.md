# Performance Optimization Plan for Wedding Template
## Focus: Mobile & Older Devices

## 🎯 Current Performance Issues

### 1. **Excessive Animations on Mobile**
- **Hero Component**: 20+ floating particles running continuously
- **LoveStory Component**: 20 animated particles + complex scroll animations
- **Contact Component**: Multiple particle animations
- **WeddingDetails Component**: Heavy tab transitions and particle effects
- **Countdown Component**: Complex number flipping animations

### 2. **Heavy Animation Libraries**
- Framer Motion loaded in 8/10 components (~54KB)
- Many animations run continuously, draining battery
- No respect for `prefers-reduced-motion` accessibility setting

### 3. **Render Performance Issues**
- Mouse tracking in Hero causes constant re-renders
- No debouncing/throttling on scroll or mouse events
- Particles re-render on every frame
- Complex gradient animations without GPU acceleration

## 📱 Mobile-First Optimization Strategy

### Phase 1: Reduce Animation Complexity on Mobile (Immediate Impact)

#### 1.1 Conditional Animation Loading
```javascript
// Detect mobile and reduced motion preference
const isMobile = window.innerWidth < 768;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const shouldReduceAnimations = isMobile || prefersReducedMotion;
```

#### 1.2 Particle Reduction Strategy
| Component | Desktop | Mobile | Old Devices |
|-----------|---------|---------|-------------|
| Hero | 20 particles | 5 particles | 0 particles |
| LoveStory | 20 particles | 5 particles | 0 particles |
| Contact | 20 particles | 5 particles | 0 particles |
| WeddingDetails | 20 particles | 5 particles | 0 particles |

#### 1.3 Animation Simplification
- **Mobile**: Disable continuous animations, use simple fade-ins only
- **Reduced Motion**: Replace all animations with instant transitions
- **Old Devices**: Detect via performance API and disable heavy effects

### Phase 2: Performance Optimizations

#### 2.1 Lazy Load Heavy Components
```javascript
// Components to lazy load
const Gallery = lazy(() => import('./components/Gallery'));
const RSVPForm = lazy(() => import('./components/RSVPForm'));
const WeddingDetails = lazy(() => import('./components/WeddingDetails'));
```

#### 2.2 Optimize Floating Particles Component
```javascript
// Current: Re-renders every frame
// Optimized: Use CSS animations instead of JS
.particle {
  animation: float 20s linear infinite;
  will-change: transform;
}

@keyframes float {
  from { transform: translateY(100vh) translateX(0); }
  to { transform: translateY(-100px) translateX(50px); }
}
```

#### 2.3 Debounce/Throttle Event Handlers
```javascript
// Mouse tracking - throttle to 60fps max
const handleMouseMove = throttle((e) => {
  setMousePosition({ x: e.clientX, y: e.clientY });
}, 16);

// Scroll events - throttle to 30fps
const handleScroll = throttle(() => {
  // scroll logic
}, 33);
```

### Phase 3: Animation Performance Improvements

#### 3.1 Use CSS Instead of JS Animations Where Possible
- Convert particle animations to pure CSS
- Use CSS transitions for hover effects
- Implement CSS-only scroll indicators

#### 3.2 GPU Acceleration
```css
/* Add to animated elements */
.animated-element {
  will-change: transform, opacity;
  transform: translateZ(0); /* Force GPU layer */
  backface-visibility: hidden;
}
```

#### 3.3 Reduce Framer Motion Usage
- Replace simple animations with CSS transitions
- Use Framer Motion only for complex orchestrated animations
- Consider lighter alternatives like CSS animations or Web Animations API

### Phase 4: Mobile-Specific Optimizations

#### 4.1 Viewport-Based Loading
```javascript
// Only animate elements in viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Start animation
      } else {
        // Pause animation
      }
    });
  },
  { threshold: 0.1 }
);
```

#### 4.2 Touch-Optimized Interactions
- Remove hover effects on touch devices
- Simplify click targets (min 44x44px)
- Reduce visual complexity on small screens

#### 4.3 Network-Aware Loading
```javascript
// Detect connection speed
const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
const slowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');

if (slowConnection) {
  // Disable animations
  // Load lower quality images
  // Reduce particle count to 0
}
```

## 🔧 Implementation Checklist

### Immediate Actions (Week 1)
- [ ] Add mobile detection utility
- [ ] Implement `prefers-reduced-motion` support
- [ ] Reduce particle count on mobile (20 → 5)
- [ ] Disable mouse tracking on mobile devices
- [ ] Add `will-change` to animated elements

### Short-term (Week 2)
- [ ] Convert particle animations to CSS
- [ ] Implement throttling for scroll/mouse events
- [ ] Lazy load heavy components (Gallery, RSVP, WeddingDetails)
- [ ] Add intersection observer for animation triggers
- [ ] Optimize Countdown component for mobile

### Medium-term (Week 3-4)
- [ ] Replace simple Framer Motion animations with CSS
- [ ] Implement CSS-only variants for mobile
- [ ] Add performance monitoring
- [ ] Create loading states for lazy components
- [ ] Optimize bundle splitting

### Long-term Improvements
- [ ] Consider Service Worker for offline support
- [ ] Implement adaptive loading based on device capabilities
- [ ] Add performance budgets to build process
- [ ] Create static versions for very old devices

## 📊 Expected Performance Gains

### Mobile Performance Metrics
| Metric | Current | Target | Improvement |
|--------|---------|--------|-------------|
| First Contentful Paint | ~2.5s | <1.5s | 40% |
| Time to Interactive | ~5s | <3s | 40% |
| Total Blocking Time | ~800ms | <300ms | 62% |
| Cumulative Layout Shift | ~0.2 | <0.1 | 50% |
| Battery Usage | High | Low | 60% reduction |

### Bundle Size Reduction
| Component | Current | Optimized | Savings |
|-----------|---------|-----------|---------|
| Animations | ~54KB | ~20KB | 63% |
| Particles | ~15KB | ~5KB | 67% |
| Overall JS | 169KB | ~120KB | 29% |

## 🎨 Progressive Enhancement Strategy

### Level 1: Core Experience (All Devices)
- Static content
- Basic typography
- Simple fade-in animations
- Essential interactions only

### Level 2: Enhanced (Modern Mobile)
- Subtle animations
- Reduced particle effects (5 max)
- Optimized images
- Touch-optimized interactions

### Level 3: Full Experience (Desktop/High-end)
- All animations enabled
- Full particle effects
- Mouse tracking
- Complex transitions

## 🔍 Testing Strategy

### Device Testing Matrix
- **Old Android**: Android 8 or older
- **Old iOS**: iOS 12 or older
- **Low-end devices**: <4GB RAM
- **Slow networks**: 3G simulation
- **Battery saver mode**: Test with low power mode

### Performance Testing Tools
1. Lighthouse (Mobile preset)
2. WebPageTest (Various devices)
3. Chrome DevTools (CPU/Network throttling)
4. Real device testing via BrowserStack

## 💡 Code Examples

### 1. Mobile-Aware Particle Component
```javascript
const FloatingParticles = ({ count = 20 }) => {
  const [particleCount, setParticleCount] = useState(count);
  
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const isSlowDevice = navigator.hardwareConcurrency < 4;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReduced || isSlowDevice) {
      setParticleCount(0);
    } else if (isMobile) {
      setParticleCount(Math.min(5, count));
    }
  }, [count]);
  
  if (particleCount === 0) return null;
  
  // Render particles with CSS animations
};
```

### 2. Performance-Aware Animation Wrapper
```javascript
const AnimationWrapper = ({ children, animation }) => {
  const shouldAnimate = usePerformanceCheck();
  
  if (!shouldAnimate) {
    return children;
  }
  
  return (
    <motion.div {...animation}>
      {children}
    </motion.div>
  );
};
```

### 3. Throttled Event Handler
```javascript
const useThrottledMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    if (window.innerWidth < 768) return; // Skip on mobile
    
    const handleMove = throttle((e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    }, 50); // 20fps max
    
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);
  
  return position;
};
```

## 📝 Monitoring & Metrics

### Key Performance Indicators
1. **Core Web Vitals**: LCP, FID, CLS
2. **Custom Metrics**: Animation frame rate, Battery usage
3. **User Metrics**: Bounce rate on mobile, Time on site
4. **Device Distribution**: % of users on older devices

### Performance Budget
```javascript
// performance.config.js
module.exports = {
  budgets: [
    {
      type: 'bundle',
      name: 'main',
      maximumWarning: '150kb',
      maximumError: '200kb'
    },
    {
      type: 'animation',
      frameRate: {
        mobile: 30,
        desktop: 60
      }
    }
  ]
};
```

## 🎯 Success Criteria

### Mobile Experience
- ✅ Smooth scrolling on all devices
- ✅ No jank during animations
- ✅ <3s Time to Interactive
- ✅ Battery-friendly (no continuous animations)
- ✅ Works on 3G networks

### Accessibility
- ✅ Respects prefers-reduced-motion
- ✅ Keyboard navigable
- ✅ Screen reader friendly
- ✅ Works without JavaScript

### Performance
- ✅ 90+ Lighthouse score on mobile
- ✅ <150KB JavaScript bundle
- ✅ <1.5s First Contentful Paint
- ✅ No layout shifts

---

## 🚀 Next Steps

1. **Implement performance monitoring** to establish baseline
2. **Start with Phase 1** - Reduce animations on mobile
3. **Test on real devices** - Use BrowserStack or similar
4. **Iterate based on metrics** - Monitor and adjust
5. **Document changes** - Keep track of what works

This plan prioritizes user experience on mobile and older devices while maintaining the elegant aesthetic on capable devices.