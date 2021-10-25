import { createDOMElement, createButton } from './board.js';
import { p1, p2 } from './puzzles.js';

export function init (generate) {
    generate(p2);

    const input = createDOMElement('textarea', {});
    const showBtn = document.getElementById('loadBtn');

    showBtn.addEventListener('click', () => {
        showBtn.replaceWith(div);
    });

    const hideBtn = createButton('Close Load', () => {
        div.replaceWith(showBtn);
    });

    const confirmBtn = createButton('Load', () => {
        const puzzle = JSON.parse(input.value);
        generate(puzzle);
    });

    const div = createDOMElement('div', {}, hideBtn, input, confirmBtn);
}