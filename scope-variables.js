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
//         // let a = 13
//         console.log("second = ",a);
//     }

//     // console.log(b);   // Uncaught ReferenceError ReferenceError: a is not defined 
//                             // let b is a block scope variable for if statement so we can't access b

// }

// //  console.log(a);  // Uncaught ReferenceError ReferenceError: a is not defined 
//                     // let b is a block scope variable for if statement so we can't access b


// Pratap();



// Global variable

var c = 30;  // global variable
function Krishna(){

    console.log("c value = ",c);

    let a = 12;

    function Jyoti(){
        var b = 20;
        console.log("jyoti = ",c);
    
        if(true == 1){
            // let a = 13
            console.log("second = ",c);
        }
    }

    Jyoti();


    if(true == 1){
        // let a = 13
        console.log("second = ",c);
    }

}

function Suri(){

    console.log("Suri = ",c)
}

Suri();



console.log(c)

Krishna();