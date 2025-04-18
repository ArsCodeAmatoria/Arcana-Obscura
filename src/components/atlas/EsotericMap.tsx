'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

// Esoteric sites data
const esotericSites = [
  {
    id: 1,
    name: "Great Pyramid of Giza",
    location: "Egypt",
    description: "Ancient initiation site and repository of hermetic knowledge",
    coordinates: [31.1342, 29.9792],
    position: { x: 565, y: 190 },
    type: "sacred-site",
  },
  {
    id: 2,
    name: "Temple of Apollo at Delphi",
    location: "Greece",
    description: "Home of the Oracle and center of Greek mystery traditions",
    coordinates: [22.5011, 38.4824],
    position: { x: 535, y: 175 },
    type: "sacred-site",
  },
  {
    id: 3,
    name: "Rosslyn Chapel",
    location: "Scotland",
    description: "Medieval chapel with Templar and Masonic symbolism",
    coordinates: [-3.1583, 55.8555],
    position: { x: 480, y: 140 },
    type: "sacred-site",
  },
  {
    id: 4,
    name: "The Eleusinian Mysteries",
    location: "Eleusis, Greece",
    description: "Ancient Greek mystery rites dedicated to Demeter and Persephone",
    coordinates: [23.5415, 38.0431],
    position: { x: 540, y: 177 },
    type: "mystery-school",
  },
  {
    id: 5,
    name: "School of Alexandria",
    location: "Alexandria, Egypt",
    description: "Center of Neoplatonic and Hermetic studies in late antiquity",
    coordinates: [29.9187, 31.2001],
    position: { x: 560, y: 195 },
    type: "mystery-school",
  },
  {
    id: 6,
    name: "Chartres Cathedral",
    location: "France",
    description: "Gothic masterpiece embodying sacred geometry principles",
    coordinates: [1.4877, 48.4481],
    position: { x: 495, y: 155 },
    type: "sacred-site",
  },
  {
    id: 7,
    name: "Temple of Karnak",
    location: "Egypt",
    description: "Ancient Egyptian temple complex of immense spiritual significance",
    coordinates: [32.6578, 25.7188],
    position: { x: 570, y: 185 },
    type: "sacred-site",
  },
  {
    id: 8,
    name: "Pythagorean School",
    location: "Croton, Italy",
    description: "Ancient philosophical school studying sacred mathematics and music",
    coordinates: [17.1261, 39.0811],
    position: { x: 520, y: 180 },
    type: "mystery-school",
  },
  {
    id: 9,
    name: "Order of the Golden Dawn",
    location: "London, England",
    description: "Influential 19th century magical order blending multiple traditions",
    coordinates: [-0.1278, 51.5074],
    position: { x: 485, y: 145 },
    type: "mystery-school",
  },
  {
    id: 10,
    name: "House of Wisdom",
    location: "Baghdad, Iraq",
    description: "Medieval center for translation and advancement of esoteric knowledge",
    coordinates: [44.3661, 33.3152],
    position: { x: 595, y: 190 },
    type: "mystery-school",
  },
  {
    id: 11,
    name: "Mount Kailash",
    location: "Tibet",
    description: "Sacred mountain considered the spiritual center of the universe in several traditions",
    coordinates: [81.3131, 31.0672],
    position: { x: 685, y: 185 },
    type: "sacred-site",
  },
  {
    id: 12,
    name: "Newgrange",
    location: "Ireland",
    description: "Ancient passage tomb aligned with the winter solstice sunrise",
    coordinates: [-6.4755, 53.6947],
    position: { x: 465, y: 145 },
    type: "sacred-site",
  },
  {
    id: 13,
    name: "Kyoto Temple Gardens",
    location: "Japan",
    description: "Zen Buddhist temples with sacred geometry in their garden designs",
    coordinates: [135.7681, 35.0116],
    position: { x: 800, y: 170 },
    type: "sacred-site",
  },
  {
    id: 14,
    name: "Mystery School of Pythagoras",
    location: "Samos, Greece",
    description: "Birthplace of Pythagoras and his first mystery school",
    coordinates: [26.9767, 37.7542],
    position: { x: 545, y: 175 },
    type: "mystery-school",
  },
  {
    id: 15,
    name: "Machu Picchu",
    location: "Peru",
    description: "Ancient Incan city with astronomical alignments and sacred geometry",
    coordinates: [-72.5450, -13.1631],
    position: { x: 280, y: 300 },
    type: "sacred-site",
  }
];

