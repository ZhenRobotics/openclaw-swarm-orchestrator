"""
Pydantic schemas for API validation
"""
from pydantic import BaseModel, Field
from typing import Optional, Dict, Any, List
from datetime import datetime
from app.models.agent import AgentStatus, AgentType
from app.models.task import TaskStatus, TaskPriority


# Agent Schemas
class AgentBase(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    type: AgentType
    config: Optional[Dict[str, Any]] = None
    capabilities: Optional[List[str]] = None
    metadata: Optional[Dict[str, Any]] = None


class AgentCreate(AgentBase):
    pass


class AgentUpdate(BaseModel):
    name: Optional[str] = None
    status: Optional[AgentStatus] = None
    config: Optional[Dict[str, Any]] = None
    capabilities: Optional[List[str]] = None
    metadata: Optional[Dict[str, Any]] = None


class AgentResponse(AgentBase):
    id: str
    status: AgentStatus
    created_at: datetime
    updated_at: Optional[datetime] = None
    last_active_at: Optional[datetime] = None
    tasks_completed: int = 0
    tasks_failed: int = 0

    class Config:
        from_attributes = True


# Task Schemas
class TaskBase(BaseModel):
    title: str = Field(..., min_length=1, max_length=200)
    description: Optional[str] = None
    agent_id: Optional[str] = None
    priority: TaskPriority = TaskPriority.NORMAL
    input_data: Optional[Dict[str, Any]] = None
    depends_on: Optional[List[str]] = None
    metadata: Optional[Dict[str, Any]] = None


class TaskCreate(TaskBase):
    pass


class TaskUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    agent_id: Optional[str] = None
    status: Optional[TaskStatus] = None
    priority: Optional[TaskPriority] = None
    input_data: Optional[Dict[str, Any]] = None
    output_data: Optional[Dict[str, Any]] = None
    error_message: Optional[str] = None


class TaskResponse(TaskBase):
    id: str
    status: TaskStatus
    output_data: Optional[Dict[str, Any]] = None
    error_message: Optional[str] = None
    retry_count: int = 0
    max_retries: int = 3
    created_at: datetime
    updated_at: Optional[datetime] = None
    started_at: Optional[datetime] = None
    completed_at: Optional[datetime] = None

    class Config:
        from_attributes = True


# Orchestrator Schemas
class OrchestratorStats(BaseModel):
    total_agents: int
    active_agents: int
    idle_agents: int
    total_tasks: int
    pending_tasks: int
    running_tasks: int
    completed_tasks: int
    failed_tasks: int


class SystemStatus(BaseModel):
    status: str
    uptime: float
    redis_connected: bool
    database_connected: bool
    stats: OrchestratorStats
