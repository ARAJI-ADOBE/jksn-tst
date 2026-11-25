<!-- stardust:provenance
  writtenBy:        stardust:extract
  writtenAt:        2026-11-18T08:47:00Z
  mode:             descriptive (current state, not a target)
  readArtifacts:
    - stardust/current/_brand-extraction.json
    - stardust/current/pages/*.json (8)
    - https://www.ppmamerica.com/news-and-insights (and 7 subtree pages)
  synthesizedInputs: []
  stardustVersion:  0.37.2
-->
# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

_provenance: inferred. Basis: the disclosure gate text and the content mix.

- The primary users are **institutional investors and consultants**. The
  site-wide Disclosure Agreement says the material "has been created for and
  is for use only by institutional investors and consultants. It is not
  intended for use by retail investors."
- They come to the News and Insights hub to follow market commentary (CIO
  letters, quarterly asset-class outlooks), the firm's blog analysis and
  corporate press releases.
- Secondary audiences are inferred from the press releases and the footer
  links: press and industry observers, and prospective hires (Careers sits
  under Our Story).

## Product Purpose

The site belongs to PPM America. Press-release boilerplate describes the firm
as "a US-based institutional asset manager with $101.76 billion in assets
under management as of September 30, 2026… Established in Chicago in 1990."
The `/news-and-insights` subtree is the firm's publishing surface. Its hub
copy reads: "We publish a range of research articles and outlooks to help
keep you updated on key themes across the financial markets." The subtree
has three streams:

- **Blog**: "We dig deep every day inspiring each other to identify new
  perspectives and opportunities…"
- **Market Insights**: "timely market commentary from our CIO, portfolio
  managers and credit research team". Most items link to a full PDF.
- **Press Releases**: "the latest news about us and our efforts to help our
  clients achieve their long-term value goals". These cover CLO closings and
  team hires.

## Positioning

_provenance: inferred. Basis: the About PPM boilerplate and the Our Advantage
band.

PPM positions itself through its culture and credit expertise: "hard work,
straight talk, full transparency and humility", and "a team-based culture
that encourages debate, collaboration and consistency". The hub's CTA band
says "Clients are at the core of everything we do". The research is
attributed to named investment leaders, such as the CIO letter by Ogechi
Nwachukwu and the blog post by Joe Burke, CRI.

## Capabilities and Constraints

- The site is built on AEM Sites (core components, experience-fragment
  header and footer, `/etc.clientlibs` assets), with RUM instrumentation.
- An institutional **Disclosure Agreement modal** (ACCEPT / DECLINE) is
  present on every page. It was accepted before capture.
- The listings show the whole archive on one page with no pagination or
  filtering (about 60 cards on Market Insights). There is a site search
  (GET `/search?searchTerm=`), but its form is hidden behind an icon.
- Market-insight details are short summaries with a "Download the Full PDF"
  CTA, so the primary content lives in PDFs. Blog and press-release details
  carry full HTML bodies.
- Detail pages carry compliance disclaimers. `/sitemap.xml` returned 500 and
  there are no OG tags, so the pages were discovered by in-subtree links.

## Brand Commitments

- **Register:** `brand`. This is an editorial/marketing surface for an
  institutional firm, with no authentication or tool UI.
- **Name and assets:** PPM America. The only logo variant is a raster
  wordmark PNG (`assets/logo.png`, 1108×167). The favicon is in
  `assets/favicon.ico`.
- **Visual identity in use:** a Century Std serif display face paired with
  uppercase tracked Azo Sans, a teal colour family (`#008578` /
  `#004f59`), mint `#47d7ac` highlights, and a flat, square geometry. Both
  typefaces are commercial (licensing flag `private`).
- **Observed personality:** professional-formal, measured and
  compliance-aware. Headings are factual ("CLO Equity Outlook", "High Yield
  Outlook"); editorial titles are slightly more conversational ("CRE
  Valuations: Why We Expect a Flat Road Ahead", "A Tempest in a Teapot?").
- **Observed anti-references:** no consumer or retail tone, no promotional
  hype, no playful motion.

## Evidence on Hand

- Page records: `stardust/current/pages/<slug>.json` and settled DOM in
  `stardust/current/pages/<slug>.html` (8 pages).
- Screenshots: `stardust/current/assets/screenshots/<slug>.png` and
  `*-thumb*.png`.
- Brand surface: `stardust/current/_brand-extraction.json`, computed styles
  in `stardust/current/_computed-styles.json`, and tokens and the cap model
  in `stardust/current/DESIGN.json`.
- Assets: `assets/logo.png`, `assets/favicon.ico`, 4 woff2 font files in
  `assets/fonts/`, and 45 content images in `assets/media/` (banners, card
  images, the article chart, author headshots).
- **Absent, so future work must not fabricate them:** testimonials, client
  logos, performance figures beyond the AUM statement, OG/social images, an
  SVG logo, and any author bios beyond name and title. The PDF content
  behind the market insights was not captured.

## Product Principles

_provenance: inferred. Basis: the captured copy and structure.

1. **Credibility through named expertise.** Insights are attributed to
   named investment leaders with title and headshot.
2. **Compliance first.** Disclosure gating and disclaimers frame every piece
   of content.
3. **Recency and cadence.** Dated, categorised content streams (CIO Letter,
   Quarterly Insights, Blog, Press Release) signal ongoing market coverage.
4. **Restraint.** Plain, factual presentation with no hype, which suits an
   institutional audience.

## Accessibility & Inclusion

The capture recorded these existing conditions:

- 78% of captured images (117/150) have empty `alt`, including most card
  and banner images.
- Headings are uppercased by CSS while the authored text stays mixed-case.
- There is no `<main>` or `<footer>` landmark; the footer is a `div.footer`.
- The card excerpt copy on the hub is duplicated or mismatched (the CLO
  Equity Outlook card shows the Emerging Markets Debt excerpt).

No product-specific accessibility standard was declared on the site.
