import React, { useState } from 'react';
import { X, Maximize2, Camera } from 'lucide-react';
import { GALLERY_DATA } from '../data/gymData';
import { GalleryItem } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

export const GallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const filters = ['All', 'Equipment', 'Strength', 'Interior', 'Coaching'];

  const filteredItems = selectedFilter === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === selectedFilter);

  return (
    <section id="gallery" className="py-24 bg-zinc-900/40 relative overflow-hidden border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold text-amber-500 tracking-widest uppercase bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full inline-block">
            FACILITY VISUALS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase">
            GYM <span className="gold-gradient-text">GALLERY</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Inside AK GYM Bole Medhanialem — purpose-built for heavy lifting, athletic performance, and focused training.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                selectedFilter === filter
                  ? 'gold-gradient-bg text-zinc-950 shadow-lg shadow-amber-500/20'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-zinc-800/80 shadow-xl bg-zinc-950"
            >
              <ImageWithFallback
                src={item.image}
                alt={`${item.title} at AK GYM`}
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-110 transition-transform duration-700"
                fallbackTitle={item.title}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Badge Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-zinc-950/80 border border-zinc-700 flex items-center justify-center text-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 backdrop-blur-md">
                <Maximize2 className="w-5 h-5" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest bg-zinc-950/80 px-2 py-0.5 rounded border border-amber-500/30 backdrop-blur-md">
                  {item.category}
                </span>
                <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                  {item.caption}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-lg animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-zinc-950/80 text-zinc-300 hover:text-white border border-zinc-700 backdrop-blur-md"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative max-h-[70vh] bg-black">
              <ImageWithFallback
                src={activeLightbox.image}
                alt={activeLightbox.title}
                className="w-full h-full object-contain max-h-[70vh]"
                fallbackTitle={activeLightbox.title}
              />
            </div>

            <div className="p-6 bg-zinc-900 space-y-2">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
                  {activeLightbox.category} • AK GYM ADDIS ABABA
                </span>
              </div>
              <h3 className="font-display text-2xl font-black text-white uppercase">
                {activeLightbox.title}
              </h3>
              <p className="text-sm text-zinc-300">
                {activeLightbox.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
