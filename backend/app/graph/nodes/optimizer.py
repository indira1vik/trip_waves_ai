from app.graph.state import TripState

def optimizer_node(state: TripState) -> dict:
    flights = state.get("flights", [])
    hotels = state.get("hotels", [])
    places = state.get("places", [])

    def get_flight_price(flight):
        return flight.get("upward", {}).get("price") or float("inf")

    def get_flight_total_time(flight):
        upward_duration = flight.get("upward", {}).get("total_duration") or 0
        downward_duration = flight.get("downward", {}).get("total_duration") or 0
        return upward_duration + downward_duration

    def parse_price(price):
        if not price:
            return float("inf")
        try:
            return float(price.replace("$", "").replace(",", ""))
        except (ValueError, AttributeError):
            return float("inf")

    def get_hotel_price(hotel):
        return parse_price(hotel.get("total_rate"))

    def get_hotel_rating(hotel):
        return hotel.get("location_rating") or 0

    def get_place_rating(place):
        return place.get("rating") or 0

    cheapest_flight = None
    if flights:
        cheapest_flight = min(flights, key=get_flight_price)

    fastest_flight = None
    if flights:
        fastest_flight = min(flights, key=get_flight_total_time)

    cheapest_hotel = None
    if hotels:
        cheapest_hotel = min(hotels, key=get_hotel_price)

    best_rated_hotel = None
    if hotels:
        best_rated_hotel = max(hotels, key=get_hotel_rating)

    must_visit_place = None
    if places:
        must_visit_place = max(places, key=get_place_rating)

    estimated_total_cost = 0
    if cheapest_flight:
        estimated_total_cost += cheapest_flight.get("upward", {}).get("price", 0)
    if cheapest_hotel:
        estimated_total_cost += parse_price(cheapest_hotel.get("total_rate", "$0"))

    optimized_plan = {
        "cheapest_flight": cheapest_flight,
        "fastest_flight": fastest_flight,
        "cheapest_hotel": cheapest_hotel,
        "best_rated_hotel": best_rated_hotel,
        "must_visit_place": must_visit_place,
        "estimated_total_cost": estimated_total_cost,
    }

    return {"optimized_plan": optimized_plan}