# Quick Fix Guide - Resolve ClawHub Feedback

**TL;DR:** Your code is new (swarm-orchestrator) but Git remote points to old repo (video-generator). ClawHub sees mismatched info. Fix: Create new repo and update remote.

---

## ⚡ 5-Minute Fix

### Step 1: Create New GitHub Repo (2 minutes)

```bash
# Visit and create:
https://github.com/new

Repository name: openclaw-swarm-orchestrator
Description: AI Agent cluster orchestration platform
Public: ✓
Initialize: None (leave all checkboxes unchecked)

Click: Create repository
```

### Step 2: Update Git Remote (30 seconds)

```bash
cd ~/openclaw-swarm-orchestrator

# Check current remote (should show old video-generator)
git remote -v

# Remove old remote
git remote remove origin

# Add new remote (replace ZhenRobotics)
git remote add origin git@github.com:ZhenRobotics/openclaw-swarm-orchestrator.git

# Verify
git remote -v
# Should now show: swarm-orchestrator
```

### Step 3: Push to New Repo (1 minute)

```bash
# Push all code
git push -u origin main

# Push tags
git push origin --tags

# Verify on GitHub
# Visit: https://github.com/ZhenRobotics/openclaw-swarm-orchestrator
# You should see all files
```

### Step 4: Update Documentation (1 minute)

```bash
# Update SKILL.md
sed -i 's/ZhenRobotics/ZhenRobotics/g' SKILL.md
sed -i 's/verified_commit: 505f957/verified_commit: e5c06bf/g' SKILL.md

# Update README.md
sed -i 's/ZhenRobotics/ZhenRobotics/g' README.md

# Update package.json
sed -i 's/ZhenRobotics/ZhenRobotics/g' package.json

# Update backend/setup.py
sed -i 's/ZhenRobotics/ZhenRobotics/g' backend/setup.py

# Commit changes
git add SKILL.md README.md package.json backend/setup.py
git commit -m "Update repository URLs to correct repo"
git push origin main
```

### Step 5: Create Release (30 seconds)

```bash
# Tag release
git tag -a v0.1.0 -m "Initial release"
git push origin v0.1.0
```

Then visit:
```
https://github.com/ZhenRobotics/openclaw-swarm-orchestrator/releases/new?tag=v0.1.0
```

Fill in:
- Release title: `v0.1.0 - Initial Release`
- Description: Copy from CHANGELOG.md
- Click: `Publish release`

---

## ✅ Done!

Now your repository is correctly set up:

- ✅ New repo: openclaw-swarm-orchestrator
- ✅ Code matches repo name
- ✅ SKILL.md points to correct repo
- ✅ Version tagged and released

**Ready to submit to ClawHub!**

---

## 🎯 Why This Fixes the ClawHub Feedback

### Before (Problem):
```
Local Code:        swarm-orchestrator (new)
SKILL.md:          swarm-orchestrator (new)
Git Remote:        video-generator (old) ← MISMATCH!
ClawHub reads:     video-generator repo ← Wrong info!
```

### After (Fixed):
```
Local Code:        swarm-orchestrator (new)
SKILL.md:          swarm-orchestrator (new)
Git Remote:        swarm-orchestrator (new) ← MATCH!
ClawHub reads:     swarm-orchestrator repo ← Correct!
```

---

## 📋 Verification

After completing the steps above, verify:

```bash
# 1. Check git remote
git remote -v
# Should show: openclaw-swarm-orchestrator

# 2. Check GitHub repo exists
curl -I https://github.com/ZhenRobotics/openclaw-swarm-orchestrator
# Should return: 200 OK

# 3. Check SKILL.md has correct URL
grep "verified_repo" SKILL.md
# Should show: ZhenRobotics/openclaw-swarm-orchestrator

# 4. Check release exists
git tag
# Should show: v0.1.0
```

All checks pass? **You're ready to submit to ClawHub!**

---

## 🔄 Submit to ClawHub

Now that the repository is correct:

1. Go to https://clawhub.ai
2. Login
3. Create New Skill
4. Upload SKILL.md
5. Fill in details:
   - Name: `swarm-orchestrator`
   - Version: `0.1.0`
   - Repo: `https://github.com/ZhenRobotics/openclaw-swarm-orchestrator`
6. Publish

**The ClawHub feedback you received was about the OLD project.** With the new repository, ClawHub will see the correct swarm-orchestrator project.

---

## ❓ FAQ

**Q: Will I lose my old video-generator project?**
A: No. The old repo still exists at `ZhenRobotics/openclaw-video-generator`. You're creating a NEW repo for the NEW project.

**Q: Do I need to delete the old repo?**
A: No. You can keep it archived as reference. Just make it clear it's deprecated.

**Q: What if I already published to npm?**
A: No problem. npm package name is `openclaw-swarm-orchestrator` which is different from the old package.

**Q: Can I use the same GitHub account?**
A: Yes. Just create a new repo with a different name.

---

## 🆘 If Something Goes Wrong

### "git push" fails

```bash
# If you get permission denied, check SSH keys:
ssh -T git@github.com

# Or use HTTPS instead:
git remote set-url origin https://github.com/ZhenRobotics/openclaw-swarm-orchestrator.git
```

### "Repository already exists"

```bash
# If repo name taken, try:
openclaw-swarm-orchestrator-v2
swarm-orchestrator-openclaw
your-username-swarm-orchestrator
```

### "Can't find repository"

```bash
# Make sure you created it on GitHub first
# Check: https://github.com/ZhenRobotics?tab=repositories
```

---

**Estimated Time:** 5 minutes
**Difficulty:** Easy
**Risk:** None (creates new repo, doesn't touch old one)

**Ready? Let's fix this!** 🚀
