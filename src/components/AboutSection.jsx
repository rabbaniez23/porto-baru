import React from 'react';
import TextSplitter from './TextSplitter';

export const AboutSection = () => {
  return (
    <section className="main-about margin-bottom select-none relative z-10" id="about-author">
      
      {/* Interactive Off-center Decorative Rotating Orbits in Background */}
      <div className="about-bg absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Orbit 1 - Rotating Clockwise */}
        <img 
          src="/images/circle1.svg" 
          alt="Celestial Orbit 1" 
          className="absolute left-[10%] top-[20%] w-[436px] h-[436px] opacity-10 animate-spin duration-[40s] linear" 
          loading="lazy"
          style={{ willChange: 'transform' }}
        />
        {/* Orbit 2 - Rotating Counter-Clockwise */}
        <img 
          src="/images/circle2.svg" 
          alt="Celestial Orbit 2" 
          className="bg-2 opacity-[0.13]" 
          loading="lazy"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: '436px',
            height: '436px',
            marginLeft: '-218px',
            marginTop: '-218px',
            pointerEvents: 'none',
            willChange: 'transform'
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-1">
        
        {/* Upper Grid Layout: Side-by-side Portrait/Offset Image Frames */}
        <div className="about-images flex flex-col md:flex-row items-center justify-center gap-12 mb-24">
          
          {/* Main Portrait */}
          <div className="image border border-gold/20 p-4 w-full md:w-[380px] h-[480px] hover:scale-103 transition-transform duration-500">
            <img 
              src="/images/rsh-24247.webp" 
              alt="Author working" 
              className="w-full h-full object-cover filter sepia brightness-[0.8] contrast-[1.1]" 
              loading="lazy"
            />
          </div>

          {/* Offset Portrait (Slightly smaller, shifted upwards on desktop) */}
          <div className="image image-2 border border-gold/20 p-4 w-full md:w-[320px] h-[400px] hover:scale-103 transition-transform duration-500">
            <img 
              src="/images/rsh-24408.webp" 
              alt="Steampunk workspace" 
              className="w-full h-full object-cover filter sepia brightness-[0.8] contrast-[1.1]" 
              loading="lazy"
            />
          </div>

        </div>

        {/* Lower Info Layout: Main Header & Side Narrative */}
        <div className="about-info flex flex-col md:flex-row items-start justify-between gap-12">
          
          {/* Left Column: Heading */}
          <div className="w-full md:w-[55%]">
            <h2 className="text-left font-bounded text-gold text-2xl md:text-6xl uppercase leading-tight">
              <TextSplitter text="MEMBANGUN ARSITEKTUR" />
              <br />
              <TextSplitter text="FRONTEND KREATIF" />
            </h2>
          </div>

          {/* Right Column: Narrative */}
          <div className="w-full md:w-[40%] text-gold font-haval uppercase text-sm leading-relaxed tracking-wider">
            <div className="anons flex flex-col gap-6">
              <p>
                <TextSplitter text="Nama saya Naufal Rizki Rabbani. Sebagai frontend engineer, saya fokus membangun aplikasi web interaktif, pustaka komponen responsif, dan optimasi animasi." />
              </p>
              <p className="text-gray-400">
                <TextSplitter text="Saya memadukan rekayasa kode dengan prinsip desain modern untuk menghasilkan antarmuka yang cepat, modular, dan responsif di semua perangkat." />
              </p>
              <div className="mt-4">
                <a href="#contacts" className="link-default text-gold inline-flex items-center">
                  <span data-attr="Mari berkolaborasi">
                    <span>Mari berkolaborasi</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutSection;
