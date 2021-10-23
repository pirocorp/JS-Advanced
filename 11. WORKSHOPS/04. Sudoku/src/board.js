export function renderBoard(values, main) {
    const clusters = values.map(cluster);
    const blocks = [...clusters[0].cells, ...clusters[1].cells, ...clusters[2].cells];
    const rows = [];
    const columns = [];

    main.appendChild(clusters[0].element);
    main.appendChild(clusters[1].element);
    main.appendChild(clusters[2].element);

    formatCells(blocks, rows, columns);

    return {
        blocks,
        rows,
        columns
    };
}

function cluster(values) {
    const blocks = values.map(block);

    const element = createDOMElement(
        'div', 
        { className: 'cluster' }, 
        ...blocks.map(b => b.element)
    );

    return {
        cells: blocks.map(b => b.cells),
        element,
    };
};

function block (values) {
    const element = createDOMElement('div', {className: 'block'});

    const row1 = row(values.slice(0, 3));
    const row2 = row(values.slice(3, 6));
    const row3 = row(values.slice(6));

    element.appendChild(row1.element);
    element.appendChild(row2.element);
    element.appendChild(row3.element);

    return {
        cells: [...row1.cells, ...row2.cells, ...row3.cells],
        element,        
    };
}; 

function row (values) { 
    const cells = values.map(cell);
    const element = createDOMElement('div', {className: 'row'}, ...cells);

    return {
        cells,
        element
    };
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
    } else {
        let currentValue = '';

        element.addEventListener('input', () => {
            const newValue = Number(element.value);

            if(element.value == '' || (element.value.length === 1 && newValue >= 1 && newValue <= 9)) {
                currentValue = element.value.trim();                
            } else {
                element.value = currentValue;
            }

            console.log(element.value);
        });
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

function formatCells(blocks, rows, columns) {
    for (let matrixIndex = 0; matrixIndex < blocks.length; matrixIndex++) {
        const block = blocks[matrixIndex];

        for (let cellIndex = 0; cellIndex < block.length; cellIndex++) {
            const { x, y } = calcCoordinates(matrixIndex, cellIndex);

            if (rows[x] === undefined) {
                rows[x] = [];
            }

            if (columns[y] === undefined) {
                columns[y] = [];
            }

            rows[x][y] = block[cellIndex];
            columns[y][x] = block[cellIndex];
        }
    }
}

function calcCoordinates(matrixIndex, cellIndex) {
	const x = Math.floor(matrixIndex / 3) * 3  + Math.floor(cellIndex / 3);
	const y = (matrixIndex % 3) * 3 + (cellIndex % 3);

	return {
        x,
        y
    }
};

export function createButton(label, callback) {
    const element = createDOMElement('button', {}, label);
    element.addEventListener('click', callback);

    return element;
}