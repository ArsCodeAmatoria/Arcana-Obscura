'use client';

import React, { useState, useEffect } from 'react';

// Color themes for the embers
const EMBER_COLORS = {
  BRIGHT_ORANGE: 'hsl(30, 100%, 55%)',
  ORANGE: 'hsl(20, 100%, 50%)',
  DEEP_RED: 'hsl(10, 90%, 40%)',
  YELLOW: 'hsl(45, 100%, 60%)',
  RED: 'hsl(0, 100%, 45%)'
};

// Glow colors
const GLOW_COLORS = {
  ORANGE_GLOW: 'hsl(30, 100%, 50%)',
  RED_GLOW: 'hsl(10, 100%, 50%)',
  YELLOW_GLOW: 'hsl(45, 100%, 50%)'
};

// Definition for a floating ember
interface FloatingEmber {
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
  flickerSpeed: number;
  flickerPhase: number;
  lifespan: number; // How long this ember lives before fading completely
  age: number; // Current age of the ember
  rotationAngle: number;
  rotationSpeed: number;
  variant: number; // Controls the appearance variant of the ember
}

interface FloatingEmbersAnimationProps {
  maxEmbers?: number;
  disableFlickering?: boolean;
}

export default function FloatingEmbersAnimation({ 
  maxEmbers = 40,
  disableFlickering = false
}: FloatingEmbersAnimationProps) {
  const [embers, setEmbers] = useState<FloatingEmber[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Initialize the animation
  useEffect(() => {
    // Set dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    // Create initial embers
    const initialEmbers: FloatingEmber[] = Array.from({ length: maxEmbers }).map((_, index) => createRandomEmber(index));
    setEmbers(initialEmbers);
    
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
      setEmbers(currentEmbers => 
        currentEmbers.map(ember => {
          // Update position with slight wind effect (curved path)
          let newY = ember.y + (ember.speed * ember.direction.y);
          let newX = ember.x + (ember.speed * ember.direction.x) + (Math.sin(newY * 0.01) * 0.3);
          
          // Increase age
          const newAge = ember.age + 0.016; // Roughly equivalent to deltaTime in seconds
          
          // Calculate lifespan ratio (0 to 1, where 1 is end of life)
          const lifespanRatio = newAge / ember.lifespan;
          
          // Calculate base opacity - dims as ember ages
          let newOpacity = Math.max(0, ember.opacity * (1 - lifespanRatio * 0.6));
          
          // Reset ember if it's out of bounds or expired
          if (newOpacity <= 0.05 || 
              newX < -20 || newX > dimensions.width + 20 || 
              newY < -20 || newY > dimensions.height + 20) {
            return createRandomEmber(ember.id);
          }
          
          // Calculate flickering effect
          const flickerEffect = disableFlickering 
            ? 1 
            : 0.7 + (Math.sin(ember.flickerPhase) * 0.3) + (Math.sin(ember.flickerPhase * 2.5) * 0.15);
          
          // Update rotation
          const newRotationAngle = (ember.rotationAngle + ember.rotationSpeed) % 360;
          
          // Update ember
          return {
            ...ember,
            x: newX,
            y: newY,
            age: newAge,
            opacity: newOpacity * flickerEffect,
            flickerPhase: (ember.flickerPhase + ember.flickerSpeed) % (Math.PI * 2),
            rotationAngle: newRotationAngle,
            // Ember gets smaller as it rises and ages
            size: ember.size * (1 - lifespanRatio * 0.3),
            // Glow diminishes as ember ages
            glowIntensity: ember.glowIntensity * (1 - lifespanRatio * 0.5)
          };
        })
      );
    });
    
    return () => cancelAnimationFrame(animationFrame);
  }, [embers, dimensions, disableFlickering]);
  
  // Function to create a random ember
  function createRandomEmber(id: number): FloatingEmber {
    // Random direction - mostly upward, with slight side variation
    const angleVariation = 0.2; // Variation from straight up (in radians)
    const angle = Math.PI * 1.5 + (Math.random() * angleVariation * 2 - angleVariation);
    
    // Calculate direction vector
    const directionX = Math.cos(angle);
    const directionY = Math.sin(angle);
    
    // Position near bottom, with horizontal variance
    const x = Math.random() * dimensions.width;
    const y = dimensions.height + Math.random() * 20; // Start slightly below screen
    
    // Pick a random color for the ember
    const colorKeys = Object.keys(EMBER_COLORS) as (keyof typeof EMBER_COLORS)[];
    const colorKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
    const color = EMBER_COLORS[colorKey];
    
    // Pick a glow color
    const glowColorKeys = Object.keys(GLOW_COLORS) as (keyof typeof GLOW_COLORS)[];
    const glowColorKey = glowColorKeys[Math.floor(Math.random() * glowColorKeys.length)];
    const glowColor = GLOW_COLORS[glowColorKey];
    
    // Create the ember with random properties
    return {
      id,
      x,
      y,
      size: 3 + Math.random() * 7, // Size between 3 and 10px for the ember core
      opacity: 0.6 + Math.random() * 0.4, // Start fairly bright
      speed: 0.5 + Math.random() * 1.0, // Speed between 0.5 and 1.5px per frame
      direction: { x: directionX * 0.3, y: directionY },
      color,
      glowColor,
      glowIntensity: 0.6 + Math.random() * 0.4,
      flickerSpeed: 0.05 + Math.random() * 0.15, // Faster flickering for fire effect
      flickerPhase: Math.random() * Math.PI * 2, // Random starting phase
      lifespan: 5 + Math.random() * 10, // Lifespan between 5 and 15 seconds
      age: 0, // New ember
      rotationAngle: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 3, // Faster rotation
      variant: Math.floor(Math.random() * 3) // 0, 1, or 2 for different ember styles
    };
  }
  
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {embers.map((ember) => (
        <div
          key={ember.id}
          className="absolute"
          style={{
            left: `${ember.x}px`,
            top: `${ember.y}px`,
            opacity: ember.opacity,
            willChange: 'transform, opacity',
            transform: `translate(-50%, -50%) rotate(${ember.rotationAngle}deg)`,
            transition: 'opacity 0.1s ease-in-out'
          }}
        >
          {/* SVG Ember */}
          <svg 
            width={ember.size * 8} 
            height={ember.size * 8} 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer glow */}
            <circle 
              cx="50" 
              cy="50" 
              r="45"
              fill={ember.glowColor}
              opacity={0.15 * ember.glowIntensity} 
              filter="blur(8px)"
            />
            
            {/* Inner glow */}
            <circle 
              cx="50" 
              cy="50" 
              r="25"
              fill={ember.glowColor}
              opacity={0.25 * ember.glowIntensity} 
              filter="blur(5px)"
            />
            
            {/* Ember shape based on variant */}
            {ember.variant === 0 && (
              // Variant 0: Simple ember particle
              <circle 
                cx="50" 
                cy="50" 
                r="6"
                fill={ember.color}
                opacity={0.9} 
              />
            )}
            
            {ember.variant === 1 && (
              // Variant 1: Irregular ember shape
              <path
                d={`M50,45 
                   C${55 + Math.random() * 5},${40 + Math.random() * 5} 
                    ${60 + Math.random() * 5},${45 + Math.random() * 5} 
                    ${55 + Math.random() * 5},${50 + Math.random() * 5} 
                   C${60 + Math.random() * 5},${55 + Math.random() * 5} 
                    ${55 + Math.random() * 5},${60 + Math.random() * 5} 
                    ${50 + Math.random() * 5},${55 + Math.random() * 5}
                   C${45 + Math.random() * 5},${60 + Math.random() * 5} 
                    ${40 + Math.random() * 5},${55 + Math.random() * 5} 
                    ${45 + Math.random() * 5},${50 + Math.random() * 5}
                   C${40 + Math.random() * 5},${45 + Math.random() * 5} 
                    ${45 + Math.random() * 5},${40 + Math.random() * 5} 
                    ${50 + Math.random() * 5},${45 + Math.random() * 5}`}
                fill={ember.color}
                opacity={0.9}
              />
            )}
            
            {ember.variant === 2 && (
              // Variant 2: Spark with trailing particles
              <>
                <circle 
                  cx="50" 
                  cy="50" 
                  r="5"
                  fill={ember.color}
                  opacity={0.9} 
                />
                <circle 
                  cx="45" 
                  cy="55" 
                  r="3"
                  fill={ember.color}
                  opacity={0.6} 
                />
                <circle 
                  cx="40" 
                  cy="60" 
                  r="2"
                  fill={ember.color}
                  opacity={0.4} 
                />
              </>
            )}
            
            {/* Bright center */}
            <circle 
              cx="50" 
              cy="50" 
              r="3"
              fill={EMBER_COLORS.YELLOW}
              opacity={0.9 * ember.glowIntensity} 
            />
          </svg>
        </div>
      ))}
    </div>
  );
} 