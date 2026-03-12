---
name: swarm-orchestrator
display_name: "Swarm Orchestrator"
description: AI Agent cluster orchestration platform - manage, schedule, and coordinate multiple AI agents locally with FastAPI backend and React dashboard
version: 0.1.0
author: OpenClaw Team
license: MIT
tags: [orchestration, multi-agent, ai-agents, swarm, automation, fastapi, python, react, local-first]

# Security & Requirements Declaration
requires:
  # System tools (must be pre-installed)
  tools:
    - name: python
      version: ">=3.11"
      purpose: Backend runtime
    - name: node
      version: ">=18"
      purpose: Frontend build and runtime
    - name: redis
      version: ">=6"
      purpose: Task queue and caching
    - name: docker
      version: ">=20"
      purpose: Optional containerized deployment
      optional: true

  # Environment variables (all optional)
  env:
    - name: DATABASE_URL
      description: Database connection string
      default: "sqlite+aiosqlite:///./data/swarm.db"
      required: false
      sensitive: false
    - name: REDIS_URL
      description: Redis connection URL
      default: "redis://localhost:6379"
      required: false
      sensitive: false
    - name: SECRET_KEY
      description: Application secret key for sessions
      default: "generated-on-first-run"
      required: false
      sensitive: true
    - name: OPENAI_API_KEY
      description: Optional OpenAI API key for LLM agents
      required: false
      sensitive: true
    - name: ANTHROPIC_API_KEY
      description: Optional Anthropic API key for Claude agents
      required: false
      sensitive: true

  # Package to install
  packages:
    - name: openclaw-swarm-orchestrator
      source: npm
      version: "0.1.0"
      verified_repo: https://github.com/ZhenRobotics/openclaw-swarm-orchestrator
      verified_commit: 01aacd6
      install_command: "npm install -g openclaw-swarm-orchestrator"

# Network & Security Policy
network:
  external_servers:
    - description: "No external servers required for core functionality"
    - description: "Optional: OpenAI/Anthropic APIs if using LLM agents (user-controlled)"
  data_collection: none
  telemetry: none
  local_only: true

# Installation verification
verification:
  check_commands:
    - "swarm-orchestrator --version"
    - "curl http://localhost:8000/health"
  expected_files:
    - "~/.swarm-orchestrator/config.yml"
    - "./data/swarm.db"
---

# Swarm Orchestrator Skill

**Status:** 🟢 Local-First AI Agent Orchestration Platform
**Type:** Self-hosted, no external dependencies required
**Privacy:** 100% local processing (except optional LLM API calls)

---

## 🔒 Security & Trust

### What This Skill Does
- **Runs locally** on your machine (backend + frontend)
- **No telemetry** or data collection
- **No external servers** required for core functionality
- **Optional API keys** only needed if you use LLM agents (OpenAI/Claude)
- **Open source** - all code is auditable

### What This Skill Does NOT Do
- ❌ Does not send data to external servers (except optional LLM APIs)
- ❌ Does not collect analytics or telemetry
- ❌ Does not require account registration
- ❌ Does not access your files without permission
- ❌ Does not run background processes without your knowledge

### Data Storage
- **Database:** SQLite file in `./data/swarm.db` (local only)
- **Logs:** Text files in `./logs/` (local only)
- **Cache:** Redis on localhost (local only)
- **No cloud sync** or remote storage

---

## 📋 Overview

OpenClaw Swarm Orchestrator is a **local-first** platform for building and managing multi-agent AI systems. Think of it as a "control tower" for coordinating multiple AI agents working together.

### Core Features

- **Agent Registry** - Register LLM, Tool, Human, and Custom agents
- **Task Queue** - Priority-based task distribution with dependencies
- **Real-time Dashboard** - Web UI to monitor agents and tasks
- **RESTful API** - Complete REST API for programmatic control
- **Local Storage** - All data stays on your machine

### Architecture

```
┌─────────────────┐
│  Web Dashboard  │  http://localhost:3000
│   (React UI)    │
└────────┬────────┘
         │
┌────────▼────────┐
│  FastAPI Server │  http://localhost:8000
│  (Backend API)  │
└────────┬────────┘
         │
┌────────▼────────┐
│ Local Storage   │
│ • SQLite DB     │  ./data/swarm.db
│ • Redis Cache   │  localhost:6379
│ • Log Files     │  ./logs/*.log
└─────────────────┘
```

---

## 🚀 Installation

### Prerequisites Check

Before installing, verify you have:

```bash
# Python 3.11+
python --version

# Node.js 18+
node --version

# Redis
redis-cli ping  # Should return PONG

# (Optional) Docker
docker --version
```

