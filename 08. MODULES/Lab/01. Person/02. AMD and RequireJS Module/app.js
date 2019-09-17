require(['./person.js'], function (Person) {
    const testPerson = new Person('John Doe');
    console.log(testPerson.toString());
});

