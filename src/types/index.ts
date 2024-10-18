export interface SearchAddress {
  type: string;
  properties: Properties;
  geometry: Geometry;
}

export interface Properties {
  searchedItem?: string;
  province?: string;
  district?: string;
  municipality?: string;
  ward?: string;
  distance?: number;
  center?: boolean;
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface ReverseGeocoding {
  generalName: string;
  roadName: string;
  place: string;
  municipality: string;
  placeimage: Placeimage;
  businessimage: Businessimage;
  ward: string;
  district: string;
  province: string;
  pois: Pois;
}

export interface Placeimage {}

export interface Businessimage {}

export interface Pois {
  searchid: string;
  location: string;
  fclass: string;
}
