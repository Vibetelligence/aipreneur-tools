# Web-Based Guide Deployment Instructions

## Files Created

| File | Purpose | Location |
|------|---------|----------|
| `guide-web.html` | Full interactive guide (access after email) | `/Users/milothebot/.openclaw/workspace/docs/` |
| `guide-landing.html` | Landing page with email gate | `/Users/milothebot/.openclaw/workspace/docs/` |
| `FREE_GUIDE_LEAD_MAGNET_V2.md` | Original content | `/Users/milothebot/.openclaw/workspace/docs/` |

---

## Step 1: Set Up ConvertKit

### Option A: Use ConvertKit Form Embed
1. Go to [ConvertKit](https://convertkit.com) → Forms
2. Create a new form for email capture
3. Add these fields:
   - Email (required)
   - First name (optional)
4. In the form settings, set the **redirect URL** to:
   ```
   https://aipreneurtools.com/resources/guide-web.html
   ```
5. Copy the **form embed code**

### Option B: Use API (Advanced)
If you want to handle submissions manually:
1. Get your ConvertKit API key
2. Use the API endpoint: `https://api.convertkit.com/v3/forms/{FORM_ID}/subscribe`

---

## Step 2: Update Landing Page

Edit `guide-landing.html`:

```javascript
// Find the form section and replace:
// <form onsubmit="alert('Replace with ConvertKit...');">

// With your ConvertKit embed code:
<form action="YOUR_CONVERTKIT_FORM_ACTION" method="post">
    <input type="email" name="email" required placeholder="you@example.com">
    <button type="submit">Get Free Access →</button>
</form>
```

---

## Step 3: Update Web Guide Links

Edit `guide-web.html` and add your affiliate links:

| Tool | Replace `href` with |
|------|-------------------|
| Claude | Your affiliate link or `https://claude.ai` |
| Jasper | Your affiliate link or `https://jasper.ai` |
| Grammarly | Your affiliate link or `https://grammarly.com` |
| Notion | Your affiliate link or `https://notion.so` |
| Todoist | Your affiliate link or `https://todoist.com` |
| Loom | Your affiliate link or `https://loom.com` |
| Otter.ai | Your affiliate link or `https://otter.ai` |
| Canva | Your affiliate link or `https://canva.com` |
| Buffer | Your affiliate link or `https://buffer.com` |
| Wave | Your affiliate link or `https://waveapps.com` |
| Midjourney | Your affiliate link or `https://midjourney.com` |
| Remove.bg | Your affiliate link or `https://remove.bg` |

---

## Step 4: Add Tracking Parameters

Add UTM parameters to all links for tracking:

```html
<a href="https://claude.ai?utm_source=aipreneurtools&utm_medium=guide&utm_content=tool_claude">
```

Recommended parameters:
- `utm_source=aipreneurtools`
- `utm_medium=guide`
- `utm_content=[tool-name]`

---

## Step 5: Deploy to Cloudflare Pages

### Option A: GitHub Integration
1. Push `guide-web.html` and `guide-landing.html` to your GitHub repo
2. Go to Cloudflare Dashboard → Pages
3. Connect your GitHub repo
4. Set build settings:
   - Build command: (leave empty)
   - Build output: (leave empty)
5. Deploy

### Option B: Direct Upload
1. Go to Cloudflare Dashboard → Pages
2. Click "Upload assets"
3. Drag and drop the files
4. Set path: `/resources/`
5. Deploy

---

## Step 6: Configure URLs

After deployment, configure these URLs:

| Page | URL |
|------|-----|
| Landing Page | `https://aipreneurtools.com/resources/` |
| Guide | `https://aipreneurtools.com/resources/guide-web.html` |
| PDF Download | `https://aipreneurtools.com/resources/Solopreneur_AI_Toolkit.pdf` |

---

## Step 7: Update Navigation

Link to the guide from your site:

```html
<!-- From homepage or header -->
<a href="/resources/">Free AI Toolkit →</a>

<!-- From existing articles -->
<a href="/resources/guide-web.html">Get the Free AI Toolkit →</a>
```

---

## Step 8: Add Exit-Intent Popup (Optional)

Add this script to `guide-web.html` for exit-intent Master Class promotion:

```javascript
<script>
let mouseY = 0;
document.addEventListener('mouseout', e => {
    mouseY = e.clientY;
});

document.addEventListener('mouseenter', e => {
    if (mouseY < 50 && !sessionStorage.getItem('exitIntentShown')) {
        // Show popup
        alert('Ready to transform your business?\n\nGet the Master Class AI Tools Guide →');
        sessionStorage.setItem('exitIntentShown', 'true');
    }
});
</script>
```

---

## Step 9: SEO Optimization

Update meta tags in both files:

```html
<meta name="description" content="Get the free Solopreneur's AI Toolkit: 10 essential AI tools to save 10+ hours every week.">
<meta property="og:title" content="The Solopreneur's AI Toolkit">
<meta property="og:description" content="10 Essential AI Tools to Save 10+ Hours Every Week">
<meta property="og:image" content="https://aipreneurtools.com/images/guide-og.jpg">
<link rel="canonical" href="https://aipreneurtools.com/resources/">
```

---

## Step 10: Track Performance

### Google Analytics Events
```javascript
// Track tool clicks
document.querySelectorAll('.tool-card a').forEach(link => {
    link.addEventListener('click', () => {
        gtag('event', 'click', {
            'event_category': 'affiliate',
            'event_label': link.href
        });
    });
});

// Track form submission
document.querySelector('form').addEventListener('submit', () => {
    gtag('event', 'generate_lead');
});
```

---

## URL Structure Recommendation

```
aipreneurtools.com/
├── index.html (homepage)
├── resources/
│   ├── index.html (landing page - NEW)
│   ├── guide-web.html (interactive guide - NEW)
│   ├── Solopreneur_AI_Toolkit.pdf (download)
│   └── images/
│       └── guide-og.jpg
```

---

## Quick Deploy Checklist

- [ ] Set up ConvertKit form with redirect
- [ ] Add ConvertKit embed code to landing page
- [ ] Add affiliate links to guide
- [ ] Add UTM parameters to all links
- [ ] Upload files to Cloudflare Pages
- [ ] Configure URLs
- [ ] Update site navigation
- [ ] Add to sitemap.xml
- [ ] Share on social media
- [ ] Email to newsletter subscribers

---

## Support

Questions? Check:
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [ConvertKit Form Docs](https://convertkit.com/guides/forms)
