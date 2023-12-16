                                        // <====== Object Literals ======>

// creating an object using object literals

// const person = {
//     firstName: "Surya",
//     lastName: "Pratap",
//     age: 22,
//     sayHello: function(){
//         console.log("Welcome to Javascript.");
//     }
// }

// console.log("My name is "+person.firstName+" "+person.lastName+". I'm "+person.age+" year old.");
// person.sayHello();

// console.log(`Hii everyone, My name is ${person.firstName} ${person.lastName} . I'm ${person.age} year old.`);





                                        // <====== Constructor Function =======>

// creating an object using constructor function

// function Person(firstName, lastName, age){
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.age = age,
//     this.sayHello = function(){
//         console.log("Welcome to Javascript.")
//     };
// }

// // Initializing an object
// const person = new Person("Surya", "Pratap", 22);

// // Accessing properties and method

// console.log(`Hii everyone, My name is ${person.firstName} ${person.lastName} . I'm ${person.age} year old.`)
// person.sayHello();




                                            // <====== ES6 Class =======>


// using ES6 class

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
    }

    sayHello(){
        console.log("Welcome to javascript.")
    }
}

// Initializing an object
const person = new Person("Surya", "Pratap", 22);

// Accessing properties and method

console.log(`Hii everyone, My name is ${person.firstName} ${person.lastName} . I'm ${person.age} year old.`)
person.sayHello();