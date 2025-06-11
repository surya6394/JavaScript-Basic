const c = (a,b ) => a + b;  // multiple parameter, return a + b
console.log(c(2, 3));

const sum = a => a+4;  // single parameter (parentheeses optional) , returns a + 4;
console.log(sum(10));

const obj = () => {};  // No Parameters, return undefined
console.log(obj()); 

const operation = (a, b) => {
    // multiple statements, requires curly braces and explicit returns
    const c = a * b;
    return c*2;
}
console.log(operation(3,4).__proto__);

function multiply(){
    a = 5* 10;
    return a;
}

console.log(multiply().__proto__);