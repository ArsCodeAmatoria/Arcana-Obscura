'use client';

import React, { Suspense } from 'react';
import { MapIcon, BookMarked } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Card, CardContent } from '@/components/ui/card';
import MainLayout from '@/components/layout/MainLayout';

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
      <div className="container mx-auto px-4 pb-16 pt-4 relative">
        {/* Decorative SVG elements */}
        <div className="absolute top-10 left-0 w-20 h-20 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="50" cy="50" r="40" stroke="hsl(var(--accent))" strokeWidth="0.5" />
            <path d="M30 50 L70 50" stroke="hsl(var(--accent))" strokeWidth="0.5" />
            <path d="M50 30 L50 70" stroke="hsl(var(--accent))" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-40 h-40 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M10 50 A40 40 0 0 1 90 50 A40 40 0 0 1 10 50 Z" stroke="hsl(var(--accent))" strokeWidth="0.5" strokeDasharray="1 3" />
            <path d="M20 50 A30 30 0 0 1 80 50 A30 30 0 0 1 20 50 Z" stroke="hsl(var(--accent))" strokeWidth="0.5" strokeDasharray="1 3" />
            <path d="M30 50 A20 20 0 0 1 70 50 A20 20 0 0 1 30 50 Z" stroke="hsl(var(--accent))" strokeWidth="0.5" strokeDasharray="1 3" />
          </svg>
        </div>

        <div className="flex flex-col items-center justify-center text-center mb-8 p-6 bg-gradient-to-b from-background/0 to-background/5 rounded-lg border border-border/10">
          <div className="flex items-center justify-center w-16 h-16 bg-accent/5 rounded-full mb-4">
            <MapIcon className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-4xl font-bold font-esoterica text-accent mb-2">Esoteric Atlas</h1>
          <p className="max-w-2xl text-muted-foreground">Explore sacred sites and mystery schools that have shaped the esoteric traditions throughout history. Our interactive map reveals the geographical nexus of spiritual knowledge across civilizations.</p>
        </div>

        <Suspense fallback={<div>Loading map...</div>}>
          <EsotericMap />
        </Suspense>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="mr-2">
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
              <Card className="border-accent/10 bg-card/50 hover:bg-card/80 transition-colors group">
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground/90 group-hover:text-accent transition-colors">Great Pyramid of Giza</h3>
                  <p className="text-sm text-muted-foreground mt-1">Repository of ancient wisdom encoded in sacred geometry and astronomical alignments.</p>
                </CardContent>
              </Card>
              <Card className="border-accent/10 bg-card/50 hover:bg-card/80 transition-colors group">
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground/90 group-hover:text-accent transition-colors">Temple of Apollo at Delphi</h3>
                  <p className="text-sm text-muted-foreground mt-1">The omphalos or navel of the world, where the Pythia delivered oracles.</p>
                </CardContent>
              </Card>
              <Card className="border-accent/10 bg-card/50 hover:bg-card/80 transition-colors group">
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground/90 group-hover:text-accent transition-colors">Rosslyn Chapel</h3>
                  <p className="text-sm text-muted-foreground mt-1">Gothic sanctuary with intricate carvings linking Templar and Rosicrucian symbolism.</p>
                </CardContent>
              </Card>
              <Card className="border-accent/10 bg-card/50 hover:bg-card/80 transition-colors group">
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground/90 group-hover:text-accent transition-colors">Mount Kailash</h3>
                  <p className="text-sm text-muted-foreground mt-1">Sacred to multiple religions, believed to be the axis mundi connecting heaven and earth.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              <div className="mr-2">
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
              <Card className="border-primary/10 bg-card/50 hover:bg-card/80 transition-colors group">
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground/90 group-hover:text-primary transition-colors">Eleusinian Mysteries</h3>
                  <p className="text-sm text-muted-foreground mt-1">Initiatory rites honoring Demeter and Persephone, revealing the cycles of death and rebirth.</p>
                </CardContent>
              </Card>
              <Card className="border-primary/10 bg-card/50 hover:bg-card/80 transition-colors group">
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground/90 group-hover:text-primary transition-colors">School of Alexandria</h3>
                  <p className="text-sm text-muted-foreground mt-1">Philosophical center where neoplatonism, hermeticism, and early Christian thought converged.</p>
                </CardContent>
              </Card>
              <Card className="border-primary/10 bg-card/50 hover:bg-card/80 transition-colors group">
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground/90 group-hover:text-primary transition-colors">Pythagorean School</h3>
                  <p className="text-sm text-muted-foreground mt-1">Brotherhood dedicated to mathematics as the foundation of all reality and cosmic harmony.</p>
                </CardContent>
              </Card>
              <Card className="border-primary/10 bg-card/50 hover:bg-card/80 transition-colors group">
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground/90 group-hover:text-primary transition-colors">Order of the Golden Dawn</h3>
                  <p className="text-sm text-muted-foreground mt-1">Modern magical order synthesizing Western esoteric traditions into a coherent system.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 