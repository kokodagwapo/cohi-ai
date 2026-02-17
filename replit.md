# Coheus Website

## Overview

Coheus is a marketing/product website for an executive intelligence platform targeting mortgage lenders. It's a single-page application built with React and Vite, using a full-page scroll-snap layout where each section occupies the full viewport height. The site includes a lightweight Express server (`server/tts-proxy.js`) that serves the built static files and provides a streaming TTS API endpoint.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- **TopTiering Section Overhaul (Feb 2026)**: Consolidated from 8 panels down to 5 executive-focused panels with bolder data visualizations. Panels: The 200+ BP Performance Gap, Rank Every LO in Real Time, Coach with Precision, Align Comp & Compare Branches, The Bottom Line. Each panel features large-format infographic-style images with blown-up charts and metrics. Panels styled as white cards with subtle shadow and hover effects.
- **Content Overhaul (Feb 2026)**: Removed all baseball/moneyball/Hawk-Eye references except hero section background image. Updated navigation labels: Platform, Why Coheus, TopTiering, Get Started, Contact. Changed contact email to info@coheus.com. Reduced Stats section from 6 to 4 items.
- **Tablet Responsiveness (Feb 2026)**: Added 768-1024px breakpoint with tighter nav spacing, scaled hero elements (70% cards, smaller device mockups), disabled scroll-snap on tablets.
- **Generated Images**: 5 TopTiering panel images in `public/ugc/playbook/` (toptiering-gap, overview, coaching, compensation, impact) — bold data visualization infographics.

## System Architecture

### Frontend Architecture
- **Framework**: React 19 with Vite 7 as the build tool
- **Routing**: React Router DOM v7 is installed, though the primary layout appears to be a single-page scroll-snap design rather than multi-page routing
- **Styling**: Plain CSS with CSS custom properties (no Tailwind, no CSS-in-JS). Uses a design token system defined in `src/index.css` with variables for colors, typography, and glassmorphism effects
- **Typography**: Plus Jakarta Sans loaded from Google Fonts
- **Layout Pattern**: Full-viewport scroll-snap sections (`.snap-section` with `scroll-snap-type: y mandatory`), creating a slide-by-slide scrolling experience. Scroll-snap disabled at tablet breakpoint (768-1024px).
- **Dark Mode**: CSS custom properties support a `[data-theme="dark"]` variant

### Design System
- **Brand Colors**: Coheus Blue (`#0033A0`) and Coheus Green (`#00A651`) with soft tinted variants
- **Glass UI**: Glassmorphism-style components with translucent backgrounds and blur effects
- **Section Tints**: `--section-warm` and `--section-accent` CSS variables for section theming

### Navigation Sections
- Home, Platform, Why Coheus, TopTiering, Get Started, Contact

### Build & Optimization
- **Image Optimization**: Uses `vite-plugin-image-optimizer` with Sharp for compressing PNG, JPEG, and WebP assets during build
- **SVG Optimization**: SVGO is available as a dev dependency
- **PostCSS**: Configured but with no plugins currently active

### Project Structure
- `src/` — React application source code
- `src/main.jsx` — Entry point
- `src/App.css` — Main layout styles (scroll-snap system)
- `src/index.css` — Global styles and CSS custom properties (design tokens)
- `src/components/` — React components (Header, SectionHero, SectionAboutCoheus, SectionUgc, SectionOutcomes, SectionContact, etc.)
- `public/` — Static assets including logos and marketing images
- `public/ugc/playbook/` — TopTiering section panel images (8 generated images)

### Server Architecture
- **Express server** (`server/tts-proxy.js`) — Serves built static files and provides streaming TTS API
- **TTS endpoint** (`POST /api/tts`) — Uses OpenAI `gpt-audio` model via Replit AI Integrations for streaming text-to-speech
- **Health check** (`GET /health`) — Returns 200 OK for deployment health checks
- **Deployment**: Autoscale target

### Key Design Decisions
1. **Scroll-snap over traditional routing**: The site uses CSS scroll-snap for section navigation instead of page-based routing. This creates an immersive, presentation-like feel appropriate for a marketing site.
2. **CSS custom properties over a CSS framework**: Keeps the bundle lightweight and gives full control over the design system without framework overhead.
3. **Streaming TTS with OpenAI**: Uses OpenAI gpt-audio model via chat completions with streaming to deliver instant audio playback.
4. **React 19**: Using the latest React version for modern features and performance.
5. **TopTiering focus**: The Playbook section was rewritten to focus on the TopTiering framework for mortgage lender performance management — no baseball analogies.

## External Dependencies

### Runtime Dependencies
- **React 19** — UI framework
- **React DOM 19** — DOM rendering
- **React Router DOM 7** — Client-side routing (available but site is primarily scroll-snap based)
- **Express 5** — Server for static files and TTS API
- **OpenAI SDK** — OpenAI API client for TTS via Replit AI Integrations

### Dev Dependencies
- **Vite 7** — Build tool and dev server
- **@vitejs/plugin-react** — React support via Babel
- **vite-plugin-image-optimizer** — Automatic image compression during build
- **Sharp** — Image processing engine (used by the image optimizer)
- **SVGO** — SVG optimization
- **ESLint 9** — Linting with React Hooks and React Refresh plugins

### External Services
- **Google Fonts** — Plus Jakarta Sans font loaded via CDN
- **OpenAI (via Replit AI Integrations)** — gpt-audio model for streaming text-to-speech (no separate API key needed, billed to Replit credits)
