'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Next.js
const fixLeafletIcons = () => {
  // Only run on client side
  if (typeof window !== 'undefined') {
    // @ts-ignore
    delete L.Icon.Default.prototype._getIconUrl;
    
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }
};

// Custom zoom controls component
function MapControls({ position }: { position: L.LatLngExpression }) {
  const map = useMap();
  
  useEffect(() => {
    map.setView(position, map.getZoom());
  }, [position, map]);
  
  return null;
}

// Esoteric sites data
const esotericSites = [
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

// Create custom icons
const createCustomIcon = (type: string) => {
  return new L.DivIcon({
    className: `custom-div-icon ${type}`,
    html: type === 'sacred-site' 
      ? `<div class="marker-pin sacred-site">
          <div class="pulse-element"></div>
         </div>`
      : `<div class="marker-pin mystery-school">
          <div class="pulse-element"></div>
         </div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15]
  });
};

export default function EsotericMap() {
  const [selectedSite, setSelectedSite] = useState<any>(null);
  const [mapCenter, setMapCenter] = useState([30, 20]); // Default center
  const [mapZoom, setMapZoom] = useState(2); // Default zoom
  
  // Initialize leaflet icons
  useEffect(() => {
    fixLeafletIcons();
  }, []);

  const handleMarkerClick = (site: any) => {
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

      <style jsx global>{`
        .leaflet-container {
          height: 100%;
          width: 100%;
          background-color: #0f0e1a;
        }
        .marker-pin {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .marker-pin.sacred-site {
          background-color: hsl(45, 100%, 60%);
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }
        .marker-pin.mystery-school {
          background-color: transparent;
          border: 2px solid hsl(264, 76%, 55%);
          border-radius: 50%;
        }
        .pulse-element {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: inherit;
          animation: pulse 1.5s ease-out infinite;
          opacity: 0.5;
        }
        .sacred-site .pulse-element {
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          background-color: hsl(45, 100%, 60%);
        }
        .mystery-school .pulse-element {
          border-radius: 50%;
          border: 2px solid hsl(264, 76%, 55%);
        }
        @keyframes pulse {
          0% {
            transform: scale(0.95);
            opacity: 0.7;
          }
          70% {
            transform: scale(1.1);
            opacity: 0.3;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.7;
          }
        }
        .custom-popup .leaflet-popup-content-wrapper {
          background-color: rgba(15, 14, 26, 0.9);
          backdrop-filter: blur(10px);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-popup .leaflet-popup-tip {
          background-color: rgba(15, 14, 26, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>

      <MapContainer 
        center={mapCenter as L.LatLngExpression} 
        zoom={mapZoom} 
        zoomControl={false}
        className="z-0"
        attributionControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <MapControls position={mapCenter as L.LatLngExpression} />
        <ZoomControl position="bottomright" />
        
        {esotericSites.map((site) => (
          <Marker 
            key={site.id} 
            position={site.coordinates as L.LatLngExpression}
            icon={createCustomIcon(site.type)}
            eventHandlers={{
              click: () => handleMarkerClick(site),
            }}
          >
            <Popup className="custom-popup">
              <div className="text-sm">
                <h3 className="font-esoterica text-base text-accent">{site.name}</h3>
                <p className="text-xs text-muted-foreground mb-1 border-l-2 border-primary/30 pl-2 mt-1">{site.location}</p>
                <p className="text-xs">{site.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
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