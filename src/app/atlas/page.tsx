'use client';

import MainLayout from '@/components/layout/MainLayout';
import dynamic from 'next/dynamic';
import { MapIcon, BookMarked } from 'lucide-react';

// Dynamically import the map component to avoid SSR issues
const EsotericMap = dynamic(() => import('@/components/atlas/EsotericMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[70vh] bg-background/50 flex items-center justify-center backdrop-blur-sm border border-accent/10 rounded-lg">
      <div className="text-accent animate-pulse font-esoterica flex flex-col items-center">
        <div className="w-12 h-12 border-t-2 border-accent rounded-full animate-spin mb-4"></div>
        <span>Charting the celestial map...</span>
      </div>
    </div>
  )
});

export default function AtlasPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Decorative elements */}
        <div className="absolute top-32 left-10 w-32 h-32 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="50" cy="50" r="48" stroke="hsl(var(--accent))" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="36" stroke="hsl(var(--accent))" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="24" stroke="hsl(var(--accent))" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="12" stroke="hsl(var(--accent))" strokeWidth="0.5" />
          </svg>
        </div>
        
        <div className="absolute bottom-40 right-10 w-24 h-24 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M10 50 L90 50" stroke="hsl(var(--accent))" strokeWidth="0.5" />
            <path d="M50 10 L50 90" stroke="hsl(var(--accent))" strokeWidth="0.5" />
            <path d="M20 20 L80 80" stroke="hsl(var(--accent))" strokeWidth="0.5" />
            <path d="M20 80 L80 20" stroke="hsl(var(--accent))" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="text-center mb-12">
          <div className="relative inline-block mb-4">
            <MapIcon className="w-16 h-16 inline-block text-accent icon-glow" />
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl -z-10"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-esoterica mb-6 text-accent inline-block relative">
            Esoteric Atlas
            <span className="absolute -bottom-3 left-1/2 w-1/2 h-px bg-accent/40 transform -translate-x-1/2"></span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Explore the sacred sites and mystery schools of esoteric traditions around the world.
          </p>
        </div>

        <div className="mb-16">
          <EsotericMap />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="card-glow bg-card/30 border border-primary/10 backdrop-blur-sm p-6 rounded-lg">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-primary/10 rounded-full mr-4">
                <MapIcon className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-esoterica text-primary">Sacred Sites</h2>
            </div>
            <ul className="space-y-5">
              <li className="group transition-all">
                <div className="flex flex-col border-l-2 border-accent/20 pl-4 group-hover:border-accent/60 transition-all">
                  <span className="font-semibold group-hover:text-accent transition-colors">The Great Pyramid of Giza</span>
                  <span className="text-sm text-primary/80 mb-1">Egypt</span>
                  <p className="text-sm text-muted-foreground">Ancient initiation site and repository of hermetic knowledge</p>
                </div>
              </li>
              <li className="group transition-all">
                <div className="flex flex-col border-l-2 border-accent/20 pl-4 group-hover:border-accent/60 transition-all">
                  <span className="font-semibold group-hover:text-accent transition-colors">Temple of Apollo at Delphi</span>
                  <span className="text-sm text-primary/80 mb-1">Greece</span>
                  <p className="text-sm text-muted-foreground">Home of the Oracle and center of Greek mystery traditions</p>
                </div>
              </li>
              <li className="group transition-all">
                <div className="flex flex-col border-l-2 border-accent/20 pl-4 group-hover:border-accent/60 transition-all">
                  <span className="font-semibold group-hover:text-accent transition-colors">Rosslyn Chapel</span>
                  <span className="text-sm text-primary/80 mb-1">Scotland</span>
                  <p className="text-sm text-muted-foreground">Medieval chapel with Templar and Masonic symbolism</p>
                </div>
              </li>
              <li className="group transition-all">
                <div className="flex flex-col border-l-2 border-accent/20 pl-4 group-hover:border-accent/60 transition-all">
                  <span className="font-semibold group-hover:text-accent transition-colors">Chartres Cathedral</span>
                  <span className="text-sm text-primary/80 mb-1">France</span>
                  <p className="text-sm text-muted-foreground">Gothic masterpiece embodying sacred geometry principles</p>
                </div>
              </li>
              <li className="group transition-all">
                <div className="flex flex-col border-l-2 border-accent/20 pl-4 group-hover:border-accent/60 transition-all">
                  <span className="font-semibold group-hover:text-accent transition-colors">Temple of Karnak</span>
                  <span className="text-sm text-primary/80 mb-1">Egypt</span>
                  <p className="text-sm text-muted-foreground">Ancient Egyptian temple complex of immense spiritual significance</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="card-glow bg-card/30 border border-primary/10 backdrop-blur-sm p-6 rounded-lg">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-primary/10 rounded-full mr-4">
                <BookMarked className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-esoterica text-primary">Mystery Schools</h2>
            </div>
            <ul className="space-y-5">
              <li className="group transition-all">
                <div className="flex flex-col border-l-2 border-accent/20 pl-4 group-hover:border-accent/60 transition-all">
                  <span className="font-semibold group-hover:text-accent transition-colors">The Eleusinian Mysteries</span>
                  <span className="text-sm text-primary/80 mb-1">Eleusis, Greece</span>
                  <p className="text-sm text-muted-foreground">Ancient Greek mystery rites dedicated to Demeter and Persephone</p>
                </div>
              </li>
              <li className="group transition-all">
                <div className="flex flex-col border-l-2 border-accent/20 pl-4 group-hover:border-accent/60 transition-all">
                  <span className="font-semibold group-hover:text-accent transition-colors">The School of Alexandria</span>
                  <span className="text-sm text-primary/80 mb-1">Alexandria, Egypt</span>
                  <p className="text-sm text-muted-foreground">Center of Neoplatonic and Hermetic studies in late antiquity</p>
                </div>
              </li>
              <li className="group transition-all">
                <div className="flex flex-col border-l-2 border-accent/20 pl-4 group-hover:border-accent/60 transition-all">
                  <span className="font-semibold group-hover:text-accent transition-colors">The Pythagorean School</span>
                  <span className="text-sm text-primary/80 mb-1">Croton, Italy</span>
                  <p className="text-sm text-muted-foreground">Ancient philosophical school studying sacred mathematics and music</p>
                </div>
              </li>
              <li className="group transition-all">
                <div className="flex flex-col border-l-2 border-accent/20 pl-4 group-hover:border-accent/60 transition-all">
                  <span className="font-semibold group-hover:text-accent transition-colors">The Order of the Golden Dawn</span>
                  <span className="text-sm text-primary/80 mb-1">London, England</span>
                  <p className="text-sm text-muted-foreground">Influential 19th century magical order blending multiple traditions</p>
                </div>
              </li>
              <li className="group transition-all">
                <div className="flex flex-col border-l-2 border-accent/20 pl-4 group-hover:border-accent/60 transition-all">
                  <span className="font-semibold group-hover:text-accent transition-colors">The House of Wisdom</span>
                  <span className="text-sm text-primary/80 mb-1">Baghdad, Iraq</span>
                  <p className="text-sm text-muted-foreground">Medieval center for translation and advancement of esoteric knowledge</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 