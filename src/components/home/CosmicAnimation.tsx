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

// Golden Ratio spiral points generator
function goldenSpiralPoints(turns = 3, pointsPerTurn = 20) {
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
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.z += 0.001;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2.5, 48, 48]} />
      <meshStandardMaterial
        color="#271a45"
        metalness={0.8}
        roughness={0.5}
        emissive="#271a45"
        emissiveIntensity={0.3}
        wireframe
      />
    </mesh>
  );
}

function GoldenSpiral() {
  const spiralRef = useRef<THREE.Line>(null);
  const points = goldenSpiralPoints(5, 40);
  
  useFrame(({ clock }) => {
    if (spiralRef.current) {
      spiralRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      spiralRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.2) * 0.3;
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
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      groupRef.current.rotation.x = Math.cos(clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Golden pentagram */}
      <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.8, 0.03, 16, 5]} />
        <meshStandardMaterial color="#ffd700" metalness={1} roughness={0.3} />
      </mesh>
      
      {/* Eye symbol */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.2, 32, 16]} />
        <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Orbit circles */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.2, 1.23, 64]} />
        <meshStandardMaterial color="#9774ff" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>
      
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <ringGeometry args={[1.5, 1.53, 64]} />
        <meshStandardMaterial color="#ffd700" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
      
      {/* Small orbiting spheres */}
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <OrbitingSphere 
          key={i} 
          radius={1.5 + i * 0.15} 
          speed={0.2 - i * 0.02} 
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
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  );
}

function FloatingSymbols() {
  const symbols = [
    { symbol: "☿", position: [1.5, 0.8, -1] as [number, number, number], rotation: [0, 0, 0] as [number, number, number] },
    { symbol: "☽", position: [-1.8, 1.2, 0.5] as [number, number, number], rotation: [0, 0, 0] as [number, number, number] },
    { symbol: "♄", position: [0.8, -1.5, 1] as [number, number, number], rotation: [0, 0, 0] as [number, number, number] },
    { symbol: "⊕", position: [-1.2, -0.8, -1.5] as [number, number, number], rotation: [0, 0, 0] as [number, number, number] },
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
      textRef.current.position.y += Math.sin(t * speed) * 0.0008;
      textRef.current.rotation.y = Math.sin(t * 0.2) * 0.3;
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
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <color attach="background" args={['#050510']} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#9774ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff747c" />
        
        <CelestialSphere />
        <MysticalSymbols />
        <GoldenSpiral />
        <FloatingSymbols />
        
        {/* Enhance stars with custom parameters */}
        <Stars 
          radius={70} 
          depth={50} 
          count={3000} 
          factor={4} 
          fade 
          speed={0.5} 
        />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.3}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
} 