import React, { useState } from 'react';
import { X, Dumbbell, CheckCircle, Phone, MapPin } from 'lucide-react';
import { CONTACT_DATA } from '../data/gymData';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlanName?: string;
}

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  defaultPlanName = 'MONTHLY MEMBERSHIP',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [plan, setPlan] = useState(defaultPlanName || 'MONTHLY MEMBERSHIP');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-zinc-950/90 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-amber-500/40 p-1 flex items-center justify-center overflow-hidden shadow-md shrink-0">
              <img
                src={CONTACT_DATA.logoUrl}
                alt="AK GYM Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">
                ADDIS ABABA REGISTRATION
              </span>
              <h3 className="font-display text-2xl font-black uppercase text-white">
                JOIN AK GYM
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-500 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h4 className="font-display text-2xl font-black text-white uppercase">
                  REGISTRATION REQUESTED!
                </h4>
                <p className="text-xs text-zinc-300 max-w-xs mx-auto leading-relaxed">
                  Thank you <strong className="text-white">{fullName}</strong> for choosing AK GYM. Your request for <strong className="text-amber-400">{plan}</strong> has been received.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-left space-y-2 text-xs">
                <div className="flex items-center gap-2 text-zinc-300">
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>Call us anytime: <strong className="text-white">{CONTACT_DATA.phoneDisplay}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <span>Visit: <strong className="text-white">{CONTACT_DATA.neighborhood}, Addis Ababa</strong></span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3.5 rounded-xl font-display text-xs font-bold uppercase tracking-wider text-zinc-950 gold-gradient-bg"
              >
                DONE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 font-medium leading-relaxed">
                ⚡ <strong>NO CREDIT CARD REQUIRED.</strong> Confirm your spot now and pay conveniently in cash or CBE/Telebirr at our reception in Bole Medhanialem.
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
                  Select Plan
                </label>
                <select
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="MONTHLY MEMBERSHIP">MONTHLY MEMBERSHIP — ETB 1,500 / MO</option>
                  <option value="DAY PASS">DAY PASS — ETB 200 / DAY</option>
                  <option value="VIP PERFORMANCE (3 MONTHS)">VIP PERFORMANCE — ETB 4,000 / 3 MO</option>
                  <option value="GENERAL INQUIRY">GENERAL TOUR & INQUIRY</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Ahmed Hassan"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
                  Phone Number (Ethiopia) *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +251 91 100 2233"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-display text-sm font-bold tracking-wider uppercase text-zinc-950 gold-gradient-bg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all mt-2"
              >
                CONFIRM JOIN REQUEST
              </button>

              <p className="text-[11px] text-zinc-500 text-center uppercase tracking-wider">
                AK GYM • Bole Medhanialem, Addis Ababa
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