// Custom marker component
const MarkerIcon = ({ type, x, y, onClick }: { type: string; x: number; y: number; onClick: () => void }) => {
  if (type === 'sacred-site') {
    return (
      <g transform={`translate(${x}, ${y})`} onClick={onClick} style={{ cursor: 'pointer' }} className="animate-pulse">
        <path 
          d="M0,-8 L7,4 L0,1 L-7,4 Z" 
          fill="hsl(45 100% 60%)" 
          stroke="hsl(0 0% 95%)" 
          strokeWidth={0.5} 
        />
        <circle 
          r={1.5} 
          cy={-2} 
          fill="hsl(0 0% 95%)" 
        />
      </g>
    );
  } else {
    return (
      <g transform={`translate(${x}, ${y})`} onClick={onClick} style={{ cursor: 'pointer' }} className="animate-pulse">
        <circle 
          r={5} 
          fill="none" 
          stroke="hsl(264 76% 55%)" 
          strokeWidth={1.5} 
        />
        <circle 
          r={1.5} 
          fill="hsl(264 76% 55%)" 
        />
        <path 
          d="M0,-5 L0,5 M-5,0 L5,0" 
          stroke="hsl(264 76% 55%)" 
          strokeWidth={0.8} 
        />
      </g>
    );
  }
};

// Lines connecting sacred sites - fixed indices to match array positions (0-indexed)
const leyLines = [
  { from: 0, to: 6 },  // Great Pyramid to Temple of Karnak
  { from: 0, to: 1 },  // Great Pyramid to Temple of Apollo
  { from: 1, to: 3 },  // Temple of Apollo to Eleusinian Mysteries
  { from: 4, to: 7 },  // School of Alexandria to Pythagorean School
  { from: 7, to: 5 },  // Pythagorean School to Chartres Cathedral
  { from: 5, to: 2 },  // Chartres Cathedral to Rosslyn Chapel
  { from: 6, to: 12 }, // Temple of Karnak to Kyoto Temple Gardens
  { from: 9, to: 11 }, // House of Wisdom to Newgrange
  { from: 2, to: 8 },  // Rosslyn Chapel to Order of the Golden Dawn
  { from: 10, to: 0 }, // Mount Kailash to Great Pyramid - connecting East and West
];

