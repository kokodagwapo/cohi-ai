# Coheus (Cohi) Marketing Site

## Overview
A marketing website for Coheus, a mortgage intelligence platform. Built with React + Vite. Frontend-only, no backend.

## Project Architecture
- **Framework**: React 19 + Vite 7
- **Routing**: react-router-dom v7
- **Styling**: PostCSS, vanilla CSS
- **Port**: 5000 (dev server)
- **Deployment**: Static (builds to `dist/`)

## Key Directories
- `src/components/` - Reusable UI components (Header, Footer, Hero, Sections)
- `src/pages/` - Page-level components (HomePage, AboutPage, PricingPage, etc.)
- `public/brand/` - Brand imagery and assets

## Environment Variables
- `VITE_GEMINI_API_KEY` - Optional Gemini API key for TTS/Listen feature

## Recent Changes
- 2026-02-13: Initial Replit setup, configured Vite for Replit (host 0.0.0.0:5000, allowedHosts)
