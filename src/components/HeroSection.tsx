import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ShoppingCart, Sparkles, ChevronRight, Flame, Layers, Award } from 'lucide-react';
import { moltenCookie, stackedDonuts } from '../data';

interface HeroSectionProps {
  onOrderNowClick: () => void;
}

const HERO_ITEMS = [
  {
    id: 'cookie',
    title: 'MOLTEN',
    subtitle: 'COOKIE',
    tagline: 'Signature Gooey Masterpiece',
    description: 'Our world-famous giant chocolate chip cookie, baked with a decadent core of molten Belgian chocolate fudge that slowly flows when warm.',
    image: moltenCookie,
    accentColor: 'text-brand-gold',
    bgColorClass: 'from-[#21110B] via-[#2F1A12] to-[#1E0E08]',
    badgeBgClass: 'bg-brand-gold/10 text-brand-gold border-brand-gold/25',
    ctaBgClass: 'bg-brand-gold text-brand-dark hover:bg-white',
    glowClass: 'bg-brand-gold/25',
    btnBorderClass: 'border-brand-gold/45',
    activeTabClass: 'border-brand-gold text-brand-gold ring-brand-gold/20',
    flavorProfile: [
      { label: 'Oven Warmth', value: 95 },
      { label: 'Belgian Richness', value: 98 },
      { label: 'Fudginess', value: 90 },
      { label: 'Cookie Crunch', value: 45 },
    ],
    badgeText: '🔥 Served Melt-in-your-mouth Warm',
  },
  {
    id: 'donut',
    title: 'GLAZED',
    subtitle: 'DONUTS',
    tagline: 'Fluffy Golden Rings',
    description: 'Twice-risen artisanal yeast donuts dipped in gourmet fresh strawberry coulis glaze and customized with fine dark chocolate drizzle.',
    image: stackedDonuts,
    accentColor: 'text-brand-coral',
    bgColorClass: 'from-[#2A1117] via-[#351921] to-[#200A10]',
    badgeBgClass: 'bg-brand-coral/10 text-brand-coral border-brand-coral/25',
    ctaBgClass: 'bg-brand-coral text-white hover:bg-white hover:text-brand-dark',
    glowClass: 'bg-brand-coral/25',
    btnBorderClass: 'border-brand-coral/45',
    activeTabClass: 'border-brand-coral text-brand-coral ring-brand-coral/20',
    flavorProfile: [
      { label: 'Glaze Sweetness', value: 92 },
      { label: 'Artisanal Fluffiness', value: 96 },
      { label: 'Richness', value: 75 },
      { label: 'Crunch Factor', value: 15 },
    ],
    badgeText: '🍩 Baked & Glazed Fresh Every Morning',
  },
  {
    id: 'cupcake',
    title: 'VELVET',
    subtitle: 'CUPCAKE',
    tagline: 'Silky Cocoa Sensation',
    description: 'Moist cocoa-infused velvet cake loaded with plump organic berries and crowned with a luscious cloud of Swiss cream cheese frosting.',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=600',
    accentColor: 'text-brand-orange',
    bgColorClass: 'from-[#28130B] via-[#351C11] to-[#200F09]',
    badgeBgClass: 'bg-brand-orange/10 text-brand-orange border-brand-orange/25',
    ctaBgClass: 'bg-brand-orange text-white hover:bg-white hover:text-brand-dark',
    glowClass: 'bg-brand-orange/25',
    btnBorderClass: 'border-brand-orange/45',
    activeTabClass: 'border-brand-orange text-brand-orange ring-brand-orange/20',
    flavorProfile: [
      { label: 'Berry Tartness', value: 85 },
      { label: 'Cream Frosting Richness', value: 90 },
      { label: 'Cake Softness', value: 95 },
      { label: 'Sweetness Level', value: 80 },
    ],
    badgeText: '✨ Topped with Whole Organic Raspberries',
  },
];

