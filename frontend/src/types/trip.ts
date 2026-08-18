export interface FlightSegment {
  departure_airport: { id: string; name: string; time: string };
  arrival_airport: { id: string; name: string; time: string };
  duration: number;
  airline: string;
  travel_class: string;
}

export interface FlightLeg {
  price: number;
  airline_logo: string;
  total_duration: number;
  segments: FlightSegment[];
  departure_token: string | null;
}

export interface FlightOption {
  upward: FlightLeg;
  downward: FlightLeg;
}

export interface Hotel {
  type: string;
  name: string;
  rate_per_night: string;
  total_rate: string;
  location_rating: number;
  thumbnail: string;
  essential_info: string[];
  amenities: string[];
}

export interface Place {
  title: string;
  description: string;
  rating: number;
  reviews: number;
  thumbnail: string;
}

export interface OptimizedPlan {
  cheapest_flight: FlightOption;
  fastest_flight: FlightOption;
  cheapest_hotel: Hotel;
  best_rated_hotel: Hotel;
  must_visit_place: Place;
  estimated_total_cost: number;
  overall_content: string;
}

export interface TripResult {
  id: number
  user_prompt: string;
  people: number;
  origin: string;
  destination: string;
  days: number;
  start_date: string;
  end_date: string;
  flights: FlightOption[];
  hotels: Hotel[];
  places: Place[];
  optimized_plan: OptimizedPlan;
  summary: string;
  errors?: string[];
}

export interface SavedTrips {
  id: number;
  user_id: number;
  user_prompt: string;
  origin: string;
  destination: string;
  people: number;
  days: number;
  start_date: string;
  end_date: string;
  summary: string;
  flights_json: FlightOption[];
  hotels_json: Hotel[];
  places_json: Place[];
  optimized_plan_json: OptimizedPlan;
  created_at: string;
}