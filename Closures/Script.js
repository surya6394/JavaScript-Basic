// debugger

// function parant(){
//     const a = 10;
//     const b = 20;
//     function child(){
//         console.log(b);
//     }
//     return child();
// }

// // parant()
// const x = parant();
// console.dir(x);

// Example - 2

// var sum = function(a){
//     console.log("Total number is = ",a);
//     var b = 10;
//     return function(c){
//         return a+b+c;
//     }
// }

// const store = sum(2);
// console.log("Number = ",store(3));

// Example - 3

// var sum = function(a,b,c){

//     console.log("Total counts = ",a);

//     return {
//         getAddition: function(){
//             return a+b+c;
//         },
//         getMultiply: function(){
//             return a*b;
//         }
//     }
// }

// const store1 = sum(5,5,6);
// console.log(store1.getAddition());
// console.log(store1.getMultiply());

// const store2 = sum(9,8,6);
// console.log(store2.getAddition());
// console.log(store2.getMultiply());

// Example - 4

function fun1(a) {
  console.log("First function is here. And the value is = ", a);

  return function fun2(b) {
    console.log("Second function is here. And the value is = ", b);

    return function fun3(c) {
      console.log("Third Fucntions is here. And the value is = ", c);

      return a + b + c;
    };
  }
  
}

const res1 = fun1(4);
const res2 = res1(3);
console.log("Calling first Function = ", res2(5));
