import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextSplitter from './TextSplitter';
import LazyVideo from './LazyVideo';

export const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const titleContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin and animate the backdrop video lens on scroll
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom center',
          scrub: true
        }
      })
      .fromTo(videoRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1.0, opacity: 1.0, ease: 'none' },
        0
      )
      .fromTo(titleContainerRef.current,
        { y: 0, opacity: 1 },
        { y: -100, opacity: 0, ease: 'none' },
        0
      );
    });

    return () => ctx.revert();
  }, []);

  const casesData = [
    {
      id: '01',
      title: 'MAJAK.IO',
      category: 'Web Application',
      description: 'A modern web application built to deliver a clean, responsive, and accessible user experience with fast frontend performance.',
      problem: 'Creating a polished landing and product-style interface with responsive layout and smooth interaction.',
      techStack: 'Vue.js / Tailwind CSS / Vite',
      demo: 'https://majak-io.vercel.app/',
      img: '/images/projects/majak.webp'
    },
    {
      id: '02',
      title: 'QURAN APP',
      category: 'Progressive Web App',
      description: 'A Quran reading application that provides a simple, accessible, and mobile-friendly digital experience.',
      problem: 'Making Quran content easier to access through a lightweight web app with API integration and PWA capability.',
      techStack: 'Vue.js / API Integration / PWA',
      demo: 'https://quranapp-re4x.vercel.app/',
      img: '/images/projects/quran.webp'
    },
    {
      id: '03',
      title: 'SAHABAT BELAJAR',
      category: 'Education Platform',
      description: 'An education-focused web platform designed to support digital learning activities with a clean and structured interface.',
      problem: 'Helping learning content become more organized, accessible, and engaging through a web-based education platform.',
      techStack: 'Vue.js / Laravel / Tailwind CSS / Education',
      demo: 'https://sahabat-belajar.vercel.app/',
      img: '/images/projects/sahabat-belajar.webp'
    },
    {
      id: '04',
      title: 'GYMAI',
      category: 'AI-Powered Health Project',
      description: 'A team-based health technology project that explores AI integration for fitness and workout-related experiences.',
      problem: 'Combining health, user interaction, and AI-assisted features into a collaborative digital product.',
      techStack: 'AI Integration / Team Work / Health Tech',
      demo: 'https://gymai.zicofarry.com/',
      img: '/images/projects/gymai.webp'
    },
    {
      id: '05',
      title: 'MEONG APP',
      category: 'Community / Pet Care App',
      description: 'A pet care and community-oriented application concept focused on creating a friendly digital experience for cat lovers.',
      problem: 'Designing a playful and useful interface for community-based pet care interaction.',
      techStack: 'Community App / Pet Care / UI/UX',
      demo: 'https://meong-exn8dje8y-monecruzzs-projects.vercel.app/',
      img: '/images/projects/meong.webp'
    }
  ];

  return (
    <section ref={sectionRef} className="main-cases select-none relative w-full" id="cases">
      
      {/* Background Interactive Video Lens (Pins on Scroll) */}
      <div 
        ref={videoRef} 
        className="cases-video pointer-events-none hidden md:block opacity-0"
        style={{ transformOrigin: 'center center' }}
      >
        <div className="video-container">
          <LazyVideo 
            src="/videos/video3.webm" 
            type="video/webm"
            className="w-full h-full object-cover scale-110"
          />
        </div>
      </div>

      {/* Main Sticky Title Container */}
      <div ref={titleContainerRef} className="cases-titles w-full h-[60vh] flex flex-col justify-center items-center text-center relative z-10 px-4">
        <h2 className="font-bounded text-gold text-4xl md:text-7xl uppercase mb-6 leading-none">
          <TextSplitter text="SELECTED WORKS" />
        </h2>
        <h3 className="font-haval uppercase text-sm md:text-base tracking-[0.25em] text-gray-400 max-w-2xl leading-relaxed">
          <TextSplitter text="A curated collection of web applications built with modern frameworks, focusing on performance, clean design, and user-centered digital experiences." />
        </h3>
      </div>

      {/* Grid of Interactive Project Cards */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="cases-list flex flex-wrap justify-between gap-y-12 md:gap-y-24">
          
          {casesData.map((project, idx) => {
            const isSmall = idx === 1 || idx === 2;
            return (
              <a 
                key={project.id}
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`item ${isSmall ? 'small' : ''} group block relative`}
              >
                
                {/* Image Frame with internal zoom & shrink overlay */}
                <div className="item-image relative border border-gold/30 rounded-none overflow-hidden p-4 group-hover:p-3 transition-all duration-500">
                  <div className="image-container w-full h-full overflow-hidden relative">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out" 
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        // Fallback to first original asset to prevent empty screens
                        e.target.src = '/images/w1.webp';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>

                {/* Info Text Footer */}
                <div className="item-name flex flex-col md:flex-row items-center justify-between text-gold font-haval uppercase tracking-wider text-xs md:text-sm mt-4 gap-2 md:gap-0">
                  <div className="flex items-center gap-4">
                    <span className="number text-[10px] font-bounded text-gold/50">{project.id}</span>
                    <span className="font-medium group-hover:text-white transition-colors">{project.title}</span>
                  </div>
                  <span className="date font-bounded text-gold/60 text-[10px] flex items-center gap-1 group-hover:text-white transition-colors">
                    LIVE DEMO <span className="text-[8px]">↗</span>
                  </span>
                </div>

                {/* Subtitle/Type - Tech Stack */}
                <div className="text-[10px] uppercase font-bounded tracking-widest text-gray-500 mt-2 pl-4 md:pl-8">
                  {project.techStack}
                </div>

                {/* Category & Description and Problem Focus */}
                <div className="text-xs text-gray-400 mt-3 pl-4 md:pl-8 normal-case font-haval leading-relaxed max-w-md">
                  <div className="text-[10px] font-bounded text-gold/60 uppercase tracking-wider mb-1">
                    Category: {project.category}
                  </div>
                  <p className="mb-2 text-gray-300">{project.description}</p>
                  <p className="text-[11px] text-gold/70"><span className="font-bounded uppercase text-[9px] tracking-wider text-gold mr-1">Focus:</span> {project.problem}</p>
                </div>

              </a>
            );
          })}

        </div>
      </div>

    </section>
  );
};

export default ProjectsSection;
