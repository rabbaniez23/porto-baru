import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { Analytics } from '@vercel/analytics/react';

// Import Custom Components
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import PhilosophySection from './components/PhilosophySection';
import ProjectsSection from './components/ProjectsSection';
import ParallaxSection from './components/ParallaxSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [lenisInstance, setLenisInstance] = useState(null);

  useEffect(() => {
    // 1. Lock scrolling on body initially for preloader
    document.body.classList.add('vh');

    // 2. Initialize Lenis Smooth Scroll to match original site configuration
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      lerp: 0.08,
      syncTouch: true,
      syncTouchLerp: 0.05,
      touchInertiaMultiplier: 25,
      infinite: false,
    });

    lenis.stop(); // Wait for user to click ENTER
    setLenisInstance(lenis);

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    gsap.ticker.lagSmoothing(0);

    // 3. Register Global Text Splitter ScrollTrigger Animations
    // Every text block or heading with letters will reveal sequentially on scroll
    const textTriggers = gsap.utils.toArray('.anim-text, h2, h3, h4').forEach((el) => {
      const chars = el.querySelectorAll('.char');
      if (chars.length > 0) {
        gsap.fromTo(chars, 
          { opacity: 0, filter: 'blur(8px)', skewX: 0 },
          {
            opacity: 1,
            filter: 'blur(0px)',
            skewX: 0,
            stagger: 0.03,
            ease: 'sine.out',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom-=15%',
              end: 'bottom center+=10%',
              scrub: true,
            }
          }
        );
      }
    });

    // 4. Clean up on unmount
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const handleEnterUniverse = () => {
    // Unlock body scroll and start Lenis smooth scrolling
    document.body.classList.remove('vh');
    if (lenisInstance) {
      lenisInstance.start();
    }
    // Recalculate ScrollTrigger parameters since layout has settled
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  };

  return (
    <div className="wrapper relative min-h-screen bg-[#0E0E0E] text-[#E1D9C1]">
      
      {/* 1. Steampunk Gear Preloader */}
      <Preloader onEnter={handleEnterUniverse} />

      {/* 2. Interactive Navigation Header */}
      <Navbar lenisInstance={lenisInstance} />

      {/* 3. Main Sections Layout */}
      <main className="relative z-10 w-full overflow-hidden">
        
        {/* Section 1: Hero Landing portal */}
        <Hero />

        {/* Section 2: Scrollytelling Intro */}
        <Intro />

        {/* Section 3: Central Planet portal */}
        <PhilosophySection />

        {/* Section 4: Selected Works */}
        <ProjectsSection />

        {/* Section 5: Layered celestial parallax mountains */}
        <ParallaxSection />

        {/* Section 6: About narrative & spinning brass background */}
        <AboutSection />

        {/* Section 7: Upcoming Milestones & conferences */}
        <ExperienceSection />

        {/* Section 8: Interactive coordinates submission form & details */}
        <Footer />

      </main>
      
      {/* Vercel Web Analytics */}
      <Analytics />
      
    </div>
  );
}
