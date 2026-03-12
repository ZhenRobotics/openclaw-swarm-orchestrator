# Publishing Guide

Complete guide for publishing OpenClaw Swarm Orchestrator to multiple platforms.

---

## Pre-Publishing Checklist

### Code Quality
- [ ] All tests pass (`npm run test:backend` & `npm run test:frontend`)
- [ ] Code linted (`npm run lint:backend` & `npm run lint:frontend`)
- [ ] Documentation updated
- [ ] CHANGELOG.md updated with version changes
- [ ] Version numbers updated in all files

### Naming Consistency
- [ ] README.md title: "OpenClaw Swarm Orchestrator"
- [ ] package.json name: "openclaw-swarm-orchestrator"
- [ ] setup.py name: "openclaw-swarm-orchestrator"
- [ ] SKILL.md name: "swarm-orchestrator"
- [ ] GitHub repository: openclaw-swarm-orchestrator
- [ ] All URLs and references updated

---

## Platform 1: GitHub

### Repository Setup

1. **Create Repository**
   ```bash
   # Name: openclaw-swarm-orchestrator
   # Description: AI Agent cluster orchestration platform
   # Public/Private: Public
   # Initialize: None (already have repo)
   ```

2. **Update Remote**
   ```bash
   git remote set-url origin https://github.com/[username]/openclaw-swarm-orchestrator.git
   ```

3. **Push Code**
   ```bash
   git push -u origin main
   git push --tags
   ```

4. **Repository Settings**
   - Add topics: `ai-agents`, `orchestration`, `swarm`, `multi-agent`, `fastapi`, `react`
   - Add description: "AI Agent cluster orchestration platform"
   - Set homepage: Link to docs site
   - Enable Issues, Discussions, Wiki

5. **Create Release**
   - Go to: https://github.com/[username]/openclaw-swarm-orchestrator/releases/new
   - Tag: `v0.1.0`
   - Title: "v0.1.0 - Initial Release"
   - Description: Copy from CHANGELOG.md
   - Attach: None (code auto-attached)
   - Mark as "pre-release" for alpha versions

### GitHub Actions (Optional)

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on: [push, pull_request]

jobs:
  backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      - run: cd backend && pip install -r requirements.txt
      - run: cd backend && pytest

  frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: cd frontend && npm install
      - run: cd frontend && npm test
```

---

## Platform 2: npm

### Preparation

1. **Update package.json**
   - Verify name: `openclaw-swarm-orchestrator`
   - Update version: `0.1.0`
   - Add repository URL
   - Add keywords
   - Add license

2. **Create .npmignore**
   ```
   # Development
   .git/
   .github/
   node_modules/

   # Testing
   tests/
   coverage/

   # Documentation
   docs/
   *.md
   !README.md

   # Environment
   .env
   .env.*

   # Data
   data/
   logs/
   ```

3. **Build Package**
   ```bash
   # Test build locally
   npm pack

   # Verify contents
   tar -tzf openclaw-swarm-orchestrator-0.1.0.tgz
   ```

### Publishing

1. **Login to npm**
   ```bash
   npm login
   # Enter: username, password, email, OTP
   ```

2. **Publish Package**
   ```bash
   npm publish

   # For scoped package (optional):
   # npm publish --access public
   ```

3. **Verify Publication**
   ```bash
   # Check on npm
   npm view openclaw-swarm-orchestrator

   # Test installation
   npm install -g openclaw-swarm-orchestrator
   ```

4. **Update npm Page**
   - Visit: https://www.npmjs.com/package/openclaw-swarm-orchestrator
   - Verify README displays correctly
   - Check badges and links

### npm Maintenance

```bash
# Update package
npm version patch  # 0.1.0 -> 0.1.1
npm version minor  # 0.1.0 -> 0.2.0
npm version major  # 0.1.0 -> 1.0.0
npm publish

# Unpublish (within 72 hours only)
npm unpublish openclaw-swarm-orchestrator@0.1.0

