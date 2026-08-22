from app.graph.state import TripState
from app.services.llm import generate_trip_narrative

def narrative_node(state: TripState) -> dict:
    optimized_plan = state.get("optimized_plan")
    days = state.get("days")
    destination = state.get("destination")

    try:
        overall_content = generate_trip_narrative(optimized_plan, days, destination)
        updated_plan = {
            **optimized_plan,
            "overall_content": overall_content
        }
        return {"optimized_plan": updated_plan}
    except Exception as ex:
        return {"errors": [f"narrative_node: {ex}"]}

