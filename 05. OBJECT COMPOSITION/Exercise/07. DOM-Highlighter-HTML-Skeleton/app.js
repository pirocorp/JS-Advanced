function solve(selector){
    const element = document.querySelector(selector);

    addClassToAllSuccessors(element, 'highlight')
    function addClassToAllSuccessors(element, className) {
        element.classList.add(className);

        const child = element.children[0]

        if (child) {
            addClassToAllSuccessors(child, className);            
        }
        
        /* for (let i = 0; i < children.length; i++) {
            const child = children[i];
            addClassToAllSuccessors(child, className);            
        } */
    }
}

// solve('#content'); <-- Try it.