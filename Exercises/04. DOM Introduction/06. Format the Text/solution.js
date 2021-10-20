function solve() {
    let paragraphSize = 3;
    let pElement = document.getElementById('input');
    let textOfPElement = pElement.value;

    let sentences = textOfPElement
        .split('.')
        .filter(x => x)
        .map(x => x + '.');

    let lastParagraphLength = sentences.length % paragraphSize;
    let lastParagraph = sentences
        .slice(-lastParagraphLength)
        .join(' ');
    let lastP = document.createElement('p');
    lastP.innerHTML = lastParagraph;

    let count = sentences.length - lastParagraphLength;
    let paragraphs = [];

    for (let i = 0; i < count; i += 3) {
        let currentParagraph = [sentences[i], sentences[i + 1], sentences[i + 2]].join(' ');
        let currentP = document.createElement('p');
        currentP.innerHTML = currentParagraph;
        paragraphs.push(currentP);
    }

    if (lastParagraphLength) {
        paragraphs.push(lastP);
    }    

    let div = document.getElementById('output');

    for (const p of paragraphs) {
        div.appendChild(p);
    }
}