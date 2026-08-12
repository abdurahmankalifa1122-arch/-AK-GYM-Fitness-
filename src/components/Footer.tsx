import React from 'react';
import { Dumbbell, Send, Phone, MapPin, ArrowUp } from 'lucide-react';
import { CONTACT_DATA } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Brand Info (Cols 1-2) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-amber-500/40 p-1 flex items-center justify-center overflow-hidden shadow-lg shadow-amber-500/10 group-hover:border-amber-400 transition-all duration-200 shrink-0">
                <img
                  src={CONTACT_DATA.logoUrl}
                  alt="AK GYM Logo"
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>
              <span className="font-display text-2xl font-black text-white tracking-wider group-hover:text-amber-400 transition-colors">
                AK <span className="text-amber-500">GYM</span>
              </span>
            </a>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Addis Ababa’s premier high-end fitness destination. Equipped for serious lifting, hypertrophy, and physical excellence.
            </p>

            <div className="font-display text-xs font-bold text-amber-500 uppercase tracking-widest pt-1">
              STRENGTH • DISCIPLINE • RESULTS
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#membership" className="hover:text-amber-400 transition-colors">Membership Plans</a></li>
              <li><a href="#exercises" className="hover:text-amber-400 transition-colors">Exercise Tips</a></li>
              <li><a href="#trainer" className="hover:text-amber-400 transition-colors">Meet Trainer</a></li>
              <li><a href="#reviews" className="hover:text-amber-400 transition-colors">Member Reviews</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Gym Gallery</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              LOCATION & CONTACT
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Bole Medhanialem, Near Edna Mall Plaza, Addis Ababa</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${CONTACT_DATA.phoneRaw}`} className="hover:text-white">{CONTACT_DATA.phoneDisplay}</a>
              </div>
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={CONTACT_DATA.telegramLink} target="_blank" rel="noopener noreferrer" className="hover:text-white">Telegram: {CONTACT_DATA.telegramHandle}</a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              GYM HOURS
            </h4>
            <div className="space-y-1.5 text-xs text-zinc-400">
              <div className="flex justify-between">
                <span>Mon – Sat:</span>
                <span className="text-white font-semibold">6 AM – 10 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-white font-semibold">8 AM – 6 PM</span>
              </div>
            </div>
            <div className="pt-2 text-[10px] text-amber-500 font-bold uppercase tracking-wider">
              Open On Most Ethiopian Holidays
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © 2026 <strong className="text-zinc-300">AK GYM</strong>. All Rights Reserved. Designed for Excellence in Addis Ababa, Ethiopia.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors uppercase font-display font-bold text-[10px]"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-500" />
          </button>
        </div>

      </div>
    </footer>
  );
};
