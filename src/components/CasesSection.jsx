import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextSplitter from './TextSplitter';

export const CasesSection = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const titleContainerRef = useRef(null);

  useEffect(() => {
    // Pin and animate the backdrop video lens on scroll
    const backdropTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top bottom',
      end: 'bottom center',
      scrub: true,
      onUpdate: (self) => {
        const scale = 0.5 + self.progress * 0.5;
        const opacity = self.progress;
        if (videoRef.current) {
          gsap.set(videoRef.current, { scale, opacity });
        }
        if (titleContainerRef.current) {
          gsap.set(titleContainerRef.current, { 
            y: -100 * self.progress, 
            opacity: 1 - self.progress 
          });
        }
      }
    });

    return () => {
      backdropTrigger.kill();
    };
  }, []);

  const casesData = [
    {
      id: '01',
      title: 'CHRONO MACHINE',
      type: 'WebGL / Interactive Engine',
      date: '2026',
      img: 'https://paralleluniverse.com.ua/wp-content/uploads/2025/06/w1.jpg'
    },
    {
      id: '02',
      title: 'ASTRONOMICAL GEARS',
      type: 'Kinetic Webapp / GSAP',
      date: '2025',
      img: 'https://paralleluniverse.com.ua/wp-content/uploads/2025/06/w2.jpg'
    },
    {
      id: '03',
      title: 'BRASS ENGINE DESIGN',
      type: 'Model Drafting / 3D Layout',
      date: '2025',
      img: 'https://paralleluniverse.com.ua/wp-content/uploads/2025/06/w3.jpg'
    },
    {
      id: '04',
      title: 'ORBITAL CELESTIALS',
      type: 'Interactive Shaders',
      date: '2024',
      img: 'https://paralleluniverse.com.ua/wp-content/uploads/2021/03/e1.jpg'
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
          <video 
            loop 
            muted 
            autoPlay 
            playsInline 
            className="w-full h-full object-cover scale-110"
          >
            <source src="https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/video3.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Main Sticky Title Container */}
      <div ref={titleContainerRef} className="cases-titles w-full h-[60vh] flex flex-col justify-center items-center text-center relative z-10 px-4">
        <h2 className="font-bounded text-gold text-4xl md:text-7xl uppercase mb-6 leading-none">
          <TextSplitter text="SELECTED EXPERIENCES" />
        </h2>
        <h3 className="font-haval uppercase text-sm md:text-base tracking-[0.25em] text-gray-400 max-w-2xl leading-relaxed">
          <TextSplitter text="Interactive web concepts, mechanical simulations, and kinetic prototypes designed to evoke a sense of machine age marvel." />
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
                href={`#case-${project.id}`}
                className={`item ${isSmall ? 'small' : ''} group block relative`}
              >
                
                {/* Image Frame with internal zoom & shrink overlay */}
                <div className="item-image relative border border-gold/30 rounded-none overflow-hidden p-4 group-hover:p-3 transition-all duration-500">
                  <div className="image-container w-full h-full overflow-hidden relative">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>

                {/* Info Text Footer */}
                <div className="item-name flex items-center justify-between text-gold font-haval uppercase tracking-wider text-xs md:text-sm mt-4">
                  <div className="flex items-center gap-4">
                    <span className="number text-[10px] font-bounded text-gold/50">{project.id}</span>
                    <span className="font-medium group-hover:text-white transition-colors">{project.title}</span>
                  </div>
                  <span className="date font-bounded text-gold/60 text-[10px]">{project.date}</span>
                </div>

                {/* Subtitle/Type */}
                <div className="text-[10px] uppercase font-bounded tracking-widest text-gray-500 mt-1 pl-8">
                  {project.type}
                </div>

              </a>
            );
          })}

        </div>
      </div>

    </section>
  );
};

export default CasesSection;
