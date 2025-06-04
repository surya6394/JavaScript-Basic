function* generatorFunc() {
    let a = 10;
    console.log("This is the value of a : ",a);
    let name = "Surya Pratap";
    let age = 24;
    let designation = "Developer"
    yield name;

    yield age;
    
    yield designation;
}

let b = generatorFunc();

console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next());


// function* generateId() {
//     let id = 100;
//     while(true){
//         id++;
//         yield id;
//     }
// }

// let idFunc = generateId();

// function getNewId(){
//     document.getElementById("newId").innerText = idFunc.next().value;
// }