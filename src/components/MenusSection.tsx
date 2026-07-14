import React, { useState } from 'react';
import { ChefHat, BookOpen, Clock, Heart } from 'lucide-react';

export default function MenusSection() {
  const [activeTab, setActiveTab] = useState<'appetizers' | 'main' | 'desserts'>('desserts');

  const menuItems = {
    appetizers: [
      { name: 'Warm Cheese Scones', price: '$5.49', desc: 'Freshly baked flaky scones served with rich herb butter and cheddar.', time: '10 mins' },
      { name: 'Garlic Butter Crostini', price: '$6.25', desc: 'Toasted house sourdough slices rubbed with fresh garlic and loaded with melting parmesan.', time: '12 mins' },
      { name: 'Cranberry Brie Puff', price: '$7.50', desc: 'Warm brie cheese enveloped in crispy flaky puff pastry topped with tart cranberry sauce.', time: '15 mins' },
    ],
    main: [
      { name: 'Artisanal Savory Quiche', price: '$12.99', desc: 'Flaky pastry crust filled with baked eggs, organic spinach, wild mushrooms, and gruyère.', time: '20 mins' },
      { name: 'House sourdough Club', price: '$11.50', desc: 'Stacked smoked turkey, crispy bacon, butter lettuce, and heirloom tomato on thick toasted sourdough.', time: '15 mins' },
      { name: 'Warm Croissant Benedict', price: '$13.49', desc: 'Butter croissant topped with poached farm eggs, smoked salmon, and fresh silky hollandaise.', time: '18 mins' },
    ],
    desserts: [
      { name: 'Signature Chocolate Soufflé', price: '$8.99', desc: 'Decadent dark chocolate soufflé served warm with a scoop of Madagascar vanilla gelato.', time: '15 mins' },
      { name: 'Classic Strawberry Tart', price: '$7.50', desc: 'Crisp sweet pastry shell filled with vanilla pastry cream and glazed fresh berries.', time: '10 mins' },
      { name: 'Molten Fudge Waffle', price: '$9.25', desc: 'Crisp hot waffle drenched in our house molten chocolate sauce, fresh strawberries, and pecans.', time: '12 mins' },
    ],
  };

  const tabs = [
    { id: 'appetizers', label: 'Appetizers' },
    { id: 'main', label: 'Main Course' },
    { id: 'desserts', label: 'Desserts' },
  ] as const;

  return (
    <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto bg-brand-cream-dark/30 rounded-[3rem] my-10 border border-brand-cream-dark/60" id="recipes">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Text and Menu Navigation */}
        <div className="lg:col-span-5 text-left flex flex-col items-start">
          <span className="text-brand-orange text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">Curated Experiences</span>
          
          <h2 className="font-rounded text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight mb-4">
            Crafted Menus for Every Moment
          </h2>
          
          <p className="text-brand-dark/70 text-xs sm:text-sm leading-relaxed mb-8">
            From quick breakfast bites to luxurious afternoon dessert spreads, we have carefully designed and curated menus to elevate all your sweet moments and special celebrations.
          </p>

          {/* Tab buttons stack vertically */}
          <div className="flex flex-col gap-3 w-full max-w-xs" id="menu-tabs">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 border cursor-pointer ${
                    isActive 
                      ? 'bg-brand-dark text-white border-transparent shadow-md' 
                      : 'bg-white text-brand-dark/80 border-brand-cream-dark hover:border-brand-dark/30 hover:bg-brand-cream-dark/10'
                  }`}
                >
                  <span className="font-rounded">{tab.label}</span>
                  <div className={`w-2.5 h-2.5 rounded-full ${isActive ? 'bg-brand-gold' : 'bg-brand-cream-dark'} transition-colors`}></div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Interactive Menu Display Box */}
        <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-6 sm:p-10 border border-brand-cream-dark shadow-xl flex flex-col" id="menu-items-box">
          {/* Active category label */}
          <div className="flex items-center gap-2 pb-4 border-b border-brand-cream-dark mb-6">
            <ChefHat className="w-5 h-5 text-brand-coral" />
            <span className="font-rounded font-extrabold text-base tracking-wide text-brand-dark uppercase">
              {tabs.find(t => t.id === activeTab)?.label} Selection
            </span>
          </div>

          {/* Menu Items Grid */}
          <div className="flex flex-col gap-6">
            {menuItems[activeTab].map((item, index) => (
              <div 
                key={index} 
                className="flex items-start justify-between gap-4 p-4 hover:bg-brand-cream-dark/20 rounded-2xl transition-colors text-left group"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-rounded font-bold text-brand-dark group-hover:text-brand-orange transition-colors text-base">
                      {item.name}
                    </h4>
                    {index === 0 && (
                      <span className="bg-brand-gold/15 text-brand-gold text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-brand-dark/60 text-xs mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-3 mt-3 text-brand-dark/45">
                    <span className="text-[10px] flex items-center gap-1 font-bold">
                      <Clock className="w-3 h-3 text-brand-coral" /> Prep Time: {item.time}
                    </span>
                    <span className="text-[10px] flex items-center gap-1 font-bold">
                      <Heart className="w-3 h-3 text-brand-coral fill-brand-coral" /> 100% Organic
                    </span>
                  </div>
                </div>

                <span className="font-rounded font-extrabold text-brand-dark text-lg sm:text-xl flex-shrink-0">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          {/* Footer of card */}
          <div className="mt-8 pt-6 border-t border-brand-cream-dark flex items-center justify-between">
            <span className="text-xs text-brand-dark/50 font-medium">Looking for something specific? Let our chefs know!</span>
            <button 
              onClick={() => alert("Our custom catering menu is available for download or delivery. Please call us or book a table to discuss!")}
              className="text-xs font-bold text-brand-orange hover:text-brand-dark flex items-center gap-1 transition-colors"
            >
              <span>Download PDF Menu</span>
              <BookOpen className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
