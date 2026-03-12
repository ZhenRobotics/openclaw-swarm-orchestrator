# Project Naming Convention

Official naming standards for OpenClaw Swarm Orchestrator across all platforms.

---

## Official Names

### Brand Name
**OpenClaw Swarm Orchestrator**
- Full project name for documentation and branding
- Used in: README, website, presentations

### Short Name
**Swarm Orchestrator**
- Abbreviated form for casual reference
- Used in: UI, casual documentation

---

## Platform-Specific Naming

### 1. npm Package

**Package Name:** `openclaw-swarm-orchestrator`

**Usage:**
```bash
# Installation
npm install openclaw-swarm-orchestrator

# or globally
npm install -g openclaw-swarm-orchestrator
```

**Package URL:**
- https://www.npmjs.com/package/openclaw-swarm-orchestrator

**Configuration:**
```json
{
  "name": "openclaw-swarm-orchestrator",
  "version": "0.1.0"
}
```

---

### 2. GitHub Repository

**Repository Name:** `openclaw-swarm-orchestrator`

**Full URL:**
- https://github.com/[username]/openclaw-swarm-orchestrator

**Clone Command:**
```bash
git clone https://github.com/[username]/openclaw-swarm-orchestrator.git
```

**Repository Topics (Suggested):**
```
ai-agents
orchestration
swarm
multi-agent
fastapi
react
python
typescript
agent-framework
```

---

### 3. ClawHub Skill

**Skill Name:** `swarm-orchestrator`

**Skill Metadata:**
```yaml
name: swarm-orchestrator
display_name: "Swarm Orchestrator"
description: "AI Agent cluster orchestration platform"
tags:
  - orchestration
  - multi-agent
  - ai-agents
  - swarm
  - automation
```

**ClawHub URL:**
- https://clawhub.ai/[username]/swarm-orchestrator

**Installation via ClawHub:**
```bash
clawhub install swarm-orchestrator
```

---

### 4. Docker Images

**Docker Hub:**
```
Backend:  openclaw/swarm-orchestrator-backend:latest
Frontend: openclaw/swarm-orchestrator-frontend:latest
```

**Docker Compose Service Names:**
```yaml
services:
  swarm-backend:
    image: openclaw/swarm-orchestrator-backend
  swarm-frontend:
    image: openclaw/swarm-orchestrator-frontend
```

---

### 5. Python Package (PyPI - Future)

**Package Name:** `openclaw-swarm-orchestrator`

**Installation:**
```bash
pip install openclaw-swarm-orchestrator
```

**Import Statement:**
```python
from swarm_orchestrator import Orchestrator, Agent, Task
```

**PyPI URL:**
- https://pypi.org/project/openclaw-swarm-orchestrator/

---

## Command Line Interface

### CLI Command Name
```bash
# Global installation creates command:
swarm-orchestrator

# Or with full name:
openclaw-swarm
```

### CLI Examples
```bash
# Start server
swarm-orchestrator start

# Check status
swarm-orchestrator status

# Create agent
swarm-orchestrator agent create --name "my-agent"
```

---

## URL Slugs & Identifiers

### URL-Safe Slugs
- **Lowercase with hyphens:** `openclaw-swarm-orchestrator`
- **Short form:** `swarm-orchestrator`

### Environment Variables
```bash
# Prefix: SWARM_ORCHESTRATOR_
SWARM_ORCHESTRATOR_API_KEY=...
SWARM_ORCHESTRATOR_DATABASE_URL=...
SWARM_ORCHESTRATOR_REDIS_URL=...
```

### Configuration Files
```
.swarm-orchestrator.yml
swarm-orchestrator.config.js
```

---

## Branding Guidelines

### Logo & Icon
- **Primary Color:** Blue (#3B82F6)
- **Accent Color:** Cyan (#06B6D4)
- **Icon:** Swarm/cluster representation

### Typography
- **Headings:** "OpenClaw Swarm Orchestrator"
- **Body:** "Swarm Orchestrator" or "the orchestrator"
- **Code:** `openclaw-swarm-orchestrator`

---

## Social Media & Marketing

### Hashtags
```
#SwarmOrchestrator
#OpenClaw
#AIAgents
#MultiAgent
#AgentOrchestration
```

### Social Handles (Suggested)
- Twitter: @SwarmOrchestrator
- GitHub: openclaw-swarm-orchestrator
- Discord: OpenClaw Swarm

---

## File & Directory Naming

### Project Root
```
openclaw-swarm-orchestrator/
```

### Module Names
```python
# Python
swarm_orchestrator/

# JavaScript/TypeScript
swarm-orchestrator/
```

### Database Tables
```sql
-- Prefix: swarm_
swarm_agents
swarm_tasks
swarm_executions
```

---

## Consistency Matrix

| Platform        | Name                              | Format      |
|-----------------|-----------------------------------|-------------|
| **Brand**       | OpenClaw Swarm Orchestrator       | Title Case  |
| **npm**         | openclaw-swarm-orchestrator       | kebab-case  |
| **GitHub**      | openclaw-swarm-orchestrator       | kebab-case  |
| **ClawHub**     | swarm-orchestrator                | kebab-case  |
| **Docker**      | openclaw/swarm-orchestrator       | kebab-case  |
| **PyPI**        | openclaw-swarm-orchestrator       | kebab-case  |
| **Python**      | swarm_orchestrator                | snake_case  |
| **CLI**         | swarm-orchestrator                | kebab-case  |
| **Env Vars**    | SWARM_ORCHESTRATOR_*              | SCREAMING_SNAKE_CASE |

---

## Domain Names (Future)

Suggested domains if needed:
- swarm-orchestrator.com
- openclaw-swarm.com
- clawswarm.io

---

## Version Naming

**Format:** Semantic Versioning (SemVer)
```
MAJOR.MINOR.PATCH

Examples:
0.1.0 - Initial release
0.2.0 - Minor feature update
1.0.0 - First stable release
```

**Git Tags:**
```bash
v0.1.0
v0.2.0
v1.0.0
```

---

## Documentation URLs

Once published:
- **Main Docs:** https://github.com/[username]/openclaw-swarm-orchestrator
- **API Docs:** https://[username].github.io/openclaw-swarm-orchestrator/
- **npm Docs:** https://www.npmjs.com/package/openclaw-swarm-orchestrator

---

## Quick Reference

**For Users:**
- Install: `npm install openclaw-swarm-orchestrator`
- Import: `import { Orchestrator } from 'openclaw-swarm-orchestrator'`
- Clone: `git clone https://github.com/[username]/openclaw-swarm-orchestrator.git`
- Skill: `clawhub install swarm-orchestrator`

**For Contributors:**
- Repository: openclaw-swarm-orchestrator
- Package: openclaw-swarm-orchestrator
- Modules: swarm_orchestrator (Python), swarm-orchestrator (JS)

---

**Last Updated:** 2026-03-11
**Version:** 1.0
**Status:** ✅ Finalized
