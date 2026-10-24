# Lalay's Ukay

**Live site:** https://c20245375paclibar-cyber.github.io/Lalay-s-Ukay/

**GitHub repository:** https://github.com/c20245375paclibar-cyber/Lalay-s-Ukay

## About

Lalay's Ukay is a local thrift store and wholesale bodega in Victorias City, Negros Occidental. The site introduces the shop and highlights a few pre-loved fashion finds for local thrifters and resellers.

## Design System

### Palette (60-30-10)

| Role | Share | Color | Used for |
|---|---|---|---|
| Dominant | 60% | `#f5f1e9` | Main page background and light surfaces |
| Secondary | 30% | `#193d32` | About section, headings, and primary buttons |
| Accent | 10% | `#d77346` | Links, highlights, and interactive states |

### Visual style

**Style chosen:** Minimalism

**Why I chose it:** A restrained palette, clear typography, and uncluttered product cards keep the focus on each pre-loved find.

### Contrast check

Body text color vs. background color: `#272923` on `#f5f1e9`

Contrast ratio: 13.06 : 1 (WCAG 2.2 AA requires at least 4.5 : 1)

Checked using the WCAG relative-luminance contrast calculation.

## Features

- [x] Semantic sections, header navigation, and footer
- [x] Required contact form fields with associated labels
- [x] Mobile-first Tailwind layout with small-screen, tablet, and desktop breakpoints
- [x] Reusable Tailwind component classes using `@apply`
- [x] Dark mode toggle with dark styling for sections, navigation, cards, form fields, and buttons
- [x] GSAP page-load intro timeline with replay button
- [x] Scroll reveals on every section below the hero (ScrollTrigger)
- [x] Scroll progress bar linked to page scroll with scrub
- [x] Reduced-motion support keeps all content visible and disables motion
- [x] Public GitHub Pages deployment

## Built With

HTML, Tailwind CSS, JavaScript, GSAP, ScrollTrigger
