const person = {
    name: 'Fulano de Tal',
    idade: 22
}

module.exports = person;

// Module Wrapper Function
// (function (export, require, module, __filename, __dirname) {

// })
//console.log(__dirname, __filename);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`My name ${this.name} and I am ${this.age}`);
    }
}

module.exports = Person;