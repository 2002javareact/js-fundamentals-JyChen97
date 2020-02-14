/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let obj = {
    name: 'Someone',
    age: 99
}

function obj() {
    this.name = 'someone'
    this.age = 99
}

class obj {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}