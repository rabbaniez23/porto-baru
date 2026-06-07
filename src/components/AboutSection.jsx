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
          <div className="image border border-gold/20 p-4 w-full max-w-[320px] md:max-w-none md:w-[380px] h-[350px] md:h-[480px] hover:scale-103 transition-transform duration-500">
            <img 
              src="/images/profile/profile-main.webp" 
              alt="Naufal Rizki Rabbani profile photo" 
              className="w-full h-full object-cover filter sepia brightness-[0.8] contrast-[1.1]" 
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/rsh-24247.webp';
              }}
            />
          </div>

          {/* Offset Portrait (Slightly smaller, shifted upwards on desktop) */}
          <div className="image image-2 border border-gold/20 p-4 w-full max-w-[280px] md:max-w-none md:w-[320px] h-[280px] md:h-[400px] hover:scale-103 transition-transform duration-500">
            <img 
              src="/images/profile/profile-speaking.webp" 
              alt="Naufal Rizki Rabbani public speaking activity" 
              className="w-full h-full object-cover filter sepia brightness-[0.8] contrast-[1.1]" 
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/rsh-24408.webp';
              }}
            />
          </div>

        </div>

        {/* Lower Info Layout: Main Header & Side Narrative */}
        <div className="about-info flex flex-col md:flex-row items-start justify-between gap-12">
          
          {/* Left Column: Heading & Personal Quote */}
          <div className="w-full md:w-[50%] flex flex-col justify-between">
            <div>
              <h2 className="text-left font-bounded text-gold text-3xl md:text-7xl uppercase leading-none mb-8">
                <TextSplitter text="BEYOND" />
                <br />
                <TextSplitter text="THE CODE" />
              </h2>
            </div>
            
            {/* Personal Quote */}
            <div className="border-l border-gold/45 pl-6 text-left py-2 max-w-md mt-6 md:mt-12">
              <p className="font-haval italic uppercase text-xs md:text-sm tracking-widest text-gold/90 leading-relaxed m-0">
                "A great developer does not just build systems that work; they communicate ideas that move people forward."
              </p>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="w-full md:w-[45%] text-gold font-haval uppercase text-xs tracking-wider leading-relaxed">
            <div className="anons flex flex-col gap-6 text-left">
              <p className="normal-case text-gray-300 text-sm md:text-base font-light font-haval leading-relaxed">
                I am Naufal Rizki Rabbani, the person behind <strong className="text-gold font-medium">MONECRUZ</strong> — a Computer Science student and Full-Stack Developer focused on building modern digital products through clean engineering, AI-powered workflows, and strong communication.
              </p>
              <p className="normal-case text-gray-300 text-sm md:text-base font-light font-haval leading-relaxed">
                My background blends web development, education, and public speaking. I build responsive applications with tools like Vue.js, Laravel, Tailwind CSS, Vite, and API-driven architecture. Beyond coding, I have experience teaching and mentoring, which shaped the way I explain ideas, guide people, and simplify complex concepts.
              </p>
              <p className="normal-case text-gray-300 text-sm md:text-base font-light font-haval leading-relaxed">
                The stage is also part of my journey. As a Master of Ceremony, moderator, and presenter, I learned how to communicate with clarity, adapt to different audiences, and lead moments with confidence. For me, a great developer does not only write functional code — they also communicate the ideas behind it.
              </p>
              
              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 border-t border-gold/15 pt-6">
                {['Full-Stack Development', 'AI Workflow', 'Public Speaking', 'Teaching & Leadership'].map((hl) => (
                  <span key={hl} className="text-[10px] md:text-xs font-bounded uppercase tracking-wider text-gold/80">
                    // {hl}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutSection;
