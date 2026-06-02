import React from 'react';
import TextSplitter from './TextSplitter';

export const EventsSection = () => {
  const eventsData = [
    {
      id: '01',
      date: 'SEPTEMBER 12, 2026',
      name: 'KINETIC ART CONVENTION',
      desc: 'Exploring the fusion of mid-century steampunk clocks with contemporary React frameworks and high-performance WebGL overlays.',
      img: '/images/rsh-24470.jpg'
    },
    {
      id: '02',
      date: 'OCTOBER 04, 2026',
      name: 'CREATIVE WORKSHOP TOUR',
      desc: 'An intimate, hands-on session demonstrating custom GSAP timelines, momentum scroll rigging with Lenis, and fluid layouts.',
      img: '/images/rsh-24361.jpg'
    },
    {
      id: '03',
      date: 'NOVEMBER 28, 2026',
      name: 'ASTRONOMICAL SYMPOSIUM',
      desc: 'Showcasing the math behind celestial mechanics and orbital path drawing on web canvases using lightweight shader programs.',
      img: '/images/rsh-24501.jpg'
    }
  ];

  return (
    <section className="last-event margin-bottom select-none relative z-10 py-16 md:py-32" id="events">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="title-container flex flex-col md:flex-row items-baseline justify-between mb-16">
          <h2 className="font-bounded text-gold text-4xl md:text-6xl uppercase text-left m-0">
            <TextSplitter text="ACTIVE MILESTONES" />
          </h2>
          <div className="section-anons font-haval uppercase text-xs md:text-sm tracking-widest text-gold/60 max-w-sm mt-4 md:mt-0 text-left">
            <TextSplitter text="Live demonstrations, mechanical galleries, and global design showcases where we unpack our kinetic visual engine." />
          </div>
        </div>

        {/* Interactive Event List */}
        <div className="events-list flex flex-col w-full">
          {eventsData.map((evt) => (
            <a 
              key={evt.id}
              href={`#event-${evt.id}`}
              className="item group flex flex-col lg:flex-row items-start lg:items-center justify-between border-b border-gold/20 py-12 px-4 hover:bg-gold/[0.02] transition-colors"
            >
              
              {/* Event Date Column */}
              <div className="item-date font-bounded text-gold/70 text-xs md:text-sm tracking-widest w-full lg:w-48 mb-6 lg:mb-0">
                {evt.date}
              </div>

              {/* Event Image Frame (Expands internal image on hover) */}
              <div className="item-image relative border border-gold/20 p-3 w-full lg:w-[420px] h-[260px] overflow-hidden mb-6 lg:mb-0">
                <img 
                  src={evt.img} 
                  alt={evt.name} 
                  className="w-full h-full object-cover filter sepia brightness-[0.7] group-hover:scale-115 transition-transform duration-700 ease-out" 
                />
              </div>

              {/* Event Details */}
              <div className="item-info flex-1 lg:pl-16 text-left">
                <h3 className="item-name font-bounded text-gold text-xl md:text-2xl uppercase group-hover:text-white transition-colors m-0 mb-4 leading-none">
                  {evt.name}
                </h3>
                <p className="font-haval uppercase text-xs md:text-sm tracking-wider text-gray-400 leading-relaxed max-w-xl m-0">
                  {evt.desc}
                </p>
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EventsSection;
