'use client';

import MainLayout from '@/components/layout/MainLayout';
import dynamic from 'next/dynamic';

// Dynamically import the map component to avoid SSR issues
const EsotericMap = dynamic(() => import('@/components/atlas/EsotericMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[60vh] bg-background flex items-center justify-center">
      <div className="text-accent animate-pulse font-esoterica">Charting the celestial map...</div>
    </div>
  )
});

export default function AtlasPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">Esoteric Atlas</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the sacred sites and mystery schools of esoteric traditions around the world.
          </p>
        </div>

        <div className="mb-8 bg-card/50 p-4 rounded-lg border border-border">
          <EsotericMap />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h2 className="text-2xl font-esoterica mb-4 text-primary">Sacred Sites</h2>
            <ul className="space-y-3">
              <li>
                <span className="font-semibold">The Great Pyramid of Giza</span> - Egypt
                <p className="text-sm text-muted-foreground">Ancient initiation site and repository of hermetic knowledge</p>
              </li>
              <li>
                <span className="font-semibold">Temple of Apollo at Delphi</span> - Greece
                <p className="text-sm text-muted-foreground">Home of the Oracle and center of Greek mystery traditions</p>
              </li>
              <li>
                <span className="font-semibold">Rosslyn Chapel</span> - Scotland
                <p className="text-sm text-muted-foreground">Medieval chapel with Templar and Masonic symbolism</p>
              </li>
              <li>
                <span className="font-semibold">Chartres Cathedral</span> - France
                <p className="text-sm text-muted-foreground">Gothic masterpiece embodying sacred geometry principles</p>
              </li>
              <li>
                <span className="font-semibold">Temple of Karnak</span> - Egypt
                <p className="text-sm text-muted-foreground">Ancient Egyptian temple complex of immense spiritual significance</p>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-esoterica mb-4 text-primary">Mystery Schools</h2>
            <ul className="space-y-3">
              <li>
                <span className="font-semibold">The Eleusinian Mysteries</span> - Eleusis, Greece
                <p className="text-sm text-muted-foreground">Ancient Greek mystery rites dedicated to Demeter and Persephone</p>
              </li>
              <li>
                <span className="font-semibold">The School of Alexandria</span> - Alexandria, Egypt
                <p className="text-sm text-muted-foreground">Center of Neoplatonic and Hermetic studies in late antiquity</p>
              </li>
              <li>
                <span className="font-semibold">The Pythagorean School</span> - Croton, Italy
                <p className="text-sm text-muted-foreground">Ancient philosophical school studying sacred mathematics and music</p>
              </li>
              <li>
                <span className="font-semibold">The Order of the Golden Dawn</span> - London, England
                <p className="text-sm text-muted-foreground">Influential 19th century magical order blending multiple traditions</p>
              </li>
              <li>
                <span className="font-semibold">The House of Wisdom</span> - Baghdad, Iraq
                <p className="text-sm text-muted-foreground">Medieval center for translation and advancement of esoteric knowledge</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 