import React from 'react';
import TextSplitter from './TextSplitter';

export const Intro = () => {
  return (
    <section className="main-intro padding select-none relative z-10" id="intro">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
          
          {/* Left Column (Main Section Header) */}
          <div className="w-full md:w-1/2">
            <h2 className="text-left font-bounded text-gold text-2xl md:text-6xl uppercase leading-tight">
              <TextSplitter text="EXPLORE THE" />
              <br />
              <TextSplitter text="MECHANICAL COGNITION" />
            </h2>
          </div>

          {/* Right Column (Intro Descriptive Paragraphs) */}
          <div className="w-full md:w-5/12 text-gold font-haval uppercase text-sm md:text-base leading-relaxed tracking-wider flex flex-col gap-6 pt-2 md:pt-4">
            <p className="anim-text">
              <TextSplitter text="We exist at the interface of mechanical perfection and visual scrollytelling. Every gear rotation, every portal transition, and every interactive animation is mathematically orchestrated to generate an immersive kinetic experience." />
            </p>
            <p className="anim-text text-gray-400">
              <TextSplitter text="By merging clean React states with GSAP timelines, we override default browser scrolling behavior, establishing a seamless flow of steampunk momentum that takes you through our works, history, and active milestones." />
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Intro;
