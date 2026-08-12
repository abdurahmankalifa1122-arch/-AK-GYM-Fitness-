import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/gymData';
import { ImageWithFallback } from './ImageWithFallback';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-zinc-950 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-amber-500 tracking-widest uppercase bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full inline-block">
            VERIFIED MEMBER FEEDBACK
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase">
            WHAT OUR <span className="gold-gradient-text">MEMBERS</span> SAY
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Real feedback from dedicated athletes and lifters training daily at AK GYM in Addis Ababa.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              key={testimonial.id}
              className="glass-card glass-card-hover rounded-2xl p-8 border border-zinc-800/80 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                
                {/* Header with Avatar & Star Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500/50 bg-zinc-900 shrink-0">
                      <ImageWithFallback
                        src={testimonial.avatar}
                        alt={`${testimonial.name} AK GYM member`}
                        className="w-full h-full object-cover"
                        fallbackTitle={testimonial.name}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-display text-lg font-bold text-white uppercase">
                          {testimonial.name}
                        </span>
                        <CheckCircle className="w-3.5 h-3.5 text-amber-500" />
                      </div>
                      <span className="text-xs text-zinc-400 font-medium block">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>

                  <Quote className="w-8 h-8 text-amber-500/20 group-hover:text-amber-500/40 transition-colors" />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-zinc-300 leading-relaxed font-normal italic">
                  "{testimonial.text}"
                </p>

              </div>

              {/* Progress/PR Badge */}
              <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                  {testimonial.periodWithGym}
                </span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                  VERIFIED LIFTER
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
