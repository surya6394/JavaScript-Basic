const student = {
    name: "Surya",
    age: "24",
    address: {
        city: "Gorakhpur",
        state: "UP"
    }
}


const stdData = function(Subject1, Subject2){
    console.log(`Student name is ${this.name}. And his age is ${this.age}.`);
    console.log(`The address of the student is ${this.address.city}, ${this.address.state}.`)
    console.log(`Subjects are ${Subject1.first} and ${Subject2}.`);
    console.log(`Serial wise subject: \nfirst = ${Subject1[0].first} \nSecond = ${Subject1[1].second}`);
}

// stdData.call(student,"Math", "English");
// stdData.call(student,{first: "Math"}, "English");

// stdData.apply(student,["Math", "English"]);
// stdData.apply(student,[{first: "Math"}, "English"]);

// let stdFunction = stdData.bind(student, "Math", "Social Science");
let stdFunction = stdData.bind(student, [{first: "Math"},{second: "Hindi"}], "Social Science");
stdFunction();