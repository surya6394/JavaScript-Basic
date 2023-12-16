let numbers = [1,2,3,4];
let sum = numbers.reduce(function (accumulator, currentNumber){
    return accumulator+currentNumber;
}, 0);

console.log(numbers," After reduce method = ",sum);