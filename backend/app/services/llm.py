"""
Extracting parameters from user's prompt
"""

import json
from groq import Groq
from app.core.config import settings

client = Groq(api_key=settings.GROQ_API_KEY)

EXTRACTION_SYSTEM_PROMPT = """You are a travel trip parameter extractor.
Given a user's message describing a trip, extract exactly these fields as JSON:

- people: integer, number of travelers (assume 1 if not mentioned, "me and my partner" = 2)
- origin: string, the departure city
- destination: string, the destination city
- days: integer, number of days for the trip

Respond with ONLY valid JSON, no explanation, no markdown formatting, no code fences.
Example output: {"people": 2, "origin": "New York", "destination": "Tokyo", "days": 3}
"""

def extract_trip_info(user_prompt: str) -> dict:
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": EXTRACTION_SYSTEM_PROMPT,
            },
            {
                "role": "user",
                "content": user_prompt
            }
        ],
        model=settings.GROQ_LLM_MODEL
    )

    raw_content = chat_completion.choices[0].message.content.strip()

    try:
        extracted = json.loads(raw_content)
    except json.JSONDecodeError as ex:
        raise ValueError(f"LLM returned invalid JSON: {raw_content}") from ex

    required_key = {"people", "origin", "destination", "days"}
    missing = required_key - extracted.keys()
    if missing:
        raise ValueError(f"LLM missing keys: {missing}")

    return extracted


def _short_flight_obj_for_prompt(flight: dict) -> dict:
    if not flight:
        return {}
    upward = flight.get("upward", {})
    downward = flight.get("downward", {})
    return {
        "price": upward.get("price"),
        "airline": upward.get("segments", [{}])[0].get("airline"),
        "duration_minutes": upward.get("total_duration", 0) + downward.get("total_duration", 0),
    }

def _short_hotel_obj_for_prompt(hotel: dict) -> dict:
    if not hotel:
        return {}
    return {
        "name": hotel.get("name"),
        "total_rate": hotel.get("total_rate"),
        "rating": hotel.get("location_rating"),
    }

def _short_place_obj_for_prompt(place: dict) -> dict:
    if not place:
        return {}
    return {
        "title": place.get("title"),
        "rating": place.get("rating"),
    }

def generate_trip_narrative(optimized_plan: dict, days: int, destination: str) -> str:
    cheapest_flight = _short_flight_obj_for_prompt(optimized_plan.get("cheapest_flight"))
    fastest_flight = _short_flight_obj_for_prompt(optimized_plan.get("fastest_flight"))
    cheapest_hotel = _short_hotel_obj_for_prompt(optimized_plan.get("cheapest_hotel"))
    best_rated_hotel = _short_hotel_obj_for_prompt(optimized_plan.get("best_rated_hotel"))
    must_visit_place = _short_place_obj_for_prompt(optimized_plan.get("must_visit_place"))
    total_cost = optimized_plan.get("estimated_total_cost")

    NARRATION_PROMPT = f"""Write a short, friendly 3-4 sentence trip plan for a {days}-day trip to {destination}.
    Write in second person, addressing the traveler directly (use "you"/"your"), like a travel assistant giving advice — not first person ("I").
    Cheapest flight: {json.dumps(cheapest_flight)} min total
    Fastest flight: {json.dumps(fastest_flight)} min total
    Cheapest hotel: {json.dumps(cheapest_hotel)}
    Best rated hotel: {json.dumps(best_rated_hotel)}
    Must-visit place: {json.dumps(must_visit_place)}
    Estimated total cost: ${total_cost}
    Mention the price/speed trade-off between the two flights, note the hotel choice, and highlight the must-visit place. Plain text only, no markdown."""

    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": NARRATION_PROMPT
            }
        ],
        model=settings.GROQ_LLM_MODEL
    )
    
    content = chat_completion.choices[0].message.content.strip()

    return content


def generate_summary(
        optimized_plan: dict,
        user_prompt: str,
        people: int,
        days,
        origin: str,
        destination: str
    ) -> str:
    min_cost = optimized_plan.get("estimated_total_cost")

    SUMMARY_PROMPT = f"""Write one or two short sentences summarizing this trip.
    Original request: "{user_prompt}"
    People: {people}
    From: {origin}
    To: {destination}
    Days: {days}
    Minimum estimated cost: ${min_cost}

    If the original request mentions who is traveling (e.g. "my brother and mom"),
    reflect that phrasing naturally instead of just saying "X people".
    Instead of stating the exact minimum cost, give a realistic buffer/range around it
    (e.g. "around $X to $Y") to account for typical price variation.
    Plain text only, no markdown."""

    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": SUMMARY_PROMPT
            }
        ],
        model=settings.GROQ_LLM_MODEL
    )
    
    content = chat_completion.choices[0].message.content.strip()

    return content

