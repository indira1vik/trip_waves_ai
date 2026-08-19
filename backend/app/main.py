"""
FastAPI application
"""

from fastapi import FastAPI
from app.routes import trip, auth
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings

app = FastAPI(title="TripWaves API")

origins = [origin.strip() for origin in settings.ALLOWED_ORIGINS.split(",")]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(trip.router, prefix='/trip')
app.include_router(auth.router, prefix='/auth')

@app.get("/health")
def health_check():
    return {"status": 200}