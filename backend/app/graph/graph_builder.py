"""
Build the graph
"""

from langgraph.graph import StateGraph, START, END

from app.graph.state import TripState

from app.graph.nodes.extractor import extractor_node
from app.graph.nodes.flights import flights_node
from app.graph.nodes.hotels import hotels_node
from app.graph.nodes.places import places_node
from app.graph.nodes.optimizer import optimizer_node
from app.graph.nodes.narrative import narrative_node
from app.graph.nodes.summarizer import summarizer_node

# -- Graph
def build_trip_graph():
    graph = StateGraph(TripState)

    graph.add_node("extractor", extractor_node)
    graph.add_node("flights", flights_node)
    graph.add_node("hotels", hotels_node)
    graph.add_node("places", places_node)
    graph.add_node("optimizer", optimizer_node)
    graph.add_node("narrative", narrative_node)
    graph.add_node("summarizer", summarizer_node)

    graph.add_edge(START, "extractor")

    graph.add_edge("extractor", "flights")
    graph.add_edge("extractor", "hotels")
    graph.add_edge("extractor", "places")

    graph.add_edge("flights", "optimizer")
    graph.add_edge("hotels", "optimizer")
    graph.add_edge("places", "optimizer")

    graph.add_edge("optimizer", "narrative")

    graph.add_edge("narrative", "summarizer")

    graph.add_edge("summarizer", END)

    return graph.compile()

# -- Print
def print_trip_summary(result: dict) -> None:

    print("\n" + "=" * 60)
    print("OPTIMIZED PLAN")
    print("=" * 60)

    opt = result.get("optimized_plan", {})

    # Cheapest flight
    cheapest_flight = opt.get("cheapest_flight")
    if cheapest_flight:
        print(
            f"Cheapest Flight: "
            f"${cheapest_flight.get('upward', {}).get('price')}"
        )

    # Fastest flight
    fastest_flight = opt.get("fastest_flight")
    if fastest_flight:
        total_time = (
            fastest_flight.get("upward", {}).get("total_duration", 0)
            + fastest_flight.get("downward", {}).get("total_duration", 0)
        )

        print(f"Fastest Flight: {total_time} minutes")

    # Cheapest hotel
    cheapest_hotel = opt.get("cheapest_hotel")
    if cheapest_hotel:
        print(
            f"Cheapest Hotel: "
            f"{cheapest_hotel.get('name')} — "
            f"{cheapest_hotel.get('rate_per_night')}"
        )

    # Best rated hotel
    best_rated_hotel = opt.get("best_rated_hotel")
    if best_rated_hotel:
        print(
            f"Best Rated Hotel: "
            f"{best_rated_hotel.get('name')} — "
            f"{best_rated_hotel.get('location_rating')}"
        )

    # Must visit place
    must_visit_place = opt.get("must_visit_place")
    if must_visit_place:
        print(
            f"Must Visit Place: "
            f"{must_visit_place.get('title')} — "
            f"Rating: {must_visit_place.get('rating')}"
        )

    # Estimated total cost
    print(f"Estimated Total Cost: ${opt.get('estimated_total_cost')}")

    print(f"Narration: {opt.get('overall_content')}")

    print("\n" + "=" * 60)
    print("SUMMARY")
    print("=" * 60)
    print(result.get("summary"))

    if result.get("errors"):
        print("\n" + "=" * 60)
        print("ERRORS")
        print("=" * 60)
        for err in result["errors"]:
            print(f"- {err}")

if __name__ == "__main__":
    app_graph = build_trip_graph()
    result = app_graph.invoke({"user_prompt": "..."})
    print_trip_summary(result)