export default function EsotericMap() {
  const [selectedSite, setSelectedSite] = useState<any>(null);
  const [viewBox, setViewBox] = useState("0 0 1000 500");
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });

  const handleMarkerClick = (site: any) => {
    setSelectedSite(site);
  };

  const handleZoomIn = () => {
    if (scale < 3) {
      setScale(prevScale => prevScale + 0.2);
    }
  };

  const handleZoomOut = () => {
    if (scale > 0.5) {
      setScale(prevScale => prevScale - 0.2);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPoint({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const dx = (e.clientX - startPoint.x) / scale;
    const dy = (e.clientY - startPoint.y) / scale;
    
    setPosition(prev => ({ x: prev.x + dx, y: prev.y + dy }));
    setStartPoint({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Create grid lines
  const gridLines = [];
  for (let i = 0; i < 20; i++) {
    gridLines.push(
      <path 
        key={`lat-${i}`} 
        d={`M0,${i * 25} L1000,${i * 25}`} 
        stroke="hsl(45 100% 60% / 0.07)" 
        strokeWidth={0.3} 
        strokeDasharray="2 4" 
      />
    );
  }
  for (let i = 0; i < 40; i++) {
    gridLines.push(
      <path 
        key={`lon-${i}`} 
        d={`M${i * 25},0 L${i * 25},500`} 
        stroke="hsl(45 100% 60% / 0.07)" 
        strokeWidth={0.3} 
        strokeDasharray="2 4" 
      />
    );
  }

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
              <svg viewBox="0 0 16 16" width="16" height="16">
                <path d="M0,-8 L7,4 L0,1 L-7,4 Z" transform="translate(8, 8)" fill="hsl(45 100% 60%)" stroke="hsl(0 0% 95%)" strokeWidth={0.5} />
              </svg>
            </div>
            <span className="text-foreground/80">Sacred Sites</span>
          </div>
          <div className="flex items-center">
            <div className="flex items-center justify-center mr-2 w-6 h-6">
              <svg viewBox="0 0 16 16" width="16" height="16">
                <circle cx="8" cy="8" r="5" fill="none" stroke="hsl(264 76% 55%)" strokeWidth={1.5} />
                <circle cx="8" cy="8" r="1.5" fill="hsl(264 76% 55%)" />
              </svg>
            </div>
            <span className="text-foreground/80">Mystery Schools</span>
          </div>
        </div>
      </div>

      <div 
        className="w-full h-full overflow-hidden" 
        style={{ backgroundColor: "#0f0e1a" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <svg 
          width="100%" 
          height="100%" 
          viewBox={viewBox}
          style={{ 
            transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
            transformOrigin: 'center',
            transition: isDragging ? 'none' : 'transform 0.3s ease-out',
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
        >
          {/* Background glow effect */}
          <defs>
            <radialGradient id="mapGlow" cx="500" cy="250" r="400" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="hsl(264 76% 15% / 0.5)" />
              <stop offset="100%" stopColor="hsl(264 76% 5% / 0)" />
            </radialGradient>
          </defs>
          <circle cx="500" cy="250" r="400" fill="url(#mapGlow)" />

          {/* World Map Outline - Simplified vector of world continents */}
          <g fill="#1f1d2e" stroke="hsl(264 76% 55% / 0.3)" strokeWidth={0.5}>
            {/* Africa */}
            <path d="M500,170 L570,170 L590,260 L550,350 L480,350 L450,300 L460,220 Z" />
            {/* Europe */}
            <path d="M460,120 L560,120 L580,170 L500,170 L460,150 Z" />
            {/* Asia */}
            <path d="M560,120 L800,140 L840,190 L800,300 L700,350 L590,260 L570,170 L580,170 Z" />
            {/* North America */}
            <path d="M150,120 L300,130 L350,200 L300,260 L200,300 L150,250 Z" />
            {/* South America */}
            <path d="M300,260 L350,350 L300,400 L250,320 L280,290 Z" />
            {/* Australia */}
            <path d="M800,320 L870,320 L860,370 L780,380 Z" />
            {/* Antarctica */}
            <path d="M400,450 L600,450 L650,430 L350,430 Z" />
          </g>

          {/* Grid lines */}
          <g>
            {gridLines}
          </g>

          {/* Ley lines connecting sacred sites */}
          <g stroke="hsl(45 100% 60% / 0.3)" strokeWidth={0.5} strokeDasharray="2 3">
            {leyLines.map((line, index) => (
              <path 
                key={`ley-${index}`} 
                d={`M${esotericSites[line.from].position.x},${esotericSites[line.from].position.y} L${esotericSites[line.to].position.x},${esotericSites[line.to].position.y}`} 
              />
            ))}
          </g>

          {/* Markers for each site */}
          {esotericSites.map((site) => (
            <MarkerIcon 
              key={site.id} 
              type={site.type} 
              x={site.position.x} 
              y={site.position.y} 
              onClick={() => handleMarkerClick(site)} 
            />
          ))}
        </svg>
      </div>
      
      <div className="absolute bottom-4 right-4 z-20 flex gap-2">
        <button
          className="bg-card/60 backdrop-blur-sm text-foreground p-2 rounded-full border border-border/30 hover:bg-card transition-colors w-8 h-8 flex items-center justify-center shadow-lg shadow-black/10 hover:shadow-accent/5"
          onClick={handleZoomOut}
          aria-label="Zoom out"
        >
          −
        </button>
        <button
          className="bg-card/60 backdrop-blur-sm text-foreground p-2 rounded-full border border-border/30 hover:bg-card transition-colors w-8 h-8 flex items-center justify-center shadow-lg shadow-black/10 hover:shadow-accent/5"
          onClick={handleZoomIn}
          aria-label="Zoom in"
        >
          +
        </button>
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