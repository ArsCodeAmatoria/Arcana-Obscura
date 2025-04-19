'use client';

import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useFrame, Canvas } from '@react-three/fiber';
import { Stars, OrbitControls, Text } from '@react-three/drei';
import { Object3D, Line, BufferGeometry, Material } from 'three';

// Types for our custom components
interface OrbitingSphereProps {
  radius: number;
  speed: number;
  offset: number;
  size: number;
  color: string;
}

interface FloatingSymbolProps {
  symbol: string;
  position: [number, number, number];
  rotation: [number, number, number];
  speed: number;
}

// Simple component for 2D fallback when WebGL fails
function FallbackCanvas() {
  return (
    <div className="w-full h-full bg-[#050510] flex flex-col items-center justify-center">
      <div className="relative w-64 h-64">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="100" cy="100" r="80" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="50" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="30" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
          
          <path d="M 100 20 L 100 180" stroke="hsl(45 100% 60%)" strokeWidth="0.2" opacity="0.5" />
          <path d="M 20 100 L 180 100" stroke="hsl(45 100% 60%)" strokeWidth="0.2" opacity="0.5" />
          
          <text x="96" y="40" fill="hsl(45 100% 60%)" fontSize="8" fontFamily="serif">☿</text>
          <text x="160" y="100" fill="hsl(45 100% 60%)" fontSize="8" fontFamily="serif">☽</text>
          <text x="96" y="170" fill="hsl(45 100% 60%)" fontSize="8" fontFamily="serif">⊕</text>
          <text x="40" y="100" fill="hsl(45 100% 60%)" fontSize="8" fontFamily="serif">♄</text>
          
          <g className="animate-pulse">
            <path d="M 100 70 L 120 120 L 80 120 Z" stroke="hsl(45 100% 60%)" strokeWidth="0.5" fill="none" />
          </g>
        </svg>
      </div>
      <p className="text-accent mt-6 font-esoterica">Arcana Obscura</p>
      <p className="text-sm text-muted-foreground mt-2">Illuminating the Secret Teachings of All Ages</p>
    </div>
  );
}

// Golden Ratio spiral points generator with minimal points
function goldenSpiralPoints(turns = 2, pointsPerTurn = 10) {
  const points = [];
  const totalPoints = turns * pointsPerTurn;
  const goldenRatio = 1.618033988749895;
  
  for (let i = 0; i < totalPoints; i++) {
    const angle = i * (2 * Math.PI / pointsPerTurn);
    const radius = Math.pow(goldenRatio, i / pointsPerTurn) * 0.1;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    const z = i * 0.005;
    points.push(new THREE.Vector3(x, y, z));
  }
  
  return points;
}

function CelestialSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Very slow rotation to minimize GPU work
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      {/* Highly simplified geometry */}
      <sphereGeometry args={[2.5, 16, 16]} />
      <meshBasicMaterial
        color="#271a45"
        wireframe
      />
    </mesh>
  );
}

function GoldenSpiral() {
  const spiralRef = useRef<THREE.Line>(null);
  const points = goldenSpiralPoints(); // Use defaults for minimal points
  
  useFrame(({ clock }) => {
    if (spiralRef.current) {
      // Static rotation that changes very slowly
      spiralRef.current.rotation.y = clock.getElapsedTime() * 0.03;
    }
  });
  
  return (
    <line ref={spiralRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
          count={points.length}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#ffd700" />
    </line>
  );
}

function MysticalSymbols() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Barely any movement to minimize GPU work
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Simplified pentagram */}
      <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.8, 0.03, 5, 5]} />
        <meshBasicMaterial color="#ffd700" />
      </mesh>
      
      {/* Eye symbol - very simplified */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.2, 8, 8]} />
        <meshBasicMaterial color="#ffd700" />
      </mesh>

      {/* Just one orbit circle */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.2, 1.23, 16]} />
        <meshBasicMaterial color="#9774ff" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>
      
      {/* Just one orbiting sphere */}
      <OrbitingSphere 
        radius={1.8} 
        speed={0.1} 
        offset={0}
        size={0.05}
        color="#ffd700"
      />
    </group>
  );
}

function OrbitingSphere({ radius, speed, offset, size, color }: OrbitingSphereProps) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime() * speed + offset;
      ref.current.position.x = Math.sin(t) * radius;
      ref.current.position.z = Math.cos(t) * radius;
    }
  });
  
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 6, 6]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

export default function CosmicAnimation() {
  const [hasContextLoss, setHasContextLoss] = useState(false);
  const [lowPerformanceMode, setLowPerformanceMode] = useState(false);
  const contextLossCountRef = useRef(0);
  const fallbackTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Add handlers for context loss events
  useEffect(() => {
    const handleContextLoss = (event: Event) => {
      event.preventDefault();
      console.log('WebGL context lost. Attempting to recover...');
      
      // Track context loss count
      contextLossCountRef.current += 1;
      
      // After multiple losses, switch to fallback
      if (contextLossCountRef.current >= 2) {
        console.log('Multiple WebGL context losses detected, switching to fallback...');
        setHasContextLoss(true);
      } else if (!lowPerformanceMode) {
        // First try switching to low performance mode
        console.log('Switching to low performance mode...');
        setLowPerformanceMode(true);
      }
    };

    const handleContextRestored = () => {
      console.log('WebGL context restored.');
    };

    // Set a fallback timer - if WebGL crashes immediately, use the fallback
    fallbackTimerRef.current = setTimeout(() => {
      if (contextLossCountRef.current > 0) {
        setHasContextLoss(true);
      }
    }, 3000);

    // Add event listeners
    window.addEventListener('webglcontextlost', handleContextLoss);
    window.addEventListener('webglcontextrestored', handleContextRestored);

    return () => {
      window.removeEventListener('webglcontextlost', handleContextLoss);
      window.removeEventListener('webglcontextrestored', handleContextRestored);
      if (fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current);
      }
    };
  }, [lowPerformanceMode]);

  // If we've had context loss issues, use a fallback
  if (hasContextLoss) {
    return <FallbackCanvas />;
  }

  return (
    <div className="w-full h-full">
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ 
          powerPreference: 'low-power',
          alpha: false,
          antialias: false,
          stencil: false,
          depth: true,
          precision: 'lowp'
        }}
        frameloop="demand"
        dpr={1} // Force lowest resolution
        performance={{ min: 0.1 }}
        style={{ imageRendering: 'pixelated' }}
      >
        <color attach="background" args={['#050510']} />
        <ambientLight intensity={0.2} />
        
        <CelestialSphere />
        {!lowPerformanceMode && <MysticalSymbols />}
        {!lowPerformanceMode && <GoldenSpiral />}
        
        {/* Minimal stars */}
        <Stars 
          radius={50} 
          depth={50} 
          count={lowPerformanceMode ? 500 : 1000} 
          factor={4} 
          fade 
          speed={0.2} 
        />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.1}
          autoRotate
          autoRotateSpeed={0.1}
        />
      </Canvas>
    </div>
  );
} 