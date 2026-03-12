# Project Migration Status - IMPORTANT

**Date:** 2026-03-12
**Status:** ⚠️ ACTION REQUIRED

---

## 🚨 Critical Issue Identified

### The Problem

Your local repository contains the **NEW** swarm-orchestrator code, but the Git remote still points to the **OLD** openclaw-video-generator repository:

```bash
# Current Git remote (WRONG):
origin  git@github.com:ZhenRobotics/openclaw-video-generator.git

# Should be (CORRECT):
origin  git@github.com:ZhenRobotics/openclaw-swarm-orchestrator.git
       or
origin  git@github.com:ZhenRobotics/openclaw-swarm-orchestrator.git
```

### Why This Matters

- ✅ Your **local code** is the new swarm-orchestrator (correct)
- ✅ Your **SKILL.md** describes swarm-orchestrator (correct)
- ❌ Your **Git remote** points to old video-generator repo (wrong)
- ❌ ClawHub reads from that old repo URL (sees wrong content!)

**Result:** ClawHub sees mismatched information:
- Registry metadata points to old video-generator repo
- SKILL.md describes new swarm-orchestrator
- Version numbers don't match
- Features don't match

---

## ✅ Solution: Choose One Option

### Option 1: Create New GitHub Repository (Recommended)

This is the cleanest approach for a completely new project.

#### Step 1: Create New Repo on GitHub

1. Go to https://github.com/new
2. Repository name: `openclaw-swarm-orchestrator`
3. Description: "AI Agent cluster orchestration platform"
4. Public
5. **Do NOT initialize** (no README, no .gitignore)
6. Click "Create repository"

#### Step 2: Update Local Git Remote

```bash
# Remove old remote
git remote remove origin

# Add new remote
git remote add origin git@github.com:ZhenRobotics/openclaw-swarm-orchestrator.git

# Or if you don't have SSH keys:
git remote add origin https://github.com/ZhenRobotics/openclaw-swarm-orchestrator.git

# Verify
git remote -v
```

#### Step 3: Push to New Repository

```bash
# Push all branches
git push -u origin main

# Push all tags
git push origin --tags

# Verify on GitHub
# Visit: https://github.com/ZhenRobotics/openclaw-swarm-orchestrator
```

#### Step 4: Update Documentation

Replace `ZhenRobotics` in these files:

```bash
# Files to update:
- SKILL.md (line 59)
- README.md
- package.json
- backend/setup.py
- PUBLISHING.md
- CLAWHUB_SUBMISSION_GUIDE.md

# Quick command:
find . -type f \( -name "*.md" -o -name "*.json" -o -name "*.py" \) \
  -not -path "*/node_modules/*" \
  -not -path "*/.git/*" \
  -exec sed -i 's/ZhenRobotics/ZhenRobotics/g' {} +
```

#### Step 5: Create GitHub Release

```bash
# Tag current commit
git tag -a v0.1.0 -m "Initial release of Swarm Orchestrator"
git push origin v0.1.0

# Then create release on GitHub:
# https://github.com/ZhenRobotics/openclaw-swarm-orchestrator/releases/new
```

---

### Option 2: Use Existing Repo (Force Push)

⚠️ **WARNING:** This will **overwrite** the old openclaw-video-generator repository. Only do this if you're sure!

```bash
# Backup old repo first!
cd ..
git clone git@github.com:ZhenRobotics/openclaw-video-generator.git video-generator-backup

# Then force push new content
cd openclaw-swarm-orchestrator
git push -f origin main
git push -f origin --tags

# Update repo settings on GitHub:
# 1. Go to repo Settings
# 2. Change repository name to: openclaw-swarm-orchestrator
# 3. Update description
```

---

### Option 3: Create Organization Repository

If you want to use the "openclaw" organization:

```bash
# Create repo under organization
# https://github.com/organizations/openclaw/repositories/new

# Update remote
git remote set-url origin git@github.com:openclaw/swarm-orchestrator.git

# Push
git push -u origin main
git push origin --tags
```

---

## 📋 Post-Migration Checklist

After creating the new repository:

- [ ] Verify new repo URL: `https://github.com/ZhenRobotics/openclaw-swarm-orchestrator`
- [ ] Verify git remote: `git remote -v`
- [ ] Verify all code pushed: Check GitHub repo
- [ ] Update all documentation with correct repo URL
- [ ] Create release v0.1.0
- [ ] Update SKILL.md with correct repo URL
- [ ] Test clone from new repo: `git clone <new-url> test && cd test && ls`

---

## 🔄 Update SKILL.md for ClawHub

After creating the new repository, update SKILL.md:

```yaml
packages:
  - name: openclaw-swarm-orchestrator
    source: npm
    version: "0.1.0"
    verified_repo: https://github.com/ZhenRobotics/openclaw-swarm-orchestrator
    verified_commit: e5c06bf  # Latest commit (update this)
```

Then commit:

```bash
git add SKILL.md
git commit -m "Update SKILL.md with correct repository URL"
git push origin main
```

---

## ❌ What NOT to Do

- ❌ Don't push swarm-orchestrator code to video-generator repo without renaming
- ❌ Don't keep the old remote URL in production
- ❌ Don't publish to ClawHub before fixing the repo URL
- ❌ Don't skip updating all documentation files

---

## ✅ What the ClawHub Feedback Was Really About

The feedback you received mentions:
- "text-to-video tool" ← Old project
- "OpenAI TTS/Whisper and Remotion" ← Old project
- "~/openclaw-video-generator" ← Old project
- "scripts/script-to-video.sh" ← Old project
- Multi-provider TTS (Azure, Aliyun, Tencent) ← Old project

**This feedback is for the OLD project**, not your NEW swarm-orchestrator!

ClawHub is reading from the old GitHub repository (because that's what the remote URL points to).

---

## 🎯 Correct Project Information

### OLD Project (to be archived)
- Name: openclaw-video-generator
- Purpose: Text-to-video generation
- Tech: Node.js + Remotion + TTS/ASR
- Repo: https://github.com/ZhenRobotics/openclaw-video-generator
- Status: ⛔ Archived (replaced by swarm-orchestrator)

### NEW Project (current)
- Name: openclaw-swarm-orchestrator
- Purpose: AI Agent cluster orchestration
- Tech: Python FastAPI + React + Redis
- Repo: **NEEDS TO BE CREATED** ← This is the issue!
- Status: ✅ Active development

---

## 📞 Quick Fix Summary

```bash
# 1. Create new GitHub repo
# Visit: https://github.com/new
# Name: openclaw-swarm-orchestrator

# 2. Update git remote
git remote remove origin
git remote add origin git@github.com:ZhenRobotics/openclaw-swarm-orchestrator.git

# 3. Push everything
git push -u origin main
git push origin --tags

# 4. Update docs
# Replace "ZhenRobotics" with your actual username in all docs

# 5. Resubmit to ClawHub
# Now with correct repository URL
```

---

## 🆘 If You Need Help

If you're not sure which option to choose:

1. **If the old video-generator repo has users/stars/importance:**
   → Choose Option 1 (Create new repo)
   → Keep old repo as archived

2. **If the old repo is just for you/testing:**
   → Choose Option 2 (Force push to rename)
   → Simpler, one repo to manage

3. **If you want professional organization:**
   → Choose Option 3 (Organization repo)
   → Best for team/company projects

---

**Next Step:** Choose an option above and execute it, then the ClawHub feedback will be resolved!
