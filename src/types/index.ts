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

export interface GetAllCareerResponse {
  success: boolean;
  message: string;
  data: {
    careers: Career[];
    pagination: Pagination;
  };
}

export interface GetCareerResponse {
  success: boolean;
  message: string;
  data: {
    career: CareerDetail;
    similarCareer: Career[];
  };
}

export interface Career {
  id: number;
  title: string;
  role: string;
  meta: string;
  salary: string;
  short_description: string;
  organization: Organization;
  createdAt: string;
  expired_at: string;
  openings: number;
  score: number;
  type: string;
}

export interface CareerDetail {
  id: number;
  title: string;
  role: string;
  meta: string;
  salary: string;
  short_description: string;
  description: any;
  question: string;
  openings: number;
  organizationId: number;
  employeeId: number;
  createdAt: string;
  updatedAt: string;
  carrer_type: string;
  expired_at: string;
  address: string;
  type: string;
  is_active: boolean;
  organization: Organization;
}

export interface Organization {
  id: number;
  logo: string;
  description: string;
  name: string;
  contact_email: string;
  contact_number: string;
}

export interface Pagination {
  totalCareer: number;
  totalPages: number;
  currentPage: number;
  limit: number;
}

export interface CareerQuestion {
  is_required: true;
  question: string;
}
