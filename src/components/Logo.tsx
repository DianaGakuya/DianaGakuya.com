import React from 'react';
import profileImage from 'figma:asset/9c2db085165f38ba88d641e23748aec07d9cb02d.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  return (
    <div className={`${sizes[size]} relative`}>
      {/* Circular logo with image background and DG monogram overlay */}
      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary shadow-lg">
        {/* Background image */}
        <img
          src={profileImage}
          alt="Diana Gakuya"
          className="w-full h-full object-cover opacity-80"
        />
        
        {/* DG Monogram overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-primary/20 backdrop-blur-[1px]">
          <span className="text-white font-bold" style={{ fontSize: size === 'sm' ? '1rem' : size === 'md' ? '1.5rem' : '2.5rem' }}>
            DG
          </span>
        </div>
      </div>
    </div>
  );
}