### Method 1: Using Docker (Recommended - Easiest)

**This is the safest method** - everything runs in containers.

```bash
# 1. Clone repository (inspect code first!)
git clone https://github.com/ZhenRobotics/openclaw-swarm-orchestrator.git
cd openclaw-swarm-orchestrator

# 2. Review docker-compose.yml before starting
cat docker-compose.yml

# 3. Start services
docker-compose up -d

# 4. Verify
curl http://localhost:8000/health
# Should return: {"status": "healthy"}
```

Access:
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8000
- **API Docs:** http://localhost:8000/docs

### Method 2: Local Installation (For Development)

```bash
# 1. Install via npm (after reviewing package)
npm view openclaw-swarm-orchestrator  # Review before installing
npm install -g openclaw-swarm-orchestrator

# 2. Verify installation
swarm-orchestrator --version

# 3. Start services (in separate terminals)

# Terminal 1: Start Redis
redis-server

# Terminal 2: Start backend
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload

# Terminal 3: Start frontend
cd frontend
npm install
npm run dev
```

### Method 3: From Source (Most Transparent)

```bash
# 1. Clone and inspect
git clone https://github.com/ZhenRobotics/openclaw-swarm-orchestrator.git
cd openclaw-swarm-orchestrator

# 2. Verify commit hash (security check)
git log -1 --format="%H"
# Should be: 505f957... (or latest release tag)

# 3. Review code before running
cat backend/requirements.txt  # Check dependencies
cat package.json              # Check npm deps
cat docker-compose.yml        # Check container config

# 4. Install dependencies
cd backend && pip install -r requirements.txt
cd ../frontend && npm install

# 5. Run (see Method 2 for detailed steps)
```

---

## ⚙️ Configuration

### Minimal Configuration (Local Only)

Create `.env` in project root:

```bash
# Minimal config - no external services needed
DATABASE_URL=sqlite+aiosqlite:///./data/swarm.db
REDIS_URL=redis://localhost:6379
SECRET_KEY=your-random-secret-key-here
DEBUG=true
```

### Optional: LLM Agent Support

If you want to use LLM agents (OpenAI, Anthropic), add:

```bash
# Optional - only if using LLM agents
OPENAI_API_KEY=sk-your-key-here
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

**⚠️ Security Note:**
- Only add API keys if you plan to use LLM agents
- Store `.env` file securely (not in git)
- API keys are never sent to our servers (only to official LLM providers)

---

## 💻 Basic Usage

### 1. Start the System

```bash
# Using Docker
docker-compose up -d

# Or manually
redis-server &
cd backend && uvicorn app.main:app --reload &
cd frontend && npm run dev &
```

### 2. Create Your First Agent

**Via Web UI:**
1. Open http://localhost:3000
2. Go to "Agents" page
3. Click "New Agent"
4. Fill in:
   - Name: "My Assistant"
   - Type: "llm" (or "tool", "human", "custom")
   - Config: `{"model": "gpt-4"}` (if using LLM)

**Via API:**
```bash
curl -X POST http://localhost:8000/api/agents \
  -H "Content-Type: application/json" \
  -d '{
    "name": "My Assistant",
    "type": "llm",
    "config": {"model": "gpt-4"}
  }'
```

### 3. Create a Task

```bash
curl -X POST http://localhost:8000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Analyze data",
    "description": "Process the sales report",
    "priority": "high"
  }'
```

### 4. Monitor Status

**Web Dashboard:** http://localhost:3000

**API:**
```bash
# System status
curl http://localhost:8000/api/orchestrator/status

# List agents
curl http://localhost:8000/api/agents

# List tasks
curl http://localhost:8000/api/tasks
```

---

## 🔧 Agent Types

### 1. LLM Agents (Requires API Key)

Uses external LLM APIs (OpenAI, Anthropic).

```json
{
  "name": "GPT-4 Assistant",
  "type": "llm",
  "config": {
    "model": "gpt-4",
    "temperature": 0.7
  }
}
```

**Required:** `OPENAI_API_KEY` or `ANTHROPIC_API_KEY`

### 2. Tool Agents (Local Only)

Executes local functions/scripts.

```json
{
  "name": "Data Processor",
  "type": "tool",
  "config": {
    "script_path": "./tools/process_data.py"
  }
}
```

**No external services needed.**

### 3. Human Agents (Local Only)

Human-in-the-loop workflows.

```json
{
  "name": "Manager Approval",
  "type": "human",
  "config": {
    "notification": "email"
  }
}
```

**No external services needed.**

### 4. Custom Agents (User-Defined)

You define the behavior.

```python
from swarm_orchestrator.base import BaseAgent

