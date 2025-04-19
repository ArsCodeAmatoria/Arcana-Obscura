'use client';

import React, { useState, useEffect } from 'react';

// Color themes for the fire specks - authentic fire colors
const FIRE_COLORS = {
  BRIGHT_ORANGE: 'hsl(30, 100%, 70%)',
  DEEP_ORANGE: 'hsl(20, 100%, 60%)',
  GOLDEN_YELLOW: 'hsl(45, 100%, 75%)',
  RED_ORANGE: 'hsl(15, 100%, 65%)',
  EMBER_RED: 'hsl(5, 90%, 60%)'
};

// Glow colors - more subtle
const GLOW_COLORS = {
  ORANGE_GLOW: 'hsl(30, 100%, 65%)',
  RED_GLOW: 'hsl(10, 100%, 60%)',
  YELLOW_GLOW: 'hsl(45, 100%, 70%)'
};

// Definition for a floating fire speck
interface FireSpeck {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  direction: { x: number, y: number };
  color: string;
  glowColor: string;
  glowIntensity: number;
  fadeSpeed: number; // Controls how quickly it fades in/out
  fadePhase: number; // Position in the fade cycle
  lifespan: number; // How long this speck lives before disappearing
  age: number; // Current age of the speck
}

interface FloatingEmbersAnimationProps {
  maxEmbers?: number;
  disableFlickering?: boolean;
}

export default function FloatingEmbersAnimation({ 
  maxEmbers = 60,
  disableFlickering = false
}: FloatingEmbersAnimationProps) {
  const [specks, setSpecks] = useState<FireSpeck[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Initialize the animation
  useEffect(() => {
    // Set dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    // Create initial specks
    const initialSpecks: FireSpeck[] = Array.from({ length: maxEmbers }).map((_, index) => createRandomSpeck(index));
    setSpecks(initialSpecks);
    
    // Handle resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [maxEmbers]);
  
  // Animation loop
  useEffect(() => {
    if (dimensions.width === 0) return;
    
    const animationFrame = requestAnimationFrame(() => {
      setSpecks(currentSpecks => 
        currentSpecks.map(speck => {
          // Update position with gentle floating motion
          let newY = speck.y + (speck.speed * speck.direction.y);
          let newX = speck.x + (speck.speed * speck.direction.x) + (Math.sin(newY * 0.01) * 0.1);
          
          // Increase age
          const newAge = speck.age + 0.016; // Roughly equivalent to deltaTime in seconds
          
          // Calculate lifespan ratio (0 to 1, where 1 is end of life)
          const lifespanRatio = newAge / speck.lifespan;
          
          // Calculate fade effect - sine wave to create fade in/out
          const fadeEffect = Math.sin(speck.fadePhase) * 0.5 + 0.5;
          
          // Calculate combined opacity
          let newOpacity = Math.max(0, speck.opacity * fadeEffect * (1 - lifespanRatio * 0.3));
          
          // Reset speck if it's out of bounds or expired
          if (lifespanRatio >= 1 || 
              newX < -10 || newX > dimensions.width + 10 || 
              newY < -10 || newY > dimensions.height * 0.7) {
            return createRandomSpeck(speck.id);
          }
          
          // Update speck
          return {
            ...speck,
            x: newX,
            y: newY,
            age: newAge,
            opacity: newOpacity,
            fadePhase: (speck.fadePhase + speck.fadeSpeed) % (Math.PI * 2),
            // Speck stays the same size throughout lifespan
            glowIntensity: speck.glowIntensity * fadeEffect
          };
        })
      );
    });
    
    return () => cancelAnimationFrame(animationFrame);
  }, [specks, dimensions, disableFlickering]);
  
  // Function to create a random fire speck
  function createRandomSpeck(id: number): FireSpeck {
    // Position in the hero area, focused in the central area where text would be
    const centerX = dimensions.width / 2;
    const centerWidth = dimensions.width * 0.8; // 80% of screen width centered
    
    const x = centerX + (Math.random() - 0.5) * centerWidth;
    const y = dimensions.height * (0.2 + Math.random() * 0.3); // Between 20% and 50% of screen height
    
    // Very gentle movement direction
    const angle = Math.random() * Math.PI * 2; // Any direction
    const speed = 0.1 + Math.random() * 0.2; // Very slow, gentle movement
    
    // Calculate direction vector
    const directionX = Math.cos(angle) * speed;
    const directionY = Math.sin(angle) * speed;
    
    // Pick a random color for the speck
    const colorKeys = Object.keys(FIRE_COLORS) as (keyof typeof FIRE_COLORS)[];
    const colorKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
    const color = FIRE_COLORS[colorKey];
    
    // Pick a glow color
    const glowColorKeys = Object.keys(GLOW_COLORS) as (keyof typeof GLOW_COLORS)[];
    const glowColorKey = glowColorKeys[Math.floor(Math.random() * glowColorKeys.length)];
    const glowColor = GLOW_COLORS[glowColorKey];
    
    // Create the speck with random properties
    return {
      id,
      x,
      y,
      size: 0.5 + Math.random() * 1.5, // Size between 0.5 and 2px for the core - small specks
      opacity: 0.4 + Math.random() * 0.6, // Base opacity
      speed,
      direction: { x: directionX, y: directionY },
      color,
      glowColor,
      glowIntensity: 0.3 + Math.random() * 0.5, // Subtle glow
      fadeSpeed: 0.005 + Math.random() * 0.015, // Very slow fade cycle
      fadePhase: Math.random() * Math.PI * 2, // Random starting phase in fade cycle
      lifespan: 10 + Math.random() * 15, // Lifespan between 10 and 25 seconds
      age: 0 // New speck
    };
  }
  
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {specks.map((speck) => (
        <div
          key={speck.id}
          className="absolute"
          style={{
            left: `${speck.x}px`,
            top: `${speck.y}px`,
            opacity: speck.opacity,
            willChange: 'transform, opacity',
            transform: `translate(-50%, -50%)`,
            transition: 'opacity 0.5s ease-in-out'
          }}
        >
          {/* Simple dot for fire specks */}
          <div
            style={{
              width: `${speck.size}px`,
              height: `${speck.size}px`,
              borderRadius: '50%',
              backgroundColor: speck.color,
              boxShadow: `0 0 ${speck.size * 3}px ${speck.glowColor}`,
            }}
          />
        </div>
      ))}
    </div>
  );
} 