'use client';

import React, { useState, useEffect } from 'react';

// Define the available symbols
const ESOTERIC_SYMBOLS = [
  '☿', '☉', '☽', '♄', '♃', '♀', '♂',  // Planetary
  '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', // Zodiac
  '△', '▽', '□', '○', '⟠', '☤', '⚕', // Geometric/Alchemical
  '∴', '☤', '⚕', '⚚', '⚛', '⚜', '⚱', // Additional symbols
  '᛭', 'ॐ', '࿋', '࿊', '☸', '卍', '✴', // Various traditions
  'א', 'ב', 'ג', 'ס', 'ע', 'ת', // Hebrew letters
  '∞', '⍟', '⎔', '⏣', '⌬', '⌭', '⏱' // Miscellaneous
];

// Symbol categories for thematic coloring
const SYMBOL_CATEGORIES = {
  PLANETARY: [0, 6], // Indices from ESOTERIC_SYMBOLS
  ZODIAC: [7, 18],
  GEOMETRIC: [19, 25],
  ADDITIONAL: [26, 32],
  TRADITIONS: [33, 39],
  HEBREW: [40, 45],
  MISC: [46, 52]
};

// Color themes based on symbol types
const COLOR_THEMES = {
  PLANETARY: 'var(--accent)', // Gold from accent variable
  ZODIAC: 'hsl(45, 100%, 50%)', // Brighter gold
  GEOMETRIC: 'hsl(264, 76%, 45%)', // Primary purple
  ADDITIONAL: 'hsl(346, 83%, 28%)', // Secondary dark rose
  TRADITIONS: 'hsl(200, 80%, 50%)', // Tertiary blue
  HEBREW: 'hsl(320, 60%, 50%)', // Highlight pink
  MISC: 'hsl(160, 60%, 35%)' // Quaternary emerald
};

// Definition for a floating symbol
interface FloatingSymbol {
  id: number;
  symbol: string;
  category: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  direction: number;
  rotation: number;
  rotationSpeed: number;
  pulseSpeed: number;
  pulsePhase: number;
  color: string;
  glowIntensity: number;
}

interface EsotericSymbolsAnimationProps {
  maxSymbols?: number;
  disableRotation?: boolean;
  disablePulsing?: boolean;
}

