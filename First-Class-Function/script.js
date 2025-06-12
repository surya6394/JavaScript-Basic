
const fun1 = function(){
    console.log("Assigned a function into a variable");
}
fun1();

function fun2(){
    console.log("Passing a function as an argument.");
}

function callFun2(fn){
    fn();
}

callFun2(fun2);

function outer(){
    return function inner(){
        console.log("Returning a function from a function.")
    }
}

var fun3 = outer();
fun3();

const obj1 = {
    inner: function(){
        console.log("Storing a function in an object.")
    }
}

obj1.inner();