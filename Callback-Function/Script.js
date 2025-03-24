function sayHi(){
    console.log("Hii form callback function.");
}

function seyHello(){
    console.log("My name is Surya.")
}

function callback(a,b,c){
    console.log("Addition: ",a+b);
    c();
}

let a = 5;
let b = 13;
callback(a,b,sayHi);

callback(30,15, seyHello);