import React from 'react';
import { Check, ShieldCheck, Sparkles } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data/gymData';

interface MembershipSectionProps {
  onOpenJoinModal: (planName?: string) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onOpenJoinModal }) => {
  return (
    <section id="membership" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-amber-500 text-xs font-bold tracking-widest uppercase">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            <span>TRANSPARENT ADDIS ABABA PRICING</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase">
            MEMBERSHIP <span className="gold-gradient-text">PLANS</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Invest in your physical excellence. Clear pricing in <strong className="text-amber-400 font-bold">ETB (Ethiopian Birr)</strong> with no hidden fees, long contracts, or online card processing required.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-zinc-900/90 border-2 border-amber-500/80 shadow-2xl shadow-amber-500/15 scale-105 z-10'
                    : 'glass-card border border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1 rounded-full gold-gradient-bg text-zinc-950 font-display text-xs font-black tracking-widest uppercase shadow-lg shadow-amber-500/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>MOST POPULAR CHOICE</span>
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="border-b border-zinc-800 pb-6 mb-6">
                    <h3 className="font-display text-2xl font-black text-white uppercase tracking-wide">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 min-h-[36px]">
                      {plan.tagline}
                    </p>

                    <div className="mt-6 flex items-baseline gap-2">
                      <span className="font-display text-4xl sm:text-5xl font-black text-white">
                        ETB {plan.priceETB.toLocaleString()}
                      </span>
                      <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
                        / {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">
                      INCLUDED IN THIS PLAN:
                    </span>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5 text-amber-400">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-sm text-zinc-300 font-medium leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div className="space-y-3 pt-4 border-t border-zinc-800/60">
                  <button
                    onClick={() => onOpenJoinModal(plan.name)}
                    className={`w-full py-4 rounded-xl font-display text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-lg ${
                      isPopular
                        ? 'gold-gradient-bg text-zinc-950 hover:shadow-amber-500/30 hover:scale-[1.02]'
                        : 'bg-zinc-900 hover:bg-amber-500 hover:text-zinc-950 text-white border border-zinc-700 hover:border-amber-500'
                    }`}
                  >
                    JOIN AK GYM
                  </button>
                  <p className="text-[11px] text-center text-zinc-500 uppercase tracking-wider">
                    Inquire via quick form or phone in Addis Ababa
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Notice Bar regarding offline payment */}
        <div className="mt-16 p-6 rounded-2xl glass-card border border-zinc-800 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              IN-PERSON REGISTRATION AT AK GYM
            </span>
            <p className="text-sm text-zinc-300">
              Memberships are registered directly at our reception at Bole Medhanialem. Pay conveniently in cash or via local bank transfer (CBE / Telebirr) upon arrival.
            </p>
          </div>
          <button
            onClick={() => onOpenJoinModal()}
            className="shrink-0 px-6 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-amber-400 border border-amber-500/40 font-display text-xs font-bold tracking-wider uppercase"
          >
            CONTACT RECEPTION
          </button>
        </div>

      </div>
    </section>
  );
};
