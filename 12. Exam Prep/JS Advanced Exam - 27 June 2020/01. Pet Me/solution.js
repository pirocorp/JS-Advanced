function solve() {
    const adoptionElement = document.querySelector('#adoption ul');
    const adoptedElement = document.querySelector('#adopted ul');
    const addButton = document.querySelector('#container button');
    const fields = document.querySelectorAll('#container input');

    const inputs = {
        name: fields[0],
        age: fields[1],
        kind: fields[2],
        owner: fields[3],
    };    
      
    const onAddClickHandler = (e) => {
        e.preventDefault();

        const name = inputs.name.value.trim();
        const age = Number(inputs.age.value.trim());
        const kind = inputs.kind.value.trim();
        const owner = inputs.owner.value.trim();

        const emptyValue = Array.from(fields).map(f => f.value.trim()).some(f => f == '');

        if( emptyValue
            || !Number(age)
            || age < 0) {
            return
        }

        const contactOwnerElement = createDOMElement('button', {}, 'Contact with owner');

        const petElement = createDOMElement(
            'li', 
            {}, 
            createDOMElement(
                'p', 
                {},
                createDOMElement('strong', {}, name), 
                ' is a ',
                createDOMElement('strong', {}, age),
                ' year old ',
                createDOMElement('strong', {}, kind)
            ),
            createDOMElement('span', {}, `Owner: ${owner}`),
            contactOwnerElement
        );

        contactOwnerElement.addEventListener('click', onContactOwnerClickHandler.bind(null, petElement));


        adoptionElement.appendChild(petElement);

        Array.from(fields).forEach(f => f.value = '');
    };

    addButton.addEventListener("click", onAddClickHandler);

    function onContactOwnerClickHandler(petElement) {
        console.log(petElement);

        const newOwnerInputElement = createDOMElement(
            'input', 
            {
                placeholder: 'Enter your names',
            }
        );

        const petTakeButton = createDOMElement('button', {}, 'Yes! I take it!');
        petTakeButton.addEventListener(
            'click', 
            onPetTakeButtonClickHanlder.bind(null, newOwnerInputElement, petElement)
        );

        const confirmationDiv = createDOMElement(
            'div', 
            {},
            newOwnerInputElement,
            petTakeButton
        );

        petElement.querySelector('button').remove();
        petElement.appendChild(confirmationDiv);
    };

    function onPetTakeButtonClickHanlder(newOwnerInputElement, petElement) {
        var newOwner = newOwnerInputElement.value.trim();
    
        if(newOwner == '') {
            return
        }
    
        const confirmationDiv = petElement.querySelector('div');
        confirmationDiv.remove();

        const onCheckedClickHandler = (e) => {
            petElement.remove();
        };
    
        const checkBtn = createDOMElement('button', {}, 'Checked');
        checkBtn.addEventListener('click', onCheckedClickHandler);

        petElement.appendChild(checkBtn);
    
        
        adoptedElement.appendChild(petElement);
    
        petElement.querySelector('span').textContent = `New Owner: ${newOwner}`;
    }
    
    // Creates elements (type, attributes, ...elements)
    function createDOMElement(type, attr, ...content) {
        const element = document.createElement(type);       
    
        // Adds element attributes
        Object.assign(element, attr);
    
        /* for (const prop in attr) {
            element[prop] = attr[prop];
        } */
    
        for (let item of content) {
            if(typeof(item) === 'string' 
            || typeof(item) === 'number') {
                item = document.createTextNode(item);
            }
    
            element.appendChild(item);
        }
    
        return element;
    }
}