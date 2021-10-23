export function renderBoard(values, main) {
    main.appendChild(cluster(values[0]));
    main.appendChild(cluster(values[1]));
    main.appendChild(cluster(values[2]));
}

function cluster(values) {
    const element = createDOMElement(
        'div', 
        { className: 'cluster' }, 
        ...values.map(b => block(b))
    );

    return element;
};

function block (values) {
    const element = createDOMElement('div', {className: 'block'});

    element.appendChild(row(values.slice(0, 3)));
    element.appendChild(row(values.slice(3, 6)));
    element.appendChild(row(values.slice(6)));

    return element;
}; 

function row (values) { 
    const element = createDOMElement('div', {className: 'row'}, ...values.map(cell));

    return element;
};

function cell(value) {
    const element = createDOMElement(
        'input', 
        {
            type: 'text',
            className: 'cell'
        }
    );

    if(value > 0) {
        element.disabled = true;
        element.classList.add('fixed');
        element.value = value;
    }

    return element;
};

function createDOMElement(type, attr, ...content) {
    const element = document.createElement(type);       

    // Adds element attributes
    Object.assign(element, attr);

    for (let item of content) {
        if(typeof(item) === 'string' 
        || typeof(item) === 'number') {
            item = document.createTextNode(item);
        }

        element.appendChild(item);
    }

    return element;
};