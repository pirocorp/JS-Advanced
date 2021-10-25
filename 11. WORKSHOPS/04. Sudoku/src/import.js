import { createDOMElement, createButton } from './board.js';
import { p1, p2 } from './puzzles.js';
import { createTimer } from './timer.js';

export function init (generate) {
    generate(p2);

    const main = document.querySelector('main');
    const panel = document.getElementById('panel');
    const timer = createTimer();

    const showBtn = document.getElementById('loadBtn');

    const pauseBtn = document.getElementById('pauseBtn');
    pauseBtn.addEventListener('click', () => {
        main.remove();
        timer.pause();
        pauseBtn.replaceWith(resumeBtn);
    });

    const resumeBtn = createButton('Resume', () => {
        panel.before(main);
        timer.resume();
        resumeBtn.replaceWith(pauseBtn);
    });    

    showBtn.addEventListener('click', () => {
        generate(p1);
        timer.resume();
    });

    return timer;
}