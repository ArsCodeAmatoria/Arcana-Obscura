'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Define the site type
type SiteType = {
  id: number;
  name: string;
  location: string;
  description: string;
  coordinates: [number, number]; // [lat, lng]
  type: 'sacred-site' | 'mystery-school';
};

// Dynamically import the Map component to avoid SSR issues
const MapWithNoSSR = dynamic(() => import('@/components/atlas/LeafletMap'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full bg-[#0f0e1a]">
      <div className="text-accent animate-pulse font-esoterica text-lg">Loading Esoteric Atlas...</div>
    </div>
  )
});

// Esoteric sites data
const esotericSites: SiteType[] = [
  {
    id: 1,
    name: "Great Pyramid of Giza",
    location: "Egypt",
    description: "Ancient initiation site and repository of hermetic knowledge",
    coordinates: [29.9792, 31.1342], // [lat, lng]
    type: "sacred-site",
  },
  {
    id: 2,
    name: "Temple of Apollo at Delphi",
    location: "Greece",
    description: "Home of the Oracle and center of Greek mystery traditions",
    coordinates: [38.4824, 22.5011],
    type: "sacred-site",
  },
  {
    id: 3,
    name: "Rosslyn Chapel",
    location: "Scotland",
    description: "Medieval chapel with Templar and Masonic symbolism",
    coordinates: [55.8555, -3.1583],
    type: "sacred-site",
  },
  {
    id: 4,
    name: "The Eleusinian Mysteries",
    location: "Eleusis, Greece",
    description: "Ancient Greek mystery rites dedicated to Demeter and Persephone",
    coordinates: [38.0431, 23.5415],
    type: "mystery-school",
  },
  {
    id: 5,
    name: "School of Alexandria",
    location: "Alexandria, Egypt",
    description: "Center of Neoplatonic and Hermetic studies in late antiquity",
    coordinates: [31.2001, 29.9187],
    type: "mystery-school",
  },
  {
    id: 6,
    name: "Chartres Cathedral",
    location: "France",
    description: "Gothic masterpiece embodying sacred geometry principles",
    coordinates: [48.4481, 1.4877],
    type: "sacred-site",
  },
  {
    id: 7,
    name: "Temple of Karnak",
    location: "Egypt",
    description: "Ancient Egyptian temple complex of immense spiritual significance",
    coordinates: [25.7188, 32.6578],
    type: "sacred-site",
  },
  {
    id: 8,
    name: "Pythagorean School",
    location: "Croton, Italy",
    description: "Ancient philosophical school studying sacred mathematics and music",
    coordinates: [39.0811, 17.1261],
    type: "mystery-school",
  },
  {
    id: 9,
    name: "Order of the Golden Dawn",
    location: "London, England",
    description: "Influential 19th century magical order blending multiple traditions",
    coordinates: [51.5074, -0.1278],
    type: "mystery-school",
  },
  {
    id: 10,
    name: "House of Wisdom",
    location: "Baghdad, Iraq",
    description: "Medieval center for translation and advancement of esoteric knowledge",
    coordinates: [33.3152, 44.3661],
    type: "mystery-school",
  },
  {
    id: 11,
    name: "Mount Kailash",
    location: "Tibet",
    description: "Sacred mountain considered the spiritual center of the universe in several traditions",
    coordinates: [31.0672, 81.3131],
    type: "sacred-site",
  },
  {
    id: 12,
    name: "Newgrange",
    location: "Ireland",
    description: "Ancient passage tomb aligned with the winter solstice sunrise",
    coordinates: [53.6947, -6.4755],
    type: "sacred-site",
  },
  {
    id: 13,
    name: "Kyoto Temple Gardens",
    location: "Japan",
    description: "Zen Buddhist temples with sacred geometry in their garden designs",
    coordinates: [35.0116, 135.7681],
    type: "sacred-site",
  },
  {
    id: 14,
    name: "Mystery School of Pythagoras",
    location: "Samos, Greece",
    description: "Birthplace of Pythagoras and his first mystery school",
    coordinates: [37.7542, 26.9767],
    type: "mystery-school",
  },
  {
    id: 15,
    name: "Machu Picchu",
    location: "Peru",
    description: "Ancient Incan city with astronomical alignments and sacred geometry",
    coordinates: [-13.1631, -72.5450],
    type: "sacred-site",
  }
];

export default function EsotericMap() {
  const [selectedSite, setSelectedSite] = useState<SiteType | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([30, 20]); // Default center
  const [mapZoom, setMapZoom] = useState(2); // Default zoom

  const handleMarkerClick = (site: SiteType) => {
    setSelectedSite(site);
    setMapCenter(site.coordinates);
  };

  return (
    <div className="relative h-[70vh] border border-accent/10 rounded-lg overflow-hidden shadow-inner shadow-black/20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        <div className="absolute top-0 left-0 w-20 h-20 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="50" cy="50" r="45" stroke="hsl(var(--accent))" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="30" stroke="hsl(var(--accent))" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="15" stroke="hsl(var(--accent))" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-28 h-28 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M20 20 L80 80" stroke="hsl(var(--accent))" strokeWidth="0.5" />
            <path d="M20 80 L80 20" stroke="hsl(var(--accent))" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="30" stroke="hsl(var(--accent))" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      <div className="absolute top-4 left-4 z-20 backdrop-blur-md bg-card/50 p-3 rounded-lg border border-border/30 shadow-lg shadow-black/10">
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center">
            <div className="flex items-center justify-center mr-2 w-6 h-6">
              <div className="w-4 h-4 bg-amber-400 rounded-sm"></div>
            </div>
            <span className="text-foreground/80">Sacred Sites</span>
          </div>
          <div className="flex items-center">
            <div className="flex items-center justify-center mr-2 w-6 h-6">
              <div className="w-4 h-4 rounded-full border-2 border-purple-500"></div>
            </div>
            <span className="text-foreground/80">Mystery Schools</span>
          </div>
        </div>
      </div>

      <div className="w-full h-full">
        <MapWithNoSSR 
          sites={esotericSites} 
          center={mapCenter} 
          zoom={mapZoom} 
          onMarkerClick={handleMarkerClick} 
        />
      </div>
      
      {selectedSite && (
        <Card className="absolute bottom-4 left-4 z-20 max-w-xs bg-card/90 backdrop-blur-md border-accent/30 shadow-lg shadow-black/20">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  {selectedSite.type === 'sacred-site' ? (
                    <path 
                      d="M12,4 L19,16 L12,13 L5,16 Z" 
                      fill="hsl(45 100% 60%)" 
                      stroke="hsl(0 0% 95%)" 
                      strokeWidth={0.5}
                    />
                  ) : (
                    <>
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
                    </>
                  )}
                </svg>
              </div>
              <h3 className="font-esoterica text-lg text-accent">{selectedSite.name}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-2 border-l-2 border-primary/30 pl-2">{selectedSite.location}</p>
            <p className="text-sm text-foreground/90">{selectedSite.description}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 