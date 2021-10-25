// Load puzzle
// Render puzzle
// Handle input
// Check solution

import { renderBoard, createButton } from './board.js';
import { init } from './import.js';

window.addEventListener('DOMContentLoaded', start);

function start() {
    const main = document.querySelector('main');
    let cells = {
        blocks: [[]],
        rows: [[]],
        columns: [[]],
    }   
    
    const checkBtn = document.getElementById('checkBtn');
    checkBtn.addEventListener('click', () => {
        const blocksReady = cells.blocks
            .map(b => check(b))
            .every(b => b);

        const rowsReady = cells.rows
            .map(b => check(b))
            .every(b => b);

        const columnsReady = cells.columns
            .map(b => check(b))
            .every(b => b);

        if(blocksReady && rowsReady && columnsReady) {
            alert('You win!');
            timer.pause();
        }

        checkBtn.replaceWith(uncheckedBtn)
    });

    const uncheckedBtn = createButton('Clear Check', () => {
        cells.blocks.forEach(c => c.forEach(x => x.classList.remove('error')));
        uncheckedBtn.replaceWith(checkBtn);
    });
    uncheckedBtn.className = 'check-btn';
    
    const timer = init((puzzle) => cells = renderBoard(puzzle, main));
}

function check(cells) {
    const values = cells
        .map(c => c.value)
        .filter(c => c !== '')

    const numbers = new Set(values);

    if(numbers.size != 9) {
        cells.forEach(c => c.classList.add('error'));
        return false;
    }

    return true;
}
