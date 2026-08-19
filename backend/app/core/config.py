from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    ALLOWED_ORIGINS: str = "http://localhost:5173"
    
    GROQ_API_KEY: str
    GROQ_API_URL: str
    GROQ_LLM_MODEL: str

    HF_TOKEN: str
    HF_API_URL: str
    LLM_MODEL_NAME: str

    RAPIDAPI_KEY: str
    RAPIDAPI_FLIGHTS_HOST: str
    RAPIDAPI_HOTELS_HOST: str
    RAPIDAPI_TOURIST_HOST: str

    SERPAPI_KEY: str

    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_DB: str
    POSTGRES_HOST: str
    POSTGRES_PORT: str

    class Config:
        env_file = ".env"

settings = Settings()