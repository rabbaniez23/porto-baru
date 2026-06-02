import React from 'react';
import TextSplitter from './TextSplitter';

export const AboutSection = () => {
  return (
    <section className="main-about margin-bottom select-none relative z-10" id="about-author">
      
      {/* Interactive Off-center Decorative Rotating Orbits in Background */}
      <div className="about-bg absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Orbit 1 - Rotating Clockwise */}
        <img 
          src="https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/circle1.svg" 
          alt="Celestial Orbit 1" 
          className="absolute left-[10%] top-[20%] w-[436px] h-[436px] opacity-10 animate-spin duration-[40s] linear" 
        />
        {/* Orbit 2 - Rotating Counter-Clockwise */}
        <img 
          src="https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/circle2.svg" 
          alt="Celestial Orbit 2" 
          className="bg-2 opacity-[0.13]" 
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: '436px',
            height: '436px',
            marginLeft: '-218px',
            marginTop: '-218px',
            pointerEvents: 'none'
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-1">
        
        {/* Upper Grid Layout: Side-by-side Portrait/Offset Image Frames */}
        <div className="about-images flex flex-col md:flex-row items-center justify-center gap-12 mb-24">
          
          {/* Main Portrait */}
          <div className="image border border-gold/20 p-4 w-full md:w-[380px] h-[480px] hover:scale-103 transition-transform duration-500">
            <img 
              src="https://paralleluniverse.com.ua/wp-content/uploads/2024/02/rsh-24247.jpg" 
              alt="Author working" 
              className="w-full h-full object-cover filter sepia brightness-[0.8] contrast-[1.1]" 
            />
          </div>

          {/* Offset Portrait (Slightly smaller, shifted upwards on desktop) */}
          <div className="image image-2 border border-gold/20 p-4 w-full md:w-[320px] h-[400px] hover:scale-103 transition-transform duration-500">
            <img 
              src="https://paralleluniverse.com.ua/wp-content/uploads/2024/02/rsh-24408.jpg" 
              alt="Steampunk workspace" 
              className="w-full h-full object-cover filter sepia brightness-[0.8] contrast-[1.1]" 
            />
          </div>

        </div>

        {/* Lower Info Layout: Main Header & Side Narrative */}
        <div className="about-info flex flex-col md:flex-row items-start justify-between gap-12">
          
          {/* Left Column: Heading */}
          <div className="w-full md:w-[55%]">
            <h2 className="text-left font-bounded text-gold text-4xl md:text-6xl uppercase leading-tight">
              <TextSplitter text="CRAFTING TIMELESS" />
              <br />
              <TextSplitter text="KINETIC INSTALLATIONS" />
            </h2>
          </div>

          {/* Right Column: Narrative */}
          <div className="w-full md:w-[40%] text-gold font-haval uppercase text-sm leading-relaxed tracking-wider">
            <div className="anons flex flex-col gap-6">
              <p>
                <TextSplitter text="My name is Alex. As a visual engineer, I specialize in forging bespoke 3D scrollytelling experiences, WebGL shader interactions, and lightweight reactive systems." />
              </p>
              <p className="text-gray-400">
                <TextSplitter text="Every project is a fusion of rigorous mechanical physics and visual storytelling, engineered to deliver smooth, stutter-free performance across all viewports." />
              </p>
              <div className="mt-4">
                <a href="#contacts" className="link-default text-gold inline-flex items-center">
                  <span data-attr="Let's forge together">
                    <span>Let's forge together</span>
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
