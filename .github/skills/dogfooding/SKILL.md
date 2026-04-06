---
name: dogfooding
description: 'Critically dogfood interactive apps for fun, engagement, and usability. Use for playtesting, UX smoke tests, boredom-risk analysis, replayability checks, and actionable product feedback with severity and next steps.'
argument-hint: 'Optional focus: fun, onboarding, replayability, mobile, accessibility, or host-mode'
---

# Dogfooding Skill

Run a critical, product-minded dogfooding pass on an app and report what makes it fun, what kills momentum, and what to improve first.

## When To Use
- The user asks to test an app like a real user, not just verify technical correctness.
- The goal is to evaluate fun, social energy, motivation, and replay value.
- You need concise but sharp feedback that can guide product iteration.

## Inputs
- Running app URL or run instructions.
- Optional focus area: onboarding, game loop, social dynamics, mobile ergonomics, accessibility, retention.
- Optional persona: first-time player, event host, repeat player, skeptical user.

## Procedure
1. Establish test setup.
- Confirm app runs and open it in browser tooling.
- Record platform assumptions (desktop/mobile viewport, keyboard/mouse/touch).

2. Baseline first impression (first 30-60 seconds).
- Evaluate clarity of purpose, emotional hook, and friction to first action.
- Note whether copy and visual hierarchy create anticipation.

3. Execute core loop as a real user.
- Perform the primary task flow at least once end-to-end.
- Intentionally vary behavior: fast taps, back/reset, replay, and edge interactions.
- Capture whether tension builds or flattens after first success.

4. Run branch checks.
- If the product is game-like: test win/loss, post-win continuation, and replay freshness.
- If the product is social: test prompt quality for conversation spark vs. checkbox behavior.
- If the product is utility-first: test perceived value and habit-forming cues.

5. Validate usability and inclusivity signals.
- Keyboard path: Tab/Enter and focus visibility.
- Mobile path: small viewport scan for cramped layout, scroll burden, and tap comfort.
- Persistence path: reload behavior and session continuity.

6. Score experience quality.
- Provide numeric scores:
  - Core fun/engagement: 0-10
  - Replay value: 0-10
  - Friction level: 0-10 (higher means worse friction)
- Explain score deltas with concrete observations.

7. Produce critical findings first.
- List findings in severity order with user impact and why it matters.
- Separate reliability wins from experience gaps.

8. Close with actionable iteration plan.
- Offer 3-5 changes ordered by impact and effort.
- Mark quick wins vs. medium bets.

## Decision Points
- If the core flow is broken, prioritize bug blockers before fun analysis.
- If the core flow works but excitement is flat, prioritize content and progression over visuals.
- If users can win quickly and interest drops, prioritize post-win loop and replay mechanics.
- If mobile usability is poor, prioritize ergonomics before adding features.

## Completion Checks
- Tested onboarding + one full loop + one replay/reset path.
- Included at least one keyboard interaction and one mobile viewport assessment.
- Report includes scores, severity-ranked findings, and prioritized recommendations.
- Feedback addresses both "works" and "is fun".

## Output Format
1. Verdict + score summary.
2. Critical findings (highest impact first).
3. What is already working.
4. Prioritized improvements (quick wins and medium bets).
5. Optional next-step offer (e.g., convert feedback into implementation plan).
