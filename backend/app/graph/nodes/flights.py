from app.graph.state import TripState
from app.services.flights_finder import search_flights
from app.graph.load_mock_data import load_mock_data

def flights_node(state: TripState) -> dict:
    try:
        # flights = load_mock_data("flights_sample.json")
        flights = search_flights(
            state["origin"], state["destination"],
            state["start_date"], state["end_date"], state["people"]
        )
        return {"flights": flights}
    except Exception as ex:
        return {
            "flights": [],
            "errors": state.get("errors", []) + [f"flights_node: {ex}"],
        }
