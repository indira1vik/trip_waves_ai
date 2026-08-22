from app.graph.state import TripState
from app.services.places_finder import get_tourist_places
from app.graph.load_mock_data import load_mock_data

def places_node(state: TripState) -> dict:
    try:
        # places = load_mock_data("places_sample.json")
        places = get_tourist_places(city=state.get("destination"))
        return {"places": places}
    except Exception as ex:
        return {
            "places": [],
            "errors": [f"places_node: {ex}"],
        }