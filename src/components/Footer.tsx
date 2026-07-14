import React from 'react';
import { footerCookies } from '../data';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Products', id: 'products' },
    { label: 'Recipes', id: 'recipes' },
    { label: 'Community', id: 'community' },
  ];

  const supportLinks = [
    { label: 'FAQ', href: '#' },
    { label: 'Delivery Info', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ];

  return (
    <footer className="relative bg-brand-dark overflow-hidden mt-12" id="contact">
      {/* Background Image of rustic chocolate cookies */}
      <div className="absolute inset-0 z-0">
        <img
          src={footerCookies}
          alt="Rustic baked chocolate cookies"
          className="w-full h-full object-cover opacity-15 filter blur-[1px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/95 to-brand-dark/80"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-white/5 pb-12 text-left">
          
          {/* Logo & About Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <span className="text-2xl font-bold tracking-tight text-white mb-4">
              impeccify<span className="text-brand-gold">.</span>com
            </span>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm font-light">
              We are an artisanal bakery dedicated to crafting delicious moments of sheer delight. Our treats are hand-made with lots of love, premium natural ingredients, and baked fresh every day.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="p-2.5 rounded-full bg-brand-brown-light text-white/80 hover:text-brand-gold hover:bg-brand-brown-light/80 transition-colors cursor-pointer" aria-label="Facebook">
                <Facebook className="w-4 h-4 fill-current" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-brand-brown-light text-white/80 hover:text-brand-gold hover:bg-brand-brown-light/80 transition-colors cursor-pointer" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-brand-brown-light text-white/80 hover:text-brand-gold hover:bg-brand-brown-light/80 transition-colors cursor-pointer" aria-label="Twitter">
                <Twitter className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2.5 flex flex-col items-start md:pl-6">
            <h4 className="font-rounded font-bold text-sm sm:text-base text-white tracking-wide uppercase mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onScrollToSection(link.id)}
                  className="text-white/60 hover:text-brand-gold text-xs sm:text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Support Column */}
          <div className="lg:col-span-2.5 flex flex-col items-start">
            <h4 className="font-rounded font-bold text-sm sm:text-base text-white tracking-wide uppercase mb-4">
              Support
            </h4>
            <div className="flex flex-col gap-3">
              {supportLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-white/60 hover:text-brand-gold text-xs sm:text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h4 className="font-rounded font-bold text-sm sm:text-base text-white tracking-wide uppercase mb-4">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-white/60">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-light">
                  123 Baker's Alley, Chocolate Hills, Sweet Town, CA 90210
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span className="text-xs sm:text-sm font-light">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span className="text-xs sm:text-sm font-light">
                  hello@impeccify.com
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-[11px] sm:text-xs">
            © {new Date().getFullYear()} impeccify.com. All rights reserved. Made with love & flour.
          </p>
          <div className="flex gap-6 text-[11px] sm:text-xs text-white/40 font-medium">
            <a href="#" className="hover:text-brand-gold transition-colors">Sitemap</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