export default function HeroSection({ onOrderNowClick }: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentItem = HERO_ITEMS[activeIndex];

  // Auto-cycle carousel every 6 seconds. Resets timer on manual user interaction
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_ITEMS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section id="home" className="py-6 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Premium Dynamic Hero Card */}
      <div 
        className={`w-full bg-gradient-to-tr ${currentItem.bgColorClass} rounded-[2.5rem] sm:rounded-[3.5rem] p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-14 relative overflow-hidden shadow-2xl transition-all duration-[1000ms] border border-white/5`}
        id="hero-card"
      >
        {/* Dynamic Soft Ambient Light Glowing Halos */}
        <div className={`absolute top-0 right-0 w-80 h-80 sm:w-[450px] sm:h-[450px] ${currentItem.glowClass} rounded-full blur-[80px] sm:blur-[110px] -mr-20 -mt-20 transition-all duration-[1000ms]`}></div>
        <div className={`absolute bottom-0 left-0 w-80 h-80 sm:w-[400px] sm:h-[400px] ${currentItem.glowClass} rounded-full blur-[80px] sm:blur-[110px] -ml-20 -mb-20 transition-all duration-[1000ms] opacity-60`}></div>

        {/* Dynamic Floating Particles / Sparkles */}
        <div className="absolute top-10 left-12 text-brand-gold/15 animate-bounce hidden md:block">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="absolute bottom-12 right-1/3 text-brand-coral/10 animate-pulse hidden lg:block">
          <Sparkles className="w-8 h-8" />
        </div>

        {/* Left Column - Dynamic Content */}
        <div className="flex-1 flex flex-col items-start text-left z-10 w-full" id="hero-left-content">
          
          {/* Top Info Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full shadow-sm backdrop-blur-md">
              <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
              <span className="text-white text-xs font-semibold tracking-wide">
                <span className="text-brand-gold font-rounded font-bold">4.9 / 5.0</span> Rating
              </span>
            </div>
            
            <span className={`text-[10px] sm:text-xs font-bold px-3.5 py-2 rounded-full uppercase tracking-wider border backdrop-blur-md ${currentItem.badgeBgClass} transition-all duration-[800ms]`}>
              {currentItem.badgeText.split(' ')[0]} {currentItem.tagline}
            </span>
          </div>

          {/* Interactive Responsive Title Grid */}
          <div className="mb-4">
            <span className="text-white/60 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase block mb-1">
              IMPECCIFY BAKERY PRESENTS
            </span>
            <h1 className="font-rounded text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] uppercase">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentItem.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="block"
                >
                  {currentItem.title}
                </motion.span>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentItem.subtitle}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, delay: 0.08 }}
                  className={`${currentItem.accentColor} block transition-colors duration-[800ms]`}
                >
                  {currentItem.subtitle}
                </motion.span>
              </AnimatePresence>
            </h1>
          </div>

          {/* Treat Description */}
          <div className="min-h-[80px] sm:min-h-[64px] mb-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentItem.description}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.85 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-white text-sm sm:text-base max-w-lg leading-relaxed font-light"
              >
                {currentItem.description}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* RPG-Style Interactive Flavor Profile Meter */}
          <div className="w-full max-w-md bg-white/5 border border-white/5 rounded-2xl p-4 mb-8 backdrop-blur-xs">
            <span className="text-[10px] text-white/50 font-bold tracking-widest uppercase block mb-3.5 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" /> Sensory Experience Profile
            </span>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {currentItem.flavorProfile.map((stat) => (
                <div key={stat.label} className="text-left">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] sm:text-xs text-white/80 font-medium">{stat.label}</span>
                    <span className="text-[10px] text-white/40 font-mono">{stat.value}%</span>
                  </div>
                  {/* Progress bar wrapper */}
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${stat.value}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className={`h-full ${activeIndex === 0 ? 'bg-brand-gold' : activeIndex === 1 ? 'bg-brand-coral' : 'bg-brand-orange'} rounded-full transition-colors duration-[1000ms]`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onOrderNowClick}
              className={`flex items-center justify-center gap-2.5 ${currentItem.ctaBgClass} text-sm sm:text-base font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-black/15 cursor-pointer`}
              id="hero-order-now-btn"
            >
              <ShoppingCart className="w-4.5 h-4.5 fill-current" />
              Order This Fresh
            </button>
            
            <button
              onClick={() => {
                const docSection = document.getElementById('about');
                if (docSection) docSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-1 bg-white/5 border border-white/10 text-white hover:bg-white/10 text-xs sm:text-sm font-semibold px-6 py-4 rounded-full transition-all cursor-pointer"
            >
              <span>Our Quality Standards</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column - Non-Traditional Elegant Showcase Frame */}
        <div className="flex-1 flex flex-col justify-center items-center relative z-10 w-full" id="hero-right-image">
          {/* Main Treat Frame Layout - Responsive design guarantees no cutoff */}
          <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[420px] aspect-square flex items-center justify-center p-4">
            
            {/* Spinning Golden/Coral Artistic Framing Rings */}
            <div className={`absolute inset-2 border border-dashed ${activeIndex === 0 ? 'border-brand-gold/30' : activeIndex === 1 ? 'border-brand-coral/30' : 'border-brand-orange/30'} rounded-[3rem] animate-spin [animation-duration:40s] transition-colors duration-[1000ms]`}></div>
            <div className={`absolute inset-6 border border-dashed ${activeIndex === 0 ? 'border-brand-gold/15' : activeIndex === 1 ? 'border-brand-coral/15' : 'border-brand-orange/15'} rounded-[2.5rem] animate-spin [animation-duration:25s] [animation-direction:reverse] transition-colors duration-[1000ms]`}></div>

            {/* Custom organic-rounded shape that displays the whole food photography beautifully */}
            <div className="w-full h-full rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden border-4 border-white/10 shadow-2xl relative bg-brand-dark/40">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentItem.id}
                  src={currentItem.image}
                  alt={currentItem.tagline}
                  initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotate: 4 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover select-none cursor-pointer"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {/* Glowing Ambient Core Light right behind image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Premium Badge */}
            <div className="absolute -top-3 -right-2 sm:-right-4 bg-brand-coral text-white font-rounded text-[10px] sm:text-xs font-bold px-4 py-2 rounded-full rotate-6 shadow-md flex items-center gap-1.5 z-20 hover:scale-105 active:scale-95 cursor-pointer">
              <Award className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" />
              <span>{currentItem.id === 'cookie' ? 'Signature Gourmet' : currentItem.id === 'donut' ? 'Premium Glaze' : 'Gourmet Selection'}</span>
            </div>

            {/* Micro details badge */}
            <div className="absolute bottom-5 left-5 bg-white/10 backdrop-blur-md text-white border border-white/15 rounded-xl px-3.5 py-2 flex items-center gap-2 z-20 shadow-lg text-left">
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping"></div>
              <div>
                <p className="text-[9px] text-white/60 font-medium uppercase tracking-wider leading-none">Status</p>
                <p className="text-[10px] text-white font-bold font-rounded mt-0.5">Baking Fresh Right Now</p>
              </div>
            </div>
          </div>

          {/* Treat Selector Row - Non-Traditional interactive toggle panel */}
          <div className="mt-8 flex items-center gap-3 bg-white/5 border border-white/10 p-2 rounded-full backdrop-blur-md" id="hero-treat-tabs">
            {HERO_ITEMS.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-white text-brand-dark shadow-md scale-102 font-extrabold'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                  aria-label={`Showcase ${item.title}`}
                >
                  <span className="text-sm">
                    {idx === 0 ? '🍪' : idx === 1 ? '🍩' : '🧁'}
                  </span>
                  <span className="hidden sm:inline tracking-wide font-rounded">{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Decorative Brand Value Anchors right below the Hero */}
      <div className="flex justify-center items-center gap-8 mt-6 text-brand-dark/45 text-[11px] sm:text-xs font-bold uppercase tracking-widest" id="hero-mini-anchors">
        <span className="flex items-center gap-1.5">
          <Flame className="w-3.5 h-3.5 text-brand-coral" /> From-Scratch Recipes
        </span>
        <span className="text-brand-dark/15">•</span>
        <span className="flex items-center gap-1.5">
          <Star className="w-3.5 h-3.5 text-brand-gold fill-brand-gold stroke-none" /> Organic Ingredients
        </span>
        <span className="text-brand-dark/15">•</span>
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-brand-orange" /> Master Bakers
        </span>
      </div>
    </section>
  );
}
