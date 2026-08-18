"""
Routes for trips.
"""

from sqlalchemy.orm import Session
from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import Optional

from app.graph.graph_builder import build_trip_graph
from app.database.crud_trips import create_trip, get_trip_by_id, get_trips_by_user
from app.database.session import get_db

router = APIRouter()

trip_graph = build_trip_graph()

class CreateTripRequest(BaseModel):
    user_prompt: str

class SaveTripRequest(BaseModel):
    user_id: int
    user_prompt: str
    origin: Optional[str] = None
    destination: Optional[str] = None
    people: Optional[int] = None
    days: Optional[int] = None
    start_date: Optional[str] = None
    end_date: Optional[str] = None
    summary: Optional[str] = None
    flights: Optional[list] = None
    hotels: Optional[list] = None
    places: Optional[list] = None
    optimized_plan: Optional[dict] = None

@router.post("/plan")
def plan_trip(req: CreateTripRequest):
    try:
        result = trip_graph.invoke({"user_prompt": req.user_prompt})
    except Exception as ex:
        raise HTTPException(status_code=500, detail=str(ex))

    return result

@router.post("/save")
def save_trip(req: SaveTripRequest, db: Session = Depends(get_db)):
    trip_data = req.model_dump()
    user_id = trip_data.pop("user_id")

    try:
        trip_output = create_trip(db, user_id, trip_data)
    except Exception as ex:
        raise HTTPException(status_code=500, detail=str(ex))

    return {"trip_id": trip_output.id, "message": "Trip saved successfully"}

@router.get("/{trip_id}")
def get_trip(trip_id: int, db: Session = Depends(get_db)):
    trip = get_trip_by_id(db, trip_id)

    if trip is None:
        raise HTTPException(status_code=404, detail="Trip not found")

    return trip

@router.get("/history/{user_id}")
def get_history(user_id: int, db: Session = Depends(get_db)):
    trips = get_trips_by_user(db, user_id)
    return trips

