import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const Preloader = ({ onEnter }) => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const buttonRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 1. Initial State
    // Set circle path length to be fully offset (hidden)
    if (pathRef.current) {
      const length = 302; // Roughly 2 * Math.PI * 48
      pathRef.current.style.strokeDasharray = length;
      pathRef.current.style.strokeDashoffset = length;
    }

    // 2. Animate Gears & Path
    const tl = gsap.timeline();

    tl.to('.gear-big', {
      scale: 1,
      opacity: 1,
      duration: 3,
      ease: 'power4.out'
    });

    tl.to('.gear-2, .gear-4', {
      scale: 1,
      opacity: 1,
      duration: 3,
      ease: 'power4.out'
    }, 0.2);

    tl.to('.gear-3, .gear-5', {
      scale: 1,
      opacity: 1,
      duration: 3,
      ease: 'power4.out'
    }, 0.4);

    // Draw the circular SVG border
    tl.to(pathRef.current, {
      strokeDashoffset: 0,
      duration: 4,
      ease: 'power3.out'
    }, 1.0);

    // Show Enter Button
    tl.to(buttonRef.current, {
      opacity: 1,
      duration: 2,
      ease: 'power2.out',
      onComplete: () => {
        setIsLoaded(true);
        // Add "load" class to parent load-line to enable hover pointer events
        document.querySelector('.load-line')?.classList.add('load');
      }
    }, 2.5);

    return () => {
      tl.kill();
    };
  }, []);

  const handleEnterClick = () => {
    if (!isLoaded) return;

    // Trigger parent callback to start audio and scroll trigger
    if (onEnter) onEnter();

    // Outro animation
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      onComplete: () => {
        // Hide preloader element entirely after fade out
        if (containerRef.current) {
          containerRef.current.style.display = 'none';
        }
      }
    });

    // Translate up to create portal transition feel
    gsap.to(containerRef.current, {
      y: '-100%',
      duration: 1.5,
      ease: 'power3.inOut',
      delay: 0.5
    });

    // Zoom in main hero media once preload is done
    gsap.fromTo('.hero-media', 
      { scale: 1.4 }, 
      { scale: 1, duration: 2, ease: 'power4.out', delay: 0.5 }
    );

    // Split text stagger effect for hero text
    gsap.fromTo('.main-hero h1 .char', 
      { opacity: 0, filter: 'blur(8px)', y: 20 },
      { opacity: 1, filter: 'blur(0px)', y: 0, stagger: 0.03, duration: 1.2, ease: 'sine.out', delay: 0.8 }
    );

    gsap.fromTo('.main-hero .info-title .char', 
      { opacity: 0, filter: 'blur(8px)', y: 15 },
      { opacity: 1, filter: 'blur(0px)', y: 0, stagger: 0.03, duration: 1.2, ease: 'sine.out', delay: 1.0 }
    );
  };

  return (
    <div ref={containerRef} className="preload select-none">
      <div className="gears">
        <img className="gear-big gear1" src="/images/gear1.png" alt="gear-big" />
        <img className="gear-2" src="/images/gear2.png" alt="gear-2" style={{ position: 'absolute', top: '25%', left: '25%', transform: 'scale(0.7)' }} />
        <img className="gear-4" src="/images/gear2.png" alt="gear-4" style={{ position: 'absolute', top: '45%', left: '15%', transform: 'scale(0.7)' }} />
        <img className="gear-3" src="/images/gear3.png" alt="gear-3" />
        <img className="gear-5" src="/images/gear3.png" alt="gear-5" />
      </div>
      <div className="load-line cursor-pointer" onClick={handleEnterClick}>
        <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
          <path 
            ref={pathRef}
            d="M 50,50 m -48,0 a 48,48 0 1,0 96,0 a 48,48 0 1,0 -96,0" 
            stroke="#E1D9C1" 
            strokeWidth="0.5" 
            fill="none" 
            strokeLinecap="round"
          />
        </svg>
        <div ref={buttonRef} className="pre-button text-gold hover:scale-105 transition-transform duration-300">
          ENTER
        </div>
      </div>
    </div>
  );
};

export default Preloader;
