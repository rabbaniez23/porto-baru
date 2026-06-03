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
              <TextSplitter text="MEMBANGUN PENGALAMAN" />
              <br />
              <TextSplitter text="DIGITAL INTERAKTIF" />
            </h2>
          </div>

          {/* Right Column (Intro Descriptive Paragraphs) */}
          <div className="w-full md:w-5/12 text-gold font-haval uppercase text-sm md:text-base leading-relaxed tracking-wider flex flex-col gap-6 pt-2 md:pt-4">
            <p className="anim-text">
              <TextSplitter text="Saya Naufal Rizki Rabbani, Frontend Engineer & Creative Developer. Saya merancang dan membangun aplikasi web interaktif, responsif, dan kaya animasi berkualitas tinggi." />
            </p>
            <p className="anim-text text-gray-400">
              <TextSplitter text="Menggabungkan arsitektur React dengan animasi GSAP, saya mengubah halaman web statis menjadi pengalaman scrollytelling interaktif yang mulus di semua perangkat." />
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Intro;
