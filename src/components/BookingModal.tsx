import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Reservation } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [booking, setBooking] = useState<Reservation>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '14:00',
    guests: 2,
    specialRequests: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      // Reset form
      setBooking({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '14:00',
        guests: 2,
        specialRequests: '',
      });
    }, 3000);
  };

  const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8];
  const timeOptions = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl border border-brand-cream-dark/80 animate-in zoom-in-95 duration-300"
        id="booking-modal-content"
      >
        {/* Header decoration bar */}
        <div className="h-2 w-full bg-brand-coral"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-brand-dark/40 hover:text-brand-dark hover:bg-brand-cream rounded-full transition-colors cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center text-center p-10 py-16 animate-in fade-in duration-500">
            <CheckCircle2 className="w-20 h-20 text-emerald-500 mb-6 animate-bounce" />
            <h3 className="font-rounded font-extrabold text-2xl text-brand-dark mb-3">Table Reserved!</h3>
            <p className="text-brand-dark/70 text-sm max-w-sm mb-6 leading-relaxed">
              We have successfully reserved a lovely table for <strong>{booking.guests} guests</strong> on <strong>{booking.date}</strong> at <strong>{booking.time}</strong>.
            </p>
            <p className="text-brand-dark/50 text-xs font-medium">
              A confirmation text/email has been sent to {booking.name}. See you soon!
            </p>
          </div>
        ) : (
          <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            <div className="text-left mb-6">
              <span className="text-brand-orange text-xs font-bold tracking-widest uppercase">Table Booking</span>
              <h3 className="font-rounded text-xl sm:text-2xl font-extrabold text-brand-dark mt-1">Book a Sweet Table</h3>
              <p className="text-brand-dark/60 text-xs sm:text-sm mt-1.5">
                Reserve a cozy table to enjoy our fresh, warm pastries straight out of the oven!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-brand-dark/75 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={booking.name}
                  onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                  placeholder="e.g. Liam Thompson"
                  className="w-full text-xs sm:text-sm bg-brand-cream border border-brand-cream-dark rounded-xl px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:border-brand-orange"
                />
              </div>

              {/* Email & Phone side-by-side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-brand-dark/75 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={booking.email}
                    onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                    placeholder="e.g. liam@example.com"
                    className="w-full text-xs sm:text-sm bg-brand-cream border border-brand-cream-dark rounded-xl px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-dark/75 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={booking.phone}
                    onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                    placeholder="e.g. +1 (555) 000-1234"
                    className="w-full text-xs sm:text-sm bg-brand-cream border border-brand-cream-dark rounded-xl px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:border-brand-orange"
                  />
                </div>
              </div>

              {/* Date, Time & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-brand-dark/75 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-brand-coral" /> Date *
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={booking.date}
                    onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                    className="w-full text-xs sm:text-sm bg-brand-cream border border-brand-cream-dark rounded-xl px-3 py-3 text-brand-dark focus:outline-none focus:border-brand-orange cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-dark/75 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-brand-coral" /> Time *
                  </label>
                  <select
                    value={booking.time}
                    onChange={(e) => setBooking({ ...booking, time: e.target.value })}
                    className="w-full text-xs sm:text-sm bg-brand-cream border border-brand-cream-dark rounded-xl px-3 py-3 text-brand-dark focus:outline-none focus:border-brand-orange cursor-pointer"
                  >
                    {timeOptions.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-dark/75 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-brand-coral" /> Guests *
                  </label>
                  <select
                    value={booking.guests}
                    onChange={(e) => setBooking({ ...booking, guests: parseInt(e.target.value) })}
                    className="w-full text-xs sm:text-sm bg-brand-cream border border-brand-cream-dark rounded-xl px-3 py-3 text-brand-dark focus:outline-none focus:border-brand-orange cursor-pointer"
                  >
                    {guestOptions.map((g) => (
                      <option key={g} value={g}>{g} {g === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-bold text-brand-dark/75 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5 text-brand-coral" /> Special Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  value={booking.specialRequests}
                  onChange={(e) => setBooking({ ...booking, specialRequests: e.target.value })}
                  placeholder="e.g. Birthday celebration, window seat, eggless options..."
                  className="w-full text-xs sm:text-sm bg-brand-cream border border-brand-cream-dark rounded-xl px-4 py-3 text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:border-brand-orange resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-brand-coral hover:bg-brand-orange text-white font-bold text-sm py-4 rounded-xl transition-all duration-300 shadow-md shadow-brand-coral/15 hover:scale-[1.01] active:scale-95 cursor-pointer mt-4"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
