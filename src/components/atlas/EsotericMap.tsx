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
    symbol: "🔺"
  },
  {
    id: 2,
    name: "Temple of Apollo at Delphi",
    location: "Greece",
    description: "Home of the Oracle and center of Greek mystery traditions",
    coordinates: [22.5011, 38.4824],
    type: "sacred-site",
    symbol: "🏛️"
  },
  {
    id: 3,
    name: "Rosslyn Chapel",
    location: "Scotland",
    description: "Medieval chapel with Templar and Masonic symbolism",
    coordinates: [-3.1583, 55.8555],
    type: "sacred-site",
    symbol: "⛪"
  },
  {
    id: 4,
    name: "The Eleusinian Mysteries",
    location: "Eleusis, Greece",
    description: "Ancient Greek mystery rites dedicated to Demeter and Persephone",
    coordinates: [23.5415, 38.0431],
    type: "mystery-school",
    symbol: "🌾"
  },
  {
    id: 5,
    name: "School of Alexandria",
    location: "Alexandria, Egypt",
    description: "Center of Neoplatonic and Hermetic studies in late antiquity",
    coordinates: [29.9187, 31.2001],
    type: "mystery-school",
    symbol: "📚"
  },
  {
    id: 6,
    name: "Chartres Cathedral",
    location: "France",
    description: "Gothic masterpiece embodying sacred geometry principles",
    coordinates: [1.4877, 48.4481],
    type: "sacred-site",
    symbol: "🔷"
  },
  {
    id: 7,
    name: "Temple of Karnak",
    location: "Egypt",
    description: "Ancient Egyptian temple complex of immense spiritual significance",
    coordinates: [32.6578, 25.7188],
    type: "sacred-site",
    symbol: "🏯"
  },
  {
    id: 8,
    name: "Pythagorean School",
    location: "Croton, Italy",
    description: "Ancient philosophical school studying sacred mathematics and music",
    coordinates: [17.1261, 39.0811],
    type: "mystery-school",
    symbol: "🔢"
  },
  {
    id: 9,
    name: "Order of the Golden Dawn",
    location: "London, England",
    description: "Influential 19th century magical order blending multiple traditions",
    coordinates: [-0.1278, 51.5074],
    type: "mystery-school",
    symbol: "✨"
  },
  {
    id: 10,
    name: "House of Wisdom",
    location: "Baghdad, Iraq",
    description: "Medieval center for translation and advancement of esoteric knowledge",
    coordinates: [44.3661, 33.3152],
    type: "mystery-school",
    symbol: "📖"
  }
];

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
    <div className="relative h-[60vh]">
      <div className="absolute top-0 left-0 z-10 p-4">
        <div className="flex gap-4 text-sm">
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 rounded-full bg-primary mr-2"></span>
            <span>Sacred Sites</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 rounded-full bg-accent mr-2"></span>
            <span>Mystery Schools</span>
          </div>
        </div>
      </div>
      
      <ComposableMap
        projectionConfig={{ scale: 180 }}
        width={800}
        height={400}
        style={{ width: "100%", height: "100%" }}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates as [number, number]}
          onMoveEnd={handleMoveEnd}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#1e1b2d"
                  stroke="#2a2559"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#2a2559", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
          
          {esotericSites.map((site) => (
            <Marker 
              key={site.id} 
              coordinates={[site.coordinates[0], site.coordinates[1]]} 
              onClick={() => handleMarkerClick(site)}
            >
              <g
                transform="translate(-12, -24)"
                style={{ cursor: 'pointer' }}
              >
                <circle
                  r={6}
                  fill={site.type === 'sacred-site' ? "hsl(var(--primary))" : "hsl(var(--accent))"}
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  opacity={0.8}
                />
                <text
                  textAnchor="middle"
                  y={-10}
                  style={{ fontFamily: "Arial", fill: "#FFFFFF", fontSize: 14 }}
                >
                  {site.symbol}
                </text>
              </g>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
      
      <div className="absolute bottom-4 right-4 z-10 flex gap-2">
        <button
          className="bg-card text-foreground p-2 rounded-full"
          onClick={() => handleZoom(Math.max(1, position.zoom - 0.5))}
        >
          −
        </button>
        <button
          className="bg-card text-foreground p-2 rounded-full"
          onClick={() => handleZoom(Math.min(4, position.zoom + 0.5))}
        >
          +
        </button>
      </div>
      
      {selectedSite && (
        <Card className="absolute bottom-14 left-4 z-10 max-w-xs">
          <CardContent className="p-4">
            <div className="text-xl mb-1">{selectedSite.symbol}</div>
            <h3 className="font-semibold text-lg">{selectedSite.name}</h3>
            <p className="text-sm text-muted-foreground mb-1">{selectedSite.location}</p>
            <p className="text-sm">{selectedSite.description}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 