"""
Fetch Sky Id first and then round trip details
Date format: "2026-08-31"
"""

import serpapi
from app.core.config import settings

client = serpapi.Client(api_key=settings.SERPAPI_KEY)

def get_airport_code(city: str) -> str:
    search_params = {
        "engine": "google_flights_autocomplete",
        "q": city,
        "gl": "us",
        "hl": "en"
    }
    result = client.search(search_params)
    suggestions = result.get("suggestions", [])
    first_suggestion = suggestions[0] if suggestions else {}

    airports = first_suggestion.get("airports", [])
    airport_code = airports[0].get("id") if airports else None

    return airport_code

def normalize_flight(flight: dict) -> dict:
    legs = flight.get("flights", [])
    return {
        "price": flight.get("price"),
        "airline_logo": flight.get("airline_logo"),
        "total_duration": flight.get("total_duration"),
        "segments": [
            {
                "departure_airport": leg.get("departure_airport"),
                "arrival_airport": leg.get("arrival_airport"),
                "duration": leg.get("duration"),
                "airline": leg.get("airline"),
                "travel_class": leg.get("travel_class"),
            }
            for leg in legs
        ],
        "departure_token": flight.get("departure_token"),
    }

def search_flights(
        origin_city: str,
        destination_city: str,
        dept_date: str,
        return_date: str,
        people: int = 1,
        limit: int = 3
) -> list[dict]:
    search_params = {
        "engine": "google_flights",
        "departure_id": get_airport_code(origin_city),
        "arrival_id": get_airport_code(destination_city),
        "hl": "en",
        "gl": "us",
        "currency": "USD",
        "outbound_date": dept_date,
        "return_date": return_date,
        "adults": str(people),
        "type": "1",
    }

    upward_results = client.search(search_params)
    best_options = upward_results.get("best_flights", [])[:limit]

    round_trip_options = []
    for option in best_options:
        upward = normalize_flight(option)
        token = upward.get("departure_token")

        if not token:
            round_trip_options.append({"upward": upward, "downward": None})
            continue

        downward_result = client.search({**search_params, "departure_token": token})
        downward_flights = downward_result.get("other_flights", [])[:1] or downward_result.get("best_flights", [])[:1] or []
        downward = normalize_flight(downward_flights[0]) if downward_flights else None

        round_trip_options.append({
            "upward": upward,
            "downward": downward,
        })

    return round_trip_options

