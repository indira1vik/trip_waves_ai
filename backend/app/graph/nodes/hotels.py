from app.graph.state import TripState
from app.services.hotels_finder import get_hotels_list
from app.graph.load_mock_data import load_mock_data

def hotels_node(state: TripState) -> dict:
    try:
        # hotels = load_mock_data("hotels_sample.json")
        hotels = get_hotels_list(
            city=state.get("destination"),
            check_in_date=state.get("start_date"),
            check_out_date=state.get("end_date"),
            people=state.get("people")
        ) 
        return {"hotels": hotels}
    except Exception as ex:
        return {
            "hotels": [],
            "errors": state.get("errors", []) + [f"hotels_node: {ex}"],
        }