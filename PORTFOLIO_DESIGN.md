# Khalid Hussain Portfolio — Design System & Site Documentation

> **Last Updated:** August 2026  
> **Stack:** React (Vite) · Tailwind CSS · Vanilla CSS Custom Properties  
> **Theme Concept:** *"The Tradesman's Job Docket"* — warm ruled paper, brass fittings, vermilion stamp

---

## Table of Contents

1. [Design Concept](#1-design-concept)
2. [Brand Color Palette](#2-brand-color-palette)
3. [Typography](#3-typography)
4. [Layout & Spacing System](#4-layout--spacing-system)
5. [Animation System](#5-animation-system)
6. [Component Patterns](#6-component-patterns)
7. [Section-by-Section Structure](#7-section-by-section-structure)
8. [SEO Implementation](#8-seo-implementation)
9. [File Structure](#9-file-structure)
10. [Asset Inventory](#10-asset-inventory)

---

## 1. Design Concept

The portfolio deliberately avoids the clichéd dark-mode + purple-neon developer aesthetic. Instead it uses a **warm analog world** — the visual language of a tradesman's job docket:

| Metaphor | Visual Expression |
|---|---|
| Paper world | Warm cream backgrounds, hairline rules |
| Brass fittings | Gold accent color for CTAs, borders, headings |
| Rubber stamp | Vermilion red for high-signal moments |
| Ink | Deep warm-brown text instead of cold gray |
| Ledger lines | Horizontal rules between sections |
| Job docket card | Raised paper cards with brass top-rule |

---

## 2. Brand Color Palette

All colors are defined as CSS custom properties in `src/index.css` under `:root`.

### 2.1 Paper (Backgrounds)

| Token | Hex | Usage |
|---|---|---|
| `--paper` | `#F4EEDD` | Primary page background (Hero, Skills, Experience) |
| `--paper-raised` | `#FCF8EC` | Card backgrounds, Navbar (scrolled), form inputs |
| `--paper-sunken` | `#EAE1CA` | Alternate sections (About, Projects, Education, Contact) |

**Alternating section pattern:**
```
Hero        → #F4EEDD (paper)
About       → #EAE1CA (sunken)
Skills      → #F4EEDD (paper)
Projects    → #EAE1CA (sunken)
Experience  → #F4EEDD (paper)
Education   → #EAE1CA (sunken)
Contact     → #EAE1CA (sunken)
Footer      → #221C12 (ink — inverted for contrast)
```

### 2.2 Ink (Text)

| Token | Hex | Usage |
|---|---|---|
| `--ink` | `#221C12` | Primary headings, strong labels |
| `--ink-secondary` | `#4E4635` | Body text, nav links, card descriptions |
| `--ink-faint` | `#8A7E63` | Captions, dates, meta text, placeholders |

### 2.3 Rules & Borders

| Token | Hex | Usage |
|---|---|---|
| `--rule` | `#D9CFB6` | Hairline dividers, card borders (default), input borders |
| `--rule-strong` | `#B9AC8F` | Navbar scrolled border, hover states |

### 2.4 Brass / Brand Gold (Primary Accent)

| Token | Hex | Usage |
|---|---|---|
| `--brass` | `#A8781B` | Primary CTA buttons, active nav underline, card hover borders |
| `--brass-light` | `#D6BC6E` | Gradient highlights, logo text, decorative dividers |
| `--brass-deep` | `#7A560F` | Button gradient dark end, tag text |

**Primary button gradient:**
```css
background: linear-gradient(135deg, #A8781B, #7A560F);
```

### 2.5 Stamp / Vermilion (High-Signal Red)

| Token | Hex | Usage |
|---|---|---|
| `--stamp` | `#C43C2C` | High-signal CTAs on hover, alert icons |

Used sparingly — only for maximum attention moments.

### 2.6 Status Colors

| Token | Hex | Usage |
|---|---|---|
| `--success` | `#2E7D4F` | "Available" badge, "Graduated" status, "Current" role badge, phone icon |
| `--warning` | `#9A6A1B` | Database & Storage skill category |
| `--info` | `#2F6FA8` | Mobile skills, LinkedIn hover, Degree text |

### 2.7 Footer (Inverted)

```
Footer background:  #221C12  (ink)
Text:               #8A7E63  (faint ink on dark)
Headings:           linear-gradient(#A8781B → #D6BC6E)
Divider:            rgba(168, 120, 27, 0.3)
```

### Quick Reference

```css
--paper:         #F4EEDD;
--paper-raised:  #FCF8EC;
--paper-sunken:  #EAE1CA;
--ink:           #221C12;
--ink-secondary: #4E4635;
--ink-faint:     #8A7E63;
--rule:          #D9CFB6;
--rule-strong:   #B9AC8F;
--brass:         #A8781B;
--brass-light:   #D6BC6E;
--brass-deep:    #7A560F;
--stamp:         #C43C2C;
--success:       #2E7D4F;
--warning:       #9A6A1B;
--info:          #2F6FA8;
```

---

## 3. Typography

### 3.1 Font Families

Loaded via Google Fonts in `index.html`:

| Role | Font | Weights |
|---|---|---|
| Body / UI | Inter | 300, 400, 500, 600, 700, 800, 900 |
| Headings / Display | Outfit | 400, 500, 600, 700, 800 |
| Fallback | -apple-system, BlinkMacSystemFont, Segoe UI | — |

```css
body { font-family: 'Inter', 'Outfit', -apple-system, sans-serif; }
h1,h2,h3,h4,h5,h6 { font-family: 'Outfit', 'Inter', sans-serif; letter-spacing: -0.02em; }
```

### 3.2 Type Scale

| Element | Size | Weight | Color |
|---|---|---|---|
| Hero name (h1) | 5xl–7xl (48–72px) | 700 | Brass gradient |
| Section headings (h2) | 4xl–5xl (36–48px) | 700 | Brass gradient |
| Card titles (h3) | xl–2xl (20–24px) | 700 | `#221C12` |
| Body text | sm–base (14–16px) | 400 | `#4E4635` |
| Meta / captions | xs–sm (12–14px) | 400–500 | `#8A7E63` |
| Labels / eyebrows | xs–sm | 600–700 | `#8A7E63`, uppercase, tracked |

---

## 4. Layout & Spacing System

- **Container:** `container mx-auto px-6`
- **Section padding:** `py-20` (80px top/bottom)
- **Project grid:** `grid md:grid-cols-2 lg:grid-cols-3 gap-8`
- **Skills grid:** `grid md:grid-cols-2 lg:grid-cols-3 gap-6`
- **About grid:** `grid md:grid-cols-3 gap-8`
- **Contact grid:** `grid md:grid-cols-2 gap-12`
- **Experience / Education:** single-column `max-w-4xl mx-auto`

### Section Header Pattern (all sections)

```
EYEBROW TEXT      ← xs uppercase tracking-widest #8A7E63
SECTION TITLE     ← 4xl/5xl Outfit bold brass-gradient + 80px underline rule
Subheadline       ← base #4E4635
```

### Card Anatomy

```
┌─────────────────────────┐  ← 3px brass gradient top rule (.card-brass-rule)
│  Card content           │  ← backgroundColor: #FCF8EC
│                         │  ← border: 1px solid #D9CFB6
│  [Hover] border → #A8781B
│  [Hover] shadow → brass glow
└─────────────────────────┘
```

---

## 5. Animation System

All defined in `src/index.css`.

### 5.1 Keyframe Animations

| Animation | Duration | Purpose |
|---|---|---|
| `fadeIn` | 0.8s ease-out | Default fade + slide up |
| `slideInLeft` | 0.8s ease-out | Left-side entrance |
| `slideInRight` | 0.8s ease-out | Right-side entrance |
| `scaleIn` | 0.6s spring | Pop in with spring |
| `bounceIn` | 0.8s spring | Photo/avatar entrance |
| `floatUp` | 0.8s ease-out | CTA buttons |
| `blurIn` | 0.8s ease-out | Body text |
| `gradientShift` | 6s infinite | Animated gradient text |
| `glowPulse` | 3s infinite | Brass glow on cards |
| `scrollImage` | 14s infinite | **Screenshot pan for long pages** |

### 5.2 Scroll-Triggered Classes

Elements animate in via `IntersectionObserver`:

| Class | Initial State | Visible State |
|---|---|---|
| `.scroll-trigger` | `opacity:0; translateY(40px)` | `opacity:1; translateY(0)` |
| `.scroll-fade-in-left` | `opacity:0; translateX(-60px)` | `opacity:1; translateX(0)` |
| `.scroll-fade-in-right` | `opacity:0; translateX(60px)` | `opacity:1; translateX(0)` |
| `.scroll-scale-in` | `opacity:0; scale(0.85)` | `opacity:1; scale(1)` |

Stagger delays: `.scroll-stagger-1` through `.scroll-stagger-6` (0.1s–0.6s).

### 5.3 Project Image Containers

| Container | Used For | Behaviour |
|---|---|---|
| `.img-scroll-container` | Long full-page screenshots | Pans top→bottom over 14s, pauses on hover |
| `.img-static-container` | Normal desktop screenshots | Scale 1.05 on hover |
| `.img-mobile-container` | App screenshots | Side-by-side portrait layout |

---

## 6. Component Patterns

### Buttons

| Variant | Style |
|---|---|
| Primary (brass) | `linear-gradient(135deg, #A8781B, #7A560F)` → vermilion hover |
| Secondary (outline) | Transparent + `#A8781B` border/text → brass fill |
| Download | Transparent + brass border → brass fill |
| App Store | Transparent → ink `#221C12` fill |
| Play Store | Transparent → success `#2E7D4F` fill |

### Skill Tags

`rgba(accent, 0.1)` background · `deep-accent` text · `rgba(accent, 0.3)` border · `rounded-md` · `xs font-semibold` · scales to 1.1× on hover

### Tab Filter (Projects)

Outlined pill buttons → active state: brass gradient + white text + brass shadow.

### Social Icons

Paper card (`#FCF8EC`) → full brass fill on hover. WhatsApp specifically → WhatsApp green `#25D366`.

---

## 7. Section-by-Section Structure

### Hero (`#home`)
- Background: warm radial glow on cream gradient — **no ruled lines**
- Name: animated brass gradient, Outfit 700, 5xl–7xl
- CTAs: View My Work (brass) · Download Resume · Get In Touch
- Social: GitHub, LinkedIn, Email
- Photo: circular, brass border+ring, green "Available" badge with pulsing dot

### About (`#about`)
- Background: `#EAE1CA` (sunken)
- 3 cards: Full Stack Dev (brass) · AI & ML (stamp) · Mobile (info)

### Skills (`#skills`)
- Background: `#F4EEDD` + faint ruled texture
- 7 categories × tag grid — 50+ real skills
- AI Dev Tools category: Claude Code, Cursor, Emergent, VS Code, GitHub Copilot

### Projects (`#projects`)
- Background: `#EAE1CA` (sunken)
- Tab filter: All (12) · Websites (9) · Apps (3)
- Auto-rotating image slideshow (3.5s interval)
- Long screenshots: scroll pan animation · App screenshots: portrait layout

### Experience (`#experience`)
- Background: `#F4EEDD` + faint ruled texture
- **Reverse chronological** (newest first)
- 4 entries: HyperLogic · CareerTrust FYP · Mobile Apps · Independent Projects
- HyperLogic: green "Current" badge, live links to 4 projects

### Education (`#education`)
- Background: `#EAE1CA` (sunken)
- Sukkur IBA University · B.S. CS · GPA 3.44/4.0
- Stats grid: GPA (brass) · Degree (info blue) · Duration (green) · Graduated (green)
- 6 key study areas in 2-col grid

### Contact (`#contact`)
- Background: `#EAE1CA` (sunken)
- 5 contact items: Email · Phone · GitHub · LinkedIn · Location
- Form with brass focus rings + animated success state
- Availability indicator: green pulsing dot

### Footer
- Background: `#221C12` (ink — inverted)
- 4 social icons: GitHub · LinkedIn · Email · WhatsApp (green hover)
- Quick links + Live Projects columns
- Scroll-to-top brass button

---

## 8. SEO Implementation

### `index.html`
- Title: `Khalid Hussain | Full Stack Developer & AI Integration Specialist`
- Meta description, keywords, robots, canonical
- Open Graph (og:title, og:description, og:image, og:type, og:locale)
- Twitter Card (summary_large_image)
- Geo meta (geo.region: PK-SD, geo.placename: Lahore)

### JSON-LD Structured Data
1. `@type: Person` — name, jobTitle, email, telephone, address, alumniOf, sameAs, knowsAbout
2. `@type: WebSite` — name, URL, description, author

### Static Files
| File | Purpose |
|---|---|
| `public/robots.txt` | Allow all crawlers, reference sitemap |
| `public/sitemap.xml` | 7 section URLs with priority + changefreq |

---

## 9. File Structure

```
KhalidPortfolio/
├── index.html                    ← SEO, JSON-LD, Google Fonts
├── DESIGN.md                     ← Original Matasha design inspiration
├── PORTFOLIO_DESIGN.md           ← This file
├── public/
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── App.jsx                   ← Root component + section order
    ├── index.css                 ← CSS custom properties + full animation system
    ├── components/
    │   ├── Navbar.jsx
    │   └── Footer.jsx
    ├── Pages/
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Skills.jsx
    │   ├── Projects.jsx          ← 12 projects, tab filter, slideshows
    │   ├── Experience.jsx        ← Reverse chronological, HyperLogic current
    │   ├── Education.jsx         ← Sukkur IBA stats card
    │   └── Contact.jsx
    └── assets/
        ├── index.js              ← Exports: Khalid (photo), Resume (PDF)
        ├── Full_Stack.pdf
        ├── Pictures/Khalid.png
        ├── zintari_saas/         ← 3x PNG (long)
        ├── zintari_marketing/    ← 3x WebP (long)
        ├── scentello/            ← 3x WebP (long)
        ├── bigbreaksnooker/      ← 3x WebP (normal)
        ├── careertrust/          ← 3x WebP (long)
        ├── foodsecure/           ← 2x PNG (normal)
        ├── hypnoswitch/          ← 2x WebP (normal)
        ├── visitor/              ← 3x PNG (normal)
        ├── mcq/                  ← 2x PNG (normal)
        ├── zintari_app/          ← 3x PNG (mobile portrait)
        ├── yebonadi_app/         ← 3x JPEG (mobile portrait)
        └── notenova_app/         ← 2x PNG + 1x WebP (mobile portrait)
```

---

## 10. Asset Inventory

| Project | Folder | Images | Screenshot Type |
|---|---|---|---|
| Zintari SaaS | `zintari_saas` | AI Flows, Dashboard EN, Dashboard AR | Long — scroll pan |
| Zintari Marketing | `zintari_marketing` | Landing EN, Landing AR, Features | Long — scroll pan |
| Scentello | `scentello` | Homepage, Fragrance, Machine | Long — scroll pan |
| Big Break Snooker | `bigbreaksnooker` | Homepage, Booking, User Bookings | Normal |
| CareerTrust | `careertrust` | Landing, Jobs, Dashboard | Long — scroll pan |
| FoodSecure | `foodsecure` | Dashboard, Full Dashboard | Normal |
| HypnoSwitch | `hypnoswitch` | Tracks, Hypnosis | Normal |
| Visitor System | `visitor` | visitor, visitor1, visitor2 | Normal (desktop) |
| QuizWhiz | `mcq` | mcq, mcq1 | Normal |
| Zintari App | `zintari_app` | Login, Dashboard EN, Dashboard AR | Mobile portrait |
| YeboNadi App | `yebonadi_app` | Homepage, Record, Recording | Mobile portrait |
| NoteNova App | `notenova_app` | Dashboard, All Notes, Full View | Mobile portrait |
