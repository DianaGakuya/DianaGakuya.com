import React from 'react';
import catGif from 'figma:asset/dc66904f56eea4e26ab20efb0dcb866a2c695ac1.png';

interface CatGifProps {
  size?: 'sm' | 'md';
}

export function CatGif({ size = 'md' }: CatGifProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden inline-block animate-bounce-subtle`}>
      <img
        src={catGif}
        alt="Coding cat"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
