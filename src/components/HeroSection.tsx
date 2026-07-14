import React from 'react';
import { Star, ShoppingCart, Sparkles } from 'lucide-react';
import { moltenCookie } from '../data';

interface HeroSectionProps {
  onOrderNowClick: () => void;
}

export default function HeroSection({ onOrderNowClick }: HeroSectionProps) {
  return (
    <section id="home" className="py-6 px-4 sm:px-8 max-w-7xl mx-auto">
      <div 
        className="w-full bg-brand-dark rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl"
        id="hero-card"
      >
        {/* Background ambient light effects */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-coral/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

        {/* Decorative elements - little hand-drawn style stars and sparkles */}
        <div className="absolute top-10 left-12 text-brand-gold/30 animate-bounce hidden md:block">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="absolute bottom-16 right-1/3 text-brand-coral/20 animate-pulse hidden lg:block">
          <Sparkles className="w-8 h-8" />
        </div>

        {/* Left Column (Content) */}
        <div className="flex-1 flex flex-col items-start text-left z-10" id="hero-left-content">
          {/* Rating Badge */}
          <div className="flex items-center gap-2 bg-brand-dark-card border border-white/10 px-4 py-2 rounded-full mb-6 shadow-sm">
            <div className="flex items-center text-brand-gold">
              <Star className="w-4 h-4 fill-brand-gold" />
            </div>
            <span className="text-white text-xs sm:text-sm font-semibold">
              <span className="text-brand-gold font-rounded font-bold">( 4.9 )</span> since 1995
            </span>
          </div>

          {/* Title */}
          <h1 className="font-rounded text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            SWEET <br />
            <span className="text-brand-gold">DELIGHT!</span>
          </h1>

          {/* Description */}
          <p className="text-white/80 text-base sm:text-lg max-w-md mb-8 leading-relaxed font-light">
            From warm breads to delightful pastries, made with love and the finest organic ingredients. Freshly baked every single day for your sweet cravings.
          </p>

          {/* Call to Action Button */}
          <button
            onClick={onOrderNowClick}
            className="flex items-center gap-2.5 bg-brand-gold text-brand-dark hover:bg-white hover:text-brand-dark text-sm sm:text-base font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-gold/20 cursor-pointer"
            id="hero-order-now-btn"
          >
            <ShoppingCart className="w-4.5 h-4.5 fill-current" />
            Order Now
          </button>
        </div>

        {/* Right Column (Image and overlays) */}
        <div className="flex-1 flex justify-center items-center relative z-10" id="hero-right-image">
          {/* Main cookie display */}
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] rounded-full flex items-center justify-center p-4">
            {/* Soft glowing halo behind the image */}
            <div className="absolute inset-0 bg-brand-gold/20 rounded-full filter blur-xl animate-pulse"></div>
            
            {/* The signature cookie image */}
            <img
              src={moltenCookie}
              alt="Impeccify Signature Molten Chocolate Cookie"
              className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-brand-dark-card hover:rotate-6 transition-transform duration-700 cursor-pointer"
              referrerPolicy="no-referrer"
            />

            {/* Little text badge overlay */}
            <div className="absolute -top-4 -right-2 bg-brand-coral text-white font-rounded text-xs font-bold px-4 py-2 rounded-full rotate-12 shadow-md flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>Gooey & Rich!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination dots at the bottom */}
      <div className="flex justify-center items-center gap-2.5 mt-6" id="hero-carousel-dots">
        <span className="w-2.5 h-2.5 rounded-full bg-brand-dark cursor-pointer transition-all duration-300"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-brand-dark/30 hover:bg-brand-dark/60 cursor-pointer transition-all duration-300"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-brand-dark/30 hover:bg-brand-dark/60 cursor-pointer transition-all duration-300"></span>
      </div>
    </section>
  );
}