class MyCustomAgent(BaseAgent):
    async def execute(self, task):
        # Your custom logic
        return result
```

**No external services needed.**

---

## 📊 Monitoring & Logs

### Web Dashboard

Access at http://localhost:3000:
- Real-time agent status
- Task queue monitoring
- System statistics
- Execution logs

### Log Files

All logs stored locally:

```bash
# Application logs
tail -f logs/swarm.log

# Docker logs (if using Docker)
docker-compose logs -f
```

### API Monitoring

```bash
# Health check
curl http://localhost:8000/health

# Statistics
curl http://localhost:8000/api/orchestrator/stats

# Agent list
curl http://localhost:8000/api/agents
```

---

## 🔐 Security Best Practices

### 1. API Keys
- ✅ Store in `.env` file (not in code)
- ✅ Set file permissions: `chmod 600 .env`
- ✅ Add `.env` to `.gitignore`
- ✅ Never commit API keys to git

### 2. Network Security
- ✅ Firewall: Block ports 8000, 3000 from external access
- ✅ Use localhost only (not 0.0.0.0) for development
- ✅ Enable HTTPS in production

### 3. Data Privacy
- ✅ All data stored locally in `./data/`
- ✅ Database file permissions: `chmod 600 data/swarm.db`
- ✅ Regular backups: `cp data/swarm.db backups/`

### 4. Before Running
- ✅ Review `docker-compose.yml`
- ✅ Inspect `backend/requirements.txt`
- ✅ Check `frontend/package.json`
- ✅ Run `npm audit` and `pip check`

---

## 🐛 Troubleshooting

### Backend won't start

```bash
# Check Python version
python --version  # Must be 3.11+

# Check Redis
redis-cli ping  # Must return PONG

# Check logs
tail -f logs/swarm.log
```

### Frontend won't start

```bash
# Check Node version
node --version  # Must be 18+

# Clear cache
cd frontend
rm -rf node_modules
npm install
```

### Database errors

```bash
# Reset database (WARNING: deletes all data)
rm data/swarm.db

# Restart backend (auto-creates tables)
uvicorn app.main:app --reload
```

### Port conflicts

```bash
# Check ports
lsof -i :8000  # Backend
lsof -i :3000  # Frontend
lsof -i :6379  # Redis

# Kill processes if needed
kill -9 <PID>
```

---

## 📚 Documentation

- **Main Docs:** [README.md](https://github.com/ZhenRobotics/openclaw-swarm-orchestrator/blob/main/README.md)
- **Quick Start:** [QUICKSTART.md](https://github.com/ZhenRobotics/openclaw-swarm-orchestrator/blob/main/QUICKSTART.md)
- **API Reference:** http://localhost:8000/docs (after starting backend)
- **Architecture:** [docs/architecture.md](https://github.com/ZhenRobotics/openclaw-swarm-orchestrator/blob/main/docs/architecture.md)

---

## 🤝 Support & Community

- **Issues:** https://github.com/ZhenRobotics/openclaw-swarm-orchestrator/issues
- **Discussions:** https://github.com/ZhenRobotics/openclaw-swarm-orchestrator/discussions
- **Security:** Report vulnerabilities privately to security@openclaw.ai

---

## 📜 License

MIT License - see [LICENSE](https://github.com/ZhenRobotics/openclaw-swarm-orchestrator/blob/main/LICENSE)

---

## ✅ Pre-Installation Checklist

Before using this skill:

- [ ] Review source code on GitHub
- [ ] Verify commit hash: `505f957`
- [ ] Check `requirements.txt` and `package.json`
- [ ] Read security policy above
- [ ] Understand data storage locations
- [ ] Know which API keys you need (if any)
- [ ] Run in isolated environment first (optional)

---

## 🎯 Use Cases

### 1. Multi-Agent Workflows
```python
# Research → Write → Review pipeline
research_agent = Agent(name="Researcher", type="llm")
writer_agent = Agent(name="Writer", type="llm")
reviewer_agent = Agent(name="Reviewer", type="human")

# Tasks auto-execute in order
```

### 2. Load Balancing
```python
# Multiple agents processing tasks in parallel
workers = [Agent(name=f"Worker-{i}", type="tool") for i in range(5)]
# Orchestrator auto-assigns tasks
```

### 3. Human-in-the-Loop
```python
# AI processes, human approves
ai_agent = Agent(name="AI", type="llm")
human_agent = Agent(name="Manager", type="human")
```

---

**Version:** 0.1.0
**Status:** Alpha - Active Development
**Local-First:** ✅ All core features work offline
**Privacy:** ✅ No data leaves your machine (except optional LLM calls)

---

*Built with privacy and transparency in mind. Inspect the code before you trust it.*
