// Load puzzle
// Render puzzle
// Handle input
// Check solution

import { p1 } from './puzzles.js';
import { renderBoard } from './board.js';

window.addEventListener('DOMContentLoaded', start);

function start() {
    const main = document.querySelector('main');

    renderBoard(p1, main);
}

