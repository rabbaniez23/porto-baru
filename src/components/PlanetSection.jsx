import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextSplitter from './TextSplitter';

export const PlanetSection = () => {
  const sectionRef = useRef(null);
  const videoContainerRef = useRef(null);
  const linesRef = useRef(null);

  useEffect(() => {
    // 1. Slow, infinite rotation of coordinates lines
    gsap.to(linesRef.current, {
      rotation: 360,
      duration: 80,
      repeat: -1,
      ease: 'none'
    });

    // 2. Exact parallax zoom-in of centerpiece portal container on scroll
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        const scale = 0.8 + self.progress * 0.4;
        const opacity = 0.4 + self.progress * 0.6;
        if (videoContainerRef.current) {
          gsap.set(videoContainerRef.current, { scale, opacity });
        }
      }
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="planet-section margin-bottom select-none" id="about-universe">
      <div className="container-fluid mx-auto">
        
        {/* Steampunk art description headers */}
        <h2 className="text-center font-bounded text-gold">
          <TextSplitter text="an original art project in the sculpture genre, combining steampunk and readymade styles" />
        </h2>
        
        <div className="section-anons anim-text">
          <TextSplitter text="I created unique sculptures, each of which is a philosophical dialogue about the flow of time, the meaning of life, human choice, and inner transformation." />
        </div>

        {/* Central Planet portal loops & titles */}
        <div className="planet-video">
          
          {/* Zooming portal container */}
          <div ref={videoContainerRef} className="video-container">
            <video autoPlay loop muted playsInline>
              <source src="https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/video3.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Rotating coordinates lines background */}
          <div ref={linesRef} className="planet-lines">
            <img src="https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/lines2.png" alt="" />
          </div>

          {/* Portal Left Label */}
          <div className="planet-title-1">
            <h3 className="font-bounded text-gold">
              <TextSplitter text="This is not just art" />
            </h3>
          </div>

          {/* Portal Right Label */}
          <div className="planet-title-2">
            <h3 className="font-bounded text-gold">
              <TextSplitter text="This is a mirror of yourself." />
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

          {/* Satellite Planet 1 (blue) */}
          <div className="planet planet-1 op">
            <img src="https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/planet1.png" alt="Blue planet" className="hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Satellite Planet 2 (red clockwork) */}
          <div className="planet planet-2 op">
            <img src="https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/planet2.png" alt="Clockwork planet" className="hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Satellite Planet 3 (grey swirl) */}
          <div className="planet planet-3 op">
            <img src="https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/planet3.png" alt="Swirl planet" className="hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Satellite Planet 4 (Mars sphere) */}
          <div className="planet planet-4 op">
            <img src="https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/planet4.png" alt="Mars sphere" className="hover:scale-105 transition-transform duration-500" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default PlanetSection;
