import json
import os
import requests
from dotenv import load_dotenv

load_dotenv()

RAPIDAPI_KEY = os.getenv("RAPIDAPI_KEY")
RAPIDAPI_TOURIST_HOST = os.getenv("RAPIDAPI_TOURIST_HOST")

city = "Chennai"

url = f"https://{RAPIDAPI_TOURIST_HOST}/check"

headers = {
    "X-RapidAPI-Key": RAPIDAPI_KEY,
    "X-RapidAPI-Host": RAPIDAPI_TOURIST_HOST,
}

params = {
    "noqueue":"1"
}

payload = {
    "region": city,
    "language": "en",
    "interests": [],
}

response = requests.post(url, json=payload, headers=headers, params=params)
response_data = response.json()

places = response_data.get("result", [])[:5]
place_details = []

for place in places:
    place_details.append({
        "name": place.get("name"),
        "description": place.get("description"),
        "type": place.get("type"),
    })

# print(json.dumps(place_details, indent=2, ensure_ascii=False))


