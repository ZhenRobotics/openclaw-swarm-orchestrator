# OpenClaw Swarm Orchestrator

A powerful AI Agent cluster orchestration platform inspired by OpenAI Swarm architecture.

[![npm version](https://img.shields.io/npm/v/openclaw-swarm-orchestrator.svg)](https://www.npmjs.com/package/openclaw-swarm-orchestrator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/ZhenRobotics/openclaw-swarm-orchestrator.svg)](https://github.com/ZhenRobotics/openclaw-swarm-orchestrator/stargazers)

## Overview

Swarm Orchestrator is a universal platform for managing, scheduling, and coordinating multiple AI agents. It provides a comprehensive solution for building complex multi-agent systems with real-time monitoring, task distribution, and intelligent coordination.

## Features

- **Agent Management** - Register, configure, and monitor AI agents
- **Task Scheduling** - Intelligent task distribution and load balancing
- **Real-time Monitoring** - Live dashboards and logging
- **RESTful API** - Complete REST API for integration
- **Web Dashboard** - Modern React-based management interface
- **Scalable Architecture** - Built on FastAPI + Redis + SQLite

## Architecture

```
┌─────────────────────────────────────────────┐
│           Web Dashboard (React)              │
│        shadcn/ui + TailwindCSS              │
└─────────────────┬───────────────────────────┘
                  │ HTTP/WebSocket
┌─────────────────▼───────────────────────────┐
│         API Layer (FastAPI)                  │
│    - REST API                                │
│    - WebSocket for real-time updates        │
└─────────────────┬───────────────────────────┘
                  │
┌─────────────────▼───────────────────────────┐
│      Orchestration Engine                    │
│  - Task Queue (Redis)                        │
│  - Agent Registry                            │
│  - Scheduler                                 │
│  - State Manager                             │
└─────────────────┬───────────────────────────┘
                  │
┌─────────────────▼───────────────────────────┐
│        Storage Layer                         │
│  - SQLite (metadata)                         │
│  - Redis (cache & queue)                     │
│  - File system (logs)                        │
└─────────────────────────────────────────────┘
```

## Tech Stack

### Backend
- **Python 3.11+**
- **FastAPI** - High-performance async web framework
- **SQLAlchemy** - ORM for database operations
- **Redis** - Message queue and caching
- **Pydantic** - Data validation
- **asyncio** - Asynchronous operations

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **shadcn/ui** - Modern component library
- **TailwindCSS** - Styling
- **React Query** - Data fetching
- **Zustand** - State management

### Storage
- **SQLite** - Lightweight relational database
- **Redis** - In-memory data store

## Quick Start

### Prerequisites

- Python 3.11 or higher
- Node.js 18 or higher
- Redis server

### Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
alembic upgrade head

# Start server
uvicorn app.main:app --reload
```

Backend will be available at `http://localhost:8000`

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will be available at `http://localhost:3000`

### Redis Setup

```bash
# Ubuntu/Debian
sudo apt install redis-server
sudo systemctl start redis

# macOS
brew install redis
brew services start redis
```

## Core Concepts

### Agent

An autonomous unit that can execute tasks. Agents can be:
- LLM-based agents (GPT, Claude, etc.)
- Tool agents (specialized functions)
- Human-in-the-loop agents

### Task

A unit of work that needs to be completed. Tasks have:
- Priority levels
- Dependencies
- Status tracking
- Results storage

### Orchestrator

The central coordinator that:
- Assigns tasks to appropriate agents
- Monitors agent health
- Manages task queues
- Handles failures and retries

## API Documentation

Once the backend is running, visit:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## Project Structure

```
swarm-orchestrator/
├── backend/
│   ├── app/
│   │   ├── api/           # API routes
│   │   ├── core/          # Core configuration
│   │   ├── models/        # Database models
│   │   ├── services/      # Business logic
│   │   └── utils/         # Utilities
│   ├── tests/             # Backend tests
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API clients
│   │   ├── types/         # TypeScript types
│   │   └── lib/           # Utilities
│   └── package.json
├── data/                  # SQLite databases
├── logs/                  # Application logs
└── docs/                  # Documentation
```

## Configuration

Environment variables can be set in `.env`:

```env
# Backend
DATABASE_URL=sqlite:///./data/swarm.db
REDIS_URL=redis://localhost:6379
SECRET_KEY=your-secret-key-here
DEBUG=true

# API Keys (optional)
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-...
```

## Development

### Running Tests

```bash
# Backend tests
cd backend
pytest

# Frontend tests
cd frontend
npm test
```

### Code Quality

```bash
# Backend linting
cd backend
black app/
flake8 app/

# Frontend linting
cd frontend
npm run lint
```

## Deployment

### Docker Deployment

```bash
docker-compose up -d
```

### Manual Deployment

See [docs/deployment.md](docs/deployment.md) for detailed deployment instructions.

## Examples

### Register an Agent

```python
import requests

agent_data = {
    "name": "gpt-4-agent",
    "type": "llm",
    "config": {
        "model": "gpt-4",
        "temperature": 0.7
    }
}

response = requests.post(
    "http://localhost:8000/api/agents",
    json=agent_data
)
```

### Submit a Task

```python
task_data = {
    "title": "Analyze document",
    "description": "Extract key insights",
    "agent_id": "agent-123",
    "priority": "high"
}

response = requests.post(
    "http://localhost:8000/api/tasks",
    json=task_data
)
```

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting PRs.

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Roadmap

- [ ] Multi-agent conversation support
- [ ] Advanced scheduling algorithms
- [ ] Plugin system for custom agents
- [ ] Distributed deployment support
- [ ] Metrics and analytics dashboard
- [ ] Agent marketplace

## Support

- Documentation: [docs/](docs/)
- Issues: GitHub Issues
- Discussions: GitHub Discussions

---

Built with ❤️ using Python, FastAPI, and React
