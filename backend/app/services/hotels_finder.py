"""
Fetch Hotels from given location with to and from dates
Date format: "2026-08-31"
"""

import serpapi
from app.core.config import settings

client = serpapi.Client(api_key=settings.SERPAPI_KEY)

def get_hotels_list(
        city: str,
        check_in_date: str,
        check_out_date: str,
        people: int,
        limit: int = 3
) -> list[dict]:
    search_params = {
        "engine": "google_hotels",
        "gl": "us",
        "hl": "en",
        "q": city,
        "currency": "USD",
        "check_in_date": check_in_date,
        "check_out_date": check_out_date,
        "adults": str(people),
    }

    result = client.search(search_params)
    properties = result.get("properties", [])
    best_hotels = properties[:limit] if properties else []

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

    return hotel_details_list

