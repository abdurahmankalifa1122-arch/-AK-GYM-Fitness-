import React from 'react';
import { Award, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { TRAINER_DATA } from '../data/gymData';
import { ImageWithFallback } from './ImageWithFallback';

interface TrainerSectionProps {
  onOpenJoinModal: () => void;
}

export const TrainerSection: React.FC<TrainerSectionProps> = ({ onOpenJoinModal }) => {
  return (
    <section id="trainer" className="py-24 bg-zinc-900/60 relative overflow-hidden border-y border-zinc-800/80">
      
      {/* Background glow accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold text-amber-500 tracking-widest uppercase bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full inline-block">
            HEAD COACH & ATHLETIC PERFORMANCE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase">
            MEET YOUR <span className="gold-gradient-text">TRAINER</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Trainer Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-zinc-800 shadow-2xl group">
              <ImageWithFallback
                src={TRAINER_DATA.image}
                alt={`${TRAINER_DATA.name} male coach at AK GYM`}
                className="w-full h-[500px] sm:h-[600px] object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                fallbackTitle={TRAINER_DATA.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-card border border-zinc-800/90 backdrop-blur-md">
                <div className="flex items-center gap-2 text-amber-400 font-display text-xs font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>HEAD OF PERFORMANCE</span>
                </div>
                <div className="font-display text-2xl font-black text-white uppercase">
                  {TRAINER_DATA.name}
                </div>
                <div className="text-xs text-zinc-400 font-semibold">
                  {TRAINER_DATA.title}
                </div>
              </div>
            </div>

            {/* Decorative Gold Accent Bar */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 gold-gradient-bg rounded-2xl -z-10 blur-xl opacity-50" />
          </div>

          {/* Trainer Info Column */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase">
                <Award className="w-4 h-4" />
                <span>EXPERT COACHING IN ADDIS ABABA</span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                {TRAINER_DATA.name}
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {TRAINER_DATA.bio}
              </p>
            </div>

            {/* Philosophy Quote Box */}
            <div className="p-6 rounded-2xl glass-card border-l-4 border-l-amber-500 border-zinc-800/80 space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                TRAINING PHILOSOPHY
              </span>
              <blockquote className="text-sm sm:text-base text-zinc-200 font-sans italic leading-relaxed">
                "{TRAINER_DATA.philosophy}"
              </blockquote>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-center space-y-1">
                <span className="font-display text-3xl sm:text-4xl font-black text-white gold-gradient-text">
                  8+
                </span>
                <span className="text-[10px] sm:text-xs text-zinc-400 font-bold uppercase tracking-wider block">
                  YEARS EXP.
                </span>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-center space-y-1">
                <span className="font-display text-3xl sm:text-4xl font-black text-white gold-gradient-text">
                  500+
                </span>
                <span className="text-[10px] sm:text-xs text-zinc-400 font-bold uppercase tracking-wider block">
                  MEMBERS TRAINED
                </span>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-center space-y-1">
                <span className="font-display text-3xl sm:text-4xl font-black text-white gold-gradient-text">
                  100%
                </span>
                <span className="text-[10px] sm:text-xs text-zinc-400 font-bold uppercase tracking-wider block">
                  COMMITMENT
                </span>
              </div>
            </div>

            {/* Specialties Checklist */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                SPECIALTIES & CERTIFICATIONS:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {TRAINER_DATA.specialties.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                    <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-zinc-800/80">
              <button
                onClick={onOpenJoinModal}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-display text-sm font-bold tracking-wider text-zinc-950 gold-gradient-bg shadow-xl hover:scale-105 transition-all uppercase"
              >
                BOOK COACHING ASSESSMENT WITH KALEB
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
