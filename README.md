# CubeTracker Pro

A timer for practicing Rubik's cube solves. Comes with a scrambler that spits out algorithms for you, and works with 2x2/3x3/4x4, plus a drill mode for when you've just got two edges left to place (that one's saved me a lot of practice time honestly).

Nothing fancy here — vanilla JS, HTML, CSS. No build step, no frameworks. Just open `index.html` and go.

## What it does

- 4 modes: 2x2, 3x3, 4x4, and Edge Placement Focus (for that annoying last-two-edges situation)
- hold spacebar to arm the timer (turns green when ready), let go to start, tap again to stop
- makes its own sounds with the Web Audio API — a ready beep and a two-tone chime when you stop. no mp3 files, all synthesized
- keeps a running list of your times for the session. heads up though, it doesn't save anywhere, so refreshing the page wipes it

## Scramble lengths

Pretty standard lengths per cube. Made sure the generator won't repeat the same face twice in a row:

- 2x2 → 11 moves
- 3x3 → 20 moves
- 4x4 → 40 moves (includes wide moves — Uw, Dw, Lw, Rw, Fw, Bw)
- Edge Placement Focus → 15 moves, just a quick warm-up scramble

## How to use it

1. Pick your cube type on the home screen
2. Hold Space to arm
3. Let go and start solving
4. Hit Space again when you're done — time gets logged and a fresh scramble loads right after
5. "Back to Menu" takes you home. It'll also reset a timer if you're mid-solve, so don't click it by accident

## Files

- `index.html` — home screen + timer screen
- `style.css` — dark theme, layout, screen transitions
- `app.js` — navigation, timer logic, keyboard handling
- `scrambler.js` — generates the scramble strings
- `audio.js` — the beeps and chimes

## Stack

Vanilla JS (ES modules), HTML5, CSS3. No React, no build tools, nothing to install. A cube timer really doesn't need a framework.
