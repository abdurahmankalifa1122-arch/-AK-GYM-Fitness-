import React from 'react';
import { Dumbbell, Flame, UserCheck, ShieldCheck, Target, Users } from 'lucide-react';
import { WHY_CHOOSE_US_FEATURES } from '../data/gymData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Dumbbell':
        return <Dumbbell className="w-7 h-7 text-amber-500" />;
      case 'Flame':
        return <Flame className="w-7 h-7 text-amber-500" />;
      case 'UserCheck':
        return <UserCheck className="w-7 h-7 text-amber-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-amber-500" />;
      case 'Target':
        return <Target className="w-7 h-7 text-amber-500" />;
      case 'Users':
        return <Users className="w-7 h-7 text-amber-500" />;
      default:
        return <Dumbbell className="w-7 h-7 text-amber-500" />;
    }
  };

  return (
    <section className="py-24 bg-zinc-900/50 relative overflow-hidden border-y border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-amber-500 tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full inline-block">
            THE AK GYM ADVANTAGE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase">
            WHY CHOOSE <span className="gold-gradient-text">AK GYM</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            We are built specifically for athletes, serious lifters, and individuals committed to achieving tangible physical transformation.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US_FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-8 border border-zinc-800/80 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-amber-500/60 group-hover:bg-amber-500/10 transition-colors shadow-lg">
                  {getIcon(feature.iconName)}
                </div>

                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wide group-hover:text-amber-400 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-800/50 flex items-center justify-between text-xs font-bold text-zinc-500 uppercase tracking-widest group-hover:text-amber-500 transition-colors">
                <span>AK STANDARDS</span>
                <span>0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
