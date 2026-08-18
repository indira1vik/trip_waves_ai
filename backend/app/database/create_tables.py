"""
Create Tables
RUN ONLY ONCE (at the Start)
"""

from app.database.session import engine
from app.database.models import Base

# -- Create Tables
Base.metadata.create_all(bind=engine)
print("Tables Created")