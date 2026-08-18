import type { SavedTrips, TripResult } from "../types/trip";
import apiClient from "./client";

export function toTripResult(saved: SavedTrips): TripResult {
  return {
    id: saved.id,
    user_prompt: saved.user_prompt,
    people: saved.people,
    origin: saved.origin,
    destination: saved.destination,
    days: saved.days,
    start_date: saved.start_date,
    end_date: saved.end_date,
    summary: saved.summary,
    flights: saved.flights_json,
    hotels: saved.hotels_json,
    places: saved.places_json,
    optimized_plan: saved.optimized_plan_json,
  };
}

export interface SaveTripOutput {
  tripId: string;
  message: string;
}

export async function getTrip(tripId: number): Promise<TripResult> {
  const res = await apiClient.get<SavedTrips>(`/trip/${tripId}`);
  return toTripResult(res.data);
}

export async function getHistory(userId: number): Promise<TripResult[]> {
  const response = await apiClient.get<SavedTrips[]>(`/trip/history/${userId}`);
  return response.data.map(toTripResult);
}

export async function planTrip(prompt: string): Promise<TripResult> {
  const res = await apiClient.post<TripResult>("/trip/plan", {
    user_prompt: prompt,
  });
  return res.data;
}

export async function saveTrip(tripData: TripResult, userId: number): Promise<SaveTripOutput> {
  const res = await apiClient.post("/trip/save", {...tripData, user_id: userId});
  return res.data;
}