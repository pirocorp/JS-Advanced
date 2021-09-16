function solve() {
    const text = document.getElementById('text').value;
    const convention = document.getElementById('naming-convention').value;

    let caseFunc = (text) => text
        .split(' ')
        .filter(x => x)
        .map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
        .join('');


    const converter = {
        'Camel Case': (text) => {
            const res = caseFunc(text);

            return res.charAt(0).toLowerCase() + res.slice(1)
        },
        'Pascal Case': (text) => caseFunc(text),
        'default': (text) => 'Error!',
    };

    const resultElement = document.getElementById('result');
    const handler = converter[convention] || converter['default'];
    
    resultElement.textContent = handler(text);
}

