---
name: design-guide
description: Use when designing or redesigning UI in this project, especially for style direction, visual polish, or nostalgic aesthetics (early internet, MySpace, first-Facebook era). Enforces bold, intentional visual language and avoids generic modern minimalism.
---

# Design Guide

## Visual Direction
- Favor a bold, memorable style over neutral modern defaults.
- For nostalgic redesign requests, use early internet aesthetics: saturated gradients, thick borders, beveled controls, high-contrast accents, and playful maximalism.
- When nostalgia is not requested, keep the same bold and intentional quality but adapt the aesthetic direction to the user prompt.
- Avoid generic, safe layouts and muted palettes unless explicitly requested.

## Typography
- Avoid default system stacks for design-led tasks.
- Prefer expressive type choices that fit the concept (for retro/webcore looks, pixel or monospace-inspired fonts are preferred).
- Use intentional hierarchy: large display headings, strong contrast, and readable body text.

## Color and Surfaces
- Define a clear palette with tokens in src/index.css using Tailwind v4 @theme.
- Use dominant color families plus punchy accents rather than evenly neutral distribution.
- Prefer layered backgrounds (gradients, subtle patterns, framed surfaces) over flat single-color canvases.

## Component Styling
- Buttons and key controls should feel tactile when appropriate: bevels, inset highlights, stronger border contrast, and clear pressed states.
- Interactive states should be obvious: hover, active, focus-visible, and selected states must be visually distinct.
- Winning or celebration states should feel celebratory and legible, not subtle.

## Motion
- Use a few high-impact animations instead of many minor ones.
- Prioritize meaningful moments: page load reveal, win state emphasis, modal entrance.
- Keep animation performance mobile-friendly and avoid heavy effects that reduce responsiveness.

## Implementation Rules
- Keep game logic unchanged during visual redesign unless the user explicitly asks for behavior changes.
- Preserve accessibility basics: sufficient contrast, keyboard-focus visibility, and touch-friendly controls.
- Keep responsive behavior intact for both desktop and mobile.

## Definition of Done for Design Changes
- The chosen aesthetic is clearly visible on start, gameplay, and win states.
- Core interactions remain intuitive and readable.
- Visual style is cohesive across components (same border language, tokenized colors, and typography direction).
- Final check includes in-browser verification of key screens and states.
