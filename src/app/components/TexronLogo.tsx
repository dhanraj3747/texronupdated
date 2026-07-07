import React from 'react';
import texronLogo from '../../../imageAssets/texron logo.jpeg'; // adjust path as needed

export function TexronLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src={texronLogo}
      alt="Texron Power Plant Systems"
      className={`h-auto object-contain ${className}`}
      style={{ maxHeight: '80px' }}
    />
  );
}