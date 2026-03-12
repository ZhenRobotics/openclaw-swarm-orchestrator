"""
Task database model
"""
from sqlalchemy import Column, String, DateTime, JSON, Enum as SQLEnum, ForeignKey, Text
from sqlalchemy.sql import func
import enum
from app.core.database import Base


class TaskStatus(str, enum.Enum):
    """Task status enum"""
    PENDING = "pending"
    QUEUED = "queued"
    RUNNING = "running"
    COMPLETED = "completed"
    FAILED = "failed"
    CANCELLED = "cancelled"


class TaskPriority(str, enum.Enum):
    """Task priority enum"""
    LOW = "low"
    NORMAL = "normal"
    HIGH = "high"
    URGENT = "urgent"


class Task(Base):
    """Task model"""
    __tablename__ = "tasks"

    id = Column(String, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(Text, nullable=True)

    # Task assignment
    agent_id = Column(String, ForeignKey("agents.id"), nullable=True)

    # Status and priority
    status = Column(SQLEnum(TaskStatus), default=TaskStatus.PENDING)
    priority = Column(SQLEnum(TaskPriority), default=TaskPriority.NORMAL)

    # Task data
    input_data = Column(JSON, nullable=True)
    output_data = Column(JSON, nullable=True)

    # Error handling
    error_message = Column(Text, nullable=True)
    retry_count = Column(String, default="0")
    max_retries = Column(String, default="3")

    # Dependencies
    depends_on = Column(JSON, nullable=True)  # List of task IDs

    # Timestamps
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    started_at = Column(DateTime(timezone=True), nullable=True)
    completed_at = Column(DateTime(timezone=True), nullable=True)

    # Metadata
    metadata = Column(JSON, nullable=True)
