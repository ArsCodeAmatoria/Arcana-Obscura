'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';

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
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial
        color="#271a45"
        metalness={0.8}
        roughness={0.5}
        emissive="#271a45"
        emissiveIntensity={0.2}
        wireframe
      />
    </mesh>
  );
}

function MysticalSymbols() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Golden pentagram */}
      <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.8, 0.05, 16, 5]} />
        <meshStandardMaterial color="#ffd700" metalness={1} roughness={0.3} />
      </mesh>
      
      {/* Eye symbol */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.2, 32, 16]} />
        <meshStandardMaterial color="#ffd700" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* Other mystical symbols can be added here */}
    </group>
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
        <Stars radius={50} depth={50} count={1000} factor={4} fade speed={1} />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.3}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
} 