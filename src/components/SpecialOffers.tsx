import React, { useState } from 'react';
import { Tag, ArrowRight, Star, ShoppingCart, Percent } from 'lucide-react';
import { stackedDonuts, TODAY_SPECIALS } from '../data';
import { SpecialMenuItem } from '../types';

interface SpecialOffersProps {
  onClaimDiscount: (code: string) => void;
  onViewAllMenu: () => void;
  onSelectSpecialItem: (item: SpecialMenuItem) => void;
}

export default function SpecialOffers({ onClaimDiscount, onViewAllMenu, onSelectSpecialItem }: SpecialOffersProps) {
  const [copiedCode, setCopiedCode] = useState(false);

  const handleClaim = () => {
    onClaimDiscount('DELIGHT20');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 3000);
  };

  return (
    <section className="py-8 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: 20% OFF Limited Time Offer */}
        <div 
          className="lg:col-span-7 bg-[#F7EBE1] rounded-[2.5rem] p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-8 border border-[#EDE2D7] relative overflow-hidden group shadow-lg"
          id="special-offer-card"
        >
          {/* Donut Image on Left */}
          <div className="w-48 h-48 sm:w-60 sm:h-60 flex-shrink-0 relative">
            <div className="absolute inset-0 bg-brand-orange/10 rounded-full filter blur-xl group-hover:scale-110 transition-transform duration-500"></div>
            <img
              src={stackedDonuts}
              alt="Freshly baked strawberry and chocolate donuts"
              className="w-full h-full object-cover rounded-2xl relative z-10 hover:scale-105 hover:-rotate-3 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Text Content on Right */}
          <div className="flex-1 flex flex-col items-start text-left relative z-10">
            {/* Promo Badge */}
            <span className="flex items-center gap-1.5 bg-brand-coral/10 text-brand-coral text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">
              <Percent className="w-3.5 h-3.5" />
              Limited Time Offer
            </span>

            {/* Giant Title */}
            <h2 className="font-rounded text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight mb-3">
              20% OFF
            </h2>
            <h3 className="text-sm sm:text-base font-bold text-brand-dark/90 uppercase tracking-widest mb-3">
              ON YOUR FIRST ORDER
            </h3>

            {/* Description */}
            <p className="text-brand-dark/70 text-xs sm:text-sm mb-6 leading-relaxed">
              Enjoy a delightful 20% discount on your very first order from us. Taste the handmade love baked in every single bite!
            </p>

            {/* Button */}
            <button
              onClick={handleClaim}
              className="bg-brand-coral hover:bg-brand-orange text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-[1.03] shadow-md shadow-brand-coral/15 cursor-pointer"
              id="claim-discount-btn"
            >
              <Tag className="w-4 h-4" />
              {copiedCode ? 'Code "DELIGHT20" Applied!' : 'Claim Discount'}
            </button>
          </div>
        </div>

        {/* Right Column: Today's Special Menu */}
        <div 
          className="lg:col-span-5 bg-brand-dark-card rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-between border border-white/5 relative shadow-lg"
          id="todays-special-card"
        >
          {/* Header */}
          <div className="text-left mb-6">
            <span className="text-brand-gold/80 text-[10px] uppercase font-bold tracking-widest">Freshly Prepared</span>
            <h2 className="font-rounded text-2xl font-extrabold text-white mt-1">Today's Special</h2>
          </div>

          {/* Menu list */}
          <div className="flex flex-col gap-4 mb-8" id="special-menu-list">
            {TODAY_SPECIALS.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectSpecialItem(item)}
                className="flex items-center justify-between p-3.5 bg-brand-dark/40 hover:bg-brand-dark/80 rounded-2xl border border-white/5 hover:border-brand-gold/30 transition-all duration-300 cursor-pointer group"
              >
                {/* Image and name */}
                <div className="flex items-center gap-4 text-left">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded-xl border border-white/10 group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-brand-gold transition-colors text-sm sm:text-base">
                      {item.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-white/50 font-medium">
                      {item.category}
                    </p>
                  </div>
                </div>

                {/* Price and action */}
                <div className="flex flex-col items-end gap-1">
                  <span className="font-bold text-brand-gold font-rounded text-base">
                    ${item.price}
                  </span>
                  <span className="text-[10px] text-white/40 flex items-center gap-0.5 font-medium">
                    <Star className="w-2.5 h-2.5 fill-brand-gold stroke-none" /> {item.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Action */}
          <button
            onClick={onViewAllMenu}
            className="w-full bg-brand-gold hover:bg-white text-brand-dark hover:text-brand-dark text-xs sm:text-sm font-bold py-3.5 rounded-full flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
            id="view-all-menu-btn"
          >
            <span>View All Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
