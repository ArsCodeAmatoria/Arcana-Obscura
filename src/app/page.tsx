'use client';

import React, { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import Link from 'next/link';
import { Eye, BookOpen, MapPin, Clock, Scroll, Sparkles, Layers, BookMarked, ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamic import for our animation component to avoid SSR issues
const GlowingOrbsAnimation = dynamic(
  () => import('@/components/home/EsotericSymbolsAnimation'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[60vh] bg-background flex items-center justify-center">
        <div className="text-accent animate-pulse font-esoterica">Manifesting...</div>
      </div>
    )
  }
);

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    // Show content after a short delay
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <MainLayout>
      {/* Hero Section with Glowing Orbs Animation */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background to-primary/5">
          <GlowingOrbsAnimation maxOrbs={40} />
        </div>
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
            <Link href="/pillars" className="group">
              <Card className="pillar-card h-full transition-all duration-500 card-glow border border-border/50 overflow-visible">
                <CardHeader className="pb-2">
                  <div className="mb-4 p-3 bg-card/80 rounded-full w-20 h-20 flex items-center justify-center group-hover:shadow-inner group-hover:shadow-accent/10 transition-all duration-300">
                    <Layers className="w-10 h-10 text-accent icon-glow" />
                  </div>
                  <CardTitle className="text-2xl font-esoterica group-hover:text-gradient">
                    Pillars of Mystery
                  </CardTitle>
                  <CardDescription className="text-muted-foreground/90 mt-2 leading-relaxed">
                    Explore the foundational esoteric traditions that have preserved hidden wisdom through the ages.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="pt-4">
                  <span className="text-accent text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore Traditions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
            
            {/* Esoteric Atlas */}
            <Link href="/atlas" className="group">
              <Card className="pillar-card h-full transition-all duration-500 card-glow border border-border/50 overflow-visible">
                <CardHeader className="pb-2">
                  <div className="mb-4 p-3 bg-card/80 rounded-full w-20 h-20 flex items-center justify-center group-hover:shadow-inner group-hover:shadow-accent/10 transition-all duration-300">
                    <MapPin className="w-10 h-10 text-accent icon-glow" />
                  </div>
                  <CardTitle className="text-2xl font-esoterica group-hover:text-gradient">
                    Esoteric Atlas
                  </CardTitle>
                  <CardDescription className="text-muted-foreground/90 mt-2 leading-relaxed">
                    Discover sacred sites and mystery schools from around the world on our interactive mystical map.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="pt-4">
                  <span className="text-accent text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore Atlas <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
            
            {/* Alchemical Timeline */}
            <Link href="/timeline" className="group">
              <Card className="pillar-card h-full transition-all duration-500 card-glow border border-border/50 overflow-visible">
                <CardHeader className="pb-2">
                  <div className="mb-4 p-3 bg-card/80 rounded-full w-20 h-20 flex items-center justify-center group-hover:shadow-inner group-hover:shadow-accent/10 transition-all duration-300">
                    <Clock className="w-10 h-10 text-accent icon-glow" />
                  </div>
                  <CardTitle className="text-2xl font-esoterica group-hover:text-gradient">
                    Alchemical Timeline
                  </CardTitle>
                  <CardDescription className="text-muted-foreground/90 mt-2 leading-relaxed">
                    Journey through the evolution of esoteric thought from ancient mysteries to modern occultism.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="pt-4">
                  <span className="text-accent text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore Timeline <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
            
            {/* The Secret Library */}
            <Link href="/library" className="group">
              <Card className="pillar-card h-full transition-all duration-500 card-glow border border-border/50 overflow-visible">
                <CardHeader className="pb-2">
                  <div className="mb-4 p-3 bg-card/80 rounded-full w-20 h-20 flex items-center justify-center group-hover:shadow-inner group-hover:shadow-accent/10 transition-all duration-300">
                    <BookMarked className="w-10 h-10 text-accent icon-glow" />
                  </div>
                  <CardTitle className="text-2xl font-esoterica group-hover:text-gradient">
                    The Secret Library
                  </CardTitle>
                  <CardDescription className="text-muted-foreground/90 mt-2 leading-relaxed">
                    Browse our collection of articles, summaries, and resources on esoteric subjects and practices.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="pt-4">
                  <span className="text-accent text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                    Enter Library <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
            
            {/* The Inner Chamber */}
            <Link href="/chamber" className="group">
              <Card className="pillar-card h-full transition-all duration-500 card-glow border border-border/50 overflow-visible">
                <CardHeader className="pb-2">
                  <div className="mb-4 p-3 bg-card/80 rounded-full w-20 h-20 flex items-center justify-center group-hover:shadow-inner group-hover:shadow-accent/10 transition-all duration-300">
                    <Scroll className="w-10 h-10 text-accent icon-glow" />
                  </div>
                  <CardTitle className="text-2xl font-esoterica group-hover:text-gradient">
                    The Inner Chamber
                  </CardTitle>
                  <CardDescription className="text-muted-foreground/90 mt-2 leading-relaxed">
                    Practical wisdom for the modern seeker - meditations, rituals, and inner workings.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="pt-4">
                  <span className="text-accent text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                    Enter Chamber <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
            
            {/* Daily Oracle */}
            <Link href="/oracle" className="group">
              <Card className="pillar-card h-full transition-all duration-500 card-glow border border-border/50 overflow-visible">
                <CardHeader className="pb-2">
                  <div className="mb-4 p-3 bg-card/80 rounded-full w-20 h-20 flex items-center justify-center group-hover:shadow-inner group-hover:shadow-accent/10 transition-all duration-300">
                    <Sparkles className="w-10 h-10 text-accent icon-glow" />
                  </div>
                  <CardTitle className="text-2xl font-esoterica group-hover:text-gradient">
                    Daily Oracle
                  </CardTitle>
                  <CardDescription className="text-muted-foreground/90 mt-2 leading-relaxed">
                    Receive daily wisdom and mystical insights to guide your spiritual journey.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="pt-4">
                  <span className="text-accent text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                    Consult Oracle <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
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
