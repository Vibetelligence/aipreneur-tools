# AIPreneurTools Website Audit
**Date:** February 4, 2026  
**Scope:** Full site link, layout, and form audit

---

## Executive Summary

| Category | Score | Issues Found |
|----------|-------|--------------|
| **Navigation Links** | C- | 27 broken `#` links |
| **Coming Soon Pages** | D | 4 dead-end cards |
| **Email Forms** | A | Consistent ✅ |
| **Layout Consistency** | B+ | Minor variations |
| **Overall** | C+ | 31 total issues |

---

## 🔴 Critical Issues (Fix Immediately)

### 1. Broken Links (27 Total)

#### guides.html (4 broken links)
| # | Line | Issue |
|---|------|-------|
| 1 | 180 | `href="#"` → "Coming Soon →" button |
| 2 | 186 | `href="#"` → "Coming Soon →" button |
| 3 | 210 | `href="#"` → "Coming Soon →" button |
| 4 | 216 | `href="#"` → "Coming Soon →" button |

#### tools.html (22 broken links)
| # | Line | Tool | Suggested Fix |
|---|------|------|--------------|
| 1 | 800 | Writesonic | Link to `best-ai-writing-tools.html` |
| 2 | 812 | Rytr | Link to `best-ai-writing-tools.html` |
| 3 | 860 | Grammarly | Create article OR remove button |
| 4 | 872 | Claude | Link to existing content OR remove |
| 5 | 884 | Otter.ai | Create article OR remove button |
| 6 | 896 | Canva | Link to existing content OR remove |
| 7 | 968 | Midjourney | Create article OR remove |
| 8 | 980 | Remove.bg | Create article OR remove |
| 9 | 992 | Wave | Create article OR remove |
| 10-22 | Multiple | Various | Link to existing guides or remove |

---

### 2. Coming Soon Dead-Ends (guides.html)

The guides page shows 4 "Coming Soon" cards with no actual content:

1. **ChatGPT & AI Assistants** - Line ~170-180
2. **Content Automation** - Line ~183-186  
3. **AI for Social Media** - Line ~207-210
4. **Email Marketing AI** - Line ~213-216

**Impact:** Users see clickable cards that go nowhere  
**Fix Options:**
- Remove cards entirely
- Add actual guide content
- Change to "Coming Soon" text-only (no links)

---

## 🟡 High Priority Issues

### 3. Tools Page Link Mapping

Tools page has 32 tools but only 6 have guide articles:

| Tool | Has Guide? | Current Link |
|------|------------|-------------|
| Copy.ai | ✅ Yes | `best-ai-writing-tools.html` |
| Jasper | ✅ Yes | `best-ai-writing-tools.html` |
| Writesonic | ⚠️ No (in article) | `href="#"` |
| Rytr | ⚠️ No (in article) | `href="#"` |
| Grammarly | ❌ No | `href="#"` |
| Claude | ❌ No | `href="#"` |
| Notion | ✅ Yes | `notion-vs-clickup.html` |
| ClickUp | ✅ Yes | `notion-vs-clickup.html` |
| Make | ❌ No | `href="#"` |
| And 20 more... | Mostly No | `href="#"` |

---

### 4. URL Consistency

| Page | Current URL | Issue |
|------|------------|-------|
| Guide Landing | `/resources/guide-landing` | Missing `.html` |
| Guide Web | `/resources/guide-web` | Missing `.html` |
| Articles | `/content/articles/*.html` | Correct |

---

## 🟢 Medium Priority Issues

### 5. Form Consistency (GOOD)

All email forms are **consistent** ✅:
- ConvertKit form ID: `9049288`
- Success message: "Success! Now check your email..."
- Action URL: `https://app.kit.com/forms/9049288/subscriptions`

Forms found in:
- ✅ index.html (2 forms)
- ✅ comparison.html (2 forms)  
- ✅ articles (1 each)

---

### 6. Layout Consistency

| Element | Status | Notes |
|---------|--------|-------|
| Header | ✅ Consistent | Same nav across pages |
| Footer | ✅ Consistent | Same links across pages |
| Hero | ✅ Consistent | Similar structure |
| CTA Boxes | ⚠️ Minor | Some inline styles vary |
| Card Styles | ✅ Consistent | Same design pattern |

---

### 7. Navigation Structure

Main nav (consistent across all pages):
- Tools
- Reviews
- Guides
- About

Dropdown on Tools:
- 🏆 Top Picks
- ✍️ Writing
- 📋 Project Management
- ⚡ Automation
- 🎬 Video & Audio
- 📈 CRM & Marketing
- 🚀 Productivity
- 💬 Communication
- 💰 Finance
- 🎨 Design & Creative

---

## Priority Summary

| Priority | Issue | Impact | Effort | Fix |
|----------|-------|--------|--------|-----|
| **P0** | Remove/fix 27 `href="#"` links | High | 15 min | Remove or link |
| **P0** | Fix 4 "Coming Soon" cards | High | 10 min | Remove or content |
| **P1** | Map tools to existing guides | Medium | 20 min | Add links |
| **P2** | URL consistency | Low | 5 min | Update htaccess |
| **P3** | Minor style variations | Low | 30 min | CSS cleanup |

---

## Recommended Actions

### Immediate (P0 - Today)

1. **Remove broken guide links** in guides.html
   - Delete 4 "Coming Soon" cards OR
   - Change to static text without buttons

2. **Link tools to existing articles**
   - Writesonic → `best-ai-writing-tools.html`
   - Rytr → `best-ai-writing-tools.html`

3. **Remove or update 22 tool guide buttons**
   - Option A: Link to existing content
   - Option B: Remove "Read Guide" buttons for tools without articles

### This Week (P1)

4. **Create missing guide articles**
   - Writesonic dedicated guide
   - Rytr dedicated guide
   - Make automation guide

5. **Update tools page links**
   - Add proper guide links once articles exist

### Next Week (P2)

6. **URL normalization**
   - Configure Cloudflare to handle `.html` redirect
   - Or update all internal links

---

## Files to Modify

| File | Changes |
|------|---------|
| `guides.html` | Remove 4 Coming Soon cards |
| `tools.html` | Fix 22 `href="#"` links |
| `sitemap.xml` | Add missing guide URLs |

---

## Questions for Approval

1. **Should I remove all "Coming Soon" cards from guides.html?**
2. **Should I keep "Read Guide" buttons on tools page (linking to existing articles) or remove them?**
3. **Which missing guides should I prioritize creating first?**

---

*Audit completed: February 4, 2026*
