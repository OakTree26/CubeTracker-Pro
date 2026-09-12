// audio.js

// Create a helper to initialize the audio context only when needed
const getAudioContext = () => {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    return AudioCtx ? new AudioCtx() : null;
};

export function playReadySound() {
    const ctx = getAudioContext();
    if (!ctx) return;
    
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    // A subtle, low click to indicate the timer is ready
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, ctx.currentTime); 
    
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.1);
}

export function playStopSound() {
    const ctx = getAudioContext();
    if (!ctx) return;
    
    const now = ctx.currentTime;

    // Helper to layer multiple frequencies
    const playTone = (freq, type, startTime, duration) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        osc.type = type;
        osc.frequency.setValueAtTime(freq, startTime);
        
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.15, startTime + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
        
        osc.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        osc.start(startTime);
        osc.stop(startTime + duration);
    };

    // A professional two-tone chime (C5 then G5)
    playTone(523.25, 'triangle', now, 0.15); 
    playTone(783.99, 'sine', now + 0.1, 0.4); 
}