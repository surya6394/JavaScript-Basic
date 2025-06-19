function myDetails(username){
    if(username){
        console.log("My name is ",username); // accessible
        console.log("Meri salary ", salary); // ReferenceError: Cannot access 'salary' before initialization
        console.log("Meri age hai ",age); // undefined due to hoisting 
        let salary = 10;
        var age = 20;
    }
    console.log("Mera nam ",username); // accessible
    console.log("My age is ",age); //20 (accessible due to function scope)
    console.log("Meri salary hai ",salary); // //error: salary is not defined(due to block scope)
}

myDetails("Surya");