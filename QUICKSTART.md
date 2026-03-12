# Swarm Orchestrator - Quick Start

Get up and running in 5 minutes!

## Option 1: Docker (Easiest)

```bash
# Clone repository
git clone <repo-url>
cd openclaw-swarm-orchestrator

# Start all services
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f
```

Access:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs

## Option 2: Local Development

### Prerequisites
- Python 3.11+
- Node.js 18+
- Redis

### Setup

```bash
# 1. Backend
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt

# 2. Frontend
cd ../frontend
npm install

# 3. Environment
cp .env.example .env
# Edit .env with your settings

# 4. Start services
# Terminal 1: Redis
redis-server

# Terminal 2: Backend
cd backend
source venv/bin/activate
uvicorn app.main:app --reload

# Terminal 3: Frontend
cd frontend
npm run dev
```

## First Steps

### 1. Create an Agent

```bash
curl -X POST http://localhost:8000/api/agents \
  -H "Content-Type: application/json" \
  -d '{
    "name": "GPT-4 Agent",
    "type": "llm",
    "config": {"model": "gpt-4"}
  }'
```

### 2. Create a Task

```bash
curl -X POST http://localhost:8000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Task",
    "description": "My first task",
    "priority": "high"
  }'
```

### 3. Check Status

```bash
curl http://localhost:8000/api/orchestrator/status
```

## Common Issues

**Redis not running:**
```bash
# Check: redis-cli ping
# Start: redis-server
```

**Port already in use:**
```bash
# Change ports in docker-compose.yml or .env
```

**Database errors:**
```bash
# Reset database
rm data/swarm.db
# Restart backend to recreate
```

## Next Steps

- Read full [Getting Started Guide](docs/getting-started.md)
- Explore [API Documentation](http://localhost:8000/docs)
- Check [Architecture Overview](docs/architecture.md)
- See [Examples](docs/examples.md)