# Deprecate old version
npm deprecate openclaw-swarm-orchestrator@0.1.0 "Please upgrade to 0.2.0"
```

---

## Platform 3: PyPI (Python Package)

### Preparation

1. **Install Tools**
   ```bash
   pip install build twine
   ```

2. **Verify setup.py**
   - Check name: `openclaw-swarm-orchestrator`
   - Update version: `0.1.0`
   - Verify classifiers
   - Check dependencies

3. **Build Package**
   ```bash
   cd backend
   python -m build

   # Creates:
   # dist/openclaw_swarm_orchestrator-0.1.0.tar.gz
   # dist/openclaw_swarm_orchestrator-0.1.0-py3-none-any.whl
   ```

### Publishing

1. **Upload to TestPyPI (Testing)**
   ```bash
   twine upload --repository testpypi dist/*

   # Test installation
   pip install --index-url https://test.pypi.org/simple/ openclaw-swarm-orchestrator
   ```

2. **Upload to PyPI (Production)**
   ```bash
   twine upload dist/*
   ```

3. **Verify**
   ```bash
   pip install openclaw-swarm-orchestrator
   python -c "from swarm_orchestrator import Orchestrator; print('Success!')"
   ```

4. **Update PyPI Page**
   - Visit: https://pypi.org/project/openclaw-swarm-orchestrator/
   - Verify README renders correctly

---

## Platform 4: ClawHub

### Preparation

1. **Update SKILL.md**
   - Verify name: `swarm-orchestrator`
   - Update version: `0.1.0`
   - Add all required fields
   - Verify metadata format

2. **Verify Requirements**
   - Check all dependencies listed
   - Verify installation instructions
   - Test skill locally

### Publishing

1. **Login to ClawHub**
   - Visit: https://clawhub.ai
   - Login with your account

2. **Upload Skill**
   - Go to: Create New Skill
   - Upload SKILL.md
   - Set visibility (public/private)
   - Add tags

3. **Configure Skill**
   ```yaml
   Name: swarm-orchestrator
   Display Name: Swarm Orchestrator
   Version: 0.1.0
   Description: AI Agent cluster orchestration platform
   Category: Automation, AI Agents
   ```

4. **Test Installation**
   ```bash
   clawhub install swarm-orchestrator
   clawhub run swarm-orchestrator --help
   ```

5. **Verify Skill Page**
   - Visit: https://clawhub.ai/[username]/swarm-orchestrator
   - Check description, screenshots, examples
   - Verify installation instructions

---

## Platform 5: Docker Hub

### Preparation

1. **Build Images**
   ```bash
   # Backend
   docker build -t openclaw/swarm-orchestrator-backend:0.1.0 ./backend
   docker tag openclaw/swarm-orchestrator-backend:0.1.0 openclaw/swarm-orchestrator-backend:latest

   # Frontend
   docker build -t openclaw/swarm-orchestrator-frontend:0.1.0 ./frontend
   docker tag openclaw/swarm-orchestrator-frontend:0.1.0 openclaw/swarm-orchestrator-frontend:latest
   ```

2. **Test Images**
   ```bash
   docker-compose up
   # Verify functionality
   ```

### Publishing

1. **Login to Docker Hub**
   ```bash
   docker login
   ```

2. **Push Images**
   ```bash
   docker push openclaw/swarm-orchestrator-backend:0.1.0
   docker push openclaw/swarm-orchestrator-backend:latest

   docker push openclaw/swarm-orchestrator-frontend:0.1.0
   docker push openclaw/swarm-orchestrator-frontend:latest
   ```

3. **Update Docker Hub Pages**
   - Visit: https://hub.docker.com/u/openclaw
   - Update descriptions
   - Add README from GitHub
   - Set as public

---

## Post-Publishing Checklist

### Verification
- [ ] GitHub repository accessible
- [ ] npm package installable: `npm install -g openclaw-swarm-orchestrator`
- [ ] PyPI package installable: `pip install openclaw-swarm-orchestrator`
- [ ] ClawHub skill installable: `clawhub install swarm-orchestrator`
- [ ] Docker images pullable: `docker pull openclaw/swarm-orchestrator-backend`

### Documentation
- [ ] README.md has correct installation instructions
- [ ] All links work (npm, GitHub, ClawHub)
- [ ] Badges updated with correct version
- [ ] API documentation accessible

### Communication
- [ ] Post announcement on social media
- [ ] Update project website
- [ ] Notify users/community
- [ ] Create blog post/article

### Monitoring
- [ ] Set up GitHub notifications
- [ ] Monitor npm download stats
- [ ] Watch for issues/bug reports
- [ ] Track user feedback

---

## Version Update Process

When releasing a new version:

1. **Update Version Numbers**
   ```bash
   # Update in all files:
   - package.json (root)
   - frontend/package.json
   - backend/setup.py
   - SKILL.md
   ```

2. **Update CHANGELOG.md**
   ```markdown
   ## [0.2.0] - 2026-XX-XX
   ### Added
   - New feature X
   ### Fixed
   - Bug Y
   ```

3. **Create Git Tag**
   ```bash
   git tag -a v0.2.0 -m "Release v0.2.0"
   git push origin v0.2.0
   ```

4. **Publish to All Platforms**
   - Follow checklists above for each platform
   - Ensure consistency across all platforms

---

## Rollback Procedure

If you need to unpublish/rollback:

### npm
```bash
npm unpublish openclaw-swarm-orchestrator@0.1.0  # Within 72 hours
# or
npm deprecate openclaw-swarm-orchestrator@0.1.0 "Use 0.1.1 instead"
```

### PyPI
```bash
# Cannot unpublish, can only yank
pip install twine
twine upload --skip-existing dist/*
```

### GitHub
- Delete release
- Delete tag: `git tag -d v0.1.0 && git push origin :refs/tags/v0.1.0`

### Docker Hub
- Delete image version from web interface

---

## Support & Maintenance

After publishing:

1. **Monitor Channels**
   - GitHub Issues
   - npm package page
   - ClawHub discussions
   - Social media mentions

2. **Regular Updates**
   - Security patches
   - Bug fixes
   - Feature additions
   - Documentation improvements

3. **Community Engagement**
   - Respond to issues
   - Review pull requests
   - Update examples
   - Write tutorials

---

**Last Updated:** 2026-03-11
**Version:** 1.0
