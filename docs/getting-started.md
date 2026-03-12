# Getting Started with Swarm Orchestrator

## Prerequisites

Before you begin, ensure you have the following installed:

- **Python 3.11+**
- **Node.js 18+**
- **Redis 6+**
- **Git**

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/ZhenRobotics/swarm-orchestrator.git
cd swarm-orchestrator
```

### 2. Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Linux/Mac:
source venv/bin/activate
# On Windows:
# venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create data directory
mkdir -p ../data ../logs

# Set up environment variables
cp ../.env.example .env
# Edit .env with your configuration

# Initialize database
python -c "import asyncio; from app.core.database import init_db; asyncio.run(init_db())"
```

### 3. Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env if needed
```

### 4. Start Redis

```bash
# On Ubuntu/Debian
sudo systemctl start redis

# On macOS with Homebrew
brew services start redis

# Or use Docker
docker run -d -p 6379:6379 redis:7-alpine
```

## Running the Application

### Development Mode

Open three terminal windows:

**Terminal 1 - Backend:**
```bash
cd backend
source venv/bin/activate
uvicorn app.main:app --reload
```

Backend will be available at: http://localhost:8000

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Frontend will be available at: http://localhost:3000

**Terminal 3 - Redis:**
Make sure Redis is running (check with `redis-cli ping`)

### Using Docker Compose

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

## Verify Installation

1. **Check Backend:**
   ```bash
   curl http://localhost:8000/health
   ```
   Should return:
   ```json
   {
     "status": "healthy",
     "redis": "connected",
     "database": "connected"
   }
   ```

2. **Check Frontend:**
   Open browser to http://localhost:3000

3. **Check API Documentation:**
   Open browser to http://localhost:8000/docs

## Create Your First Agent

### Using the Web UI

1. Go to http://localhost:3000/agents
2. Click "New Agent"
3. Fill in the details:
   - Name: "Test Agent"
   - Type: "llm"
   - Config: `{"model": "gpt-4"}`
4. Click "Create"

### Using the API

```bash
curl -X POST http://localhost:8000/api/agents \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Agent",
    "type": "llm",
    "config": {
      "model": "gpt-4",
      "temperature": 0.7
    },
    "capabilities": ["chat", "analysis"]
  }'
```

## Create Your First Task

### Using the Web UI

1. Go to http://localhost:3000/tasks
2. Click "New Task"
3. Fill in the details:
   - Title: "Test Task"
   - Description: "This is a test task"
   - Priority: "normal"
4. Click "Create"

### Using the API

```bash
curl -X POST http://localhost:8000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Analyze document",
    "description": "Extract key insights from document",
    "priority": "high",
    "input_data": {
      "document": "path/to/document.pdf"
    }
  }'
```

## Next Steps

- Read the [Architecture Documentation](./architecture.md)
- Explore the [API Reference](http://localhost:8000/docs)
- Check out [Examples](./examples.md)
- Learn about [Agent Development](./agent-development.md)

## Troubleshooting

### Backend won't start

- Check Python version: `python --version` (should be 3.11+)
- Check if Redis is running: `redis-cli ping`
- Check logs: `tail -f logs/swarm.log`

### Frontend won't start

- Check Node version: `node --version` (should be 18+)
- Clear node_modules: `rm -rf node_modules && npm install`
- Check if backend is running: `curl http://localhost:8000/health`

### Database errors

- Delete and recreate: `rm data/swarm.db && python -c "...init_db()..."`
- Check file permissions on `data/` directory

### Redis connection errors

- Ensure Redis is running: `redis-cli ping`
- Check Redis URL in `.env`
- Try connecting manually: `redis-cli`

## Support

If you encounter issues:

1. Check the [FAQ](./faq.md)
2. Search [existing issues](https://github.com/ZhenRobotics/swarm-orchestrator/issues)
3. Create a [new issue](https://github.com/ZhenRobotics/swarm-orchestrator/issues/new)
