'use client';

import MainLayout from '@/components/layout/MainLayout';
import { Compass, Sparkles, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';

// Use client-side component for the quote generator
const OracleGenerator = dynamic(() => import('@/components/oracle/OracleGenerator'), {
  ssr: false
});

export default function OraclePage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <Compass className="w-16 h-16 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-esoterica mb-4 text-accent">Daily Oracle</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seek wisdom from the ancient texts. The oracle reveals timeless guidance
            from hermetic, kabbalistic, and mystical traditions.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <OracleGenerator />
        </div>
      </div>
    </MainLayout>
  );
} 