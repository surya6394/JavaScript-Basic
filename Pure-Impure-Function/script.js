
// Example of Pure function

function addNum(a,b){
    let c = a + b;
    console.log("Sum of two number is - ",c);
}

addNum(4,5);
addNum(9,3);


// Example of Impure function

let number = 0;

function updateValue(value){
    number += value;
    console.log("Value of the number = ",number);
}

updateValue(5);  // Output = 5
updateValue(5);  // Output = 10
updateValue(5);  // Output = 15
updateValue(5);  // Output = 20
