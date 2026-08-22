"""
State of a Trip Data
"""

from typing import Annotated, TypedDict
import operator

class TripState(TypedDict):
    user_prompt: str

    people: int
    origin: str
    destination: str
    days: int
    start_date: str # "YYYY-MM-DD"
    end_date: str # "YYYY-MM-DD"

    flights: list[dict]
    hotels: list[dict]
    places: list[dict]

    optimized_plan: dict
    summary: str
    errors: Annotated[list[str], operator.add]