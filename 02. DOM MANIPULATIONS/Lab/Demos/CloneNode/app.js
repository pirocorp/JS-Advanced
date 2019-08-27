const textTemplate = document.createElement('p');
textTemplate.style.background = 'black';
textTemplate.style.color = 'white';
textTemplate.className = 'special-text'


const p = textTemplate.cloneNode(true);
p.textContent = 'First paragraph';

const p2 = textTemplate.cloneNode(true);
p2.textContent = 'Second paragraph';

const p3 = textTemplate.cloneNode(true);
p3.textContent = 'Third paragraph';

document.body.appendChild(p);
document.body.appendChild(p2);
document.body.appendChild(p3);