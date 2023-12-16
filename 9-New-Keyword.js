// Constructor function

function Person(name, age){
    this.name = name;
    this.age = age;
}

// Creating a instance using the new keyword
const jack = new Person("Surya", 21);

//jack is now an instance of the Person constructor
console.log(jack.name);
console.log(jack.age);