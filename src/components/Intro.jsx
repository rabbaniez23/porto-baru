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
              <TextSplitter text="ENGINEERING DIGITAL" />
              <br />
              <TextSplitter text="EXPERIENCES" />
            </h2>
          </div>

          {/* Right Column (Intro Descriptive Paragraphs) */}
          <div className="w-full md:w-5/12 text-gold font-haval uppercase text-sm md:text-base leading-relaxed tracking-wider flex flex-col gap-6 pt-2 md:pt-4">
            <p className="anim-text">
              <TextSplitter text="I’m Naufal Rizki Rabbani, the person behind MONECRUZ — a Computer Science student at Universitas Pendidikan Indonesia who builds modern web experiences with clean engineering, AI-powered workflows, and a strong communication mindset." />
            </p>
            <p className="anim-text text-gray-400">
              <TextSplitter text="By combining technical web development with public speaking, teaching, and leadership, I bridge the gap between complex engineering concepts and clear, impactful communication." />
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Intro;
