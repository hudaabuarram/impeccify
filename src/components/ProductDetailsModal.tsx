import React, { useState } from 'react';
import { X, Star, Minus, Plus, ShoppingBag, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailsModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, selectedSize?: string) => void;
}

export default function ProductDetailsModal({ product, isOpen, onClose, onAddToCart }: ProductDetailsModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('Regular');
  const [isAdded, setIsAdded] = useState(false);

  if (!isOpen || !product) return null;

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAdd = () => {
    onAddToCart(product, quantity, selectedSize);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
      // Reset local states
      setQuantity(1);
      setSelectedSize('Regular');
    }, 1500);
  };

  const priceMultiplier = selectedSize === 'Large' ? 1.4 : selectedSize === 'Mini' ? 0.75 : 1;
  const finalPrice = product.price * priceMultiplier * quantity;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-[2.5rem] w-full max-w-2xl overflow-hidden shadow-2xl border border-brand-cream-dark/80 flex flex-col md:flex-row animate-in zoom-in-95 duration-300 max-h-[90vh]"
        id="product-details-modal"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-md text-brand-dark/50 hover:text-brand-dark hover:bg-brand-cream rounded-full transition-all cursor-pointer z-20 shadow-sm border border-brand-cream-dark/50"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Large Product Image */}
        <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-auto bg-brand-cream relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {product.isSpecial && (
            <span className="absolute top-4 left-4 bg-brand-coral text-white font-rounded text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wide">
              Top Pick
            </span>
          )}
        </div>

        {/* Right Side: Product Details & Controls */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between text-left overflow-y-auto">
          <div>
            {/* Category tag */}
            <span className="text-brand-orange text-xs font-bold tracking-widest uppercase">
              {product.category}
            </span>

            {/* Title */}
            <h3 className="font-rounded text-xl sm:text-2xl font-extrabold text-brand-dark mt-1.5 mb-2 leading-tight">
              {product.name}
            </h3>

            {/* Ratings summary */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-brand-gold">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-brand-gold' : 'text-brand-cream-dark'} stroke-none`} 
                  />
                ))}
              </div>
              <span className="text-xs text-brand-dark/60 font-medium">
                {product.rating} ({product.reviewsCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-brand-dark/75 text-xs sm:text-sm mb-6 leading-relaxed font-light">
              {product.description}
            </p>

            {/* Customizable Size Selector */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-brand-dark/75 uppercase tracking-wider mb-2">
                Select Size
              </label>
              <div className="flex gap-2">
                {['Mini', 'Regular', 'Large'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`flex-1 text-xs font-bold py-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                      selectedSize === size
                        ? 'bg-brand-dark text-white border-transparent shadow-sm scale-102'
                        : 'bg-brand-cream border-brand-cream-dark text-brand-dark/75 hover:bg-brand-cream-dark/35'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            {/* Divider */}
            <div className="border-t border-brand-cream-dark/80 pt-4 mb-4 flex items-center justify-between">
              <span className="text-xs text-brand-dark/50 font-bold uppercase tracking-wider">Quantity</span>
              
              {/* Quantity Controls */}
              <div className="flex items-center bg-brand-cream border border-brand-cream-dark rounded-full p-1 shadow-sm">
                <button
                  onClick={handleDecrease}
                  className="p-1.5 hover:bg-brand-cream-dark/60 text-brand-dark rounded-full transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center text-xs sm:text-sm font-bold text-brand-dark">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrease}
                  className="p-1.5 hover:bg-brand-cream-dark/60 text-brand-dark rounded-full transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart button and total */}
            <div className="flex items-center gap-4">
              <div className="text-left flex-shrink-0">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-dark/40 block">Total Price</span>
                <span className="font-rounded text-xl sm:text-2xl font-extrabold text-brand-dark">
                  ${finalPrice.toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleAdd}
                className={`flex-1 flex items-center justify-center gap-2 font-bold text-xs sm:text-sm py-4 rounded-xl transition-all duration-300 shadow-md ${
                  isAdded
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                    : 'bg-brand-coral hover:bg-brand-orange text-white hover:scale-[1.01] shadow-brand-coral/10'
                } cursor-pointer`}
              >
                {isAdded ? (
                  <>
                    <Sparkles className="w-4 h-4 fill-current animate-bounce" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
