import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, Tag, CheckCircle2, ShoppingCart } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, newQty: number, size?: string) => void;
  onRemoveItem: (id: string, size?: string) => void;
  onClearCart: () => void;
  appliedPromo: string;
  onApplyPromo: (code: string) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  appliedPromo,
  onApplyPromo,
}: CartDrawerProps) {
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isOpen) return null;

  // Calculate pricing
  const subtotal = cart.reduce((acc, item) => {
    const multiplier = item.selectedSize === 'Large' ? 1.4 : item.selectedSize === 'Mini' ? 0.75 : 1;
    return acc + item.product.price * multiplier * item.quantity;
  }, 0);

  const discountAmount = appliedPromo === 'DELIGHT20' ? subtotal * 0.2 : 0;
  const deliveryFee = subtotal > 20 || subtotal === 0 ? 0 : 2.99;
  const grandTotal = subtotal - discountAmount + deliveryFee;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput.trim().toUpperCase() === 'DELIGHT20') {
      onApplyPromo('DELIGHT20');
      setPromoError('');
    } else {
      setPromoError('Invalid code. Try "DELIGHT20"');
    }
  };

  const handleCheckout = () => {
    // Show success overlay
    setCheckoutSuccess(true);
    setTimeout(() => {
      setCheckoutSuccess(false);
      onClearCart();
      onClose();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Click outside to close */}
      <div className="flex-1" onClick={onClose}></div>

      <div 
        className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-brand-cream-dark animate-in slide-in-from-right duration-300"
        id="cart-drawer-panel"
      >
        {/* Close & Header */}
        <div className="p-6 border-b border-brand-cream-dark flex items-center justify-between">
          <div className="flex items-center gap-2 text-left">
            <ShoppingBag className="w-5 h-5 text-brand-coral" />
            <h3 className="font-rounded font-extrabold text-lg text-brand-dark">My Shopping Bag</h3>
            <span className="text-xs bg-brand-cream-dark text-brand-dark px-2.5 py-0.5 rounded-full font-bold">
              {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-brand-cream text-brand-dark/45 hover:text-brand-dark rounded-full transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {checkoutSuccess ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8 py-16 animate-in fade-in duration-500">
            <CheckCircle2 className="w-20 h-20 text-emerald-500 mb-6 animate-bounce" />
            <h3 className="font-rounded font-extrabold text-2xl text-brand-dark mb-3">Order Received!</h3>
            <p className="text-brand-dark/75 text-sm max-w-sm mb-6 leading-relaxed">
              Your sweet treats are being prepared by our chefs right now! They will be ready or delivered to you shortly.
            </p>
            <div className="bg-brand-cream border border-brand-cream-dark p-4 rounded-2xl w-full text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-dark/40 block mb-1">Estimated Arrival</span>
              <span className="text-sm font-rounded font-bold text-brand-dark">🚀 25 - 35 Minutes</span>
            </div>
          </div>
        ) : cart.length === 0 ? (
          /* Empty Cart State */
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <div className="w-20 h-20 rounded-full bg-brand-cream border border-brand-cream-dark flex items-center justify-center mb-6 text-brand-dark/30">
              <ShoppingCart className="w-9 h-9" />
            </div>
            <h4 className="font-rounded font-bold text-lg text-brand-dark mb-2">Your Bag is Empty</h4>
            <p className="text-brand-dark/60 text-xs sm:text-sm max-w-xs mb-6">
              Looks like you haven't added any delicious cupcakes, brownies, or cookies to your bag yet!
            </p>
            <button
              onClick={onClose}
              className="bg-brand-dark hover:bg-brand-orange text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all cursor-pointer"
            >
              Start Exploring
            </button>
          </div>
        ) : (
          /* Scrollable Cart Items List */
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-5" id="cart-items-list">
            {cart.map((item, idx) => {
              const multiplier = item.selectedSize === 'Large' ? 1.4 : item.selectedSize === 'Mini' ? 0.75 : 1;
              const unitPrice = item.product.price * multiplier;
              const itemTotal = unitPrice * item.quantity;

              return (
                <div 
                  key={`${item.product.id}-${item.selectedSize}`}
                  className="flex items-center gap-4 p-3 hover:bg-brand-cream/40 rounded-2xl border border-transparent hover:border-brand-cream-dark/50 transition-all text-left relative group"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-xl border border-brand-cream-dark"
                    referrerPolicy="no-referrer"
                  />

                  {/* Info details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-rounded font-bold text-brand-dark text-sm leading-snug truncate">
                      {item.product.name}
                    </h4>
                    <span className="text-[10px] text-brand-dark/50 font-bold uppercase tracking-wide block mt-0.5">
                      Size: {item.selectedSize || 'Regular'} • ${unitPrice.toFixed(2)}
                    </span>

                    {/* Quantity controls inside card */}
                    <div className="flex items-center gap-2.5 mt-2">
                      <div className="flex items-center bg-brand-cream border border-brand-cream-dark rounded-full p-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1, item.selectedSize)}
                          className="p-1 hover:bg-brand-cream-dark/40 text-brand-dark rounded-full transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-brand-dark">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1, item.selectedSize)}
                          className="p-1 hover:bg-brand-cream-dark/40 text-brand-dark rounded-full transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id, item.selectedSize)}
                        className="text-brand-coral/60 hover:text-brand-coral p-1 hover:bg-red-50 rounded-lg transition-all cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Pricing total */}
                  <div className="text-right">
                    <span className="font-rounded font-extrabold text-brand-dark text-sm sm:text-base">
                      ${itemTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Pricing Summary, Promo & Checkout (Visible if cart is not empty) */}
        {!checkoutSuccess && cart.length > 0 && (
          <div className="p-6 border-t border-brand-cream-dark bg-brand-cream/35 flex flex-col gap-4">
            
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Promo Code (e.g. DELIGHT20)"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  disabled={appliedPromo === 'DELIGHT20'}
                  className="w-full text-xs bg-white border border-brand-cream-dark rounded-xl pl-8 pr-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:border-brand-orange uppercase"
                />
                <Tag className="w-3.5 h-3.5 text-brand-dark/30 absolute left-3 top-3.5" />
              </div>
              <button
                type="submit"
                disabled={appliedPromo === 'DELIGHT20' || !promoInput}
                className="bg-brand-dark hover:bg-brand-orange text-white text-xs font-bold px-4 py-3 rounded-xl disabled:bg-brand-dark/20 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                Apply
              </button>
            </form>

            {/* Promo Error or Success text */}
            {promoError && <p className="text-left text-[10px] text-brand-coral font-bold">{promoError}</p>}
            {appliedPromo === 'DELIGHT20' && (
              <p className="text-left text-[10px] text-emerald-600 font-extrabold flex items-center gap-1">
                🎉 Code "DELIGHT20" active! 20% Discount applied.
              </p>
            )}

            {/* Calculations Panel */}
            <div className="flex flex-col gap-2 pt-2 border-t border-brand-cream-dark text-left">
              <div className="flex justify-between text-xs text-brand-dark/65 font-medium">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              {appliedPromo === 'DELIGHT20' && (
                <div className="flex justify-between text-xs text-emerald-600 font-extrabold">
                  <span>20% Discount</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between text-xs text-brand-dark/65 font-medium">
                <span>Delivery</span>
                <span>{deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}</span>
              </div>

              {deliveryFee > 0 && (
                <span className="text-[9px] text-brand-dark/40 block -mt-1 leading-none font-medium">
                  Add ${(20 - subtotal).toFixed(2)} more for FREE delivery!
                </span>
              )}

              <div className="flex justify-between text-sm sm:text-base text-brand-dark font-extrabold pt-2 border-t border-brand-cream-dark/85">
                <span>Grand Total</span>
                <span className="font-rounded text-lg sm:text-xl text-brand-dark">
                  ${grandTotal.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Checkout CTA */}
            <button
              onClick={handleCheckout}
              className="w-full bg-brand-coral hover:bg-brand-orange text-white font-rounded font-extrabold text-sm py-4 rounded-xl transition-all duration-300 shadow-md shadow-brand-coral/15 cursor-pointer hover:scale-[1.01]"
            >
              Checkout & Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
