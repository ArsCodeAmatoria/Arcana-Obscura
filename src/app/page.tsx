'use client';

import React, { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Eye, BookOpen, MapPin, Clock, Scroll, Sparkles, Layers, BookMarked } from 'lucide-react';
import dynamic from 'next/dynamic';

// Simple static hero component for when animation fails
function StaticHeroBackground() {
  return (
    <div className="relative w-full h-[60vh] bg-gradient-to-b from-background to-primary/5 overflow-hidden">
      {/* Decorative circle patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-slow-spin">
            <circle cx="100" cy="100" r="80" stroke="hsl(var(--accent) / 0.2)" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="60" stroke="hsl(var(--accent) / 0.15)" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="40" stroke="hsl(var(--accent) / 0.2)" strokeWidth="0.5" />
            
            <path d="M 100 20 L 100 180" stroke="hsl(var(--accent) / 0.15)" strokeWidth="0.5" strokeDasharray="1 3" />
            <path d="M 20 100 L 180 100" stroke="hsl(var(--accent) / 0.15)" strokeWidth="0.5" strokeDasharray="1 3" />
            
            <g className="animate-pulse">
              <path d="M 100 60 L 140 120 L 60 120 Z" stroke="hsl(var(--accent) / 0.3)" strokeWidth="0.5" fill="none" />
              <path d="M 100 140 L 60 80 L 140 80 Z" stroke="hsl(var(--accent) / 0.3)" strokeWidth="0.5" fill="none" />
            </g>
          </svg>
        </div>
        
        {/* Stars background */}
        <div className="absolute inset-0">
          {Array.from({ length: 100 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-white animate-twinkle"
              style={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                opacity: Math.random() * 0.3,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Alchemical symbols */}
        <div className="absolute top-1/4 right-1/4 text-accent/40 text-xl">☿</div>
        <div className="absolute bottom-1/3 left-1/4 text-accent/40 text-xl">☽</div>
        <div className="absolute top-2/3 right-1/3 text-accent/40 text-xl">☉</div>
      </div>
    </div>
  );
}

// Dynamic import for the Three.js component to avoid SSR issues
const CosmicAnimationDynamic = dynamic(() => import('@/components/home/CosmicAnimation'), {
  ssr: false,
  loading: () => <div className="w-full h-[60vh] bg-background flex items-center justify-center">
    <div className="text-accent animate-pulse font-esoterica">Manifesting...</div>
  </div>
});

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);
  const [animationFailed, setAnimationFailed] = useState(false);
  const [lowPerformanceDetected, setLowPerformanceDetected] = useState(false);
  
  useEffect(() => {
    // Show content after animation loads or after timeout
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000); // Wait for animation or timeout after 2 seconds
    
    return () => clearTimeout(timer);
  }, []);

  // Handle WebGL context failures
  useEffect(() => {
    // Function to detect WebGL compatibility more thoroughly
    const checkWebGLCompatibility = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || 
                  canvas.getContext('experimental-webgl');
        
        if (!gl) {
          console.error('WebGL not supported');
          setAnimationFailed(true);
          return false;
        }
        
        // Check for key extensions and capabilities
        const extensions = {
          floatTextures: (gl as WebGLRenderingContext).getExtension('OES_texture_float'),
          depthTexture: (gl as WebGLRenderingContext).getExtension('WEBGL_depth_texture'),
          drawBuffers: (gl as WebGLRenderingContext).getExtension('WEBGL_draw_buffers')
        };
        
        // If too many capabilities missing, use low performance mode
        const missingExtensions = Object.values(extensions).filter(ext => !ext).length;
        if (missingExtensions >= 2) {
          console.log('Limited WebGL capabilities, using low performance mode');
          setLowPerformanceDetected(true);
        }
        
        // Check max texture size - if very small, it's likely a lower-end device
        const maxTextureSize = (gl as WebGLRenderingContext).getParameter((gl as WebGLRenderingContext).MAX_TEXTURE_SIZE);
        if (maxTextureSize < 4096) {
          console.log('Small max texture size, using low performance mode');
          setLowPerformanceDetected(true);
        }
        
        return true;
      } catch (e) {
        console.error('WebGL detection error:', e);
        setAnimationFailed(true);
        return false;
      }
    };

    const handleError = (event: ErrorEvent) => {
      // Only react to WebGL errors
      const errorMsg = event.message || (event.error && event.error.message) || '';
      if (errorMsg.includes('WebGL') || 
          errorMsg.includes('Shader') || 
          errorMsg.includes('CONTEXT_LOST_WEBGL') ||
          errorMsg.includes('GPU') ||
          errorMsg.includes('hardware')) {
        console.error('WebGL related error caught:', errorMsg);
        setAnimationFailed(true);
      }
    };

    // Check compatibility first
    checkWebGLCompatibility();

    // Listen for various WebGL related errors
    window.addEventListener('webglcontextlost', () => setAnimationFailed(true));
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
      if (event.reason && typeof event.reason.message === 'string' && 
          event.reason.message.includes('WebGL')) {
        setAnimationFailed(true);
      }
    });

    return () => {
      window.removeEventListener('webglcontextlost', () => setAnimationFailed(true));
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {});
    };
  }, []);
  
  return (
    <MainLayout>
      {/* Hero Section with 3D Animation */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        {animationFailed ? (
          <StaticHeroBackground />
        ) : (
          <div className="fixed inset-0 z-0 overflow-hidden">
            <CosmicAnimationDynamic 
              initialLowPerformance={lowPerformanceDetected}
              onError={() => setAnimationFailed(true)}
            />
          </div>
        )}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-esoterica text-center text-accent mb-6 drop-shadow-glow">
              Arcana Obscura
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 bg-background/30 backdrop-blur-md p-4 rounded-lg max-w-3xl mx-auto">
              Illuminating the Secret Teachings of All Ages
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Button size="lg" className="mystical-glow group" asChild>
              <Link href="/pillars" className="flex items-center gap-2">
                <Eye className="w-5 h-5 group-hover:animate-pulse" />
                Begin Your Journey
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
        </div>
      </section>

      {/* Content */}
      <div className={`relative z-10 flex-1 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        {/* Introduction Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto space-y-8 relative">
            {/* Decorative element */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 opacity-20 pointer-events-none">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="50" cy="50" r="40" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                <path d="M50 10 L50 90" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                <path d="M10 50 L90 50" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="5" stroke="hsl(45 100% 60%)" strokeWidth="0.5" />
              </svg>
            </div>
            
            <div className="text-center mb-12">
              <div className="inline-block px-12 py-2 border-b border-t border-accent/20 mb-6">
                <p className="text-2xl md:text-3xl font-esoterica text-foreground/80 italic">
                  "The lips of wisdom are closed, except to the ears of Understanding."
                </p>
              </div>
              <p className="text-sm text-muted-foreground">— The Kybalion</p>
            </div>

            <p className="text-lg leading-relaxed">
              Welcome, seeker of hidden knowledge. <span className="text-accent font-semibold">Arcana Obscura</span> is a digital grimoire 
              dedicated to preserving and illuminating the esoteric wisdom traditions that have guided initiates 
              throughout the ages.
            </p>

            <p className="text-lg leading-relaxed text-foreground/80">
              From the hermetic principles of ancient Egypt to the mystical teachings of Kabbalah, 
              from Rosicrucian enlightenment to Masonic symbolism, these traditions share a common 
              thread of profound insight into the nature of reality and consciousness.
            </p>

            <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"></div>

            <p className="text-xl text-center text-accent/80 font-esoterica">
              As above, so below. As within, so without. The universe is mental; all is mind.
            </p>
          </div>
        </section>

        {/* Explore Sections Grid */}
        <section className="container mx-auto px-4 py-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-esoterica text-center mb-12 text-accent/80 relative inline-block left-1/2 -translate-x-1/2">
            Pathways of Wisdom
            <span className="absolute -bottom-2 left-0 w-full h-px bg-accent/40"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pillars of Mystery */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/5 card-glow group hover:border-accent/30 transition-all duration-500">
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                    <Layers className="w-8 h-8 text-accent group-hover:scale-110 transition-all duration-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-esoterica text-center mb-4 text-accent/80">Pillars of Mystery</h3>
                <p className="text-muted-foreground text-center mb-6">
                  Explore the foundational esoteric traditions that have preserved hidden wisdom through the ages.
                </p>
                <div className="flex justify-center">
                  <Button variant="outline" size="sm" className="group-hover:border-accent/50 transition-all" asChild>
                    <Link href="/pillars" className="flex items-center gap-2 text-foreground/70 hover:text-foreground">
                      <Eye className="w-4 h-4" />
                      Explore Traditions
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Esoteric Atlas */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/5 card-glow group hover:border-accent/30 transition-all duration-500">
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                    <MapPin className="w-8 h-8 text-accent group-hover:scale-110 transition-all duration-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-esoterica text-center mb-4 text-accent/80">Esoteric Atlas</h3>
                <p className="text-muted-foreground text-center mb-6">
                  Discover sacred sites and mystery schools from around the world on our interactive mystical map.
                </p>
                <div className="flex justify-center">
                  <Button variant="outline" size="sm" className="group-hover:border-accent/50 transition-all" asChild>
                    <Link href="/atlas" className="flex items-center gap-2 text-foreground/70 hover:text-foreground">
                      <MapPin className="w-4 h-4" />
                      Explore Atlas
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Alchemical Timeline */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/5 card-glow group hover:border-accent/30 transition-all duration-500">
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                    <Clock className="w-8 h-8 text-accent group-hover:scale-110 transition-all duration-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-esoterica text-center mb-4 text-accent/80">Alchemical Timeline</h3>
                <p className="text-muted-foreground text-center mb-6">
                  Journey through the evolution of esoteric thought from ancient mysteries to modern occultism.
                </p>
                <div className="flex justify-center">
                  <Button variant="outline" size="sm" className="group-hover:border-accent/50 transition-all" asChild>
                    <Link href="/timeline" className="flex items-center gap-2 text-foreground/70 hover:text-foreground">
                      <Clock className="w-4 h-4" />
                      Explore Timeline
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* The Secret Library */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/5 card-glow group hover:border-accent/30 transition-all duration-500">
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                    <BookMarked className="w-8 h-8 text-accent group-hover:scale-110 transition-all duration-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-esoterica text-center mb-4 text-accent/80">The Secret Library</h3>
                <p className="text-muted-foreground text-center mb-6">
                  Browse our collection of articles, summaries, and resources on esoteric subjects and practices.
                </p>
                <div className="flex justify-center">
                  <Button variant="outline" size="sm" className="group-hover:border-accent/50 transition-all" asChild>
                    <Link href="/library" className="flex items-center gap-2 text-foreground/70 hover:text-foreground">
                      <BookOpen className="w-4 h-4" />
                      Enter Library
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* The Inner Chamber */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/5 card-glow group hover:border-accent/30 transition-all duration-500">
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                    <Scroll className="w-8 h-8 text-accent group-hover:scale-110 transition-all duration-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-esoterica text-center mb-4 text-accent/80">The Inner Chamber</h3>
                <p className="text-muted-foreground text-center mb-6">
                  Practical wisdom for the modern seeker - meditations, rituals, and inner workings.
                </p>
                <div className="flex justify-center">
                  <Button variant="outline" size="sm" className="group-hover:border-accent/50 transition-all" asChild>
                    <Link href="/chamber" className="flex items-center gap-2 text-foreground/70 hover:text-foreground">
                      <Scroll className="w-4 h-4" />
                      Enter Chamber
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Daily Oracle */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/5 card-glow group hover:border-accent/30 transition-all duration-500">
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                    <Sparkles className="w-8 h-8 text-accent group-hover:scale-110 transition-all duration-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-esoterica text-center mb-4 text-accent/80">Daily Oracle</h3>
                <p className="text-muted-foreground text-center mb-6">
                  Receive daily wisdom and mystical insights to guide your spiritual journey.
                </p>
                <div className="flex justify-center">
                  <Button variant="outline" size="sm" className="group-hover:border-accent/50 transition-all" asChild>
                    <Link href="/oracle" className="flex items-center gap-2 text-foreground/70 hover:text-foreground">
                      <Sparkles className="w-4 h-4" />
                      Consult Oracle
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Final Call to Action */}
        <section className="bg-card/30 backdrop-blur-sm py-16 border-t border-border/20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-esoterica mb-6 text-accent/80">Begin Your Mystical Journey</h2>
              <p className="text-lg text-gray-600 mb-8">
                The keys to the ancient wisdom await those who seek with an open mind and a sincere heart.
              </p>
              <Button size="lg" className="mystical-glow" asChild>
                <Link href="/pillars" className="flex items-center gap-2 text-foreground/90">
                  <Eye className="w-5 h-5" />
                  Explore the Pillars of Mystery
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
