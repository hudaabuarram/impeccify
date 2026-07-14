import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, ArrowRight, Utensils } from 'lucide-react';
import { CartItem } from '../types';

interface HeaderProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onOpenBooking: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Header({ cart, onOpenCart, onOpenBooking, onScrollToSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navItems = [
    { label: 'HOME', id: 'home' },
    { label: 'ABOUT US', id: 'about' },
    { label: 'PRODUCTS', id: 'products' },
    { label: 'RECIPES', id: 'recipes' },
    { label: 'CONTACT', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-brand-cream/90 backdrop-blur-md border-b border-brand-cream-dark py-4 px-4 sm:px-8 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-2 cursor-pointer group"
          id="header-logo"
        >
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-brand-dark hover:text-brand-orange transition-colors">
            impeccify<span className="text-brand-orange">.</span>com
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-sm font-semibold tracking-wider text-brand-dark/80 hover:text-brand-orange transition-colors duration-200 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4" id="header-actions">
          {/* Search Button */}
          <div className="relative">
            {isSearchOpen ? (
              <div className="flex items-center bg-white border border-brand-cream-dark rounded-full px-3 py-1.5 shadow-sm absolute right-0 -top-2 w-48 sm:w-64 transition-all duration-300">
                <input
                  type="text"
                  placeholder="Search treats..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs bg-transparent outline-none text-brand-dark"
                  autoFocus
                />
                <button 
                  onClick={() => setIsSearchOpen(false)} 
                  className="text-brand-dark/50 hover:text-brand-dark"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-brand-dark/80 hover:text-brand-orange hover:bg-brand-cream-dark/40 rounded-full transition-all cursor-pointer"
                id="search-icon-btn"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Cart Bag Icon */}
          <button
            onClick={onOpenCart}
            className="p-2 text-brand-dark/80 hover:text-brand-orange hover:bg-brand-cream-dark/40 rounded-full relative transition-all cursor-pointer"
            id="cart-icon-btn"
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-brand-coral text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-brand-cream animate-pulse">
                {cartItemsCount}
              </span>
            )}
          </button>

          {/* Book Table Button */}
          <button
            onClick={onOpenBooking}
            className="hidden sm:flex items-center gap-2 bg-brand-coral hover:bg-brand-orange text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.03] shadow-md shadow-brand-coral/10 cursor-pointer"
            id="book-table-btn"
          >
            <Utensils className="w-3.5 h-3.5" />
            Book a table
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-brand-dark hover:text-brand-orange hover:bg-brand-cream-dark/40 rounded-full transition-colors cursor-pointer"
            id="mobile-menu-btn"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden mt-4 bg-brand-cream-dark/50 backdrop-blur-md rounded-2xl p-4 border border-brand-cream-dark/80 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300"
          id="mobile-nav-panel"
        >
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left text-base font-semibold py-2 px-3 hover:bg-brand-cream rounded-xl text-brand-dark hover:text-brand-orange transition-all cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full flex items-center justify-center gap-2 bg-brand-coral hover:bg-brand-orange text-white font-semibold py-3 rounded-xl transition-all cursor-pointer"
          >
            <Utensils className="w-4 h-4" />
            Book a table
          </button>
        </div>
      )}
    </header>
  );
}