export default function EsotericSymbolsAnimation({ 
  maxSymbols = 40,
  disableRotation = false,
  disablePulsing = false
}: EsotericSymbolsAnimationProps) {
  const [symbols, setSymbols] = useState<FloatingSymbol[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Initialize the animation
  useEffect(() => {
    // Set dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    // Create initial symbols
    const initialSymbols: FloatingSymbol[] = Array.from({ length: maxSymbols }).map((_, index) => createRandomSymbol(index));
    setSymbols(initialSymbols);
    
    // Handle resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [maxSymbols]);
  
  // Animation loop
  useEffect(() => {
    if (dimensions.width === 0) return;
    
    const animationFrame = requestAnimationFrame(() => {
      setSymbols(currentSymbols => 
        currentSymbols.map(symbol => {
          // Update position
          let newY = symbol.y + (symbol.speed * symbol.direction);
          let newX = symbol.x + (Math.sin(newY * 0.01) * 0.5); // Subtle horizontal movement
          let newOpacity = symbol.opacity;
          
          // Fade in and out as they move
          if (symbol.direction > 0) {
            // Moving down - fade out at bottom
            if (newY > dimensions.height * 0.8) {
              newOpacity = Math.max(0, symbol.opacity - 0.01);
            } else if (newY < dimensions.height * 0.2) {
              // Top area - fade in
              newOpacity = Math.min(0.7, symbol.opacity + 0.01);
            }
          } else {
            // Moving up - fade out at top
            if (newY < dimensions.height * 0.2) {
              newOpacity = Math.max(0, symbol.opacity - 0.01);
            } else if (newY > dimensions.height * 0.8) {
              // Bottom area - fade in
              newOpacity = Math.min(0.7, symbol.opacity + 0.01);
            }
          }
          
          // Symbol completely faded out, respawn it
          if (newOpacity <= 0) {
            return createRandomSymbol(symbol.id);
          }
          
          // Calculate pulsing effect
          const pulseEffect = disablePulsing 
            ? 1 
            : 0.85 + (Math.sin(symbol.pulsePhase) * 0.15);
          
          // Calculate glow intensity based on position (center = more glow)
          const distanceFromCenterX = Math.abs((newX / dimensions.width) - 0.5) * 2; // 0 to 1
          const distanceFromCenterY = Math.abs((newY / dimensions.height) - 0.5) * 2; // 0 to 1
          const distanceFromCenter = Math.sqrt((distanceFromCenterX * distanceFromCenterX + distanceFromCenterY * distanceFromCenterY) / 2);
          const newGlowIntensity = Math.max(0.2, 1 - distanceFromCenter);
          
          // Update symbol
          return {
            ...symbol,
            x: newX,
            y: newY,
            opacity: newOpacity * pulseEffect,
            rotation: disableRotation ? symbol.rotation : (symbol.rotation + symbol.rotationSpeed) % 360,
            pulsePhase: (symbol.pulsePhase + symbol.pulseSpeed) % (Math.PI * 2),
            glowIntensity: newGlowIntensity
          };
        })
      );
    });
    
    return () => cancelAnimationFrame(animationFrame);
  }, [symbols, dimensions, disablePulsing, disableRotation]);
  
  // Function to determine symbol category
  function getSymbolCategory(symbolIndex: number): string {
    for (const [category, range] of Object.entries(SYMBOL_CATEGORIES)) {
      if (symbolIndex >= range[0] && symbolIndex <= range[1]) {
        return category;
      }
    }
    return 'MISC';
  }
  
  // Function to create a random symbol
  function createRandomSymbol(id: number): FloatingSymbol {
    const symbolIndex = Math.floor(Math.random() * ESOTERIC_SYMBOLS.length);
    const category = getSymbolCategory(symbolIndex);
    const direction = Math.random() > 0.5 ? 1 : -1; // Up or down
    
    // Randomize horizontal position with slight bias toward center
    const centerBias = Math.random() * 0.4 + 0.3; // 0.3 to 0.7
    const x = Math.random() > 0.5 
      ? dimensions.width * centerBias + Math.random() * (dimensions.width * 0.3)
      : Math.random() * (dimensions.width * 0.3);
    
    return {
      id,
      symbol: ESOTERIC_SYMBOLS[symbolIndex],
      category,
      x,
      y: direction > 0 
        ? Math.random() * dimensions.height * 0.3 // Start at top third if moving down
        : Math.random() * dimensions.height * 0.3 + dimensions.height * 0.7, // Start at bottom third if moving up
      size: 12 + Math.random() * 32, // Size between 12 and 44px
      opacity: 0.1 + Math.random() * 0.3, // Start somewhat transparent
      speed: 0.2 + Math.random() * 0.5, // Speed between 0.2 and 0.7px per frame
      direction,
      rotation: Math.random() * 360, // Initial rotation
      rotationSpeed: (Math.random() - 0.5) * 0.5, // Rotation speed, could be negative or positive
      pulseSpeed: 0.01 + Math.random() * 0.03, // Pulsing speed
      pulsePhase: Math.random() * Math.PI * 2, // Random starting phase
      color: COLOR_THEMES[category as keyof typeof COLOR_THEMES],
      glowIntensity: 0.3 + Math.random() * 0.4
    };
  }
  
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {symbols.map((symbol) => (
        <div
          key={symbol.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${symbol.x}px`,
            top: `${symbol.y}px`,
            fontSize: `${symbol.size}px`,
            opacity: symbol.opacity,
            color: symbol.color,
            transform: `translate(-50%, -50%) rotate(${symbol.rotation}deg)`,
            transition: 'opacity 1s ease-in-out',
            textShadow: `0 0 ${3 + (symbol.glowIntensity * 5)}px ${symbol.color}`,
            filter: `blur(${symbol.size > 30 ? 0.5 : 0}px)`,
            willChange: 'transform, opacity'
          }}
        >
          {symbol.symbol}
        </div>
      ))}
    </div>
  );
} 