'use client';

import React, { Suspense } from 'react';
import { MapIcon, BookMarked, Compass, Key, Eye, Sparkles, Info } from 'lucide-react';
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
        {/* Cosmic background with stars */}
        <div className="stars-background absolute inset-0 overflow-hidden pointer-events-none"></div>
        
        <style jsx>{`
          .stars-background {
            background-image: 
              radial-gradient(2px 2px at 20px 30px, rgba(161, 123, 255, 0.9), rgba(161, 123, 255, 0)),
              radial-gradient(2px 2px at 40px 70px, rgba(161, 123, 255, 0.85), rgba(161, 123, 255, 0)),
              radial-gradient(3px 3px at 120px 40px, rgba(161, 123, 255, 0.9), rgba(161, 123, 255, 0)),
              radial-gradient(1px 1px at 140px 90px, rgba(161, 123, 255, 0.9), rgba(161, 123, 255, 0)),
              radial-gradient(2px 2px at 230px 150px, rgba(161, 123, 255, 0.85), rgba(161, 123, 255, 0)),
              radial-gradient(2px 2px at 420px 190px, rgba(161, 123, 255, 0.9), rgba(161, 123, 255, 0)),
              radial-gradient(3px 3px at 350px 290px, rgba(161, 123, 255, 0.9), rgba(161, 123, 255, 0)),
              radial-gradient(1px 1px at 390px 320px, rgba(161, 123, 255, 0.85), rgba(161, 123, 255, 0)),
              radial-gradient(3px 3px at 450px 380px, rgba(161, 123, 255, 0.9), rgba(161, 123, 255, 0)),
              radial-gradient(2px 2px at 520px 400px, rgba(161, 123, 255, 0.85), rgba(161, 123, 255, 0)),
              radial-gradient(3px 3px at 600px 350px, rgba(161, 123, 255, 0.9), rgba(161, 123, 255, 0)),
              radial-gradient(1px 1px at 550px 290px, rgba(161, 123, 255, 0.9), rgba(161, 123, 255, 0)),
              radial-gradient(2px 2px at 700px 370px, rgba(161, 123, 255, 0.85), rgba(161, 123, 255, 0)),
              radial-gradient(2px 2px at 250px 350px, rgba(161, 123, 255, 0.9), rgba(161, 123, 255, 0)),
              radial-gradient(3px 3px at 300px 370px, rgba(161, 123, 255, 0.9), rgba(161, 123, 255, 0)),
              radial-gradient(1px 1px at 320px 400px, rgba(161, 123, 255, 0.85), rgba(161, 123, 255, 0)),
              radial-gradient(3px 3px at 900px 300px, rgba(161, 123, 255, 0.9), rgba(161, 123, 255, 0)),
              radial-gradient(2px 2px at 830px 350px, rgba(161, 123, 255, 0.85), rgba(161, 123, 255, 0)),
              radial-gradient(3px 3px at 950px 380px, rgba(161, 123, 255, 0.9), rgba(161, 123, 255, 0)),
              radial-gradient(1px 1px at 1000px 400px, rgba(161, 123, 255, 0.9), rgba(161, 123, 255, 0));
            background-size: 1000px 1000px;
            animation: twinkle 30s ease-in-out infinite alternate;
            opacity: 0.5;
          }
          
          @keyframes twinkle {
            0% {
              background-position: 0 0;
              opacity: 0.4;
            }
            50% {
              background-position: -50px -50px;
              opacity: 0.6;
            }
            100% {
              background-position: -100px -100px;
              opacity: 0.4;
            }
          }
        `}</style>

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
                <Card className="border-accent/10 bg-card/50 hover:bg-card/80 transition-colors group backdrop-blur-sm">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-foreground/90 group-hover:text-accent transition-colors">Great Pyramid of Giza</h3>
                    <p className="text-sm text-muted-foreground mt-1">Repository of ancient wisdom encoded in sacred geometry and astronomical alignments.</p>
                    <div className="mt-3 flex justify-end">
                      <Link href="/pillars/sacred-geometry" className="text-xs text-accent hover:underline">Learn more</Link>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-accent/10 bg-card/50 hover:bg-card/80 transition-colors group backdrop-blur-sm">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-foreground/90 group-hover:text-accent transition-colors">Temple of Apollo at Delphi</h3>
                    <p className="text-sm text-muted-foreground mt-1">The omphalos or navel of the world, where the Pythia delivered oracles from the gods.</p>
                    <div className="mt-3 flex justify-end">
                      <Link href="/pillars/divination" className="text-xs text-accent hover:underline">Learn more</Link>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-accent/10 bg-card/50 hover:bg-card/80 transition-colors group backdrop-blur-sm">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-foreground/90 group-hover:text-accent transition-colors">Rosslyn Chapel</h3>
                    <p className="text-sm text-muted-foreground mt-1">Gothic sanctuary with intricate carvings linking Templar and Rosicrucian symbolism.</p>
                    <div className="mt-3 flex justify-end">
                      <Link href="/pillars/rosicrucianism" className="text-xs text-accent hover:underline">Learn more</Link>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-accent/10 bg-card/50 hover:bg-card/80 transition-colors group backdrop-blur-sm">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-foreground/90 group-hover:text-accent transition-colors">Mount Kailash</h3>
                    <p className="text-sm text-muted-foreground mt-1">Sacred to multiple religions, believed to be the axis mundi connecting heaven and earth.</p>
                    <div className="mt-3 flex justify-end">
                      <Link href="/pillars/sacred-mountains" className="text-xs text-accent hover:underline">Learn more</Link>
                    </div>
                  </CardContent>
                </Card>
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
                <Card className="border-primary/10 bg-card/50 hover:bg-card/80 transition-colors group backdrop-blur-sm">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-foreground/90 group-hover:text-primary transition-colors">Eleusinian Mysteries</h3>
                    <p className="text-sm text-muted-foreground mt-1">Initiatory rites honoring Demeter and Persephone, revealing the cycles of death and rebirth.</p>
                    <div className="mt-3 flex justify-end">
                      <Link href="/pillars/mystery-traditions" className="text-xs text-primary hover:underline">Learn more</Link>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-primary/10 bg-card/50 hover:bg-card/80 transition-colors group backdrop-blur-sm">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-foreground/90 group-hover:text-primary transition-colors">School of Alexandria</h3>
                    <p className="text-sm text-muted-foreground mt-1">Philosophical center where neoplatonism, hermeticism, and early Christian thought converged.</p>
                    <div className="mt-3 flex justify-end">
                      <Link href="/pillars/hermeticism" className="text-xs text-primary hover:underline">Learn more</Link>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-primary/10 bg-card/50 hover:bg-card/80 transition-colors group backdrop-blur-sm">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-foreground/90 group-hover:text-primary transition-colors">Pythagorean School</h3>
                    <p className="text-sm text-muted-foreground mt-1">Brotherhood dedicated to mathematics as the foundation of all reality and cosmic harmony.</p>
                    <div className="mt-3 flex justify-end">
                      <Link href="/pillars/sacred-geometry" className="text-xs text-primary hover:underline">Learn more</Link>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-primary/10 bg-card/50 hover:bg-card/80 transition-colors group backdrop-blur-sm">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-foreground/90 group-hover:text-primary transition-colors">Order of the Golden Dawn</h3>
                    <p className="text-sm text-muted-foreground mt-1">Modern magical order synthesizing Western esoteric traditions into a coherent system.</p>
                    <div className="mt-3 flex justify-end">
                      <Link href="/pillars/ritual-magic" className="text-xs text-primary hover:underline">Learn more</Link>
                    </div>
                  </CardContent>
                </Card>
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