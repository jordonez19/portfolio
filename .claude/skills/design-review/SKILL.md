---
name: design-review
description: Review or redesign visual styling in this portfolio (src/styles/index.css, component className usage, colors, typography, cards, badges) to look like a deliberate, professional personal brand instead of a default AI-generated template. Use when asked to improve the design, make it "look less AI", polish the UI, pick a color palette, or review a visual change before it ships.
---

This portfolio currently uses the single most common default LLM-generated
dark-portfolio look: `#090a0f` navy background, indigo `#6366f1` primary
(Tailwind's stock `indigo-500`), cyan/emerald accents, Inter + Outfit +
JetBrains Mono, glassmorphism cards, gradient text on every heading, and
pill badges everywhere. None of that is *wrong* — it's just the exact
palette and pattern set thousands of other AI-scaffolded portfolios ship
with unchanged, which is what reads as generic rather than a deliberate
choice. All tokens live in [src/styles/index.css](../../../src/styles/index.css)
(`:root`, lines 1-30) and get reused across every component via
`.glass-card`, `.badge`, `.text-gradient`, `.btn` (lines 94-160).

This is a review checklist, not a driver skill — there's nothing to
launch. Read the file(s) under review, check against the list below, and
either report findings or make the edit directly if asked to fix it. To
see a change rendered, use the [run-portfolio](../run-portfolio/SKILL.md)
skill to screenshot it.

## Checklist — signals this reads as "AI template" vs. deliberate

1. **Primary color is stock indigo (`#6366f1`) or violet/purple.** This is
   the #1 tell — it's the default in nearly every AI coding tool's dark
   theme. Check `--primary` in `index.css:9`. A deliberate palette either
   picks a color outside that indigo/violet band, or leans into a
   near-monochrome scheme (white/gray on navy) with color used only as a
   single sparing accent, not the dominant hue on every button/link/badge.

2. **Gradient text on every heading.** `.text-gradient` (`index.css:77`)
   is applied broadly. One hero headline using it is a choice; every
   `<h2>` section title using the same white→slate→indigo sweep is a
   template tell. Reserve gradient text for at most one element per
   viewport.

3. **Glassmorphism cards for every content block.** `.glass-card`
   (`index.css:100`) — translucent bg, subtle border, hover lift — is
   applied to timeline entries, service cards, project cards, stat tiles
   alike. When *everything* is a glass card, the pattern stops
   communicating hierarchy. Vary surface treatment: some content can sit
   directly on the page background with just a divider or spacing, not a
   bordered card.

4. **Pill badges as the default way to show any list of keywords.**
   `.badge` (`index.css:115`) renders every tech-stack tag, skill, and
   status as a `border-radius: 9999px` pill. Rows of 6-10 pills per
   card (see the Experience timeline and Tech Stack sections) reads as
   auto-generated tag soup. Prefer plain text lists, a `·`-separated
   line, or grouping into 2-3 that actually matter, not every keyword.

5. **Uniform corner radius + uniform shadow everywhere.** Check that not
   every interactive element uses the same `--radius-md` / `--radius-sm`
   pair and the same box-shadow recipe. Visual monotony across an entire
   page (every card, button, and badge sharing identical rounding and
   elevation) is easier to generate than to design — deliberate work
   usually has 1-2 corner treatments used purposefully, not one radius
   scale applied everywhere by default.

6. **Decorative radial-gradient "glow orbs" behind sections.** `body`
   (`index.css:47`) has two fixed radial gradients in indigo/cyan at low
   opacity — another extremely common AI-template signature ("ambient
   glow" backgrounds). Fine in small doses; check it isn't repeated
   behind every section with the same two colors.

7. **Generic font trio.** Inter (body) + a geometric sans for headings
   (Outfit) + a mono for code bits (JetBrains Mono) is the standard
   AI-generated stack (`index.css:18-20`). Not automatically bad — these
   are good fonts — but if the goal is to read as less templated,
   consider a heading typeface with more personality/less roundness than
   Outfit, or tighter type-scale contrast between body and headings than
   the default.

8. **Stat-card rows** ("5+ Años", "Cloud Native", "C1 Level" — see
   [Hero.tsx](../../../src/components/Hero.tsx)) presented as 3-4 equal
   glass tiles in a row is a recognizable AI-portfolio hero pattern.
   Consider working the same numbers into prose or a single inline
   strip instead of repeating the card pattern from section to section.

## What "fixed" looks like

Not a full rebrand — small, deliberate deviations from the defaults:
- One primary accent that isn't indigo/violet (or a genuinely
  minimal near-mono palette).
- Gradient/glow effects used on exactly one focal element, not
  repeated per-section.
- At least one section that breaks the "everything is a rounded glass
  card" pattern.
- Badge/pill usage trimmed to what's actually worth calling out, not
  every tag in the data model.

## Applying a fix

Tokens are centralized in `:root` (`index.css:1-30`), so palette changes
are mostly a handful of edits there, not per-component. Component-level
overuse (badge counts, `.glass-card` applied everywhere) needs edits in
the individual `src/components/*.tsx` files — grep for `.glass-card` /
`className="badge` to find every instance before deciding what to trim.

After any visual change, use [run-portfolio](../run-portfolio/SKILL.md)
to screenshot the affected section — don't judge a CSS change by reading
the diff alone.
