import React from 'react';
import { bakersWorking } from '../data';
import { ArrowRight, Flame } from 'lucide-react';

interface OurStoryProps {
  onLearnMoreClick: () => void;
}

export default function OurStory({ onLearnMoreClick }: OurStoryProps) {
  return (
    <section id="story" className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Story Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left" id="story-content">
          {/* Badge */}
          <span className="text-brand-orange text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">Our Humble Journey</span>
          
          {/* Custom Typographic Heading */}
          <h2 className="font-rounded text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark mb-6 leading-tight">
            Our Story,{' '}
            <span className="bg-brand-coral text-white text-base sm:text-lg md:text-xl font-bold px-4 py-1.5 rounded-full inline-block rotate-[-2deg] mx-1">
              Baked
            </span>{' '}
            with Love
          </h2>

          {/* Description Paragraphs */}
          <p className="text-brand-dark/85 text-sm sm:text-base mb-4 leading-relaxed font-light">
            Since our very first loaf came out of the oven in 1995, we've been dedicated to bringing you the freshest, most wholesome, and absolutely delicious baked goods.
          </p>
          <p className="text-brand-dark/75 text-xs sm:text-sm mb-8 leading-relaxed font-light">
            Every recipe is crafted entirely from scratch using hand-selected premium local ingredients and an abundance of love. We believe that baking is not just a science, but an art of spreading pure happiness, one bite at a time.
          </p>

          {/* Learn More Button */}
          <button
            onClick={onLearnMoreClick}
            className="group flex items-center gap-2 bg-brand-dark hover:bg-brand-orange text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-md shadow-brand-dark/10 cursor-pointer"
            id="learn-more-story-btn"
          >
            <span>Learn Our Secrets</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Right Column: Visual Image with Badges */}
        <div className="lg:col-span-6 relative flex justify-center items-center" id="story-image-container">
          <div className="relative w-full max-w-lg aspect-4/3 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
            {/* Ambient gold glow */}
            <div className="absolute inset-0 bg-brand-gold/15 mix-blend-overlay z-10"></div>
            
            {/* Bakers working image */}
            <img
              src={bakersWorking}
              alt="Two happy professional bakers preparing dough together"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1500ms]"
              referrerPolicy="no-referrer"
            />

            {/* Circular Floating Badge "Freshly Baked Everyday" */}
            <div 
              className="absolute bottom-6 right-6 bg-brand-coral text-white rounded-full w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center text-center p-3 sm:p-4 shadow-xl border-2 border-white z-20 animate-pulse hover:rotate-12 transition-transform cursor-pointer"
              id="freshly-baked-badge"
            >
              <Flame className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2] animate-bounce mb-1" />
              <span className="font-rounded font-extrabold text-[10px] sm:text-xs tracking-tight uppercase leading-none">
                Freshly Baked
              </span>
              <span className="text-[8px] sm:text-[9px] text-white/90 font-bold mt-0.5 uppercase tracking-wider">
                Everyday
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
