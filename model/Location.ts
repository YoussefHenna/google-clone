export interface Location {
  key: string;
  geometry: Geometry;
}

interface Geometry {
  location: LatLng;
  bounds: Bounds;
}

interface LatLng {
  latitude: number;
  longitude: number;
}

interface Bounds {
  northeast: LatLng;
  southwest: LatLng;
}
