import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextSplitter from './TextSplitter';
import LazyVideo from './LazyVideo';

export const PhilosophySection = () => {
  const sectionRef = useRef(null);
  const videoContainerRef = useRef(null);
  const linesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Slow, infinite rotation of coordinates lines
      gsap.to(linesRef.current, {
        rotation: 360,
        duration: 80,
        repeat: -1,
        ease: 'none'
      });

      // 2. Exact parallax zoom-in of centerpiece portal container on scroll
      gsap.fromTo(videoContainerRef.current,
        { scale: 0.8, opacity: 0.4 },
        {
          scale: 1.2,
          opacity: 1.0,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="planet-section margin-bottom select-none" id="about-universe">
      <div className="container-fluid mx-auto">
        
        {/* Steampunk art description headers */}
        <h2 className="text-center font-bounded text-gold">
          <TextSplitter text="Portfolio rekayasa web kreatif, menghubungkan konsep desain dengan pengembangan React modular" />
        </h2>
        
        <div className="section-anons anim-text">
          <TextSplitter text="Saya membangun ruang digital interaktif yang mengutamakan optimalisasi performa, efek visual kustom, dan transisi animasi yang mulus." />
        </div>

        {/* Central Planet Portal Loops & Titles */}
        <div className="planet-video">
          
          {/* Zooming portal container showing video */}
          <div ref={videoContainerRef} className="video-container relative overflow-hidden rounded-full border border-gold/30">
            <LazyVideo 
              src="/videos/video3.webm" 
              type="video/webm" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Rotating coordinates lines background */}
          <div ref={linesRef} className="planet-lines">
            <img src="/images/lines2.webp" alt="" loading="lazy" />
          </div>

          {/* Portal Left Label */}
          <div className="planet-title-1">
            <h3 className="font-bounded text-gold">
              <TextSplitter text="Membangun Arsitektur" />
            </h3>
          </div>

          {/* Portal Right Label */}
          <div className="planet-title-2">
            <h3 className="font-bounded text-gold">
              <TextSplitter text="Interaksi Sinematik." />
            </h3>
          </div>

        </div>

        {/* Horizontal satellites sequence side-by-side */}
        <div className="planet-items flex justify-between items-start relative mt-24">
          
          {/* Connecting orbital lines background overlay */}
          <div className="anim-lines absolute inset-0 select-none pointer-events-none flex justify-center">
            <svg width="1244" height="398" viewBox="0 0 1244 398" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path opacity="0.15" d="M598 0.5C598 86 515.5 298.4 375.5 332" stroke="#CAC5BD" strokeDasharray="3 3" />
              <path opacity="0.15" d="M597.5 0.5C679.5 92.1667 830.9 303.4 768.5 397" stroke="#CAC5BD" strokeDasharray="3 3" />
              <path opacity="0.15" d="M597.5 0.5C943 207.5 1000 254.5 1243 265.5" stroke="#CAC5BD" strokeDasharray="3 3" />
              <path opacity="0.15" d="M598 0.5C433.167 28.6667 320 107 0.5 295" stroke="#CAC5BD" strokeDasharray="3 3" />
            </svg>
          </div>

          {/* Satellite 1: React & SPA Frameworks */}
          <div className="planet planet-1 op flex flex-col items-center">
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border border-gold/20 flex items-center justify-center bg-black/40 backdrop-blur-md group hover:border-gold transition-all duration-500 shadow-inner">
              <div className="absolute inset-1 border border-dashed border-gold/10 rounded-full group-hover:rotate-180 transition-transform duration-1000 ease-in-out" />
              <div className="relative z-10 text-gold flex flex-col items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="animate-spin-slow-cw">
                  <circle cx="12" cy="12" r="1.5"/>
                  <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(30 12 12)"/>
                  <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(90 12 12)"/>
                  <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(150 12 12)"/>
                </svg>
                <span className="font-bounded text-[8px] md:text-[9px] tracking-wider uppercase mt-2">SPA ENGINE</span>
              </div>
              <div className="absolute inset-0 rounded-full bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
            </div>
            <div className="mt-4 text-center">
              <div className="font-bounded text-gold text-[10px] md:text-xs uppercase tracking-widest">REACT & NEXT.JS</div>
              <div className="font-haval text-[8px] md:text-[9px] uppercase text-gray-500 tracking-wider mt-1">Arsitektur Komponen</div>
            </div>
          </div>

          {/* Satellite 2: GSAP & Animation */}
          <div className="planet planet-2 op flex flex-col items-center">
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border border-gold/20 flex items-center justify-center bg-black/40 backdrop-blur-md group hover:border-gold transition-all duration-500 shadow-inner">
              <div className="absolute inset-1 border border-dashed border-gold/10 rounded-full group-hover:rotate-180 transition-transform duration-1000 ease-in-out" />
              <div className="relative z-10 text-gold flex flex-col items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" strokeDasharray="3 3"/>
                  <path d="M12 6v6l4 2"/>
                  <circle cx="12" cy="12" r="2" fill="currentColor"/>
                </svg>
                <span className="font-bounded text-[8px] md:text-[9px] tracking-wider uppercase mt-2">MOTION TIMELINE</span>
              </div>
              <div className="absolute inset-0 rounded-full bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
            </div>
            <div className="mt-4 text-center">
              <div className="font-bounded text-gold text-[10px] md:text-xs uppercase tracking-widest">GSAP & MOTION</div>
              <div className="font-haval text-[8px] md:text-[9px] uppercase text-gray-500 tracking-wider mt-1">Scrollytelling Interaktif</div>
            </div>
          </div>

          {/* Satellite 3: Tailwind & CSS */}
          <div className="planet planet-3 op flex flex-col items-center">
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border border-gold/20 flex items-center justify-center bg-black/40 backdrop-blur-md group hover:border-gold transition-all duration-500 shadow-inner">
              <div className="absolute inset-1 border border-dashed border-gold/10 rounded-full group-hover:rotate-180 transition-transform duration-1000 ease-in-out" />
              <div className="relative z-10 text-gold flex flex-col items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span className="font-bounded text-[8px] md:text-[9px] tracking-wider uppercase mt-2">GEOMETRIC UI</span>
              </div>
              <div className="absolute inset-0 rounded-full bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
            </div>
            <div className="mt-4 text-center">
              <div className="font-bounded text-gold text-[10px] md:text-xs uppercase tracking-widest">TAILWIND & CSS</div>
              <div className="font-haval text-[8px] md:text-[9px] uppercase text-gray-500 tracking-wider mt-1">Tata Letak Presisi</div>
            </div>
          </div>

          {/* Satellite 4: Vite & Build pipeline */}
          <div className="planet planet-4 op flex flex-col items-center">
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border border-gold/20 flex items-center justify-center bg-black/40 backdrop-blur-md group hover:border-gold transition-all duration-500 shadow-inner">
              <div className="absolute inset-1 border border-dashed border-gold/10 rounded-full group-hover:rotate-180 transition-transform duration-1000 ease-in-out" />
              <div className="relative z-10 text-gold flex flex-col items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
                <span className="font-bounded text-[8px] md:text-[9px] tracking-wider uppercase mt-2">PIPELINE SPEED</span>
              </div>
              <div className="absolute inset-0 rounded-full bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
            </div>
            <div className="mt-4 text-center">
              <div className="font-bounded text-gold text-[10px] md:text-xs uppercase tracking-widest">VITE & PIPELINE</div>
              <div className="font-haval text-[8px] md:text-[9px] uppercase text-gray-500 tracking-wider mt-1">Optimasi Performa</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PhilosophySection;
