# Lalay's Ukay

**Live site:** Not deployed yet.

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
Contrast ratio: 13.06 : 1 (needs to be at least 4.5 : 1)  
Tool used: WebAIM Contrast Checker

## Features

- [x] Semantic sections, header navigation, and footer
- [x] Required contact form fields with associated labels
- [x] Mobile-first Tailwind layout with responsive breakpoints
- [x] Reusable Tailwind component classes using `@apply`
- [x] Dark mode toggle with dark styling for sections, navigation, cards, form fields, and buttons
- [ ] Page-load intro animation (GSAP timeline)
- [ ] Scroll reveals on every section below the hero (ScrollTrigger)
- [ ] Scroll progress bar (scrub)
- [ ] Reduced-motion support

## Built With

HTML, Tailwind CSS, JavaScript, GSAP, ScrollTrigger
