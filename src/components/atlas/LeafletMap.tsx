'use client';

import { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';

type SiteType = {
  id: number;
  name: string;
  location: string;
  description: string;
  coordinates: [number, number]; // [lat, lng]
  type: 'sacred-site' | 'mystery-school';
};

type LeafletMapProps = {
  sites: SiteType[];
  center: [number, number];
  zoom: number;
  onMarkerClick: (site: SiteType) => void;
};

export default function LeafletMap({ sites, center, zoom, onMarkerClick }: LeafletMapProps) {
  const [isClient, setIsClient] = useState(false);
  
  // Initialize client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Custom marker icons
  const createSacredIcon = () => {
    return new L.DivIcon({
      className: 'custom-div-icon sacred-site-icon',
      html: `<div class="marker-pin sacred-site">
              <div class="pulse-element"></div>
             </div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });
  };

  const createMysteryIcon = () => {
    return new L.DivIcon({
      className: 'custom-div-icon mystery-school-icon',
      html: `<div class="marker-pin mystery-school">
              <div class="pulse-element"></div>
             </div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });
  };

  // Only render the map on the client side
  if (!isClient) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-[#0f0e1a]">
        <div className="text-accent animate-pulse font-esoterica text-lg">Loading Esoteric Atlas...</div>
      </div>
    );
  }

  return (
    <>
      <style jsx global>{`
        .leaflet-container {
          height: 100%;
          width: 100%;
          background-color: #0f0e1a;
          font-family: var(--font-geist-sans);
          z-index: 1;
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
        .leaflet-popup-content-wrapper, .leaflet-popup-tip {
          background-color: rgba(15, 14, 26, 0.9);
          backdrop-filter: blur(10px);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .leaflet-popup-content {
          margin: 12px;
          line-height: 1.5;
        }
        .leaflet-container a {
          color: hsl(45, 100%, 60%);
        }
        .leaflet-control-attribution {
          background: rgba(15, 14, 26, 0.7) !important;
          backdrop-filter: blur(5px);
          color: rgba(255, 255, 255, 0.5);
          font-size: 9px;
        }
        .leaflet-control-attribution a {
          color: rgba(255, 255, 255, 0.7);
        }
        .leaflet-bar a {
          background-color: rgba(15, 14, 26, 0.8);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .leaflet-bar a:hover {
          background-color: rgba(30, 28, 52, 0.9);
        }
        .leaflet-touch .leaflet-bar {
          border: none;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      <MapContainer 
        center={center} 
        zoom={zoom} 
        zoomControl={false}
        attributionControl={true}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
          subdomains="abcd"
          maxZoom={19}
        />
        <ZoomControl position="bottomright" />
        
        {sites.map((site) => (
          <Marker 
            key={site.id} 
            position={site.coordinates}
            icon={site.type === 'sacred-site' ? createSacredIcon() : createMysteryIcon()}
            eventHandlers={{
              click: () => onMarkerClick(site),
            }}
          >
            <Popup>
              <div className="text-sm">
                <h3 className="font-esoterica text-base text-accent">{site.name}</h3>
                <p className="text-xs text-muted-foreground mb-1 border-l-2 border-primary/30 pl-2 mt-1">{site.location}</p>
                <p className="text-xs">{site.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
} 