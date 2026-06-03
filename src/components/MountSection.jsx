import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextSplitter from './TextSplitter';

export const MountSection = () => {
  const triggerRef = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 992px)", () => {
      // Desktop parallax layers
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      tl.to(layer1Ref.current, {
        yPercent: 25,
        ease: 'none'
      }, 0);

      tl.to(layer2Ref.current, {
        yPercent: 12,
        ease: 'none'
      }, 0);
    });

    mm.add("(max-width: 991px)", () => {
      // Mobile/tablet subtle parallax layers
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      tl.to(layer1Ref.current, {
        yPercent: 6,
        ease: 'none'
      }, 0);

      tl.to(layer2Ref.current, {
        yPercent: 3,
        ease: 'none'
      }, 0);
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section ref={triggerRef} className="mount-section select-none relative w-full overflow-hidden" id="parallax-mount">
      
      {/* Parallax Container */}
      <div className="mount-animate relative w-full h-[700px] md:h-[1330px] overflow-hidden">
        
        {/* Layer 1: Background Celestial Mountain / Constellations */}
        <div ref={layer1Ref} className="mount-bg absolute inset-0 z-1 w-full h-full pointer-events-none select-none">
          <img 
            src="/images/mount1.png" 
            alt="Astronomical mountain background" 
            className="w-full h-full object-cover object-top scale-110" 
          />
        </div>

        {/* Layer 2: Foreground Mechanical/Organic Mountain Outline */}
        <div ref={layer2Ref} className="mount-parallax absolute bottom-0 left-0 right-0 z-3 h-[300px] md:h-[590px] w-full pointer-events-none select-none">
          <img 
            src="/images/mount2.png" 
            alt="Mountain foreground overlay" 
            className="w-full h-full object-cover object-top scale-105" 
          />
        </div>

        {/* Text/Titles positioned over the mountains */}
        <div className="mount-titles absolute top-12 md:top-24 left-0 right-0 z-5 flex flex-col justify-center items-center text-center px-4">
          <h2 className="font-bounded text-gold text-2xl md:text-6xl uppercase mb-6 leading-none">
            <TextSplitter text="CELESTIAL BOUNDS" />
          </h2>
          <div className="section-anons font-haval uppercase text-xs md:text-sm tracking-[0.2em] text-gold/80 max-w-[784px] leading-relaxed">
            <TextSplitter text="Where geometry meets the infinite skyline. Guided by stellar coordinates, we construct bespoke WebGL installations designed for astronomical fidelity." />
          </div>
        </div>

        {/* Cinematic dark bottom gradient overlay to blend into About section */}
        <div className="absolute inset-x-0 bottom-0 h-[25%] z-4 bg-gradient-to-t from-[#0E0E0E] to-transparent pointer-events-none" />

      </div>

    </section>
  );
};

export default MountSection;
