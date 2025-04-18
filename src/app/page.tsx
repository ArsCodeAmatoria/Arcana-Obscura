'use client';

import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Eye, BookOpen } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamic import for the Three.js component to avoid SSR issues
const CosmicAnimation = dynamic(() => import('@/components/home/CosmicAnimation'), {
  ssr: false,
  loading: () => <div className="w-full h-[40vh] bg-background flex items-center justify-center">
    <div className="text-accent animate-pulse font-esoterica">Manifesting...</div>
  </div>
});

export default function HomePage() {
  return (
    <MainLayout>
      <section className="relative w-full h-[40vh] overflow-hidden">
        <CosmicAnimation />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-esoterica text-center bg-background/30 backdrop-blur-sm p-6 rounded-lg text-accent">
            The Living Grimoire
          </h1>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground italic">
              "The lips of wisdom are closed, except to the ears of Understanding."
            </p>
            <p className="text-sm text-muted-foreground">— The Kybalion</p>
          </div>

          <p className="text-lg">
            Welcome, seeker of hidden knowledge. <span className="text-accent">Arcana Obscura</span> is a digital repository 
            dedicated to preserving and illuminating the esoteric wisdom traditions that have guided initiates 
            throughout the ages.
          </p>

          <p className="text-lg">
            From the hermetic principles of ancient Egypt to the mystical teachings of Kabbalah, 
            from Rosicrucian enlightenment to Masonic symbolism, these traditions share a common 
            thread of profound insight into the nature of reality and consciousness.
          </p>

          <p className="text-lg">
            As above, so below. As within, so without. The universe is mental; all is mind.
            Through symbols, allegories, and rituals, these ancient schools preserved wisdom
            that transcends time and culture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" className="mystical-glow" asChild>
              <Link href="/pillars" className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Explore the Pillars of Mystery
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" asChild>
              <Link href="/library" className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Enter the Secret Library
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
