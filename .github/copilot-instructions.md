# Copilot Instructions

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Type-check + Vite build
npm run lint      # ESLint
npm run test      # Vitest (run once, no watch)
```

To run a single test file:
```bash
npx vitest run src/utils/bingoLogic.test.ts
```

## Architecture

This is a single-page React + TypeScript bingo icebreaker app built with Vite and Tailwind CSS v4.

**Data flow:**
- `src/data/questions.ts` — static pool of 24 bingo prompts + `FREE_SPACE` constant
- `src/utils/bingoLogic.ts` — pure functions: `generateBoard`, `toggleSquare`, `checkBingo`, `getWinningSquareIds`
- `src/hooks/useBingoGame.ts` — single hook that owns all game state, wires logic functions together, and persists to `localStorage`
- `App.tsx` — routes between `StartScreen` and `GameScreen` based on `gameState`

**Component tree:**
```
App
├── StartScreen          (gameState === 'start')
└── GameScreen           (gameState === 'playing' | 'bingo')
    └── BingoBoard
        └── BingoSquare  (×25)
    + BingoModal         (overlay when bingo is detected)
```

**Board representation:** A flat `BingoSquareData[]` of 25 items indexed 0–24. Index 12 is always the FREE SPACE (pre-marked, non-clickable). `GameState` is `'start' | 'playing' | 'bingo'`.

**localStorage persistence:** Game state is saved on every change under the key `bingo-game-state` with a `version` field. `validateStoredData` guards against schema mismatches on load.

**Deploy:** GitHub Actions builds with `VITE_REPO_NAME` env var so the app base path becomes `/<repo-name>/game/`. The `_site` directory merges `docs/` (workshop content) at root with the built app under `/game/`.

## Key Conventions

**Tailwind CSS v4 (CSS-first):** No `tailwind.config.js`. All theme tokens are declared in `src/index.css` via `@theme`:
```css
@theme {
  --color-accent: #2563eb;
  --color-marked: #dcfce7;
  --color-marked-border: #22c55e;
  --color-bingo: #fbbf24;
}
```
Use these as `bg-marked`, `border-marked-border`, etc. See `.github/instructions/tailwind-4.instructions.md` for full v4 guidance.

**Pure logic functions:** `bingoLogic.ts` functions are pure and immutable — `toggleSquare` returns a new array, only the affected square gets a new object reference. Keep logic functions here testable and side-effect-free.

**State updates inside setState:** When bingo is detected inside a `setBoard` callback, `queueMicrotask` is used to schedule the follow-up `setWinningLine` / `setGameState` / `setShowBingoModal` calls to avoid nested `setState`.

**Test placement:** Tests live alongside the file under test (`src/utils/bingoLogic.test.ts`), not in a separate `__tests__` folder. Test setup is in `src/test/setup.ts` (extends jest-dom matchers, runs `cleanup` after each test).

**Types:** All domain types live in `src/types/index.ts` and are re-exported from `src/utils/bingoLogic.ts` for convenience.
