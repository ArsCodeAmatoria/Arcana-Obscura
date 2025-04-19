'use client';

import { useRef, useEffect } from 'react';
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

// Golden Ratio spiral points generator - now with fewer points for better performance
function goldenSpiralPoints(turns = 3, pointsPerTurn = 15) {
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
  
  useFrame(() => {
    if (meshRef.current) {
      // Reduced rotation speed for better performance
      meshRef.current.rotation.y += 0.001;
      meshRef.current.rotation.z += 0.0005;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      {/* Reduced segment count for better performance */}
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshBasicMaterial
        color="#271a45"
        wireframe
      />
    </mesh>
  );
}

function GoldenSpiral() {
  const spiralRef = useRef<THREE.Line>(null);
  const points = goldenSpiralPoints(4, 30); // Reduced points for better performance
  
  useFrame(({ clock }) => {
    if (spiralRef.current) {
      // Use slower rotation for better stability
      spiralRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      spiralRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.1) * 0.2;
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
      // Reduced animation speed for better stability
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
      groupRef.current.rotation.x = Math.cos(clock.getElapsedTime() * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Golden pentagram - reduced geometry complexity */}
      <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.8, 0.03, 8, 5]} />
        <meshBasicMaterial color="#ffd700" />
      </mesh>
      
      {/* Eye symbol - simplified */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.2, 16, 8]} />
        <meshBasicMaterial color="#ffd700" />
      </mesh>

      {/* Orbit circles - reduced segments */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.2, 1.23, 32]} />
        <meshBasicMaterial color="#9774ff" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>
      
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <ringGeometry args={[1.5, 1.53, 32]} />
        <meshBasicMaterial color="#ffd700" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
      
      {/* Reduced number of orbiting spheres */}
      {[1, 3, 5].map((i) => (
        <OrbitingSphere 
          key={i} 
          radius={1.5 + i * 0.15} 
          speed={0.15 - i * 0.02} 
          offset={i * Math.PI / 3.5}
          size={0.05}
          color={i % 2 === 0 ? "#9774ff" : "#ffd700"}
        />
      ))}
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
      ref.current.position.y = Math.sin(t * 2) * (radius * 0.2);
    }
  });
  
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 8, 8]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

function FloatingSymbols() {
  // Reduced number of symbols
  const symbols = [
    { symbol: "☿", position: [1.5, 0.8, -1] as [number, number, number], rotation: [0, 0, 0] as [number, number, number] },
    { symbol: "☽", position: [-1.8, 1.2, 0.5] as [number, number, number], rotation: [0, 0, 0] as [number, number, number] },
  ];
  
  return (
    <>
      {symbols.map((item, index) => (
        <FloatingSymbol 
          key={index}
          symbol={item.symbol}
          position={item.position}
          rotation={item.rotation}
          speed={0.2 + index * 0.05}
        />
      ))}
    </>
  );
}

function FloatingSymbol({ symbol, position, rotation, speed }: FloatingSymbolProps) {
  const textRef = useRef<any>();
  
  useFrame(({ clock }) => {
    if (textRef.current) {
      const t = clock.getElapsedTime();
      // Reduced movement for better stability
      textRef.current.position.y += Math.sin(t * speed) * 0.0004;
      textRef.current.rotation.y = Math.sin(t * 0.1) * 0.2;
    }
  });
  
  return (
    <Text
      ref={textRef}
      position={position}
      rotation={rotation}
      fontSize={0.25}
      color="#ffd700"
      anchorX="center"
      anchorY="middle"
      outlineWidth={0.005}
      outlineColor="#271a45"
    >
      {symbol}
    </Text>
  );
}

export default function CosmicAnimation() {
  // Add a handler for context loss events
  useEffect(() => {
    const handleContextLoss = (event: Event) => {
      event.preventDefault();
      console.log('WebGL context lost. Trying to restore...');
    };

    const handleContextRestored = () => {
      console.log('WebGL context restored.');
    };

    // Add event listeners for context loss and restoration
    window.addEventListener('webglcontextlost', handleContextLoss);
    window.addEventListener('webglcontextrestored', handleContextRestored);

    return () => {
      window.removeEventListener('webglcontextlost', handleContextLoss);
      window.removeEventListener('webglcontextrestored', handleContextRestored);
    };
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ 
          powerPreference: 'default',
          alpha: false,
          antialias: false,
          stencil: false,
          depth: true
        }}
        frameloop="demand"
        dpr={[1, 1.5]} // Limit pixel ratio for better performance
      >
        <color attach="background" args={['#050510']} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.4} color="#9774ff" />
        
        <CelestialSphere />
        <MysticalSymbols />
        <GoldenSpiral />
        <FloatingSymbols />
        
        {/* Reduced star count */}
        <Stars 
          radius={70} 
          depth={50} 
          count={1500} 
          factor={4} 
          fade 
          speed={0.3} 
        />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.2}
          autoRotate
          autoRotateSpeed={0.2}
        />
      </Canvas>
    </div>
  );
} 