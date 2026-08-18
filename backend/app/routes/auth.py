"""
Routes for auth.
"""

from sqlalchemy.orm import Session
from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
import hashlib

from app.database.crud_users import create_user, get_user_by_email
from app.database.session import get_db

router = APIRouter()

class NewUserRequest(BaseModel):
    name: str
    email: str
    password: str

class CheckUserRequest(BaseModel):
    email: str
    password: str

def hash_password(password: str) -> str:
    return hashlib.sha256(password.encode("utf-8")).hexdigest()

def verify_password(password: str, hashed_password: str) -> bool:
    return hash_password(password) == hashed_password

@router.post("/signup")
def create_new_user(req: NewUserRequest, db: Session = Depends(get_db)):
    hashed_password = hash_password(req.password)
    new_user = create_user(db, req.name, req.email, hashed_password)
    return {"user_id": new_user.id, "message": "New User Created!"}

@router.post("/check")
def check_user_login(req: CheckUserRequest, db: Session = Depends(get_db)):
    user = get_user_by_email(db, req.email)

    if user is None:
        raise HTTPException(status_code=404, detail="No User found")

    if not verify_password(req.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid password")

    return {
        "user_id": user.id,
        "name": user.name,
        "email": user.email,
        "message": "User found",
    }

