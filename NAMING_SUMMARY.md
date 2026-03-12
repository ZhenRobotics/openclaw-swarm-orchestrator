# 🏷️ OpenClaw Swarm Orchestrator - Naming Summary

Quick reference for project naming across all platforms.

---

## ✅ Confirmed Official Names

| Platform | Name | Format | Status |
|----------|------|--------|--------|
| **Brand** | OpenClaw Swarm Orchestrator | Title Case | ✅ Confirmed |
| **npm** | `openclaw-swarm-orchestrator` | kebab-case | ✅ Confirmed |
| **GitHub** | `openclaw-swarm-orchestrator` | kebab-case | ✅ Confirmed |
| **ClawHub** | `swarm-orchestrator` | kebab-case | ✅ Confirmed |
| **PyPI** | `openclaw-swarm-orchestrator` | kebab-case | Ready |
| **Docker Hub** | `openclaw/swarm-orchestrator-*` | kebab-case | Ready |

---

## 📦 Installation Commands

### npm (Node Package Manager)
```bash
npm install -g openclaw-swarm-orchestrator
```

### pip (Python Package Index)
```bash
pip install openclaw-swarm-orchestrator
```

### ClawHub (AI Agent Skill Platform)
```bash
clawhub install swarm-orchestrator
```

### Docker
```bash
docker pull openclaw/swarm-orchestrator-backend:latest
docker pull openclaw/swarm-orchestrator-frontend:latest
```

### Git Clone
```bash
git clone https://github.com/[username]/openclaw-swarm-orchestrator.git
```

---

## 🔗 URLs

### Repository
```
https://github.com/[username]/openclaw-swarm-orchestrator
```

### Package Registries
```
npm:      https://www.npmjs.com/package/openclaw-swarm-orchestrator
PyPI:     https://pypi.org/project/openclaw-swarm-orchestrator/
ClawHub:  https://clawhub.ai/[username]/swarm-orchestrator
Docker:   https://hub.docker.com/r/openclaw/swarm-orchestrator-backend
```

### Documentation
```
Docs:     https://github.com/[username]/openclaw-swarm-orchestrator/blob/main/README.md
API:      http://localhost:8000/docs (after installation)
```

---

## 💻 Usage Examples

### Import in JavaScript/TypeScript
```javascript
import { Orchestrator } from 'openclaw-swarm-orchestrator';
```

### Import in Python
```python
from swarm_orchestrator import Orchestrator, Agent, Task
```

### CLI Usage
```bash
swarm-orchestrator start
swarm-orchestrator status
```

---

## 📝 File & Code Naming

### Package Names in Code
```javascript
// package.json
{
  "name": "openclaw-swarm-orchestrator",
  "version": "0.1.0"
}
```

```python
# setup.py
setup(
    name="openclaw-swarm-orchestrator",
    version="0.1.0"
)
```

### Module Names
```python
# Python import path
from swarm_orchestrator import Orchestrator
```

```javascript
// JavaScript import path
import { Orchestrator } from 'openclaw-swarm-orchestrator';
```

### Environment Variables
```bash
SWARM_ORCHESTRATOR_API_KEY=...
SWARM_ORCHESTRATOR_DATABASE_URL=...
```

---

## 🎨 Branding Guidelines

### When to Use Each Name

**"OpenClaw Swarm Orchestrator"** (Full Brand Name)
- Documentation headers
- Website titles
- Marketing materials
- Press releases
- Blog posts

**"Swarm Orchestrator"** (Short Name)
- Casual references
- UI elements
- Conversation
- Social media

**`openclaw-swarm-orchestrator`** (Technical Name)
- Package names
- Repository names
- File paths
- Code references
- Installation commands

**`swarm-orchestrator`** (Skill Name)
- ClawHub skill marketplace
- AI agent context
- Skill-specific documentation

---

## 📋 Pre-Publishing Checklist

Before publishing to any platform, verify:

- [ ] Brand name in README.md: "OpenClaw Swarm Orchestrator"
- [ ] npm package.json name: "openclaw-swarm-orchestrator"
- [ ] Python setup.py name: "openclaw-swarm-orchestrator"
- [ ] ClawHub SKILL.md name: "swarm-orchestrator"
- [ ] GitHub repository name: openclaw-swarm-orchestrator
- [ ] All URLs updated with correct repository path
- [ ] Docker image names: openclaw/swarm-orchestrator-*
- [ ] Version numbers consistent across all files
- [ ] CHANGELOG.md updated
- [ ] Documentation reviewed

---

## 🚀 Quick Publishing Commands

### Publish to npm
```bash
npm login
npm publish
```

### Publish to PyPI
```bash
cd backend
python -m build
twine upload dist/*
```

### Publish to GitHub
```bash
git push origin main
git push --tags
# Then create release at: /releases/new
```

### Publish to Docker Hub
```bash
docker login
docker push openclaw/swarm-orchestrator-backend:latest
docker push openclaw/swarm-orchestrator-frontend:latest
```

---

## 📚 Documentation Files

All naming-related documentation:

1. **NAMING.md** - Complete naming guidelines (detailed)
2. **NAMING_SUMMARY.md** - This file (quick reference)
3. **PUBLISHING.md** - Multi-platform publishing guide
4. **SKILL.md** - ClawHub skill definition
5. **README.md** - Main project documentation

---

## ✨ Consistency Matrix

| Context | Use This Name |
|---------|---------------|
| Talking about the project | "OpenClaw Swarm Orchestrator" or "Swarm Orchestrator" |
| Installing from npm | `npm install openclaw-swarm-orchestrator` |
| Installing from pip | `pip install openclaw-swarm-orchestrator` |
| Installing from ClawHub | `clawhub install swarm-orchestrator` |
| GitHub repository URL | `.../openclaw-swarm-orchestrator` |
| Docker image name | `openclaw/swarm-orchestrator-backend` |
| Python import | `from swarm_orchestrator import ...` |
| JavaScript import | `from 'openclaw-swarm-orchestrator'` |
| Environment variable prefix | `SWARM_ORCHESTRATOR_` |

---

## 🔄 Version Management

Current version: **0.1.0** (Alpha)

When updating versions, update in ALL these files:
- `package.json` (root)
- `frontend/package.json`
- `backend/setup.py`
- `SKILL.md`
- `CHANGELOG.md`

```bash
# Example version bump
npm version minor  # 0.1.0 -> 0.2.0
git tag -a v0.2.0 -m "Release v0.2.0"
git push origin v0.2.0
```

---

## 📞 Support & Contact

If you have questions about naming or need to change anything:

1. Check [NAMING.md](NAMING.md) for detailed guidelines
2. Review [PUBLISHING.md](PUBLISHING.md) for platform-specific instructions
3. Open an issue on GitHub
4. Contact the OpenClaw team

---

**Status:** ✅ Naming convention finalized and documented
**Last Updated:** 2026-03-12
**Version:** 1.0

---

## 🎯 Key Takeaways

1. **Consistency is key** - Use the same name format on each type of platform
2. **Brand vs Technical** - "OpenClaw Swarm Orchestrator" for branding, `openclaw-swarm-orchestrator` for code
3. **Platform-specific** - ClawHub uses shorter `swarm-orchestrator` name
4. **Document everything** - All naming decisions are documented in NAMING.md
5. **Check before publishing** - Use the pre-publishing checklist

**Remember:** When in doubt, refer to NAMING.md for the complete guidelines!
