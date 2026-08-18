import os
import requests
from dotenv import load_dotenv

load_dotenv()

RAPIDAPI_KEY = os.getenv("RAPIDAPI_KEY")
RAPIDAPI_FLIGHTS_HOST = os.getenv("RAPIDAPI_FLIGHTS_HOST")

url = f"https://{RAPIDAPI_FLIGHTS_HOST}/flights/search-roundtrip"

headers = {
    "X-RapidAPI-Key": RAPIDAPI_KEY,
    "X-RapidAPI-Host": RAPIDAPI_FLIGHTS_HOST
}

params = {
    "originSkyId":"NRT",
    "destinationSkyId":"BOM",
    "departureDate":"2026-08-15",
    "returnDate":"2026-08-20",
    "adults":"2"
}

response = requests.get(url, headers=headers, params=params)

response_body = response.json()
itineraries = response_body.get("data", {}).get("itineraries", [])

# print("Status code:", response.status_code)

def get_airline_info(leg):
    carriers = leg.get("carriers", {})
    operating = carriers.get("operating", [])
    airline = operating[0] if operating else {}
    return {
        "name": airline.get("name"),
        "logoUrl": airline.get("logoUrl")
    }

trip_options = []
for trip in itineraries:
    legs = trip.get("legs", [])
    upwards = legs[0] if len(legs) > 0 else {}
    downwards = legs[1] if len(legs) > 1 else {}
    one_detailed_trip = {
        "total_price": trip.get("price", {}).get("formatted"),
        "upward_details": {
            "durationInMinutes": upwards.get("durationInMinutes"),
            "stopCount": upwards.get("stopCount"),
            "airline": get_airline_info(upwards)
        },
        "downward_details": {
            "durationInMinutes": downwards.get("durationInMinutes"),
            "stopCount": downwards.get("stopCount"),
            "airline": get_airline_info(downwards)
        },
    }
    trip_options.append(one_detailed_trip)

# print(trip_options)