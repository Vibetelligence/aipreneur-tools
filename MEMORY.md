# AI Business Tools - Long-Term Memory

## Project Overview
Building an AI tools affiliate website (aipreneurtools.com) to help solopreneurs discover and adopt AI tools for their businesses.

## Key Learnings

### Site Architecture
- **Platform:** Cloudflare Pages (free hosting + CDN)
- **Repository:** Vibetelligence/aipreneur-tools
- **Domains:** aipreneurtools.com, www.aipreneurtools.com, aipreneur.tools
- **Staging:** aipreneur-tools.pages.dev

### Content Strategy
- Articles target 2,000-4,000 words
- 4-8 CTAs per article
- Comparison tables for high conversions
- Internal linking (4+ per article)
- Use ARTICLE_PUBLISHING_GUIDE.md for all new content

### Affiliate Programs Status
| Program | Status | Commission |
|---------|--------|------------|
| ConvertKit | ✅ Approved | 30% |
| Make | ✅ Approved | 20-30% |
| ClickUp | ⏳ Pending | 30% |
| Canva | 🎯 Apply to Empower Canvassador Program | TBD |
| Notion | ⏳ Waitlist | 50% first year |
| Descript | ⏳ Pending | 30% |
| Remove.bg | ❌ Requires business registration | - |

### Key Affiliate Discovery
- **Most tools in the guide have NO affiliate programs** — Claude, Jasper, Grammarly, Notion, Todoist, Loom, Otter.ai, Buffer, Wave, Midjourney
- **User's audience:** 1,000+ small business owners via tutorials and guides
- **Canva program:** "Empower Canvassador Program" specifically for influencers/content creators — apply at public.canva.site/empower-canvassador-program

### Technical Issues Resolved
- ✅ Cloudflare WAF causing 403 on main domain — **FIXED** (Bot Fight Mode disabled)
- DNS setup for www subdomain
- All sites now operational

### Key Documents Created
- docs/COMPETITOR_ANALYSIS.md (8 sites analyzed)
- docs/CONTENT_STRATEGY.md
- docs/SEO_STRATEGY.md
- docs/MONETIZATION_STRATEGY.md
- docs/OPERATIONS.md
- docs/ARTICLE_PUBLISHING_GUIDE.md (living template)
- docs/AFFILIATE_OPPORTUNITIES.md (30+ products)
- docs/AFFILIATE_TRACKING.csv
- docs/guide-landing.html (ConvertKit-integrated landing page)
- docs/guide-web.html (interactive AI tools guide)
- docs/DEPLOYMENT.md (deployment walkthrough)

### Competitor Insights
- Directory + editorial hybrid wins
- Newsletter CTA converts best
- Comparison tables drive affiliate revenue
- Trust signals boost conversions 40%+

### Solopreneur AI Toolkit (Lead Magnet)
- **Goal:** Email-gated interactive guide for 12 AI tools
- **Landing Page:** ConvertKit form integrated (form ID: **9053254** - updated Feb 2026)
- **Form Header:** "Get Our Free AI Tools Guide 2026" (#e94560)
- **Form Subtext:** "Join 1,000+ solopreneurs saving 10+ hours/week with AI"
- **Form Footer:** "We won't send you spam. Unsubscribe at any time." (#b6b6b6)
- **Redirect:** thank-you.html → guide-web.html
- **Interactive Features:** ROI calculator, tool quiz, FAQ accordion, checklist
- **12 Tools:** Claude, Jasper, Grammarly, Notion, Todoist, Loom, Otter.ai, Canva, Buffer, Wave, Midjourney, Remove.bg

## Recent Fixes (Feb 2026)
- Cleaned up broken forms (removed visible JSON/code)
- Removed broken "Read Guide" buttons from tools page (10 removed)
- All 8 forms now consistent with custom headers

## Next Actions
1. ✅ Fix remaining Cloudflare 403 on aipreneurtools.com — **COMPLETED**
2. ✅ Create ConvertKit-integrated landing page — **COMPLETED**
3. ✅ Update all forms to new Kit form ID 9053254 — **COMPLETED**
4. ✅ Fix broken form HTML (visible code issue) — **COMPLETED**
5. ✅ Clean up tools page guide links — **COMPLETED**
6. Deploy lead magnet to Cloudflare Pages
7. Create thank-you page
8. Continue affiliate applications
9. Create new articles (Video AI, CRM Marketing guides)
