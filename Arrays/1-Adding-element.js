
                            // Adding elements to the beginning of an array 

//Creating an array 
let myArr = [2,3,4,5];
myArr.unshift(1);   // Add 1 to the beginning of the array

console.log("After unshift 1, myArr = ",myArr); // output: [1,2,3,4,5]

myArr.unshift(1,2);   // Add 1 and 2 to the beginning of the array

console.log("After unshift 1 and 2, myArr = ",myArr);  // Output: [1,2,1,2,3,4,5]



                            // Adding elements to the end of an array

// creating an array 
let myArr2 = [1,2,3,4];
myArr2.push(5); // Add 5 to the ned of the array

console.log("After Push 5 myArr = ",myArr2);  // Output: [1,2,3,4,5]

myArr2.push(6,7);  // Add 6 and 7 to the end of the array

console.log("After Push 6 and 7 myArr = ",myArr2);  // Output: [1,2,3,4,5,6,7]
