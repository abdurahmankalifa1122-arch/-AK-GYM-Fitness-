import React, { useState } from 'react';
import { Dumbbell } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle = 'AK GYM',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 flex flex-col items-center justify-center p-6 text-center ${className}`}>
        <Dumbbell className="w-10 h-10 text-amber-500 mb-2 animate-pulse" />
        <span className="font-display text-sm tracking-wider uppercase text-zinc-400 font-bold">{fallbackTitle}</span>
        <span className="text-xs text-zinc-600 mt-1">Strength • Discipline • Results</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
      {...props}
    />
  );
};
