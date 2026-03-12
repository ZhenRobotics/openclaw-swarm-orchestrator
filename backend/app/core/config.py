"""
Application configuration using Pydantic settings
"""
from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    """Application settings"""

    # Application
    PROJECT_NAME: str = "Swarm Orchestrator"
    VERSION: str = "0.1.0"
    DEBUG: bool = True

    # API
    API_PREFIX: str = "/api"
    ALLOWED_ORIGINS: List[str] = ["http://localhost:3000", "http://localhost:5173"]

    # Database
    DATABASE_URL: str = "sqlite+aiosqlite:///./data/swarm.db"

    # Redis
    REDIS_URL: str = "redis://localhost:6379"
    REDIS_DB: int = 0

    # Security
    SECRET_KEY: str = "your-secret-key-change-in-production"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    # AI Providers (Optional)
    OPENAI_API_KEY: str = ""
    ANTHROPIC_API_KEY: str = ""

    # Task Queue
    MAX_CONCURRENT_TASKS: int = 10
    TASK_TIMEOUT_SECONDS: int = 300

    # Logging
    LOG_LEVEL: str = "INFO"
    LOG_FILE: str = "./logs/swarm.log"

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()
