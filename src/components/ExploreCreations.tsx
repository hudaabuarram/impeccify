import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Plus, ArrowRight, ShoppingBag, Eye } from 'lucide-react';
import { Category, Product } from '../types';
import { PRODUCTS } from '../data';

interface ExploreCreationsProps {
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function ExploreCreations({ onProductClick, onAddToCart }: ExploreCreationsProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  const categories = [
    { label: 'All', icon: '✨', bgColor: 'bg-brand-cream-dark' },
    { label: Category.CUPCAKES, icon: '🧁', bgColor: 'bg-red-100' },
    { label: Category.BROWNIES, icon: '🍫', bgColor: 'bg-amber-100' },
    { label: Category.DOUGHNUTS, icon: '🍩', bgColor: 'bg-orange-100' },
    { label: Category.PASTRIES, icon: '🥐', bgColor: 'bg-yellow-100' },
    { label: Category.COOKIES, icon: '🍪', bgColor: 'bg-amber-200/50' },
    { label: Category.MUFFINS, icon: '🧁', bgColor: 'bg-rose-100' },
  ];

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Title block */}
      <div className="flex justify-between items-end mb-8 text-left" id="explore-header">
        <div>
          <span className="text-brand-orange text-xs sm:text-sm font-bold tracking-widest uppercase">Our Bakery Menu</span>
          <h2 className="font-rounded text-3xl sm:text-4xl font-extrabold text-brand-dark mt-1">
            Explore Our <br className="sm:hidden" /> Delicious Creations
          </h2>
        </div>
        <button
          onClick={() => setSelectedCategory('All')}
          className="flex items-center gap-1 bg-white hover:bg-brand-cream-dark border border-brand-cream-dark hover:border-brand-dark/20 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 shadow-sm cursor-pointer"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Categories Horizontal Scroll */}
      <div 
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
        id="category-filters-container"
      >
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.label;
          return (
            <button
              key={cat.label}
              onClick={() => setSelectedCategory(cat.label as Category | 'All')}
              className={`flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer min-w-[76px] transition-all duration-300`}
            >
              <div 
                className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-sm border-2 ${
                  isActive 
                    ? 'bg-brand-orange border-brand-dark scale-105 shadow-md shadow-brand-orange/10' 
                    : `${cat.bgColor} border-transparent hover:border-brand-cream-dark hover:scale-105`
                } transition-all duration-300`}
              >
                {cat.icon}
              </div>
              <span className={`text-xs font-bold tracking-tight transition-colors duration-200 ${
                isActive ? 'text-brand-orange font-extrabold' : 'text-brand-dark/70'
              }`}>
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Products Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
        id="products-grid"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={product.id}
              className="bg-white rounded-[2rem] p-5 flex flex-col justify-between border border-brand-cream-dark hover:shadow-xl transition-all duration-300 group relative"
              id={`product-card-${product.id}`}
            >
              {/* Image Container */}
              <div className="relative w-full h-56 bg-brand-cream/50 rounded-2xl overflow-hidden mb-4 flex items-center justify-center border border-brand-cream-dark/40">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Rating Badge Overlay */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-brand-dark shadow-sm flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-brand-gold stroke-none" />
                  <span>{product.rating}</span>
                </div>

                {/* Hover Quick Actions */}
                <div className="absolute inset-0 bg-brand-dark/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button
                    onClick={() => onProductClick(product)}
                    className="p-3 bg-white hover:bg-brand-cream text-brand-dark rounded-full shadow-md transition-transform duration-300 hover:scale-110 cursor-pointer"
                    title="Quick View"
                  >
                    <Eye className="w-4.5 h-4.5" />
                  </button>
                  <button
                    onClick={() => onAddToCart(product, 1)}
                    className="p-3 bg-brand-coral hover:bg-brand-orange text-white rounded-full shadow-md transition-transform duration-300 hover:scale-110 cursor-pointer"
                    title="Add to Cart"
                  >
                    <ShoppingBag className="w-4.5 h-4.5" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="text-left px-1">
                <div className="flex justify-between items-start gap-2 mb-1.5">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-dark/40">
                    {product.category}
                  </span>
                  {product.isSpecial && (
                    <span className="bg-brand-coral/15 text-brand-coral text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                      Top Seller
                    </span>
                  )}
                </div>

                <h3 
                  onClick={() => onProductClick(product)}
                  className="font-rounded text-lg font-bold text-brand-dark hover:text-brand-orange cursor-pointer transition-colors line-clamp-1 mb-1.5"
                >
                  {product.name}
                </h3>

                <p className="text-brand-dark/65 text-xs line-clamp-2 leading-relaxed mb-4 min-h-[32px]">
                  {product.description}
                </p>

                {/* Price & Add to Cart */}
                <div className="flex items-center justify-between pt-2 border-t border-brand-cream-dark/80">
                  <span className="font-rounded text-xl font-extrabold text-brand-dark">
                    ${product.price.toFixed(2)}
                  </span>
                  
                  <button
                    onClick={() => onAddToCart(product, 1)}
                    className="flex items-center gap-1.5 bg-brand-cream hover:bg-brand-orange hover:text-white border border-brand-cream-dark hover:border-transparent text-brand-dark text-xs font-bold px-4 py-2.5 rounded-full transition-all duration-300 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
