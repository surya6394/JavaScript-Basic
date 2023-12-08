                                // function scope

// function Surya(){

//     var a = 10;

//     console.log("first value a = ",a);

//     if(true == 1){
//         var b = 12;
//         console.log("second value b = ",b);
//     }

//     console.log(b);
// }

// Surya();



                                // Block scope

// function Pratap(){

//     let a = 12;

//     function Jyoti(){
//         console.log("jyoti = ",a);
//     }

//     Jyoti();

//     console.log("first = ",a);

//     if(true == 1){
//         // let b = 13
//         console.log("second = ",a);
//     }

//     // console.log(b);   // Uncaught ReferenceError ReferenceError: a is not defined 
//                             // let b is a block scope variable for if statement so we can't access b

// }

// //  console.log(a);  // Uncaught ReferenceError ReferenceError: a is not defined 
//                     // let b is a block scope variable for if statement so we can't access b


// Pratap();



                                        // Global variable


// var c = 30;  // global variable: we can access this variable in intire code of this file

// let f = 37;  // global variable: we can access this variable in intire code of this file
// function Krishna(){

//     console.log("var c value first = ",c); // opt: 30

//     console.log("let f value first = ",f); // opt: 37

//     let a = 12;

//     function Jyoti(){
//         var b = 20;
//         console.log("jyoti = ",a);  // opt: 12, bcz let is block scoped
//         console.log("var c value second = ",c); // opt: 30
//         console.log("let f value second = ",f); // opt: 37
    
//         if(true == 1){
//             let d = 13;
//             var e = 40;
//             console.log("second = ",a); // opt: 12, bcz let is block scoped
//             console.log("let f value third = ",f); // opt: 37
//             console.log("var c value third = ",c); // opt: 30
//         }
       
//        // console.log("D value: ",d) // Uncaught ReferenceError ReferenceError: a is not defined  
//                                      // d is a block scope variable for if statement so we can't access d outside of if statement
   
//         console.log("E value: ",e); // opt: 40  
//         console.log("let f value fourth = ",f); // opt: 37
//         console.log("var c value fourth = ",c); // opt: 30      
// }

// // console.log("E outside func value: ",e); // Uncaught ReferenceError ReferenceError: e is not defined  
//                                              // 'var e' is a function scope variable for function Krishna() so we can't access e outside of function

//     Jyoti();


//     if(true == 1){
//         // let a = 13
//         console.log("var c value fiveth = ",c); // opt: 30
//         console.log("let f value fiveth = ",f); // opt: 37
//     }

// }

// function Suri(){

//     console.log("Suri = ",c)
// }

// console.log(c)

// Suri();
// Krishna();



const a = 20;

function surya(){

    console.log("const a value first = ",a); // opt: 20

    const b = 30;
    console.log("const b value first = ",b);

    if(true == 1){
        const c = 40;
        console.log("const a value second = ",a); // opt: 20
        console.log("const a value second = ", b); // opt: 30 = bcz const b is function scoped variable
    }

    // console.log("const c value = ", c); // Uncaught ReferenceError ReferenceError: b is not defined

}

// console.log("const b value second = ",b); // Uncaught ReferenceError ReferenceError: b is not defined


surya();