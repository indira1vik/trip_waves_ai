"""
Fetch Tourist Places from given location
"""

import serpapi
from app.core.config import settings

client = serpapi.Client(api_key=settings.SERPAPI_KEY)

def get_tourist_places(city: str, limit: int = 6) -> list[dict]:
    search_params = {
        "engine": "tripadvisor",
        "q": city,
        "ssrc": "A"
    }

    result = client.search(search_params)
    places = result.get("places", [])
    best_places = places[:limit] if places else []

    place_details_list = []

    for place in best_places:
        place_details_list.append({
            "title": place.get("title"),
            "description": place.get("description"),
            "rating": place.get("rating"),
            "reviews": place.get("reviews"),
            "thumbnail": place.get("thumbnail"),
        })

    return place_details_list
