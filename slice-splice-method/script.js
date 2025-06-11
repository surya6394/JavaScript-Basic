const arr1 = [2, 3, 4, 5, 6, 73, 2, 5];

console.log("This is the example of slice() method.")
const res1 = arr1.slice(2);
console.log("Result 1 - ",res1); 

const res2 = arr1.slice(2, 5);
console.log("Result 2 - ", res2);

const res3 = arr1.slice(-5, -2);
console.log("Result 3 - ", res3);



console.log("This is the example of splice() method.");
let array1 = [2,3,4,5,6,7,8,9,45,7,6];
let array2 = [2,3,4,5,6,7,8,9,45,7,6];
let array3 = [2,3,4,5,6,7,8,9,45,7,6];
let array4 = [2,3,4,5,6,7,8,9,45,7,6];

let result1 = array1.splice(3, 2);
console.log("Splice Result 1 = ",result1);
console.log("Updated Array 1 = ",array1);

let result2 = array2.splice(8);
console.log("Splice Result 2 = ",result2);
console.log("Updated Array 2 = ",array2);

let result3 = array3.splice(1, 2, 99, 999, 999);
console.log("Splice Result 3 = ",result3);
console.log("Updated Array 3 = ", array3);

let result4 = array4.splice(-5, 3, 5343,6454,545);
console.log(result4);
console.log("Updated Array 4 = ", array4);