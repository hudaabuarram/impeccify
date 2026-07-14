import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureCards from './components/FeatureCards';
import SpecialOffers from './components/SpecialOffers';
import ExploreCreations from './components/ExploreCreations';
import OurStory from './components/OurStory';
import MenusSection from './components/MenusSection';
import CommunityReviews from './components/CommunityReviews';
import BrandBanner from './components/BrandBanner';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ProductDetailsModal from './components/ProductDetailsModal';
import CartDrawer from './components/CartDrawer';

import { CartItem, Product, SpecialMenuItem } from './types';
import { PRODUCTS } from './data';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [appliedPromo, setAppliedPromo] = useState('');

  // Cart Handlers
  const handleAddToCart = (product: Product, quantity: number, selectedSize = 'Regular') => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === selectedSize
      );

      if (existingIdx > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIdx].quantity += quantity;
        return updatedCart;
      }

      return [...prevCart, { product, quantity, selectedSize }];
    });
  };

  const handleUpdateQuantity = (id: string, newQty: number, size = 'Regular') => {
    if (newQty <= 0) {
      handleRemoveItem(id, size);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === id && item.selectedSize === size
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveItem = (id: string, size = 'Regular') => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.product.id === id && item.selectedSize === size))
    );
  };

  const handleClearCart = () => {
    setCart([]);
    setAppliedPromo('');
  };

  // Bridge Today's Special Item clicks to Catalog Products modal
  const handleSelectSpecialItem = (specialItem: SpecialMenuItem) => {
    const matchingProduct = PRODUCTS.find((p) => p.name.toLowerCase().includes(specialItem.name.toLowerCase())) || PRODUCTS[0];
    setSelectedProduct(matchingProduct);
  };

  const handleApplyPromo = (code: string) => {
    setAppliedPromo(code);
  };

  // Smooth scroll helper
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -90; // account for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream text-brand-dark selection:bg-brand-coral selection:text-white" id="main-app-container">
      {/* Header Navigation */}
      <Header
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Page Layout */}
      <main className="flex-grow">
        
        {/* Hero Banner Section */}
        <HeroSection onOrderNowClick={() => handleScrollToSection('products')} />

        {/* Highlighted core features */}
        <FeatureCards />

        {/* 20% Off Offer & Today's specials */}
        <SpecialOffers
          onClaimDiscount={(code) => {
            handleApplyPromo(code);
            setIsCartOpen(true);
          }}
          onViewAllMenu={() => handleScrollToSection('products')}
          onSelectSpecialItem={handleSelectSpecialItem}
        />

        {/* Interactive Creations Menu */}
        <ExploreCreations
          onProductClick={(product) => setSelectedProduct(product)}
          onAddToCart={(product, qty) => handleAddToCart(product, qty, 'Regular')}
        />

        {/* Curated moment menus (from mockup mobile view) */}
        <MenusSection />

        {/* Storytelling Section */}
        <OurStory onLearnMoreClick={() => handleScrollToSection('products')} />

        {/* Community Testimonials & Submit Feedback */}
        <CommunityReviews />

        {/* Quality indicator columns */}
        <BrandBanner />

      </main>

      {/* Footer Details */}
      <Footer onScrollToSection={handleScrollToSection} />

      {/* Interactive Popup Modals & Drawers */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <ProductDetailsModal
        product={selectedProduct}
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        appliedPromo={appliedPromo}
        onApplyPromo={handleApplyPromo}
      />
    </div>
  );
}
