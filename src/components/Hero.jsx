import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextSplitter from './TextSplitter';
import LazyVideo from './LazyVideo';

gsap.registerPlugin(ScrollTrigger);

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

      // 4. Scroll-Triggered Parallax & Zoom Transition (no pinning to prevent breaking subsequent sections)
      gsap.timeline({
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      })
      .to('.portal-wrapper', {
        scale: 1.6,
        opacity: 0,
        y: 80,
        ease: 'none'
      }, 0)
      .to('.hero-info', {
        y: -100,
        opacity: 0,
        ease: 'none'
      }, 0)
      .to('.hero-video', {
        opacity: 0.3,
        ease: 'none'
      }, 0);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="main-hero margin-bottom select-none " id="hero">
      
      {/* 1. Artist / Title Typography overlays */}
      <div className="hero-info">
        <div className="container-fluid h-100  flex flex-col justify-center mx-auto px-6">
          <div className="info-container flex flex-col justify-between h-full">
            <h1 ref={h1Ref} className="notranslate uppercase font-bounded text-gold ">
              <TextSplitter text="Monecruz" /> <span><TextSplitter text="Universe" /></span>
            </h1>
            <div ref={titleRef} className="info-title">
              <TextSplitter text="Naufal rizki rabbani" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Layered backgrounds, coordinates lines, and portal loops */}
      <div ref={mediaRef} className="hero-media">
        
        {/* Background Vortex loop (video1.mp4) */}
        <div className="hero-video">
          <LazyVideo src="/videos/video1.webm" type="video/webm" />
        </div>

        {/* Steampunk Frame & Inner Video Portal */}
        <div className="hero-image" >
          <div className="portal-wrapper">
            
            {/* Casing staircase framework */}
            <div className="image-container">
              <img src="/images/main1.webp" alt="" fetchPriority="high" />
            </div>

            {/* Coordinate lines overlay */}
            <div className="image-lines">
              <img src="/images/lines.webp" alt="" loading="lazy" />
            </div>

            {/* Spherical brass framing portal overlay */}
            <div className="image-portal">
              <img src="/images/portal.webp" alt="" fetchPriority="high" />
            </div>

            {/* Centered target video (video2.mp4) inside the portal casing */}
            <div className="video-portal">
              <LazyVideo src="/videos/video2.webm" type="video/webm" />
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default Hero;
