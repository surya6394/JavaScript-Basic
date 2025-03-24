
console.log(a);  // It gives a is undefined because of hoisting.

var a = 10;  

// console.log(first);   // It allocates memory in memory allocation phase in script and It keep in Temporal Dead Zone where
                        // We can not access the varible defined by const.

const first = "Surya";

// console.log(b);  // It allocates memory in memory allocation phase in script and It keep in Temporal Dead Zone where
// We can not access the varible defined by const.
let b = "Pratap";

myFunction();   // We can access this function because when we execute the code, memory allocates to function and it stores all the function

function myFunction(){
    console.log("My name is Surya.");
}

// console.log(fun);

// var fun = myFunction();

func2();   // It gives func2 is not a function because It gives undefined first, bcz of var and undefined is not a function.

var func2 = function(){
    console.log("Age = 24");
}

