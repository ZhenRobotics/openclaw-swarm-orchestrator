"""
Orchestrator API endpoints
"""
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func
from datetime import datetime

from app.core.database import get_db
from app.core.redis_client import redis_client
from app.models.agent import Agent, AgentStatus
from app.models.task import Task, TaskStatus
from app.models.schemas import OrchestratorStats, SystemStatus

router = APIRouter()


@router.get("/stats", response_model=OrchestratorStats)
async def get_orchestrator_stats(db: AsyncSession = Depends(get_db)):
    """Get orchestrator statistics"""

    # Agent stats
    total_agents = await db.scalar(select(func.count()).select_from(Agent))
    active_agents = await db.scalar(
        select(func.count()).select_from(Agent).where(Agent.status == AgentStatus.BUSY)
    )
    idle_agents = await db.scalar(
        select(func.count()).select_from(Agent).where(Agent.status == AgentStatus.IDLE)
    )

    # Task stats
    total_tasks = await db.scalar(select(func.count()).select_from(Task))
    pending_tasks = await db.scalar(
        select(func.count()).select_from(Task).where(Task.status == TaskStatus.PENDING)
    )
    running_tasks = await db.scalar(
        select(func.count()).select_from(Task).where(Task.status == TaskStatus.RUNNING)
    )
    completed_tasks = await db.scalar(
        select(func.count()).select_from(Task).where(Task.status == TaskStatus.COMPLETED)
    )
    failed_tasks = await db.scalar(
        select(func.count()).select_from(Task).where(Task.status == TaskStatus.FAILED)
    )

    return OrchestratorStats(
        total_agents=total_agents or 0,
        active_agents=active_agents or 0,
        idle_agents=idle_agents or 0,
        total_tasks=total_tasks or 0,
        pending_tasks=pending_tasks or 0,
        running_tasks=running_tasks or 0,
        completed_tasks=completed_tasks or 0,
        failed_tasks=failed_tasks or 0
    )


@router.get("/status", response_model=SystemStatus)
async def get_system_status(db: AsyncSession = Depends(get_db)):
    """Get system status"""

    # Check Redis connection
    try:
        redis_connected = await redis_client.ping()
    except Exception:
        redis_connected = False

    # Get stats
    stats = await get_orchestrator_stats(db)

    # Calculate uptime (placeholder - should track actual start time)
    uptime = 0.0

    return SystemStatus(
        status="running",
        uptime=uptime,
        redis_connected=redis_connected,
        database_connected=True,
        stats=stats
    )


@router.post("/start")
async def start_orchestrator():
    """Start the orchestrator"""
    # TODO: Implement orchestrator start logic
    return {"status": "started", "message": "Orchestrator started successfully"}


@router.post("/stop")
async def stop_orchestrator():
    """Stop the orchestrator"""
    # TODO: Implement orchestrator stop logic
    return {"status": "stopped", "message": "Orchestrator stopped successfully"}


@router.post("/pause")
async def pause_orchestrator():
    """Pause task processing"""
    # TODO: Implement pause logic
    return {"status": "paused", "message": "Task processing paused"}


@router.post("/resume")
async def resume_orchestrator():
    """Resume task processing"""
    # TODO: Implement resume logic
    return {"status": "resumed", "message": "Task processing resumed"}
