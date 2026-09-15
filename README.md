# CubeTracker Pro

Hey Guys, so this is my speedcubing timer project called **CubeTracker Pro**! I got kinda bored of using standard online timers, so I decided to build my own clean web-based timer which also keep a history of your solves using vanilla JavaScript.

It lets you practice different puzzles, gives you random scrambles, and even plays custom audio cues when you start and stop!
## Features
- **Multiple Cube Support:** Switch between 2x2, 3x3, 4x4, and edge practice modes right from the home screen!
- **Random Scrambles:** Generates proper WCA-Style notation scrambles depending on the event you pick.
- **Spacebar Controls:** Just hold space to ready up (turns green when you're good), let go to start the timer, and press space again to stop it.
- **Audio Feedback:** Build-in Web Audio API sounds so you get a nice little click when readying up and a chime when you finish a solve.
- **Session History:** Keeps track of your recent solves on the screen so you can see your times and can check how much you improved.

## Tech Stack
I kept it super simple and didn't use any heavy frameworks or build tools:
- **HTML5**
- **CSS3** (with custom dark-mode styling and CSS variables)
- **JavaScript (ES6 Modules)** for handling the timer logic, scrambler math, and sound effects.

## Project Structure
The project structure is very simple i kept everything in a single file.
- `index.html` - Main UI layout with the home menu and timer screen.
- `style.css` - All the styling, dark theme, and grid layouts.
- `app.js` - Main controller handling the keyboard events, state, and screen switching.
- `scrambler.js` - Generates random valid move sequences for different puzzle types.
- `audio.js` - Generates synth beeps and chimes using the browser's AudioContext.

## How to run
You don't need to install anything extra, just extract the zip file and  double click on "index.html" or go to "https://oaktree26.itch.io/cubetrackerpro" if you dont want to download anything

Let me know of you have any suggestions or find any bugs