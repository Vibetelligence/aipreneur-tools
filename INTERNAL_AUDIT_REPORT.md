# Internal Information Audit Report

## Executive Summary
Audit of the AI Business Tools website identified **internal metadata and backend information** that should be reviewed. The primary concerns are:
1. Internal dashboard with affiliate commissions and tasks visible to public
2. Affiliate tracking IDs in URLs (`ref=aipreneurtools`)
3. Google Analytics placeholder IDs
4. Status tags visible in public-facing pages

---

## Internal Information Audit

### File: dashboard.html
| Line/Location | Internal Info Found | Should Be |
|---------------|-------------------|-----------|
| Lines 576-585 | `status: 'published'`, `status: 'planned'` for articles | These are workflow statuses - acceptable if dashboard is admin-only |
| Lines 588-592 | Affiliate commission data: "30% recurring", "50% first year", "60 days" cookie with `status: 'pending'` | **Remove or secure** - commission rates are internal business info |
| Lines 595-598 | Task priorities: `priority: 'high'` for "Apply to Notion Affiliate Program", "Apply to ClickUp Partner Program" | **Remove** - internal planning details |
| Line 634 | `data.affiliates.filter(a => a.status === 'approved').length` - shows pending/approved affiliate status logic | Internal implementation detail |
| Lines 662-663 | Affiliate cards showing commission amounts in UI | **Remove** - commission info should not be visible to users |

### File: index.html
| Line/Location | Internal Info Found | Should Be |
|---------------|-------------------|-----------|
| Line 950 | "✅ 50% affiliate commission" in Top Picks section | **Remove or soften** - commission percentage visible to consumers |
| Line 963 | "✅ 20-30% recurring commission" | **Remove or soften** |
| Line 976 | "✅ 30% recurring commission" | **Remove or soften** |
| Lines 1145, 1151 | Google Analytics placeholder: `G-MEASUREMENT_ID` | Replace with actual ID or remove |
| Lines 1059, 1139 | Kit (ConvertKit) form IDs: `data-sv-form="9049288"`, `data-uid="1e5ef8e8f1"` | Generally acceptable, but internal IDs |

### File: comparison.html
| Line/Location | Internal Info Found | Should Be |
|---------------|-------------------|-----------|
| Lines 660, 665 | Google Analytics placeholder: `G-MEASUREMENT_ID` | Replace with actual ID or remove |
| Lines 339, 350, 361, 372, 402, 414, 425, 436, 466, 477, 488, 518, 529, 540 | `ref=aipreneurtools` in affiliate links | **Keep** (standard affiliate tracking) |

### File: content/articles/*.html (Multiple Files)
| Line/Location | Internal Info Found | Should Be |
|---------------|-------------------|-----------|
| Various | `ref=aipreneurtools` tracking parameters in URLs | **Keep** (standard affiliate practice) |
| ai-tools-pricing.html:367, 373, 379, 385, 391, 397, 403, 409, 415, 520 | `ref=aipreneurtools` parameters | Keep |
| best-ai-tools-real-estate.html:296, 302, 386, 402, 413, 424, 435, 451, 462 | `ref=aipreneurtools` parameters | Keep |
| business-automation-guide.html:416, 531, 537, 543, 549, 599, 605 | `ref=aipreneurtools` parameters | Keep |
| solopreneur-ai-stack.html:232, 263, 382, 396, 402, 408, 414, 420, 426, 512, 518 | `ref=aipreneurtools` parameters | Keep |
| best-ai-writing-tools.html:334, 503, 520, 527, 533, 607 | `ref=aipreneurtools` parameters | Keep |
| notion-vs-clickup.html:525, 536, 570, 571, 642, 643 | `ref=aipreneurtools` parameters | Keep |
| ai-tools-photographers.html:245, 472, 478, 484, 490, 496, 502, 570, 576, 582 | `ref=aipreneurtools` parameters | Keep |

### File: about.html, privacy-policy.html, contact.html, terms.html, guides.html, reviews.html
| Line/Location | Internal Info Found | Should Be |
|---------------|-------------------|-----------|
| Multiple GA scripts | `G-XXXXXXXXXX` placeholder | Replace or remove |

---

## Summary by Category

| Category | Instances Found | Files Affected | Priority |
|----------|-----------------|----------------|----------|
| Commission percentages visible to users | 3 | index.html | **High** |
| Affiliate commission data in dashboard | 5 records | dashboard.html | **Medium** |
| Task/priority internal planning | 4 items | dashboard.html | **Medium** |
| GA placeholder IDs | 9 files | Multiple HTML files | **Low** |
| Affiliate ref parameters | ~60+ | All article/tool pages | **Info** (standard practice) |

---

## Recommendations

| Item | Action | Priority |
|------|--------|----------|
| Commission percentages in Top Picks | **Remove** exact percentages; use "Competitive rates" or similar | High |
| Dashboard.html affiliate data | **Remove** commission amounts from display; keep for admin only | High |
| Dashboard tasks | **Remove** affiliate application tasks from public view | Medium |
| GA placeholders | **Replace** with actual IDs or remove unused scripts | Low |
| Affiliate ref parameters | **Keep** - standard and transparent affiliate disclosure | N/A |

---

## Notes

1. **Affiliate Transparency**: The commission percentages on index.html (50%, 20-30%, 30%) are visible to consumers. Consider whether transparency is desired or if these should be removed.

2. **Dashboard Exposure**: The dashboard.html file appears to be an admin dashboard but is publicly accessible. It contains:
   - Article publication status and dates
   - Affiliate commission rates and cookie durations
   - Pending/approved status for affiliates
   - Internal task workflow with priorities
   
   **Recommendation**: Add authentication or move to a private/admin path.

3. **Ref Parameters**: The `ref=aipreneurtools` parameters are standard affiliate tracking and disclosed in the footer. These are appropriate and transparent.

---

*Audit completed: 2026-02-04*
