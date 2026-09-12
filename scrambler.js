/* Scrambler For Cubes */
export function generateScramble(cubeType = '3x3') {
    let moves = ["U", "D", "L", "R", "F", "B"];
    const modifiers = ["", "'", "2"];
    let scrambleLength = 20; // Default scramble length for 3x3

    // Adjust settings based on the selected cube type
    if (cubeType === '2x2') {
        scrambleLength = 11;
        moves = ["U", "D", "L", "R", "F", "B"];
    } else if (cubeType === '4x4') {
        scrambleLength = 40;
        moves = ["U", "D", "L", "R", "F", "B", "Uw", "Dw", "Lw", "Rw", "Fw", "Bw"];
    } else if (cubeType === 'edges') {
        // Shorter scramble focused on middle layer setup
        scrambleLength = 15;
        moves = ["U", "D", "L", "R", "F", "B"];
    }

    let scramble = [];
    let lastMove = "";

    for (let i = 0; i < scrambleLength; i++) {
        let move;
        do {
            move = moves[Math.floor(Math.random() * moves.length)];
            // Ensures we don't pick the same face twice in a row (checks the first letter)
        } while (move.charAt(0) === lastMove.charAt(0));

        lastMove = move;
        const modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
        scramble.push(move + modifier);
    }

    return scramble.join(" ");
}