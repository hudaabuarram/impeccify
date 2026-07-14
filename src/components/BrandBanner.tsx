import React from 'react';
import { Truck, ShieldCheck, HeartHandshake, Headphones } from 'lucide-react';

export default function BrandBanner() {
  const items = [
    {
      icon: Truck,
      title: 'Fast Delivery',
      subtitle: 'At Your Doorstep',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Payment',
      subtitle: '100% Safe Checkout',
    },
    {
      icon: HeartHandshake,
      title: '100% Fresh & Tasty',
      subtitle: 'Straight From Oven',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      subtitle: 'Active Customer Care',
    },
  ];

  return (
    <section className="py-6 px-4 sm:px-8 bg-brand-dark border-y border-white/5" id="brand-values-banner">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx}
              className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-white/5 transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-brand-brown-light text-brand-gold">
                <Icon className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h4 className="font-rounded text-sm sm:text-base font-bold text-white leading-tight">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-white/60 mt-0.5 font-medium uppercase tracking-wide">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
