# Changelog

All notable changes to Swarm Orchestrator will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-03-11

### Added

**Initial release of Swarm Orchestrator**

#### Backend
- FastAPI-based REST API server
- SQLAlchemy async ORM with SQLite
- Redis integration for caching and task queue
- Agent management system
  - Agent registration and lifecycle management
  - Support for LLM, Tool, Human, and Custom agent types
  - Agent status tracking (idle, busy, offline, error)
- Task management system
  - Task creation and scheduling
  - Priority-based task queue (low, normal, high, urgent)
  - Task status tracking (pending, queued, running, completed, failed, cancelled)
  - Task dependency support
  - Retry mechanism
- Orchestrator control API
  - System status monitoring
  - Statistics and metrics
  - Start/stop/pause/resume controls
- Health check endpoints
- API documentation (Swagger/ReDoc)

#### Frontend
- React 18 + TypeScript application
- Modern UI with Tailwind CSS
- Dashboard with real-time statistics
- Agent management interface
  - List all agents
  - View agent details
  - Agent status monitoring
- Task management interface
  - List all tasks
  - View task details
  - Task filtering by status
  - Task priority visualization
- React Query for data fetching
- Responsive design

#### Infrastructure
- Docker and Docker Compose support
- Development environment setup
- Production-ready containerization
- Environment configuration management

#### Documentation
- Comprehensive README
- Quick start guide
- Getting started tutorial
- Architecture documentation
- Migration guide from previous project
- API documentation via Swagger

### Technical Details

**Backend Stack:**
- Python 3.11+
- FastAPI 0.109.0
- SQLAlchemy 2.0.25
- Redis 5.0.1
- Pydantic 2.5.3
- uvicorn (ASGI server)

**Frontend Stack:**
- React 18
- TypeScript 5.3
- Vite 5
- TailwindCSS 3.4
- React Query
- Axios
- React Router

**Database:**
- SQLite (development)
- Redis (caching & queue)

### Notes

This is the initial release after complete project refactoring from openclaw-video-generator to swarm-orchestrator. The project has been rebuilt from scratch with a focus on AI agent orchestration.

Previous video generation functionality has been removed. If you need the old codebase, it's available at git tag `v1.3.1-video-generator-final`.
