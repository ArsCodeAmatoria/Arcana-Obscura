'use client';

import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from 'react-simple-maps';
import { Card, CardContent } from '@/components/ui/card';

// Path to world map topology
const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

// Esoteric sites data
const esotericSites = [
  {
    id: 1,
    name: "Great Pyramid of Giza",
    location: "Egypt",
    description: "Ancient initiation site and repository of hermetic knowledge",
    coordinates: [31.1342, 29.9792],
    type: "sacred-site",
  },
  {
    id: 2,
    name: "Temple of Apollo at Delphi",
    location: "Greece",
    description: "Home of the Oracle and center of Greek mystery traditions",
    coordinates: [22.5011, 38.4824],
    type: "sacred-site",
  },
  {
    id: 3,
    name: "Rosslyn Chapel",
    location: "Scotland",
    description: "Medieval chapel with Templar and Masonic symbolism",
    coordinates: [-3.1583, 55.8555],
    type: "sacred-site",
  },
  {
    id: 4,
    name: "The Eleusinian Mysteries",
    location: "Eleusis, Greece",
    description: "Ancient Greek mystery rites dedicated to Demeter and Persephone",
    coordinates: [23.5415, 38.0431],
    type: "mystery-school",
  },
  {
    id: 5,
    name: "School of Alexandria",
    location: "Alexandria, Egypt",
    description: "Center of Neoplatonic and Hermetic studies in late antiquity",
    coordinates: [29.9187, 31.2001],
    type: "mystery-school",
  },
  {
    id: 6,
    name: "Chartres Cathedral",
    location: "France",
    description: "Gothic masterpiece embodying sacred geometry principles",
    coordinates: [1.4877, 48.4481],
    type: "sacred-site",
  },
  {
    id: 7,
    name: "Temple of Karnak",
    location: "Egypt",
    description: "Ancient Egyptian temple complex of immense spiritual significance",
    coordinates: [32.6578, 25.7188],
    type: "sacred-site",
  },
  {
    id: 8,
    name: "Pythagorean School",
    location: "Croton, Italy",
    description: "Ancient philosophical school studying sacred mathematics and music",
    coordinates: [17.1261, 39.0811],
    type: "mystery-school",
  },
  {
    id: 9,
    name: "Order of the Golden Dawn",
    location: "London, England",
    description: "Influential 19th century magical order blending multiple traditions",
    coordinates: [-0.1278, 51.5074],
    type: "mystery-school",
  },
  {
    id: 10,
    name: "House of Wisdom",
    location: "Baghdad, Iraq",
    description: "Medieval center for translation and advancement of esoteric knowledge",
    coordinates: [44.3661, 33.3152],
    type: "mystery-school",
  },
  {
    id: 11,
    name: "Mount Kailash",
    location: "Tibet",
    description: "Sacred mountain considered the spiritual center of the universe in several traditions",
    coordinates: [81.3131, 31.0672],
    type: "sacred-site",
  },
  {
    id: 12,
    name: "Newgrange",
    location: "Ireland",
    description: "Ancient passage tomb aligned with the winter solstice sunrise",
    coordinates: [-6.4755, 53.6947],
    type: "sacred-site",
  },
  {
    id: 13,
    name: "Kyoto Temple Gardens",
    location: "Japan",
    description: "Zen Buddhist temples with sacred geometry in their garden designs",
    coordinates: [135.7681, 35.0116],
    type: "sacred-site",
  },
  {
    id: 14,
    name: "Mystery School of Pythagoras",
    location: "Samos, Greece",
    description: "Birthplace of Pythagoras and his first mystery school",
    coordinates: [26.9767, 37.7542],
    type: "mystery-school",
  },
  {
    id: 15,
    name: "Machu Picchu",
    location: "Peru",
    description: "Ancient Incan city with astronomical alignments and sacred geometry",
    coordinates: [-72.5450, -13.1631],
    type: "sacred-site",
  }
];

// Custom marker renderer
const MarkerIcon = ({ type }: { type: string }) => {
  if (type === 'sacred-site') {
    return (
      <g>
        <path 
          d="M0,-8 L7,4 L0,1 L-7,4 Z" 
          fill="hsl(var(--accent))" 
          stroke="hsl(var(--foreground))" 
          strokeWidth={0.5} 
        />
        <circle 
          r={1.5} 
          cy={-2} 
          fill="hsl(var(--foreground))" 
        />
      </g>
    );
  } else {
    return (
      <g>
        <circle 
          r={5} 
          fill="none" 
          stroke="hsl(var(--primary))" 
          strokeWidth={1.5} 
        />
        <circle 
          r={1.5} 
          fill="hsl(var(--primary))" 
        />
        <path 
          d="M0,-5 L0,5 M-5,0 L5,0" 
          stroke="hsl(var(--primary))" 
          strokeWidth={0.8} 
        />
      </g>
    );
  }
};

