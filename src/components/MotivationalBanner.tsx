import React from 'react';
import { Flame, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface MotivationalBannerProps {
  onOpenJoinModal: () => void;
}

export const MotivationalBanner: React.FC<MotivationalBannerProps> = ({ onOpenJoinModal }) => {
  return (
    <section className="relative py-28 overflow-hidden bg-zinc-950 flex items-center justify-center">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://i.ibb.co/jXYJzYW/Chat-GPT-Image-Aug-12-2026-01-59-44-AM-optimized-2500.png"
          alt="Male athlete lifting weights at AK GYM"
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-[1.2]"
          fallbackTitle="AK GYM MOTIVATION"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/90" />
        <div className="absolute inset-0 bg-amber-500/5 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase">
          <Flame className="w-4 h-4 text-amber-500" />
          <span>NO SHORTCUTS • NO EXCUSES</span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-[0.95]">
          DISCIPLINE BUILDS <br />
          <span className="gold-gradient-text">RESULTS.</span>
        </h2>

        <p className="text-zinc-300 text-lg sm:text-2xl font-light italic max-w-2xl mx-auto">
          “Your goals don't get easier. You get stronger.”
        </p>

        <div className="pt-4 flex items-center justify-center">
          <button
            onClick={onOpenJoinModal}
            className="px-10 py-5 rounded-xl font-display text-base font-bold tracking-wider text-zinc-950 gold-gradient-bg shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 active:scale-95 transition-all uppercase flex items-center gap-3"
          >
            <span>START YOUR JOURNEY</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
