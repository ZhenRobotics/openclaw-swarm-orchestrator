"""
Agent database model
"""
from sqlalchemy import Column, String, DateTime, JSON, Enum as SQLEnum
from sqlalchemy.sql import func
from datetime import datetime
import enum
from app.core.database import Base


class AgentStatus(str, enum.Enum):
    """Agent status enum"""
    IDLE = "idle"
    BUSY = "busy"
    OFFLINE = "offline"
    ERROR = "error"


class AgentType(str, enum.Enum):
    """Agent type enum"""
    LLM = "llm"
    TOOL = "tool"
    HUMAN = "human"
    CUSTOM = "custom"


class Agent(Base):
    """Agent model"""
    __tablename__ = "agents"

    id = Column(String, primary_key=True, index=True)
    name = Column(String, nullable=False)
    type = Column(SQLEnum(AgentType), nullable=False)
    status = Column(SQLEnum(AgentStatus), default=AgentStatus.IDLE)

    # Configuration stored as JSON
    config = Column(JSON, nullable=True)

    # Capabilities and metadata
    capabilities = Column(JSON, nullable=True)
    metadata = Column(JSON, nullable=True)

    # Timestamps
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    last_active_at = Column(DateTime(timezone=True), nullable=True)

    # Statistics
    tasks_completed = Column(String, default="0")
    tasks_failed = Column(String, default="0")
