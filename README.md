# CubeTracker Pro

A lightweight, browser-based timer for speedcubing practice. Pick a cube type, get a scramble, and time your solve with spacebar controls similar to dedicated cubing timers — hold to arm, release to start, tap to stop.

## Features

- **Four practice modes** — 2x2, 3x3, 4x4, and an Edge Placement Focus drill for scenarios where only two edges are left to place
- **Spacebar-driven timer** — hold to arm (display turns green), release to start, tap to stop
- **Audio feedback** — a ready tone and a two-tone stop chime, synthesized live via the Web Audio API, so no audio files are needed
- **Solve history** — completed times are added to a running list for the session (not persisted; refreshing the page clears it)

### Scramble lengths

Scramble length and move set adjust per cube type, and the generator never repeats the same face on consecutive moves:

| Mode | Scramble length | Notes |
|---|---|---|
| 2x2 | 11 moves | |
| 3x3 | 20 moves | |
| 4x4 | 40 moves | Includes wide moves (Uw, Dw, Lw, Rw, Fw, Bw) |
| Edge Placement Focus | 15 moves | Shorter warm-up scramble |

## Project Structure

```
.
├── index.html      Home screen & timer screen markup
├── style.css       Dark theme, layout, and screen transitions
├── app.js          Screen navigation, timer state, keyboard handling
├── scrambler.js    Scramble string generator
└── audio.js        Web Audio API sound effects
```

## Usage

1. Pick a cube type from the home screen.
2. Hold **Space** to arm the timer.
3. Release **Space** to start solving.
4. Press **Space** again to stop — the time is logged and a new scramble appears automatically.
5. Click **Back to Menu** anytime to return home; this also resets a timer that's mid-solve.

## Tech Stack

Vanilla JavaScript (ES modules), HTML5, and CSS3 — no frameworks, libraries, or build tooling.
