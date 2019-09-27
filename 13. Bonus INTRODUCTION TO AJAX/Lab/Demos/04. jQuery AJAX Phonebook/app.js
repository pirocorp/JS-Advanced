//Short syntax for $(document).ready(function() { ... });
//Code included inside $(document).ready() will only run once the page Document Object Model (DOM) is ready
//Code included inside $( window ).on( "load", function() { ... }) will run once the entire page (images or iFrames), not just the DOM, is ready.
$(() => {
    const host = 'https://phonebook-476af.firebaseio.com/phonebook/';
    const $phonebook = $('#phonebook');
    const $person = $('#person');
    const $phone = $('#phone');
    const $error = $('#error');

    //Attach event listeners to buttons
    $('#btnLoad').click(loadContacts);
    $('#btnCreate').click(createContact);
        
    //Implement delete contact
    // -add delete button to list
    // -send DELETE request containing contact ID
    function deleteContact(id, ev) {
        $.ajax({
            url: host + id + '.json',
            method: 'DELETE',
            success: () => deleteSuccess(ev),
        });

        //Good practice is success function to be 
        //declared inside function that calls them
        function deleteSuccess(ev) {
            $(ev.target).parent().remove();
        }
    };

    function appendContact(entry, key) {
        const contact = $(`<li>${entry.person}: ${entry.phone}</li>`);

        const deleteBtn = $('<button>Delete</button>');
        //Passing more parameters to event handler with arrow function
        deleteBtn.on('click', (ev) => deleteContact(key, ev));

        contact.append(deleteBtn);   
        $phonebook.append(contact);
    };

    //Implement loading of contacts
    // -on click send GET request
    // -display data in list (clear list first)
    function loadContacts() {
        $phonebook.empty();
        $phonebook.html('<li>Loading &hellip;</li>');

        //By default Method is GET
        $.ajax({
            url: host + '.json',
            success: loadSuccess
        });

        function loadSuccess(data) {
            //.empty() -> remove all child nodes
            $phonebook.empty();
    
            for (const key in data) {
                let entry = data[key];
                appendContact(entry, key);
            }
        };
    };    

    //implement creating contacts
    // -take values from inputs
    // -make POST request with data
    // -(optional) refresh GET request
    // -(or) optimistic local update
    function createContact() {
        const person = $person.val();
        const phone = $phone.val();

        if(person === '' || phone === '') {
            $error.text('Both Person and Phone are required')
            return;
        }      
        
        $error.text('');        

        $.ajax({
            url: host + '.json',
            method: 'POST',
            data: JSON.stringify({ person, phone }),
            success: createSuccess,
        });

        function createSuccess(data) {
            const { name } = data;    
            appendContact({ person, phone }, name);

            $person.val('');
            $phone.val('');
        };
    };

    loadContacts();
});