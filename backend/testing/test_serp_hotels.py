"""
Return Hotels list of a given Place
"""

import json
import os
import serpapi
from dotenv import load_dotenv

load_dotenv()

client = serpapi.Client(api_key=os.getenv("SERPAPI_KEY"))

city = "Chennai"
start_date = "2026-08-16"
return_date = "2026-08-22"
adults = "3"

search_params = {
    "engine": "google_hotels",
    "gl": "us",
    "hl": "en",
    "q": city,
    "currency": "USD",
    "check_in_date": start_date,
    "check_out_date": return_date,
    "adults": adults,
}

result = client.search(search_params)
properties = result.get("properties", [])
best_hotels = properties[:3] if properties else []

hotel_details_list = []
for hotel in best_hotels:
    rate_per_night = hotel.get("rate_per_night") or {}
    total_rate = hotel.get("total_rate") or {}
    images = hotel.get("images") or []
    first_image = images[0] if images else {}

    hotel_details_list.append({
        "type": hotel.get("type"),
        "name": hotel.get("name"),
        "rate_per_night": rate_per_night.get("lowest"),
        "total_rate": total_rate.get("lowest"),
        "location_rating": hotel.get("location_rating"),
        "thumbnail": first_image.get("thumbnail"),
        "essential_info": hotel.get("essential_info", []),
        "amenities": hotel.get("amenities", []),
    })

# print(json.dumps(hotel_details_list, indent=2, ensure_ascii=False))