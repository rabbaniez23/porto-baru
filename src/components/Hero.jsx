import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TextSplitter from './TextSplitter';

export const Hero = () => {
  const mediaRef = useRef(null);
  const h1Ref = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance zoom on the outer casing/vortex media
      gsap.from(mediaRef.current, {
        scale: 1.4,
        duration: 2.0,
        ease: 'power5.out', // Matches Quint.easeOut
      });

      // 2. Character-by-character split reveal stagger on Main Title (H1)
      const h1Chars = h1Ref.current?.querySelectorAll('.char');
      if (h1Chars && h1Chars.length > 0) {
        gsap.fromTo(h1Chars, 
          { opacity: 0, filter: 'blur(8px)', skewX: 0 },
          {
            opacity: 1,
            filter: 'blur(0px)',
            skewX: 0,
            duration: 1.2,
            stagger: 0.05,
            ease: 'sine.out',
          }
        );
      }

      // 3. Character-by-character split reveal stagger on Artist Title (.info-title)
      const titleChars = titleRef.current?.querySelectorAll('.char');
      if (titleChars && titleChars.length > 0) {
        gsap.fromTo(titleChars, 
          { opacity: 0, filter: 'blur(8px)', skewX: 0 },
          {
            opacity: 1,
            filter: 'blur(0px)',
            skewX: 0,
            duration: 1.2,
            delay: 1.0,
            stagger: 0.05,
            ease: 'sine.out',
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="main-hero margin-bottom select-none" id="hero">
      
      {/* 1. Artist / Title Typography overlays */}
      <div className="hero-info">
        <div className="container-fluid h-100 flex flex-col justify-center mx-auto px-6">
          <div className="info-container flex flex-col justify-between h-full">
            <h1 ref={h1Ref} className="notranslate uppercase font-bounded text-gold">
              <TextSplitter text="Monecruz" /> <span><TextSplitter text="universe" /></span>
            </h1>
            <div ref={titleRef} className="info-title">
              <TextSplitter text="Ihor Yaskevych" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Layered backgrounds, coordinates lines, and portal loops */}
      <div ref={mediaRef} className="hero-media">
        
        {/* Background Vortex loop (video1.mp4) */}
        <div className="hero-video">
          <video autoPlay loop muted playsInline>
            <source src="https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/video1.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Steampunk Frame & Inner Video Portal */}
        <div className="hero-image " >
          
          {/* Casing staircase framework */}
          <div className="image-container h-100 ">
            <img src="/images/main1.png" alt="" />
          </div>

          {/* Coordinate lines overlay */}
          <div className="image-lines">
            <img src="/images/lines.png" alt="" />
          </div>

          {/* Spherical brass framing portal overlay */}
          <div className="image-portal">
            <img src="/images/portal.png" alt="" />
          </div>

          {/* Centered target video (video2.mp4) inside the portal casing */}
          <div className="video-portal">
            <video autoPlay loop muted playsInline>
              <source src="https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/video2.mp4" type="video/mp4" />
            </video>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
