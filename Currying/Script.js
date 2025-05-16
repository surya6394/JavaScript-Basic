// Example - 1

function number1(a){
    console.log("Calling Function one. ",a); 

    return function number2(b){
        console.log("Calling Function two",b);
        
        return function number3(c){
            console.log("Calling Function four", c);

            return a+b+c;
        }
        
    }
}

const res = number1(10)(20)(15);
console.log(res);


// Example - 2

const userData = {
    name: "Surya",
    age: 24
}

function getDetail(obj){
    return function userInfo(data){
        return obj[data]
    }
}

const res1 = getDetail(userData);
console.log(res1('age'));