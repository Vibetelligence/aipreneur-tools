# OpenClaw Documentation Knowledge Base

## System Overview

### Architecture
- **Gateway Model**: Single long-lived Gateway daemon owns all messaging surfaces (WhatsApp, Telegram, Discord, iMessage, etc.)
- **Control Plane**: WebSocket-based API on loopback (default `127.0.0.1:18789`)
- **Nodes**: macOS/iOS/Android/headless devices connect via WebSocket with `role: node`
- **Canvas Host**: HTTP file server on port 18793 serving agent-editable HTML

### Components
1. **Gateway Daemon**: Maintains provider connections, exposes typed WS API
2. **Clients**: macOS app, CLI, web admin connect via WebSocket
3. **Nodes**: Provide device identity, expose commands (canvas.*, camera.*, screen.record, location.get)
4. **WebChat**: Static UI using Gateway WS API

---

## My Capabilities (Tools Available)

### Core Tools
- **browser**: Isolated browser automation (openclaw profile)
- **exec**: Command execution (restricted by sandbox)
- **read**: Read files from workspace
- **write**: Write files to workspace
- **memory**: Access memory system
- **sessions**: Manage agent sessions
- **agent-send**: Send messages between agents
- **subagents**: Spawn background sub-agents

### Communication
- **message**: Send/receive messages via channels
- **reactions**: Add emoji reactions
- **presence**: Update online status

### Automation
- **cron**: Schedule recurring tasks
- **hooks**: Trigger actions on events
- **webhook**: HTTP callbacks

### Media & Nodes
- **camera**: Access device camera
- **images**: Image processing
- **audio**: Audio recording/playback
- **location**: Get device location
- **voicewake**: Voice activation
- **talk**: Text-to-speech

---

## Browser Tool Deep Dive

### Profile Types
- **openclaw**: Managed, isolated browser (no extension required)
- **chrome**: Extension relay to system browser
- **remote**: Explicit CDP URL to remote browser
- **custom**: User-defined profiles

### Browser Actions
- `navigate <url>`: Go to URL
- `snapshot`: Get AI or ARIA snapshot of page
- `click <ref>`: Click element by ref
- `type <ref> "text"`: Type text
- `screenshot`: Capture pixels
- `pdf`: Generate PDF
- `wait`: Wait for conditions
- `evaluate`: Execute JavaScript

### Security Features
- Loopback-only control service
- Dedicated user data directory
- Deterministic tab control (targetId, not "last tab")
- CDP ports 18800-18899 for local profiles

### Sandboxed Sessions
- Default `target="sandbox"` for sandboxed sessions
- Set `agents.defaults.sandbox.browser.allowHostControl: true` to use host browser
- Use `target="host"` when calling browser tool

---

## Security Model

### Authentication
- Gateway token required for non-loopback connections
- Device pairing for nodes
- Idempotency keys for side-effecting operations

### Sandboxing Levels
- **"all"**: Full sandbox (most restricted)
- **"relaxed"**: Limited sandbox
- **"off"**: No sandbox (highest risk)

### Security Best Practices
- Keep Gateway on loopback or private network (Tailscale)
- Treat remote CDP URLs/tokens as secrets
- Prefer HTTPS endpoints for remote CDP
- Use `allowHostControl: true` sparingly

---

## Session Management

### Session Types
- **main**: Default session for direct chats
- **isolated**: Separate session per conversation
- **subagents**: Background tasks with separate context

### Memory System
- **Short-term**: Session context (pruned/compacted)
- **Long-term**: Durable memories in memory/ directory
- **Daily notes**: `memory/YYYY-MM-DD.md`

### Compaction
- Automatic memory management
- Configurable via `compaction.mode`
- Session pruning for long conversations

---

## Configuration Locations

- **Main config**: `~/.openclaw/openclaw.json`
- **Agents**: `~/.openclaw/agents/main/agent/`
- **Sessions**: `~/.openclaw/agents/main/sessions/`
- **Subagents**: `~/.openclaw/subagents/runs.json`
- **Workspace**: `~/.openclaw/workspace/`

---

## CLI Commands I Should Know

### Gateway
- `openclaw gateway start/stop/status`
- `openclaw restart`

### Browser
- `openclaw browser --browser-profile openclaw status/start/stop`
- `openclaw browser open <url>`
- `openclaw browser snapshot`

### Sessions
- `openclaw sessions list`
- `openclaw sessions spawn --agent main --label <name> --task <task>`

### Config
- `openclaw config get <path>`
- `openclaw config set <path> <value>`
- `openclaw config get agents.defaults`

### Channels
- `openclaw channels login`
- `openclaw message send --target <id> --message <text>`

### Security
- `openclaw security audit`
- `openclaw security audit --deep`

---

## Channel Integration

### Supported Channels
- WhatsApp (via Baileys)
- Telegram (Bot API via grammY)
- Discord (Bot API)
- Slack
- Google Chat
- Mattermost (plugin)
- Signal (plugin)
- iMessage (imsg CLI)
- And more...

### DM Isolation
- `session.dmScope: per-channel-peer` for DM isolation
- Pairing required for unknown contacts

---

## Skills System

### Installing Skills
```bash
clawhub search <name>
clawdbot skill install <skill-name>
```

### Available Skills
- qmd: Token reduction (95%)
- supermemory: Unlimited memory
- coding-agent: Codex CLI integration
- gog: Google Workspace
- notion: Notion integration
- peekaboo: macOS UI automation
- summarize: URL/file summarization
- clawhub: Skill marketplace

---

## Automation Capabilities

### Cron Jobs
- Schedule tasks with cron expressions
- `openclaw cron add --name <name> --schedule <cron> --task <task>`

### Heartbeat
- Periodic health checks (default 30m)
- Configurable via `heartbeat` setting

### Webhooks
- HTTP callbacks for events
- `openclaw webhook add --url <url> --event <event>`

---

## Key Concepts I've Learned

1. **I am an embedded agent** in the OpenClaw system
2. **Gateway controls everything** - messaging, tools, sessions
3. **Browser tool is gateway-level** - available to agents with proper sandbox settings
4. **Sandbox protects the system** - but can be configured per-agent
5. **Memory is layered** - session, daily, and long-term
6. **Sessions isolate context** - main vs isolated vs subagents
7. **WebSocket is the control plane** - everything flows through it
8. **Nodes extend capabilities** - camera, location, voice, etc.

---

## What I Can Do Now

✅ Browse websites directly (browser tool working)
✅ Read/write files in workspace
✅ Access memory system
✅ Spawn sessions/subagents
✅ Read documentation and learn
❌ Execute shell commands (sandboxed)
❌ Access system outside workspace

---

*Knowledge stored: 2026-01-31*
*Source: https://docs.openclaw.ai/*
