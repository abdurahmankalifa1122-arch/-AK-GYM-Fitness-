import React, { useState } from 'react';
import { MapPin, Phone, Send, Clock, CheckCircle2, Navigation, MessageSquare } from 'lucide-react';
import { CONTACT_DATA } from '../data/gymData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    goal: 'Muscle Building & Heavy Strength',
    preferredTime: 'Morning (6 AM - 10 AM)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-amber-500 tracking-widest uppercase bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full inline-block">
            VISIT OR GET IN TOUCH
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase">
            CONTACT <span className="gold-gradient-text">AK GYM</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Located in Bole Medhanialem, Addis Ababa. Stop by for a walk-through or message our team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & CTAs */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={`tel:${CONTACT_DATA.phoneRaw}`}
                className="p-4 rounded-xl gold-gradient-bg text-zinc-950 font-display text-xs font-bold uppercase tracking-wider flex flex-col items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all text-center"
              >
                <Phone className="w-5 h-5 stroke-[2.5]" />
                <span>CALL AK GYM</span>
              </a>

              <a
                href={CONTACT_DATA.telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-display text-xs font-bold uppercase tracking-wider flex flex-col items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all text-center"
              >
                <Send className="w-5 h-5" />
                <span>MESSAGE US</span>
              </a>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Bole Medhanialem Addis Ababa Ethiopia')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-amber-400 border border-amber-500/30 hover:border-amber-500 font-display text-xs font-bold uppercase tracking-wider flex flex-col items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all text-center"
              >
                <Navigation className="w-5 h-5" />
                <span>DIRECTIONS</span>
              </a>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl glass-card border border-zinc-800 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-500 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block">
                    LOCATION & ADDRESS
                  </span>
                  <h3 className="font-display text-xl font-bold text-white uppercase">
                    {CONTACT_DATA.neighborhood}, {CONTACT_DATA.city}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {CONTACT_DATA.fullAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone & Telegram Details Card */}
            <div className="p-6 rounded-2xl glass-card border border-zinc-800 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-500 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block">
                    DIRECT PHONE & TELEGRAM
                  </span>
                  <div className="font-display text-2xl font-black text-white">
                    {CONTACT_DATA.phoneDisplay}
                  </div>
                  <div className="text-xs text-zinc-400 flex items-center gap-2 pt-1">
                    <span className="text-sky-400 font-bold">Telegram:</span>
                    <span>{CONTACT_DATA.telegramHandle}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="p-6 rounded-2xl glass-card border border-zinc-800 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-500 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-2 w-full">
                  <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block">
                    GYM OPENING HOURS
                  </span>
                  <div className="space-y-1.5 text-xs text-zinc-300">
                    <div className="flex justify-between border-b border-zinc-800 pb-1">
                      <span className="text-zinc-400">Monday – Saturday:</span>
                      <span className="font-bold text-white">{CONTACT_DATA.openingHours.weekdays}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Sunday:</span>
                      <span className="font-bold text-white">{CONTACT_DATA.openingHours.sunday}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl glass-card border border-zinc-800 shadow-2xl relative">
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-amber-500 font-display text-xs font-bold uppercase tracking-wider">
                  <MessageSquare className="w-4 h-4" />
                  <span>DIRECT INQUIRY & TOUR REGISTRATION</span>
                </div>
                <h3 className="font-display text-3xl font-black text-white uppercase">
                  SEND A MESSAGE TO <span className="gold-gradient-text">AK GYM</span>
                </h3>
                <p className="text-xs text-zinc-400">
                  Fill out your details to request a workout tour, discuss coaching, or get answers immediately.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-amber-500/10 border border-amber-500/40 text-center space-y-4 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-amber-500 mx-auto" />
                  <h4 className="font-display text-2xl font-bold text-white uppercase">
                    INQUIRY RECEIVED!
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed max-w-md mx-auto">
                    Thank you <strong className="text-white">{formData.fullName}</strong>. Our team at AK GYM Bole Medhanialem will call you at <strong className="text-amber-400">{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: '', phone: '', goal: 'Muscle Building & Heavy Strength', preferredTime: 'Morning (6 AM - 10 AM)', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-amber-400 font-display font-bold uppercase tracking-wider"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Dawit Kebede"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +251 91 123 4567"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
                        Primary Goal
                      </label>
                      <select
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-amber-500"
                      >
                        <option>Muscle Building & Heavy Strength</option>
                        <option>Body Recomposition & Fat Loss</option>
                        <option>Powerlifting & PR Focus</option>
                        <option>Athletic Conditioning</option>
                        <option>General Fitness & Wellness</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
                        Preferred Training Time
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-amber-500"
                      >
                        <option>Early Morning (6 AM – 9 AM)</option>
                        <option>Mid-Day (10 AM – 3 PM)</option>
                        <option>Evening Peak (4 PM – 8 PM)</option>
                        <option>Night Shift (8 PM – 10 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
                      Message / Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ask about equipment, membership, or coaching..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-display text-sm font-bold tracking-wider uppercase text-zinc-950 gold-gradient-bg shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all"
                  >
                    SUBMIT INQUIRY TO AK GYM
                  </button>

                  <p className="text-[11px] text-zinc-500 text-center uppercase tracking-wider">
                    We respect your privacy. No spam. Direct response from AK GYM staff.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
