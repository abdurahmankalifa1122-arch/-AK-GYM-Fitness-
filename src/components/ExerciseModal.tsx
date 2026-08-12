import React from 'react';
import { X, CheckCircle2, AlertTriangle, Lightbulb, Dumbbell, Activity } from 'lucide-react';
import { Exercise } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface ExerciseModalProps {
  exercise: Exercise | null;
  onClose: () => void;
  onOpenJoinModal: () => void;
}

export const ExerciseModal: React.FC<ExerciseModalProps> = ({
  exercise,
  onClose,
  onOpenJoinModal,
}) => {
  if (!exercise) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl text-white">
        
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-zinc-900/95 border-b border-zinc-800 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-widest text-amber-500 uppercase">
                EXERCISE MASTERCLASS • {exercise.category}
              </span>
              <h3 className="font-display text-2xl font-black uppercase text-white">
                {exercise.name}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Main Exercise Banner Image */}
          <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden border border-zinc-800">
            <ImageWithFallback
              src={exercise.image}
              alt={`${exercise.name} performed by male athlete at AK GYM`}
              className="w-full h-full object-cover filter brightness-90"
              fallbackTitle={exercise.name}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-500 text-zinc-950 font-display text-xs font-bold uppercase tracking-wider">
                DIFFICULTY: {exercise.difficulty}
              </span>
              <span className="px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-700 text-zinc-300 font-sans text-xs font-semibold backdrop-blur-md">
                TARGET: {exercise.muscleGroup}
              </span>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-amber-500 uppercase tracking-widest flex items-center gap-2">
              <Activity className="w-4 h-4" />
              OVERVIEW & BIOMECHANICS
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed font-normal">
              {exercise.detailedDesc}
            </p>
          </div>

          {/* Step By Step Instructions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              STEP-BY-STEP EXECUTION
            </h4>
            <div className="space-y-2">
              {exercise.keySteps.map((step, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/80 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full gold-gradient-bg text-zinc-950 font-display font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-rose-400 uppercase tracking-widest flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              MISTAKES TO AVOID
            </h4>
            <div className="space-y-2">
              {exercise.commonMistakes.map((mistake, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-rose-500/5 border border-rose-500/20 text-xs text-zinc-300 flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold">•</span>
                  <span>{mistake}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Tip Box */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1">
            <div className="flex items-center gap-2 text-amber-400 font-display text-sm font-bold uppercase tracking-wider">
              <Lightbulb className="w-4 h-4" />
              <span>COACH KALEB’S PRO TIP</span>
            </div>
            <p className="text-xs text-zinc-300 italic leading-relaxed">
              "{exercise.proTip}"
            </p>
          </div>

          {/* Modal Footer CTA */}
          <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-400">
              Want 1-on-1 technique auditing with our coaches at AK GYM?
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenJoinModal();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-lg font-display text-xs font-bold tracking-wider uppercase text-zinc-950 gold-gradient-bg shadow-md"
            >
              TRAIN WITH COACH AT AK GYM
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
