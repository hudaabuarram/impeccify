import React from 'react';
import { ChefHat, Heart, Leaf, Cookie } from 'lucide-react';

export default function FeatureCards() {
  const features = [
    {
      id: 'feat-1',
      title: 'Premium Ingredients',
      desc: 'We use only the best, hand-selected, and fully natural local ingredients.',
      color: 'bg-card-orange/75',
      iconColor: 'text-brand-orange bg-white',
      icon: Cookie,
    },
    {
      id: 'feat-2',
      title: 'Baked Fresh Daily',
      desc: 'Every single item is baked fresh early in the morning with pure dedication.',
      color: 'bg-card-pink/75',
      iconColor: 'text-brand-coral bg-white',
      icon: ChefHat,
    },
    {
      id: 'feat-3',
      title: 'Made With Love',
      desc: 'Infusing genuine passion, care, and love into each and every bite.',
      color: 'bg-card-blue/75',
      iconColor: 'text-[#478B99] bg-white',
      icon: Heart,
    },
    {
      id: 'feat-4',
      title: '100% Natural & Healthy',
      desc: 'Nutritious recipes that are good for you, good for your family, and good for life.',
      color: 'bg-card-yellow/75',
      iconColor: 'text-[#9A7D3C] bg-white',
      icon: Leaf,
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-8 max-w-7xl mx-auto" id="about">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feat) => {
          const IconComponent = feat.icon;
          return (
            <div
              key={feat.id}
              className={`${feat.color} rounded-[1.8rem] p-6 flex flex-col items-start text-left border border-white/20 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group`}
              id={feat.id}
            >
              {/* Icon container */}
              <div className={`p-4 rounded-full ${feat.iconColor} shadow-sm group-hover:scale-110 transition-transform duration-300 mb-6`}>
                <IconComponent className="w-6 h-6 stroke-[2.2]" />
              </div>

              {/* Title */}
              <h3 className="font-rounded text-lg sm:text-xl font-bold text-brand-dark mb-2 tracking-tight">
                {feat.title}
              </h3>

              {/* Description */}
              <p className="text-brand-dark/70 text-xs sm:text-sm leading-relaxed">
                {feat.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
