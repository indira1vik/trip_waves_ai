"""
Return Airport ID of a given Place
"""

import os
import serpapi
from dotenv import load_dotenv

load_dotenv()

client = serpapi.Client(api_key=os.getenv("SERPAPI_KEY"))

city = "Delhi"

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

# print("City Airport ID:", airport_code)