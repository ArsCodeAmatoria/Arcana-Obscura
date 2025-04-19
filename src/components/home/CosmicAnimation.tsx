'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface CosmicAnimationProps {
  initialLowPerformance?: boolean;
  onError?: () => void;
}

export default function CosmicAnimation({
  initialLowPerformance = false,
  onError
}: CosmicAnimationProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fallbackActive, setFallbackActive] = useState(false);
  const [hasContextLoss, setHasContextLoss] = useState(false);
  const [lowPerformanceMode, setLowPerformanceMode] = useState(initialLowPerformance);
  const contextLossCountRef = useRef(0);
  const performanceMonitorRef = useRef<{startTime: number, frameCount: number, lastCheck: number, consecutive_low_fps: number}>({
    startTime: 0,
    frameCount: 0,
    lastCheck: 0,
    consecutive_low_fps: 0
  });
  
  useEffect(() => {
    // Compatibility check - some browsers may have WebGL disabled or unavailable
    const canvas = document.createElement('canvas');
    let gl;
    try {
      gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    } catch (e) {
      console.error('WebGL initialization error:', e);
      setFallbackActive(true);
      onError?.();
      return;
    }
    
    if (!gl) {
      console.log('WebGL not supported, falling back to static background');
      setFallbackActive(true);
      onError?.();
      return;
    }
    
    if (!containerRef.current) return;
    
    // Variables to track resources for cleanup
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let controls: OrbitControls;
    let frameId: number;
    let animationRunning = true;
    let loaded = false;
    
    // New variables for frame timing
    let lastFrameTime = performance.now();
    let frameTimings: number[] = [];
    
    try {
      // Create scene with dark background
      scene = new THREE.Scene();
      scene.background = new THREE.Color('#020203');

      // Create camera
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.z = 6;
      
      // Use simpler renderer settings based on performance mode
      renderer = new THREE.WebGLRenderer({
        powerPreference: lowPerformanceMode ? 'low-power' : 'default',
        antialias: !lowPerformanceMode,
        stencil: false,
        depth: true,
        alpha: false,
        preserveDrawingBuffer: false,
      });
      
      // Lower resolution for better performance
      renderer.setSize(width, height);
      renderer.setPixelRatio(lowPerformanceMode ? 1 : Math.min(window.devicePixelRatio, 1.5));
      
      // Add canvas to container
      containerRef.current.appendChild(renderer.domElement);
      
      // Set up minimal orbit controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.rotateSpeed = 0.05;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.05;
      
      // Add a dim ambient light
      const ambientLight = new THREE.AmbientLight(0x222222, 1);
      scene.add(ambientLight);
      
      // Create a simple celestial sphere - basic wireframe
      const sphereGeometry = new THREE.SphereGeometry(2.5, lowPerformanceMode ? 8 : 12, lowPerformanceMode ? 8 : 12);
      const sphereMaterial = new THREE.MeshBasicMaterial({
        color: '#1a1425',
        wireframe: true,
        transparent: true,
        opacity: 0.5
      });
      const celestialSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      scene.add(celestialSphere);
      
      // Create simplified stars with fewer particles
      const starCount = Math.min(lowPerformanceMode ? 400 : 800, window.innerWidth < 768 ? 400 : 800);
      const starGeometry = new THREE.BufferGeometry();
      const starPositions = new Float32Array(starCount * 3);
      const starColors = new Float32Array(starCount * 3);
      const starSizes = new Float32Array(starCount);
      
      for (let i = 0; i < starCount; i++) {
        const i3 = i * 3;
        // Distribute stars in a sphere
        const radius = 30 + Math.random() * 20;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        starPositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
        starPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        starPositions[i3 + 2] = radius * Math.cos(phi);
        
        // More subtle star colors - less bright
        const brightness = 0.2 + Math.random() * 0.5;
        starColors[i3] = brightness;
        starColors[i3 + 1] = brightness;
        starColors[i3 + 2] = brightness + Math.random() * 0.15;
        
        // Varied sizes but keep them small
        starSizes[i] = 0.3 + Math.random() * 1.2;
      }
      
      starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
      starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
      starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));
      
      const starMaterial = new THREE.PointsMaterial({
        size: 0.08,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        sizeAttenuation: true
      });
      
      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);
      
      // Start performance monitoring
      performanceMonitorRef.current = {
        startTime: performance.now(),
        frameCount: 0,
        lastCheck: performance.now(),
        consecutive_low_fps: 0
      };
      
      // Animation function - keep it very simple
      const animate = () => {
        if (!animationRunning) return;
        
        try {
          // Request next frame first for smoother animation
          frameId = requestAnimationFrame(animate);
          
          // Track performance
          const now = performance.now();
          const frameDuration = now - lastFrameTime;
          lastFrameTime = now;
          
          // Keep track of frame timings (last 30 frames)
          frameTimings.push(frameDuration);
          if (frameTimings.length > 30) {
            frameTimings.shift();
          }
          
          // Check for consistently high frame times (low FPS)
          if (frameTimings.length >= 10) {
            const avgFrameTime = frameTimings.reduce((sum, time) => sum + time, 0) / frameTimings.length;
            const estimatedFPS = 1000 / avgFrameTime;
            
            const perfMon = performanceMonitorRef.current;
            perfMon.frameCount++;
            
            // Check memory usage if available through performance API
            if (performance && 'memory' in performance) {
              const memory = (performance as any).memory;
              if (memory && memory.usedJSHeapSize && memory.jsHeapSizeLimit) {
                const memoryUsageRatio = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
                
                // If memory usage is above 80% of the limit, fall back to static
                if (memoryUsageRatio > 0.8) {
                  console.warn('High memory usage detected:', 
                    Math.round(memory.usedJSHeapSize / 1048576) + 'MB / ' + 
                    Math.round(memory.jsHeapSizeLimit / 1048576) + 'MB'
                  );
                  
                  animationRunning = false;
                  cleanupResources();
                  setFallbackActive(true);
                  onError?.();
                  return;
                }
                
                // Log memory usage periodically
                if (now - perfMon.lastCheck > 5000) {
                  console.log('Memory usage:', 
                    Math.round(memory.usedJSHeapSize / 1048576) + 'MB / ' + 
                    Math.round(memory.jsHeapSizeLimit / 1048576) + 'MB'
                  );
                }
              }
            }
            
            // If FPS is too low, track consecutive occurrences
            if (estimatedFPS < 20) {
              perfMon.consecutive_low_fps++;
              
              // If consistently low FPS, take action
              if (perfMon.consecutive_low_fps >= 5) {
                if (!lowPerformanceMode) {
                  // First try switching to low performance mode
                  console.log('Consistently low FPS detected, switching to low performance mode');
                  setLowPerformanceMode(true);
                  cleanupResources();
                  return;
                } else if (perfMon.consecutive_low_fps >= 10) {
                  // If still low performance after optimization, fall back
                  console.log('Performance issues persist even in low-performance mode, falling back to static version');
                  animationRunning = false;
                  cleanupResources();
                  setFallbackActive(true);
                  onError?.();
                  return;
                }
              }
            } else {
              // Reset counter if FPS improves
              perfMon.consecutive_low_fps = 0;
            }
            
            // Regular performance check every second
            if (now - perfMon.lastCheck > 1000) {
              perfMon.frameCount = 0;
              perfMon.lastCheck = now;
            }
          }
          
          // Rotate the sphere very slowly
          celestialSphere.rotation.y += 0.0005;
          celestialSphere.rotation.z += 0.0001;
          
          // Update controls
          controls.update();
          
          // Render the scene
          renderer.render(scene, camera);
          
          // Mark as loaded after first successful render
          if (!loaded) {
            loaded = true;
            console.log('Three.js animation loaded successfully');
          }
        } catch (error) {
          console.error('Animation loop error:', error);
          animationRunning = false;
          
          // Clean up and fall back to static version
          cleanupResources();
          setFallbackActive(true);
          onError?.();
        }
      };
      
      // Handle window resize efficiently
      const handleResize = () => {
        if (!containerRef.current || !camera || !renderer) return;
        
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
      
      // Context loss handler
      const handleContextLoss = (event: Event) => {
        event.preventDefault();
        console.error('WebGL context lost');
        contextLossCountRef.current++;
        setHasContextLoss(true);
        
        // If we've had multiple context losses, fall back permanently
        if (contextLossCountRef.current >= 2) {
          console.error('Multiple WebGL context losses, falling back permanently');
          animationRunning = false;
          cleanupResources();
          setFallbackActive(true);
          onError?.();
        }
      };
      
      // Context restored handler
      const handleContextRestored = () => {
        console.log('WebGL context restored');
        // If we get here, then the browser has automatically restored the context
        // We can continue with the animation
      };

      // Add event listeners
      window.addEventListener('resize', handleResize);
      renderer.domElement.addEventListener('webglcontextlost', handleContextLoss);
      renderer.domElement.addEventListener('webglcontextrestored', handleContextRestored);
      
      // Start animation
      animate();
      
      // Fallback if nothing renders within 2 seconds
      const timeout = setTimeout(() => {
        if (!loaded) {
          console.error('Animation failed to load in time');
          animationRunning = false;
          cleanupResources();
          setFallbackActive(true);
          onError?.();
        }
      }, 2000);
      
      // Clean up function to prevent memory leaks
      function cleanupResources() {
        if (frameId) {
          cancelAnimationFrame(frameId);
        }
        
        // Remove event listeners
        window.removeEventListener('resize', handleResize);
        if (renderer && renderer.domElement) {
          renderer.domElement.removeEventListener('webglcontextlost', handleContextLoss);
          renderer.domElement.removeEventListener('webglcontextrestored', handleContextRestored);
          if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
            containerRef.current.removeChild(renderer.domElement);
          }
        }
        
        // Dispose geometries and materials
        if (sphereGeometry) sphereGeometry.dispose();
        if (sphereMaterial) sphereMaterial.dispose();
        if (starGeometry) starGeometry.dispose();
        if (starMaterial) starMaterial.dispose();
        
        // Clear timeout
        clearTimeout(timeout);
      }
      
      // Return cleanup function for React useEffect
      return cleanupResources;
    } catch (error) {
      console.error('Three.js setup error:', error);
      setFallbackActive(true);
      onError?.();
      return () => {}; // Empty cleanup if setup failed
    }
  }, [lowPerformanceMode, onError, initialLowPerformance]); // Add lowPerformanceMode as a dependency to re-render with new settings
  
  // Enhanced fallback with minimal SVG
  if (fallbackActive) {
    return (
      <div className="w-full h-full bg-[#020203] flex flex-col items-center justify-center">
        <div className="relative w-64 h-64 opacity-60">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="100" cy="100" r="80" stroke="hsl(45 70% 40% / 0.4)" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="50" stroke="hsl(45 70% 40% / 0.4)" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="30" stroke="hsl(45 70% 40% / 0.4)" strokeWidth="0.5" />
            
            <path d="M 100 20 L 100 180" stroke="hsl(45 70% 40% / 0.2)" strokeWidth="0.2" opacity="0.4" />
            <path d="M 20 100 L 180 100" stroke="hsl(45 70% 40% / 0.2)" strokeWidth="0.2" opacity="0.4" />
            
            {/* Minimal symbols */}
            <text x="96" y="40" fill="hsl(45 70% 40% / 0.5)" fontSize="8" fontFamily="serif">☿</text>
            <text x="160" y="100" fill="hsl(45 70% 40% / 0.5)" fontSize="8" fontFamily="serif">☽</text>
            <text x="96" y="170" fill="hsl(45 70% 40% / 0.5)" fontSize="8" fontFamily="serif">⊕</text>
            <text x="40" y="100" fill="hsl(45 70% 40% / 0.5)" fontSize="8" fontFamily="serif">♄</text>
            
            {/* Simple pulsing triangle */}
            <g className="animate-pulse">
              <path d="M 100 70 L 120 120 L 80 120 Z" stroke="hsl(45 70% 40% / 0.5)" strokeWidth="0.5" fill="none" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  
  return <div ref={containerRef} className="w-full h-full" />;
} 