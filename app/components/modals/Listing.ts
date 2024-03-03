// types.ts

export interface Location {
  zip: string;
  area: string;
  city: string;
  state: string;
  county: string;
  address: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface Features {
  feature1: string;
  feature2: string;
}

export interface ListingDetails {
  detail1: string;
  detail2: string;
}

export interface SleepingSituation {
  beds: number;
  bedrooms: number;
}

export interface MaxGuests {
  max_total: number;
  max_infants: number;
  max_childAndAdults: number;
}

export interface Listing {
  id: string;
  category: string;
  imageSrc: string;
  name: string;
  title: string;
  owner_id: string;
  description: string;
  area_type: string;
  area_size: string;
  images: string[];
  deyar_service_fee: string;
  cleaning_fee: string;
  location: Location;
  features: Features;
  listing_details: ListingDetails;
  sleeping_situation: SleepingSituation;
  max_guests: MaxGuests;
  nbOfGuestsAdded: boolean;
  createdAt: string;
  updatedAt: string;
}
