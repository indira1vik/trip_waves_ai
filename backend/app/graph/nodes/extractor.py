from app.graph.state import TripState
from datetime import date, timedelta
from app.services.llm import extract_trip_info

def extractor_node(state: TripState) -> dict:
    extracted = extract_trip_info(state["user_prompt"])

    start_date = date.today() + timedelta(days=1)
    end_date = start_date + timedelta(days=1 + extracted["days"])

    # return {
    #     "people": 2,
    #     "origin": "Phoenix",
    #     "destination": "Tokyo",
    #     "days": 7,
    #     "start_date": "2026-08-20",
    #     "end_date": "2026-08-27",
    # }

    return {
        "people": extracted["people"],
        "origin": extracted["origin"],
        "destination": extracted["destination"],
        "days": extracted["days"],
        "start_date": start_date.isoformat(),
        "end_date": end_date.isoformat(),
    }