// creating an object
const person = {
    firstName: 'John', 
    lastName: 'Doe', 
    age: 21, 
    email: 'doe@gmail.com', 
    city: 'Noida'
}

// Removing a property using delete
delete person.age;

console.log(person);
// console.log(person.age); // Output: undefined