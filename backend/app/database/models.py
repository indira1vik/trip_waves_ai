"""
Creating models for User and Trip Table
"""

from datetime import datetime, timezone
from sqlalchemy import Column, String, Integer, Text, Date, DateTime, ForeignKey
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False, index=True)
    hashed_password = Column(String, nullable=False)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

class Trip(Base):
    __tablename__ = "trips"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    user_prompt = Column(Text)
    origin = Column(String)
    destination = Column(String)
    people = Column(Integer)
    days = Column(Integer)
    start_date = Column(Date)
    end_date = Column(Date)
    summary = Column(String)
    
    flights_json = Column(JSONB, nullable=True)
    hotels_json = Column(JSONB, nullable=True)
    places_json = Column(JSONB, nullable=True)
    optimized_plan_json = Column(JSONB, nullable=True)

    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

