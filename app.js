import { generateScramble } from './scrambler.js';
import { playReadySound, playStopSound } from './audio.js';

// Screen Elements
const homeScreen = document.getElementById('home-screen');
const timerScreen = document.getElementById('timer-screen');
const menuCards = document.querySelectorAll('.menu-card');
const backBtn = document.getElementById('back-btn');

// Timer UI Elements
const timeDisplay = document.getElementById('time-display');
const scrambleDisplay = document.getElementById('scramble-display');
const solveHistory = document.getElementById('solve-history');
const instruction = document.getElementById('instruction');
const sessionTitle = document.getElementById('session-title');

// State Variables
let isRunning = false;
let isReadying = false;
let startTime = 0;
let timerInterval;
let activeCubeType = '3x3'; // Default cube type

// Screen Navigation Logic
menuCards.forEach(card => {
    card.addEventListener('click', () => {
        // Get the cube type from the data attribute (e.g., "2x3", "3x3")
        activeCubeType = card.dataset.cube;

        // Update the timer Screen UI
        sessionTitle.textContent = card.querySelector('h3').textContent;
        scrambleDisplay.textContent = generateScramble(activeCubeType);

        // Switch Screens
        homeScreen.classList.remove('active');
        timerScreen.classList.add('active');
    });
});

// Back Button Logic
backBtn.addEventListener('click', () => {
    // Reset Timer State if they leave midway
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        timeDisplay.textContent = "0.00";
    }
    // Switch screens
    timerScreen.classList.remove('active');
    homeScreen.classList.add('active');
});

// Timer Logic
function updateDisplay() {
    const currentTime = performance.now();
    const elapsed = currentTime - startTime;
    timeDisplay.textContent = formatTime(elapsed);
}

function formatTime(ms) {
    const totalSeconds = ms / 1000;
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60);
    const milliseconds = Math.floor((ms % 1000) / 10);

    const secStr = seconds < 10 && minutes > 0 ? `0${seconds}` : seconds;
    const msStr = milliseconds < 10 ? `0${milliseconds}` : milliseconds;

    return minutes > 0 ? `${minutes}:${secStr}.${msStr}` : `${secStr}.${msStr}`;
}

// Event Listeners for Spacebar
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && timerScreen.classList.contains('active')) {
        if (isRunning) {
            clearInterval(timerInterval);
            isRunning = false;

            playStopSound(); // Plays the Two-Tone chime

            logSolve(timeDisplay.textContent);
            scrambleDisplay.textContent = generateScramble(activeCubeType);
            instruction.textContent = "Hold Spacebar to Ready, Release to Start";
        } else if (!isReadying) {
            isReadying = true;

            playReadySound(); // Plays the Ready sound

            timeDisplay.style.color = "var(--ready-color)";
            instruction.textContent = "Release to Start!";
        }
    }
});

window.addEventListener('keyup', (e) => {
    if (e.code === 'Space' && isReadying && !isRunning && timerScreen.classList.contains('active')) {
        isReadying = false;
        isRunning = true;
        startTime = performance.now();
        timeDisplay.style.color = "var(--text-primary)";
        instruction.textContent = "Solving...";
        timerInterval = setInterval(updateDisplay, 10);
    }
});

// Function to log the solve time
function logSolve(timeString) {
    const li = document.createElement('li');
    li.textContent = timeString;
    solveHistory.appendChild(li);
}