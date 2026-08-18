"""
CRUD for Trips
"""

from sqlalchemy.orm import Session
from app.database.models import User, Trip
from datetime import datetime

def create_trip(db: Session, user_id: int, trip_data: dict) -> Trip:
    trip = Trip(
        user_id=user_id,
        user_prompt=trip_data.get("user_prompt"),
        origin=trip_data.get("origin"),
        destination=trip_data.get("destination"),
        people=trip_data.get("people"),
        days=trip_data.get("days"),
        start_date=datetime.strptime(trip_data["start_date"], "%Y-%m-%d").date(),
        end_date=datetime.strptime(trip_data["end_date"], "%Y-%m-%d").date(),
        summary=trip_data.get("summary"),
        flights_json=trip_data.get("flights"),
        hotels_json=trip_data.get("hotels"),
        places_json=trip_data.get("places"),
        optimized_plan_json=trip_data.get("optimized_plan"),
    )
    db.add(trip)
    db.commit()
    db.refresh(trip)
    return trip

def get_trip_by_id(db: Session, trip_id: int) -> Trip | None:
    return db.query(Trip).filter(Trip.id == trip_id).first()

def get_trips_by_user(db: Session, user_id: int) -> list[Trip]:
    return db.query(Trip).filter(Trip.user_id == user_id).all()

def delete_trip_by_id(db: Session, trip_id: int) -> bool:
    trip = db.query(Trip).filter(Trip.id == trip_id).first()

    if trip is None:
        return False

    db.delete(trip)
    db.commit()
    return True
