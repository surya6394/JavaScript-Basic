// construction function
function Animal(name){
    this.name = name;
}

// Adding a method to the prototype

Animal.prototype.sayHello = function (){
    console.log("Hello, I'm ",this.name);
};

// Creating instances
const cat = new Animal("Wiskers");
const dog = new Animal("Buddy");

// Both instances can access the shared method
cat.sayHello();
dog.sayHello();



                                        // Another example


// function surya(name){
//     this.name = name;
// }

// surya.prototype.sayHi = function (){
//     console.log("Hi My name is ",this.name);
// }

// const krishna = new surya("Krishna");
// const ravi = new surya("Ravi");

// krishna.sayHi();
// ravi.sayHi();