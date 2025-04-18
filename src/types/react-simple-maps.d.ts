declare module 'react-simple-maps' {
  import React from 'react';

  interface GeographyProps {
    geography: any;
    [key: string]: any;
  }

  interface GeographiesProps {
    geography: string;
    children: (props: { geographies: any[] }) => React.ReactNode;
    [key: string]: any;
  }

  interface ComposableMapProps {
    projectionConfig?: {
      scale?: number;
      center?: [number, number];
      [key: string]: any;
    };
    width?: number;
    height?: number;
    [key: string]: any;
  }

  interface ZoomableGroupProps {
    center?: [number, number];
    zoom?: number;
    onMoveEnd?: (position: { coordinates: [number, number]; zoom: number }) => void;
    [key: string]: any;
  }

  interface MarkerProps {
    coordinates: [number, number];
    onClick?: (event: React.MouseEvent) => void;
    [key: string]: any;
  }

  export const ComposableMap: React.FC<ComposableMapProps>;
  export const Geographies: React.FC<GeographiesProps>;
  export const Geography: React.FC<GeographyProps>;
  export const ZoomableGroup: React.FC<ZoomableGroupProps>;
  export const Marker: React.FC<MarkerProps>;
} 