export default function EsotericMap() {
  const [selectedSite, setSelectedSite] = useState<any>(null);
  const [position, setPosition] = useState({ coordinates: [0, 20], zoom: 1 });

  const handleMarkerClick = (site: any) => {
    setSelectedSite(site);
  };

  const handleZoom = (zoom: number) => {
    setPosition(pos => ({ ...pos, zoom }));
  };

  const handleMoveEnd = (position: any) => {
    setPosition(position);
  };

  return (
    <div className="relative h-[70vh] border border-accent/10 rounded-lg overflow-hidden">
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

      <div className="absolute top-4 left-4 z-20 backdrop-blur-md bg-card/30 p-3 rounded-lg border border-border/30">
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center">
            <div className="flex items-center justify-center mr-2 w-6 h-6">
              <svg viewBox="0 0 16 16" width="16" height="16">
                <path d="M0,-8 L7,4 L0,1 L-7,4 Z" transform="translate(8, 8)" fill="hsl(var(--accent))" stroke="hsl(var(--foreground))" strokeWidth={0.5} />
              </svg>
            </div>
            <span className="text-foreground/80">Sacred Sites</span>
          </div>
          <div className="flex items-center">
            <div className="flex items-center justify-center mr-2 w-6 h-6">
              <svg viewBox="0 0 16 16" width="16" height="16">
                <circle cx="8" cy="8" r="5" fill="none" stroke="hsl(var(--primary))" strokeWidth={1.5} />
                <circle cx="8" cy="8" r="1.5" fill="hsl(var(--primary))" />
              </svg>
            </div>
            <span className="text-foreground/80">Mystery Schools</span>
          </div>
        </div>
      </div>
      
      <ComposableMap
        projectionConfig={{ 
          scale: 180,
          rotate: [-10, 0, 0] 
        }}
        width={800}
        height={400}
        style={{ width: "100%", height: "100%" }}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates as [number, number]}
          onMoveEnd={handleMoveEnd}
          maxZoom={5}
        >
          {/* Background with stars */}
          <rect x="-1000" y="-1000" width="2000" height="2000" fill="#0f0e1a" />
          
          {/* Map grid lines */}
          <g>
            {Array.from({ length: 18 }).map((_, i) => (
              <path
                key={`lat-${i}`}
                d={`M-180,${-90 + i * 10} L180,${-90 + i * 10}`}
                stroke="hsl(var(--accent)/0.07)"
                strokeWidth={0.3}
                strokeDasharray="2 4"
              />
            ))}
            {Array.from({ length: 37 }).map((_, i) => (
              <path
                key={`lon-${i}`}
                d={`M${-180 + i * 10},-90 L${-180 + i * 10},90`}
                stroke="hsl(var(--accent)/0.07)"
                strokeWidth={0.3}
                strokeDasharray="2 4"
              />
            ))}
          </g>
          
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#1f1d2e"
                  stroke="hsl(var(--primary)/0.2)"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#2a2840", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
          
          {/* Ley lines connecting some of the sacred sites */}
          <g stroke="hsl(var(--accent)/0.2)" strokeWidth={0.5} strokeDasharray="2 3">
            <path d={`M${esotericSites[0].coordinates[0]},${esotericSites[0].coordinates[1]} L${esotericSites[6].coordinates[0]},${esotericSites[6].coordinates[1]}`} />
            <path d={`M${esotericSites[0].coordinates[0]},${esotericSites[0].coordinates[1]} L${esotericSites[1].coordinates[0]},${esotericSites[1].coordinates[1]}`} />
            <path d={`M${esotericSites[1].coordinates[0]},${esotericSites[1].coordinates[1]} L${esotericSites[3].coordinates[0]},${esotericSites[3].coordinates[1]}`} />
            <path d={`M${esotericSites[9].coordinates[0]},${esotericSites[9].coordinates[1]} L${esotericSites[8].coordinates[0]},${esotericSites[8].coordinates[1]}`} />
            <path d={`M${esotericSites[8].coordinates[0]},${esotericSites[8].coordinates[1]} L${esotericSites[5].coordinates[0]},${esotericSites[5].coordinates[1]}`} />
            <path d={`M${esotericSites[5].coordinates[0]},${esotericSites[5].coordinates[1]} L${esotericSites[2].coordinates[0]},${esotericSites[2].coordinates[1]}`} />
            <path d={`M${esotericSites[7].coordinates[0]},${esotericSites[7].coordinates[1]} L${esotericSites[13].coordinates[0]},${esotericSites[13].coordinates[1]}`} />
            <path d={`M${esotericSites[10].coordinates[0]},${esotericSites[10].coordinates[1]} L${esotericSites[12].coordinates[0]},${esotericSites[12].coordinates[1]}`} />
          </g>
          
          {esotericSites.map((site) => (
            <Marker 
              key={site.id} 
              coordinates={[site.coordinates[0], site.coordinates[1]]} 
              onClick={() => handleMarkerClick(site)}
            >
              <g
                style={{ cursor: 'pointer' }}
                className="animate-pulse"
              >
                <MarkerIcon type={site.type} />
              </g>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
      
      <div className="absolute bottom-4 right-4 z-20 flex gap-2">
        <button
          className="bg-card/60 backdrop-blur-sm text-foreground p-2 rounded-full border border-border/30 hover:bg-card transition-colors w-8 h-8 flex items-center justify-center"
          onClick={() => handleZoom(Math.max(1, position.zoom - 0.5))}
          aria-label="Zoom out"
        >
          −
        </button>
        <button
          className="bg-card/60 backdrop-blur-sm text-foreground p-2 rounded-full border border-border/30 hover:bg-card transition-colors w-8 h-8 flex items-center justify-center"
          onClick={() => handleZoom(Math.min(5, position.zoom + 0.5))}
          aria-label="Zoom in"
        >
          +
        </button>
      </div>
      
      {selectedSite && (
        <Card className="absolute bottom-4 left-4 z-20 max-w-xs bg-card/80 backdrop-blur-md border-accent/10">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="mr-2">
                <MarkerIcon type={selectedSite.type} />
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