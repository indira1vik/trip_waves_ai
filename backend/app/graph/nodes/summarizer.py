from app.graph.state import TripState
from app.services.llm import generate_summary

def summarizer_node(state: TripState) -> dict:
    optimized_plan = state.get("optimized_plan")
    user_prompt = state.get("user_prompt")
    people = state.get("people")
    days = state.get("days")
    origin = state.get("origin")
    destination = state.get("destination")

    summary = generate_summary(optimized_plan, user_prompt, people, days, origin, destination)
    return {"summary": summary}