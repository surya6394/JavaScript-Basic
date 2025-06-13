
function func1(name){
    console.log("My name is - ", name);
}

function func2(callback){
    var name = "Surya Pratap";
    return callback(name);
}

func2(func1);

console.log("Addition operation using higher order function.");

function sum(a, b){
    return a + b * 2;
}

function callSum(func){
    var a = 10;
    var b = 20;
    console.log(func(a, b));
}

callSum(sum);