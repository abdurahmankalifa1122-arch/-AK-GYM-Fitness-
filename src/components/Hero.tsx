import React from 'react';
import { ArrowDownRight, Shield, Award, Flame, Dumbbell } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroProps {
  onOpenJoinModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-zinc-950">
      {/* Background Image Layer with Cinematic Gradient Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://i.ibb.co/jXYJzYW/Chat-GPT-Image-Aug-12-2026-01-59-44-AM-optimized-2500.png"
          alt="Male athlete lifting weights in modern luxury AK GYM"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.15] scale-105"
          fallbackTitle="AK GYM ATHLETE"
        />
        {/* Layer Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/60 to-transparent" />
        {/* Subtle glowing radial background */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-8 flex flex-col items-start space-y-6">
            
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase backdrop-blur-md">
              <Shield className="w-3.5 h-3.5 text-amber-500" />
              <span>PREMIUM FITNESS • ADDIS ABABA</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <span className="block font-display text-2xl sm:text-3xl font-extrabold tracking-widest text-amber-500 uppercase">
                AK GYM
              </span>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.95]">
                BUILD YOUR <br />
                <span className="gold-gradient-text">STRONGEST</span> SELF
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed border-l-2 border-amber-500/60 pl-4 py-1">
              “Train with purpose. Build strength. Stay disciplined. Become better every day.”
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <button
                onClick={() => handleScrollTo('membership')}
                className="w-full sm:w-auto px-8 py-4 rounded-lg font-display text-base font-bold tracking-wider text-zinc-950 gold-gradient-bg shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase flex items-center justify-center gap-2"
              >
                <span>VIEW MEMBERSHIP</span>
                <ArrowDownRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => handleScrollTo('exercises')}
                className="w-full sm:w-auto px-8 py-4 rounded-lg font-display text-base font-bold tracking-wider text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 hover:border-amber-500/50 backdrop-blur-sm transition-all uppercase flex items-center justify-center gap-2"
              >
                <span>EXPLORE TRAINING</span>
              </button>
            </div>

            {/* Highlights Bar */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-800/80 w-full max-w-xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-500">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-bold text-white text-lg leading-none">1,500 <span className="text-xs text-amber-400">ETB</span></div>
                  <div className="text-[11px] text-zinc-400 uppercase tracking-wider mt-1">Monthly Plan</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-500">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-bold text-white text-lg leading-none">HEAVY</div>
                  <div className="text-[11px] text-zinc-400 uppercase tracking-wider mt-1">Dumbbells & Racks</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-500">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-bold text-white text-lg leading-none">PRO</div>
                  <div className="text-[11px] text-zinc-400 uppercase tracking-wider mt-1">Coaching Staff</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Floating Feature Card (Desktop) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="glass-card rounded-2xl p-6 border border-zinc-800/90 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
                  <span className="font-display text-sm font-bold text-amber-400 tracking-wider uppercase">
                    ADDIS ABABA FACILITY
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                </div>

                <div className="relative rounded-xl overflow-hidden aspect-video border border-zinc-800">
                  <ImageWithFallback
                    src="https://i.ibb.co/jXYJzYW/Chat-GPT-Image-Aug-12-2026-01-59-44-AM-optimized-2500.png"
                    alt="Male bodybuilder training at AK GYM"
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                    fallbackTitle="AK GYM FACILITY"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-display uppercase tracking-wider bg-zinc-950/80 px-2.5 py-1 rounded backdrop-blur-md">
                      EST. ADDIS ABABA
                    </span>
                    <span className="text-xs text-amber-400 font-bold">100% DISCIPLINE</span>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide">
                    STRENGTH • DISCIPLINE • RESULTS
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Bole Medhanialem's high-caliber fitness club. Designed for dedicated athletes and lifters seeking zero compromises.
                  </p>
                </div>

                <button
                  onClick={onOpenJoinModal}
                  className="w-full py-3 rounded-lg bg-zinc-900 hover:bg-amber-500 hover:text-zinc-950 text-amber-400 border border-amber-500/30 hover:border-amber-500 font-display text-xs font-bold tracking-wider uppercase transition-all duration-200"
                >
                  REQUEST TOUR & MEMBERSHIP
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
