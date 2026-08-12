import React, { useEffect, useState, useRef } from 'react';
import { Users, Dumbbell, ShieldCheck, Flame } from 'lucide-react';

export const StatsCounter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [members, setMembers] = useState(0);
  const [stations, setStations] = useState(0);
  const [years, setYears] = useState(0);
  const [discipline, setDiscipline] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 50;
    const intervalTime = duration / steps;

    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setMembers(Math.min(500, Math.floor(500 * progress)));
      setStations(Math.min(20, Math.floor(20 * progress)));
      setYears(Math.min(8, Math.floor(8 * progress)));
      setDiscipline(Math.min(100, Math.floor(100 * progress)));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-amber-500" />,
      value: `${members}+`,
      label: 'MEMBERS',
      sublabel: 'Dedicated Lifters',
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-amber-500" />,
      value: `${stations}+`,
      label: 'TRAINING STATIONS',
      sublabel: 'Racks, Benches & Cable Platforms',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
      value: `${years}+`,
      label: 'YEARS EXPERIENCE',
      sublabel: 'Proven Strength Leadership',
    },
    {
      icon: <Flame className="w-8 h-8 text-amber-500" />,
      value: `${discipline}%`,
      label: 'DISCIPLINE',
      sublabel: 'Zero Excuses Policy',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-zinc-950 border-y border-zinc-800/80 relative overflow-hidden">
      
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-card border border-zinc-800/80 text-center flex flex-col items-center justify-center space-y-3 group hover:border-amber-500/40 transition-colors"
            >
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>

              <div className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight gold-gradient-text">
                {stat.value}
              </div>

              <div className="space-y-1">
                <div className="font-display text-base sm:text-lg font-extrabold text-white uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-xs text-zinc-400 font-medium">
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
