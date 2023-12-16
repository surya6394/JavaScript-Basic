let numbers = [1,2,3,4];
let evenNumbers = numbers.filter(function (num){
    return num%2 === 0;
})

console.log(numbers," After Filter = ",evenNumbers);