"""
Return Top 3 best Round Trip Flights from Source to Destination
"""

import json
import os
import serpapi
from dotenv import load_dotenv

load_dotenv()

client = serpapi.Client(api_key=os.getenv("SERPAPI_KEY"))

source = "JFK"
destination = "MAA"
start_date = "2026-08-16"
return_date = "2026-08-22"
adults = "3"

search_params = {
    "engine": "google_flights",
    "departure_id": source,
    "arrival_id": destination,
    "hl": "en",
    "gl": "us",
    "currency": "USD",
    "outbound_date": start_date,
    "return_date": return_date,
    "adults": adults,
    "type": "1",
}

def normalize_flight(flight):
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

upward_results = client.search(search_params)
best_options = upward_results.get("best_flights", [])[:3]

round_trip_options = []
for option in best_options:
    upward = normalize_flight(option)
    token = upward.get("departure_token")

    if not token:
        round_trip_options.append({"upward": upward, "downward": None})
        continue

    downward_result = client.search({**search_params, "departure_token": token})
    downward_flights = downward_result.get("other_flights", [])[:1]
    downward = normalize_flight(downward_flights[0]) if downward_flights else None

    round_trip_options.append({
        "upward": upward,
        "downward": downward,
    })

# print(json.dumps(round_trip_options, indent=2, ensure_ascii=False))