'use client';

import React, { Suspense } from 'react';
import { MapIcon, BookMarked, Compass, Key, Eye, Sparkles, Info, MapPin, School, Mountain, Building, Scroll, BookOpen, GraduationCap, FlaskConical, Triangle } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Card, CardContent } from '@/components/ui/card';
import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';

// Dynamically import the map component to prevent SSR issues
const EsotericMap = dynamic(() => import('@/components/atlas/EsotericMap'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-[70vh] border border-accent/10 rounded-lg bg-card/5">
      <div className="text-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-accent border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
        <p className="mt-4 font-esoterica text-accent">Charting the realms...</p>
      </div>
    </div>
  ),
});

export default function AtlasPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 pb-16 pt-4 relative min-h-screen">
        {/* Stars background removed */}
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left mb-8 p-6 bg-gradient-to-b from-background/5 to-background/20 backdrop-blur-md rounded-xl border border-accent/10 shadow-lg shadow-accent/5">
            <div className="md:max-w-2xl">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full">
                  <MapIcon className="w-8 h-8 text-accent" />
                </div>
                <h1 className="text-4xl font-bold font-esoterica text-accent">Esoteric Atlas</h1>
              </div>
              <p className="text-lg text-foreground/80 mb-4 md:mb-6">
                Uncover the hidden geography of mystical knowledge — an interactive cosmic cartography
                of sacred sites and mystery schools that have shaped humanity's spiritual evolution.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Ancient Temples</span>
                <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">Mystery Schools</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">Sacred Geometry</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Energy Sites</span>
              </div>
            </div>
            <div className="mt-8 md:mt-0 flex-shrink-0">
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <div className="absolute inset-0 rounded-full bg-accent/5 animate-pulse"></div>
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.5" strokeDasharray="1 3" className="animate-spin-slow" style={{animationDuration: '60s'}} />
                  <circle cx="50" cy="50" r="35" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.5" strokeDasharray="1 3" className="animate-spin-slow" style={{animationDuration: '40s', animationDirection: 'reverse'}} />
                  <circle cx="50" cy="50" r="20" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.5" strokeDasharray="1 3" className="animate-spin-slow" style={{animationDuration: '20s'}} />
                  <path d="M10 50 L90 50 M50 10 L50 90" stroke="hsl(var(--accent))" strokeWidth="0.3" opacity="0.5" />
                  <path d="M30 30 L70 70 M30 70 L70 30" stroke="hsl(var(--accent))" strokeWidth="0.3" opacity="0.5" />
                  <circle cx="50" cy="50" r="5" fill="hsl(var(--accent))" opacity="0.7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-10 bg-card/40 backdrop-blur-md p-6 rounded-xl border border-accent/10 shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-esoterica text-primary">Atlas Guide</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              This interactive map plots the nexus points where esoteric knowledge has flourished throughout history. Each marker represents a location of profound spiritual significance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center text-center p-3 bg-card/30 rounded-lg border border-border/30">
                <Compass className="w-6 h-6 text-accent mb-2" />
                <h3 className="text-sm font-medium text-foreground">Navigate</h3>
                <p className="text-xs text-muted-foreground mt-1">Scroll to zoom, drag to pan across the mystical landscape</p>
              </div>
              <div className="flex flex-col items-center text-center p-3 bg-card/30 rounded-lg border border-border/30">
                <Eye className="w-6 h-6 text-accent mb-2" />
                <h3 className="text-sm font-medium text-foreground">Explore</h3>
                <p className="text-xs text-muted-foreground mt-1">Click markers to reveal the secrets of each sacred location</p>
              </div>
              <div className="flex flex-col items-center text-center p-3 bg-card/30 rounded-lg border border-border/30">
                <Sparkles className="w-6 h-6 text-accent mb-2" />
                <h3 className="text-sm font-medium text-foreground">Discover</h3>
                <p className="text-xs text-muted-foreground mt-1">Diamond markers indicate sacred sites of power</p>
              </div>
              <div className="flex flex-col items-center text-center p-3 bg-card/30 rounded-lg border border-border/30">
                <Key className="w-6 h-6 text-accent mb-2" />
                <h3 className="text-sm font-medium text-foreground">Learn</h3>
                <p className="text-xs text-muted-foreground mt-1">Circle markers reveal mystery schools and initiatory traditions</p>
              </div>
            </div>
          </div>

          <div className="bg-card/10 rounded-xl p-1 border border-accent/10 shadow-xl overflow-hidden mb-12">
            <Suspense fallback={<div>Loading map...</div>}>
              <EsotericMap />
            </Suspense>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="mr-3 p-2 bg-accent/10 rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path 
                      d="M12,4 L19,16 L12,13 L5,16 Z" 
                      fill="hsl(45 100% 60%)" 
                      stroke="hsl(0 0% 95%)" 
                      strokeWidth={0.5}
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-esoterica text-accent">Sacred Sites</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link 
                  href="/atlas/great-pyramid-of-giza"
                  className="group p-4 border border-border rounded-md hover:bg-accent/5 transition-colors flex items-start" 
                >
                  <div className="flex-1">
                    <h3 className="font-medium group-hover:text-accent transition-colors">Great Pyramid of Giza</h3>
                    <p className="text-sm text-muted-foreground">Egypt</p>
                  </div>
                </Link>
                
                <Link 
                  href="/atlas/temple-of-apollo-at-delphi"
                  className="group p-4 border border-border rounded-md hover:bg-accent/5 transition-colors flex items-start" 
                >
                  <div className="flex-1">
                    <h3 className="font-medium group-hover:text-accent transition-colors">Temple of Apollo at Delphi</h3>
                    <p className="text-sm text-muted-foreground">Greece</p>
                  </div>
                </Link>
                
                <Link 
                  href="/atlas/rosslyn-chapel"
                  className="group p-4 border border-border rounded-md hover:bg-accent/5 transition-colors flex items-start" 
                >
                  <div className="flex-1">
                    <h3 className="font-medium group-hover:text-accent transition-colors">Rosslyn Chapel</h3>
                    <p className="text-sm text-muted-foreground">Scotland</p>
                  </div>
                </Link>
                
                <Link 
                  href="/atlas/mount-kailash"
                  className="group p-4 border border-border rounded-md hover:bg-accent/5 transition-colors flex items-start" 
                >
                  <div className="flex-1">
                    <h3 className="font-medium group-hover:text-accent transition-colors">Mount Kailash</h3>
                    <p className="text-sm text-muted-foreground">Tibet</p>
                  </div>
                </Link>
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="mr-3 p-2 bg-primary/10 rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <circle 
                      cx="12" 
                      cy="12" 
                      r="7" 
                      fill="none" 
                      stroke="hsl(264 76% 55%)" 
                      strokeWidth={1.5} 
                    />
                    <circle 
                      cx="12" 
                      cy="12" 
                      r="2" 
                      fill="hsl(264 76% 55%)" 
                    />
                    <path 
                      d="M12,5 L12,19 M5,12 L19,12" 
                      stroke="hsl(264 76% 55%)" 
                      strokeWidth={0.8} 
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-esoterica text-primary">Mystery Schools</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link 
                  href="/atlas/eleusinian-mysteries"
                  className="group relative overflow-hidden rounded-lg border border-accent/20 bg-card/60 backdrop-blur-sm p-6 hover:border-accent/40 transition-all hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.2)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/0 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <Scroll className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-esoterica mb-2 text-primary group-hover:text-accent transition-colors">Eleusinian Mysteries</h3>
                  <p className="text-muted-foreground text-sm mb-3">The ancient Greek initiatic tradition honoring Demeter and Persephone</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>Greece</span>
                  </div>
                </Link>
                
                <Link 
                  href="/pillars/hermeticism"
                  className="group relative overflow-hidden rounded-lg border border-accent/20 bg-card/60 backdrop-blur-sm p-6 hover:border-accent/40 transition-all hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.2)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/0 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <BookOpen className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-esoterica mb-2 text-primary group-hover:text-accent transition-colors">School of Alexandria</h3>
                  <p className="text-muted-foreground text-sm mb-3">The intellectual crucible where Hermeticism flourished</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>Egypt</span>
                  </div>
                </Link>
                
                <Link 
                  href="/pillars/sacred-geometry"
                  className="group relative overflow-hidden rounded-lg border border-accent/20 bg-card/60 backdrop-blur-sm p-6 hover:border-accent/40 transition-all hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.2)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/0 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <GraduationCap className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-esoterica mb-2 text-primary group-hover:text-accent transition-colors">Pythagorean School</h3>
                  <p className="text-muted-foreground text-sm mb-3">The mystery school founded on mathematics and harmonic principles</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>Croton, Italy</span>
                  </div>
                </Link>
                
                <Link 
                  href="/pillars/ritual-magic"
                  className="group relative overflow-hidden rounded-lg border border-accent/20 bg-card/60 backdrop-blur-sm p-6 hover:border-accent/40 transition-all hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.2)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/0 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <FlaskConical className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-esoterica mb-2 text-primary group-hover:text-accent transition-colors">Order of the Golden Dawn</h3>
                  <p className="text-muted-foreground text-sm mb-3">The influential magical order that revitalized Western esotericism</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>London, England</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-t from-background/5 to-background/20 backdrop-blur-md rounded-xl border border-accent/10 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <BookMarked className="w-6 h-6 text-secondary" />
              <h2 className="text-2xl font-esoterica text-secondary">Connection to Cosmic Patterns</h2>
            </div>
            <p className="text-foreground/80 mb-4">
              The sites mapped in our Esoteric Atlas are not randomly distributed across the Earth's surface. Many researchers have noted their alignment with global energy grids, ley lines, and cosmic patterns reflecting celestial bodies.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-card/30 p-4 rounded-lg border border-border/30">
                <h3 className="font-medium text-accent mb-2 text-sm">Sacred Geometry</h3>
                <p className="text-xs text-muted-foreground">Many sites incorporate the golden ratio, platonic solids, and other geometric principles that mirror cosmic patterns.</p>
              </div>
              <div className="bg-card/30 p-4 rounded-lg border border-border/30">
                <h3 className="font-medium text-accent mb-2 text-sm">Astronomical Alignments</h3>
                <p className="text-xs text-muted-foreground">Structures oriented to solstices, equinoxes, and star systems like Sirius, the Pleiades, and Orion's belt.</p>
              </div>
              <div className="bg-card/30 p-4 rounded-lg border border-border/30">
                <h3 className="font-medium text-accent mb-2 text-sm">Energy Currents</h3>
                <p className="text-xs text-muted-foreground">Located at intersections of Earth's natural electromagnetic fields and underground water currents.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 