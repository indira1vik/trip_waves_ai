import os
import requests
from dotenv import load_dotenv

load_dotenv()

RAPIDAPI_KEY = os.getenv("RAPIDAPI_KEY")
RAPIDAPI_FLIGHTS_HOST = os.getenv("RAPIDAPI_FLIGHTS_HOST")

url = f"https://{RAPIDAPI_FLIGHTS_HOST}/flights/autocomplete"

headers = {
    "X-RapidAPI-Key": RAPIDAPI_KEY,
    "X-RapidAPI-Host": RAPIDAPI_FLIGHTS_HOST
}

params = {
    "query":"New York"
}

response = requests.get(url, headers=headers, params=params)

response_body = response.json()
data = response_body.get("data", [])

if len(data) == 1:
    skyId = data[0].get("skyId")
elif len(data) > 1:
    skyId = data[1].get("skyId")
else:
    skyId = None

# print("Status code:", response.status_code)
# print("Sky ID of City:", skyId)