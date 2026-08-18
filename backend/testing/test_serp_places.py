"""
Return Tourist Places of a given City
"""

import json
import os
import serpapi
from dotenv import load_dotenv

load_dotenv()

client = serpapi.Client(api_key=os.getenv("SERPAPI_KEY"))

city = "Bangalore"

search_params = {
    "engine": "tripadvisor",
    "q": city,
    "ssrc": "A"
}

result = client.search(search_params)
places = result.get("places", [])
best_places = places[:6] if places else []

place_details_list = []
for place in best_places:
    place_details_list.append({
        "title": place.get("title"),
        "description": place.get("description"),
        "rating": place.get("rating"),
        "reviews": place.get("reviews"),
        "thumbnail": place.get("thumbnail"),
    })

# print(json.dumps(place_details_list, indent=2, ensure_ascii=False))