import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquarePlus, Quote, CheckCircle2 } from 'lucide-react';
import { REVIEWS } from '../data';
import { Review } from '../types';

export default function CommunityReviews() {
  const [reviews, setReviews] = useState<Review[]>(REVIEWS);
  const [activeIdx, setActiveIdx] = useState(0);
  
  // Review form states
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', role: '', comment: '', rating: 5 });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const activeReview = reviews[activeIdx] || reviews[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const addedReview: Review = {
      id: `custom-rev-${Date.now()}`,
      name: newReview.name,
      role: newReview.role || 'Gourmet Lover',
      rating: newReview.rating,
      comment: newReview.comment,
      avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150`, // generic elegant avatar
      date: 'Just now',
    };

    setReviews([addedReview, ...reviews]);
    setActiveIdx(0);
    setNewReview({ name: '', role: '', comment: '', rating: 5 });
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowForm(false);
    }, 2500);
  };

  return (
    <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto" id="community">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Spotlight Review Card */}
        <div className="lg:col-span-7 text-left" id="reviews-spotlight">
          <span className="text-brand-orange text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">Our Happy Family</span>
          <h2 className="font-rounded text-3xl sm:text-4xl font-extrabold text-brand-dark mb-8 leading-tight">
            Sweet Words from Our <br /> Community
          </h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeReview.id}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FFFDF9] rounded-[2.5rem] p-6 sm:p-10 border border-brand-cream-dark/80 shadow-lg relative"
              id="active-review-card"
            >
              {/* Giant quote icon */}
              <div className="absolute top-6 right-8 text-brand-orange/10">
                <Quote className="w-16 h-16 stroke-[4]" />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 text-brand-gold mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < activeReview.rating ? 'fill-brand-gold' : 'text-brand-cream-dark'} stroke-none`} 
                  />
                ))}
              </div>

              {/* Review Comment */}
              <p className="text-brand-dark/90 text-sm sm:text-base italic leading-relaxed mb-8 relative z-10 font-light">
                "{activeReview.comment}"
              </p>

              {/* User Bio */}
              <div className="flex items-center gap-4">
                <img
                  src={activeReview.avatar}
                  alt={activeReview.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-cream-dark shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-rounded font-bold text-brand-dark text-base">
                    {activeReview.name}
                  </h4>
                  <p className="text-xs text-brand-dark/50 font-medium">
                    {activeReview.role} • {activeReview.date}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Avatar selector bar */}
          <div className="flex gap-3 sm:gap-4 mt-8 flex-wrap" id="review-avatar-selectors">
            {reviews.map((rev, index) => {
              const isActive = activeIdx === index;
              return (
                <button
                  key={rev.id}
                  onClick={() => setActiveIdx(index)}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? 'border-brand-orange ring-4 ring-brand-orange/10 scale-105 shadow-md' 
                      : 'border-transparent hover:border-brand-cream-dark hover:scale-105'
                  }`}
                  aria-label={`View review from ${rev.name}`}
                >
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Write a Review Block */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left" id="reviews-form-panel">
          {!showForm ? (
            <div className="bg-[#2D1A12] text-white rounded-[2.5rem] p-8 border border-white/5 shadow-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-brand-brown-light text-brand-gold flex items-center justify-center mb-6">
                <MessageSquarePlus className="w-7 h-7" />
              </div>
              <h3 className="font-rounded text-xl font-bold mb-3">Share Your Sweet Experience!</h3>
              <p className="text-white/75 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
                Have you recently tasted our cookies, doughnuts, or croissants? We would absolutely love to hear your feedback!
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="bg-brand-gold hover:bg-white text-brand-dark font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-md cursor-pointer"
                id="show-review-form-btn"
              >
                Write a Review
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 border border-brand-cream-dark/80 shadow-lg flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-rounded text-lg sm:text-xl font-bold text-brand-dark">Write Your Review</h3>
                <button 
                  onClick={() => setShowForm(false)}
                  className="text-xs text-brand-dark/40 hover:text-brand-dark font-bold"
                >
                  Cancel
                </button>
              </div>

              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 animate-in fade-in duration-500">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4 animate-bounce" />
                  <h4 className="font-rounded font-bold text-brand-dark text-lg mb-2">Review Submitted!</h4>
                  <p className="text-brand-dark/60 text-xs sm:text-sm">Thank you for sharing your love with us.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-bold text-brand-dark/70 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      placeholder="e.g. Emily Watson"
                      className="w-full text-xs sm:text-sm bg-brand-cream border border-brand-cream-dark rounded-xl px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:border-brand-orange"
                    />
                  </div>

                  {/* Role field */}
                  <div>
                    <label className="block text-xs font-bold text-brand-dark/70 uppercase tracking-wider mb-1.5">
                      Your Title (Optional)
                    </label>
                    <input
                      type="text"
                      value={newReview.role}
                      onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                      placeholder="e.g. Croissant Fan / Sweet Tooth"
                      className="w-full text-xs sm:text-sm bg-brand-cream border border-brand-cream-dark rounded-xl px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:border-brand-orange"
                    />
                  </div>

                  {/* Rating Selector */}
                  <div>
                    <label className="block text-xs font-bold text-brand-dark/70 uppercase tracking-wider mb-1.5">
                      Rating *
                    </label>
                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview({ ...newReview, rating: star })}
                          className="text-brand-gold hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Star 
                            className={`w-6 h-6 ${star <= newReview.rating ? 'fill-brand-gold' : 'text-brand-cream-dark'} stroke-none`} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Comment Box */}
                  <div>
                    <label className="block text-xs font-bold text-brand-dark/70 uppercase tracking-wider mb-1.5">
                      Your Review *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      placeholder="What is your favorite treat, and how did it taste?"
                      className="w-full text-xs sm:text-sm bg-brand-cream border border-brand-cream-dark rounded-xl px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:border-brand-orange resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-coral hover:bg-brand-orange text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl transition-all duration-300 shadow-md cursor-pointer mt-2"
                  >
                    Submit Review
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
