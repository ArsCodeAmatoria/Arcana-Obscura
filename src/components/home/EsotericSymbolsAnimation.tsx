'use client';

import React, { useState, useEffect } from 'react';

// Color themes for the glowing orbs
const COLOR_THEMES = {
  GOLD: 'hsl(45, 100%, 50%)', // Gold
  PURPLE: 'hsl(264, 76%, 45%)', // Primary purple
  ROSE: 'hsl(346, 83%, 28%)', // Dark rose
  BLUE: 'hsl(200, 80%, 50%)', // Blue
  PINK: 'hsl(320, 60%, 50%)', // Pink
  EMERALD: 'hsl(160, 60%, 35%)', // Emerald
  WHITE: 'hsl(0, 0%, 90%)' // White
};

// Definition for a floating orb
interface FloatingOrb {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  direction: number;
  color: string;
  glowIntensity: number;
  pulseSpeed: number;
  pulsePhase: number;
  glowColor: string;
  variant: number; // Controls the appearance variant of the orb
}

interface GlowingOrbsAnimationProps {
  maxOrbs?: number;
  disablePulsing?: boolean;
}

export default function GlowingOrbsAnimation({ 
  maxOrbs = 40,
  disablePulsing = false
}: GlowingOrbsAnimationProps) {
  const [orbs, setOrbs] = useState<FloatingOrb[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Initialize the animation
  useEffect(() => {
    // Set dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    // Create initial orbs
    const initialOrbs: FloatingOrb[] = Array.from({ length: maxOrbs }).map((_, index) => createRandomOrb(index));
    setOrbs(initialOrbs);
    
    // Handle resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [maxOrbs]);
  
  // Animation loop
  useEffect(() => {
    if (dimensions.width === 0) return;
    
    const animationFrame = requestAnimationFrame(() => {
      setOrbs(currentOrbs => 
        currentOrbs.map(orb => {
          // Update position
          let newY = orb.y + (orb.speed * orb.direction);
          let newX = orb.x + (Math.sin(newY * 0.01) * 0.5); // Subtle horizontal movement
          let newOpacity = orb.opacity;
          
          // Fade in and out as they move
          if (orb.direction > 0) {
            // Moving down - fade out at bottom
            if (newY > dimensions.height * 0.8) {
              newOpacity = Math.max(0, orb.opacity - 0.01);
            } else if (newY < dimensions.height * 0.2) {
              // Top area - fade in
              newOpacity = Math.min(0.9, orb.opacity + 0.01);
            }
          } else {
            // Moving up - fade out at top
            if (newY < dimensions.height * 0.2) {
              newOpacity = Math.max(0, orb.opacity - 0.01);
            } else if (newY > dimensions.height * 0.8) {
              // Bottom area - fade in
              newOpacity = Math.min(0.9, orb.opacity + 0.01);
            }
          }
          
          // Orb completely faded out, respawn it
          if (newOpacity <= 0) {
            return createRandomOrb(orb.id);
          }
          
          // Calculate pulsing effect
          const pulseEffect = disablePulsing 
            ? 1 
            : 0.7 + (Math.sin(orb.pulsePhase) * 0.3);
          
          // Calculate glow intensity based on position (center = more glow)
          const distanceFromCenterX = Math.abs((newX / dimensions.width) - 0.5) * 2; // 0 to 1
          const distanceFromCenterY = Math.abs((newY / dimensions.height) - 0.5) * 2; // 0 to 1
          const distanceFromCenter = Math.sqrt((distanceFromCenterX * distanceFromCenterX + distanceFromCenterY * distanceFromCenterY) / 2);
          const newGlowIntensity = Math.max(0.4, 1 - distanceFromCenter);
          
          // Update orb
          return {
            ...orb,
            x: newX,
            y: newY,
            opacity: newOpacity * pulseEffect,
            pulsePhase: (orb.pulsePhase + orb.pulseSpeed) % (Math.PI * 2),
            glowIntensity: newGlowIntensity
          };
        })
      );
    });
    
    return () => cancelAnimationFrame(animationFrame);
  }, [orbs, dimensions, disablePulsing]);
  
  // Function to create a random orb
  function createRandomOrb(id: number): FloatingOrb {
    const direction = Math.random() > 0.5 ? 1 : -1; // Up or down
    
    // Randomize horizontal position with slight bias toward center
    const centerBias = Math.random() * 0.4 + 0.3; // 0.3 to 0.7
    const x = Math.random() > 0.5 
      ? dimensions.width * centerBias + Math.random() * (dimensions.width * 0.3)
      : Math.random() * (dimensions.width * 0.3);
    
    // Pick a random color theme
    const colorKeys = Object.keys(COLOR_THEMES) as (keyof typeof COLOR_THEMES)[];
    const colorKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
    const color = COLOR_THEMES[colorKey];
    
    // Sometimes use a different glow color for interesting effects
    const useSecondaryGlow = Math.random() > 0.7;
    const glowColorKey = useSecondaryGlow ? 
      colorKeys[Math.floor(Math.random() * colorKeys.length)] : 
      colorKey;
    const glowColor = COLOR_THEMES[glowColorKey];
    
    return {
      id,
      x,
      y: direction > 0 
        ? Math.random() * dimensions.height * 0.3 // Start at top third if moving down
        : Math.random() * dimensions.height * 0.3 + dimensions.height * 0.7, // Start at bottom third if moving up
      size: 5 + Math.random() * 20, // Size between 5 and 25px for the orb core
      opacity: 0.2 + Math.random() * 0.4, // Start somewhat transparent
      speed: 0.2 + Math.random() * 0.6, // Speed between 0.2 and 0.8px per frame
      direction,
      color,
      glowColor,
      glowIntensity: 0.4 + Math.random() * 0.6,
      pulseSpeed: 0.01 + Math.random() * 0.03, // Pulsing speed
      pulsePhase: Math.random() * Math.PI * 2, // Random starting phase
      variant: Math.floor(Math.random() * 3) // 0, 1, or 2 for different orb styles
    };
  }
  
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${orb.x}px`,
            top: `${orb.y}px`,
            opacity: orb.opacity,
            willChange: 'transform, opacity',
            transition: 'opacity 0.5s ease-in-out'
          }}
        >
          {/* SVG Glowing Orb */}
          <svg 
            width={orb.size * 6} 
            height={orb.size * 6} 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Large outer glow */}
            <circle 
              cx="50" 
              cy="50" 
              r={50 * (0.7 + orb.glowIntensity * 0.3)}
              fill={orb.glowColor}
              opacity={0.1 * orb.glowIntensity} 
              filter="blur(10px)"
            />
            
            {/* Medium glow */}
            <circle 
              cx="50" 
              cy="50" 
              r={40 * (0.7 + orb.glowIntensity * 0.3)}
              fill={orb.glowColor}
              opacity={0.15 * orb.glowIntensity} 
              filter="blur(8px)"
            />
            
            {/* Core glow */}
            <circle 
              cx="50" 
              cy="50" 
              r={25 * (0.7 + orb.glowIntensity * 0.3)}
              fill={orb.glowColor}
              opacity={0.25 * orb.glowIntensity} 
              filter="blur(5px)"
            />
            
            {/* Core orb */}
            <circle 
              cx="50" 
              cy="50" 
              r={orb.variant === 0 ? 12 : orb.variant === 1 ? 10 : 8}
              fill={orb.color}
              opacity={0.8 * orb.glowIntensity} 
            />
            
            {/* Highlight */}
            <circle 
              cx="40" 
              cy="40" 
              r={orb.variant === 0 ? 4 : orb.variant === 1 ? 3 : 2}
              fill="white"
              opacity={0.7 * orb.glowIntensity} 
            />
            
            {/* Extra details based on variant */}
            {orb.variant === 1 && (
              // Variant 1: Ring
              <circle 
                cx="50" 
                cy="50" 
                r="18"
                fill="none"
                stroke={orb.color}
                strokeWidth="1.5"
                opacity={0.4 * orb.glowIntensity}
              />
            )}
            
            {orb.variant === 2 && (
              // Variant 2: Rays
              <>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <line 
                    key={i}
                    x1="50" 
                    y1="50" 
                    x2={50 + Math.cos(angle * Math.PI / 180) * 30}
                    y2={50 + Math.sin(angle * Math.PI / 180) * 30}
                    stroke={orb.color}
                    strokeWidth="1"
                    opacity={0.3 * orb.glowIntensity}
                  />
                ))}
              </>
            )}
          </svg>
        </div>
      ))}
    </div>
  );
} 