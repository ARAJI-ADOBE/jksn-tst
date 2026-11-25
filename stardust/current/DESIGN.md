<!-- stardust:provenance
  writtenBy:        stardust:extract
  writtenAt:        2026-11-18T08:45:00Z
  mode:             descriptive (current state, not a target)
  readArtifacts:
    - stardust/current/_brand-extraction.json
    - stardust/current/_computed-styles.json
    - stardust/current/DESIGN.json
    - stardust/current/pages/*.json (8)
    - stardust/current/assets/screenshots/*-thumb*.png (vision check)
  synthesizedInputs: []
  stardustVersion:  0.37.2
-->
---
name: PPM America — News and Insights (current state)
description: Institutional asset manager's research hub — serif display titles, uppercase tracked sans labels, teal action colour on white.
colors:
  paper: "#ffffff"
  mist: "#f4f4f4"
  ink: "#25282a"
  slate: "#6a737b"
  teal: "#008578"
  deep-teal: "#004f59"
  mint: "#47d7ac"
  plum: "#5c068c"
typography:
  display:
    fontFamily: "CenturyStd-Book, Georgia, serif"
    fontSize: "48px"
    fontWeight: 500
    lineHeight: "57.6px"
    letterSpacing: "normal"
  display-sm:
    fontFamily: "CenturyStd-Book, Georgia, serif"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: "38.4px"
    letterSpacing: "normal"
  title-caps:
    fontFamily: "AzoSans-Bold, sans-serif"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: "28.8px"
    letterSpacing: "1.2px"
  eyebrow-caps:
    fontFamily: "AzoSans-Regular, sans-serif"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: "24px"
    letterSpacing: "2.992px"
  body:
    fontFamily: "AzoSans-Light, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "32px"
    letterSpacing: "normal"
  ui:
    fontFamily: "AzoSans-Light, sans-serif"
    fontSize: "16px"
    fontWeight: 400
  small:
    fontFamily: "AzoSans-Light, sans-serif"
    fontSize: "12px"
    fontWeight: 400
rounded:
  none: "0px"
  sm: "2px"
spacing:
  gutter: "15px"
  container: "1410px"
components:
  button-primary:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.paper}"
    typography: "{typography.ui}"
    rounded: "{rounded.sm}"
    padding: "10px 60px"
  button-primary-hover:
    backgroundColor: "{colors.deep-teal}"
    textColor: "{colors.paper}"
  breadcrumb-band:
    backgroundColor: "{colors.deep-teal}"
    textColor: "{colors.paper}"
    typography: "{typography.ui}"
    padding: "3px 10px 6px"
  title-band:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
  insight-card:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  nav-link:
    textColor: "{colors.slate}"
    typography: "{typography.ui}"
---

# Design System: PPM America — News and Insights (current state)

## Overview

This file describes the live site, not a target. The capture covers 8 pages
under `/news-and-insights` on https://www.ppmamerica.com: the hub, three
listings (Blog, Market Insights, Press Releases) and four details (CIO Letter,
CLO Equity Outlook, a blog article, a press release). The site is
AEM-authored (core components, experience-fragment header and footer).

The look is restrained and institutional. Pages sit on a white canvas with
light-mist title bands. Each page has one serif display headline. Labels,
card titles and navigation are set in uppercase, tracked sans. All action and
chrome colour comes from one teal family. There are no shadows or gradients,
and every corner is square except the 2px button radius. Photography and
abstract chevron tiles supply the visual variety.

## Colors

### Primary
- **PPM Teal `#008578`**: button background and border (OUR STORY,
  DOWNLOAD THE FULL PDF). It is the only action colour.
- **Deep Teal `#004f59`**: the breadcrumb band, the Our Advantage panel and
  the button hover background.

### Secondary
- **Mint `#47d7ac`**: the background of the hub CTA band and the article
  Key Takeaway band. It never appears as text or a border.
- **Plum `#5c068c`**: one inline body link on the press-release detail. It
  is used nowhere else.

### Neutral
- **Paper `#ffffff`**: the page canvas.
- **Mist `#f4f4f4`**: the title bands and the footer. The census put it in
  the same cluster as white; it is listed separately here on the evidence of
  the vision check.
- **Ink `#25282a`**: headings and body text (613 weighted occurrences).
- **Slate `#6a737b`**: top-nav links, which hover to `#000000`.
- Dropped by the 8-colour cap: `#383a42` (article body text) and
  `rgba(0,0,0,0.2)` (the header rule).

## Typography

- **Display: Century Std Book (serif)**, at 48px / 57.6px for the H1 on
  every page and 32px for the hub's "Featured News and Insights" H3. The
  Key Takeaway quote and the footer address use the same face.
- **Headings and labels: Azo Sans.** Each weight is declared as its own
  family (`AzoSans-Bold`, `AzoSans-Regular`); all render at weight 500,
  uppercase. Card titles are 24px with 1.2px tracking. Eyebrows
  (category | date) are 20px with 2.992px tracking.
- **Body: Azo Sans Light**, 18px / 32px. UI text is 16px and small print
  is 12px.
- **Font files:** four woff2 files from a MyFonts-style kit (`357E5E_*`)
  are saved in `assets/fonts/`, all marked licensing `private`.

### Hierarchy
48 → 32 → 24 → 20 px. The ratios are 1.5 / 1.333 / 1.2, so the scale is
**ad-hoc**, not modular. 95% of heading nodes are uppercased by CSS; the
authored text is mixed-case.

## Layout

- Content is capped at **1410px** (`max-width` on the responsive-grid
  modules, measured by cap-probe at a 2560 probe width). The outer shell is
  fluid, with a 15px gutter at 1440.
- The page skeleton is the same on all 8 pages: header (logo left, 4-item
  caps nav, search icon) → deep-teal breadcrumb band → title band → content
  → disclaimer (details only) → mist footer.
- **Listings:** the title band holds the H1 and lede, with a 620×275 banner
  photo on the right. Below it is a 3-column card grid, and the full archive
  loads on one page with no pagination (about 60 cards on Market Insights).
- **Details:** date eyebrow, then summary or body. Blog and press-release
  details add a right-rail author card with a round headshot. Market-insight
  details have a teal PDF button.

## Elevation & Depth

The site is flat. There are no box-shadows or gradients on any captured
page. Depth comes only from colour bands (mist, deep teal, mint) and
photography.

## Shapes

All surfaces, cards and images are square (0px). Primary buttons alone carry
a **2px** radius (3 occurrences). Author headshots are circular images.

## Components

### Buttons
- **Primary:** `#008578` fill, 2px border in the same colour, 2px radius,
  10px 60px padding, Azo Sans Light 16px, white text. On hover the fill
  becomes `#004f59` and the border becomes white.

### Cards / Containers
- **Insight card:** the whole card is one link, with no border, shadow or
  radius. A 620×275 image sits on top, followed by an uppercase eyebrow
  (category | date | read time), an uppercase title and a light excerpt.
  Press-release cards use abstract chevron tiles instead of photos.
- **Our Advantage CTA band** (hub): a photo with a deep-teal panel and an
  OUR STORY button.
- **Key Takeaway band** (blog detail): a mint band with a serif quote.

### Navigation
- **Header:** the raster PPM logo (PNG, 263×40 rendered) and caps links
  INVESTMENT SOLUTIONS / NEWS AND INSIGHTS / OUR COMMITMENTS / OUR STORY in
  slate, plus a search icon. The search form is hidden (GET `/search`).
- **Breadcrumb:** white links on the deep-teal strip.
- **Footer:** logo, Chicago address (serif), LinkedIn icon, and links to
  Contact Us / Privacy Policy / Terms and Conditions / Social. It has no
  column headings.

### Disclosure gate
- A "Disclosure Agreement" modal (`.cmp-modal`, ACCEPT / DECLINE) sits in
  the DOM on every page and gates the site to institutional investors. It
  was accepted before capture, so it does not appear in the screenshots.

## Third-party embeds (opaque to extraction)

None. No iframes or embed-dominated pages were captured.
