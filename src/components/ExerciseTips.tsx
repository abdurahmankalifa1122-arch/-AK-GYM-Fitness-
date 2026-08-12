import React, { useState } from 'react';
import { Dumbbell, ChevronRight, Activity, Filter } from 'lucide-react';
import { EXERCISES_DATA } from '../data/gymData';
import { Exercise } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { ExerciseModal } from './ExerciseModal';

interface ExerciseTipsProps {
  onOpenJoinModal: () => void;
}

export const ExerciseTips: React.FC<ExerciseTipsProps> = ({ onOpenJoinModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  const categories = ['All', 'Chest', 'Legs', 'Back', 'Shoulders', 'Arms'];

  const filteredExercises = selectedCategory === 'All'
    ? EXERCISES_DATA
    : EXERCISES_DATA.filter(ex => ex.category === selectedCategory);

  return (
    <section id="exercises" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold text-amber-500 tracking-widest uppercase bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full inline-block">
            FORM & EXECUTION GUIDE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase">
            EXERCISE <span className="gold-gradient-text">TIPS</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Master fundamental movement patterns with safety, strict biomechanics, and targeted muscular activation.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <div className="hidden sm:flex items-center gap-2 mr-2 text-xs font-bold text-zinc-500 uppercase">
            <Filter className="w-3.5 h-3.5 text-amber-500" />
            <span>FILTER BY MUSCLE:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                selectedCategory === cat
                  ? 'gold-gradient-bg text-zinc-950 shadow-lg shadow-amber-500/20'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Exercise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExercises.map((exercise) => (
            <div
              key={exercise.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-zinc-800/80 flex flex-col justify-between group"
            >
              <div>
                {/* Image Box */}
                <div className="relative h-56 overflow-hidden bg-zinc-900 border-b border-zinc-800/80">
                  <ImageWithFallback
                    src={exercise.image}
                    alt={`${exercise.name} male athlete at AK GYM`}
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                    fallbackTitle={exercise.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Category & Difficulty Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-zinc-950/80 border border-zinc-800 text-[10px] font-bold text-amber-400 uppercase tracking-widest backdrop-blur-md">
                      {exercise.category}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-amber-500 text-zinc-950 font-display text-[10px] font-bold uppercase tracking-wider shadow">
                      {exercise.difficulty}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[11px] text-zinc-300 font-semibold uppercase tracking-wider block bg-zinc-950/70 px-2 py-0.5 rounded backdrop-blur-sm w-max">
                      TARGET: {exercise.muscleGroup}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 space-y-3">
                  <h3 className="font-display text-2xl font-black text-white uppercase tracking-wide group-hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>{exercise.name}</span>
                    <Activity className="w-5 h-5 text-zinc-600 group-hover:text-amber-500 transition-colors" />
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed font-normal line-clamp-3">
                    {exercise.shortDesc}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedExercise(exercise)}
                  className="w-full py-3 rounded-lg bg-zinc-900 hover:bg-amber-500 hover:text-zinc-950 text-amber-400 border border-zinc-800 hover:border-amber-500 font-display text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5"
                >
                  <span>LEARN MORE & FORM TIPS</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Exercise Detail Masterclass Modal */}
      <ExerciseModal
        exercise={selectedExercise}
        onClose={() => setSelectedExercise(null)}
        onOpenJoinModal={onOpenJoinModal}
      />
    </section>
  );
};
