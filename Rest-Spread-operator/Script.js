//  Example using Array

// Example of Rest operator
// Rest operator introduced in ES6, It is a type of parameter that gets all of the remaining parameters of a function call
//  via an array. It combines all the remaining parameter into and array.

function firstFun(a, b, c, ...other) {
  // 'arguments' introduced in ES5 to receive the data.
  console.log("Introduced in ES 5 = ", arguments);

  console.log(a, b, c);
  console.log("Rest = ", other);
  console.log("Last item = ", other[6]);
}

firstFun(2, 4, 5, 6, 3, 7, 5, 8, 1, "Surya");

// Example of Spread Operator

// In Spread operator we can pass a whole array to the function and can use single element accordingly

const arr = ["Surya", 6, "Pratap", 3.4, 9];

function secondFun(a, b, ...other) {
  console.log("Second function arguments = ", a, b);
  console.log("Other Parameter = ", other);
}

secondFun(arr[0], arr[1], arr[2]);
secondFun(...arr);
secondFun(arr);

//  Example using Object

// Rest Operator

const obj = {
  name: "Surya",
  age: 24,
  subject: ["English", "Math"],
};

const { name, ...rest } = obj;
console.log("Rest operator in Object = ", name);
console.log("Rest of Object = ",rest);


// Spread Operator

const spreadObj = {
    ...obj,
    age: 25
}

console.log("Spread operator = ",spreadObj);

// console.log("After change = ",obj);  // Not changed