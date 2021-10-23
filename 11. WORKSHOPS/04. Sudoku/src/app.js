// Load puzzle
// Render puzzle
// Handle input
// Check solution

import { p1 } from './puzzles.js';
import { renderBoard, createButton } from './board.js';

window.addEventListener('DOMContentLoaded', start);

function start() {
    const main = document.querySelector('main');
    const cells = renderBoard(p1, main);   
    
    const checkBtn = document.getElementById('checkBtn');
    checkBtn.addEventListener('click', () => {
        cells.blocks.forEach(check);
        cells.rows.forEach(check);
        cells.columns.forEach(check);

        checkBtn.replaceWith(uncheckedBtn)
    });

    const uncheckedBtn = createButton('Clear Check', () => {
        cells.blocks.forEach(c => c.forEach(x => x.classList.remove('error')));
        uncheckedBtn.replaceWith(checkBtn);
    });
}

function check(cells) {
    const values = cells
        .map(c => c.value)
        .filter(c => c !== '')

    const numbers = new Set(values);

    if(numbers.size != 9) {
        cells.forEach(c => c.classList.add('error'));
    }
}
