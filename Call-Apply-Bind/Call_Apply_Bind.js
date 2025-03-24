let myDetails = {
    name: "Surya",
    phone: "6394846889",
    Age: 24,
    Designation: "Software Engineer",
    // printDetails: function(){
    //     console.log("Name = ",this.name);
    // }
}

// myDetails.printDetails();

let brotherDetails = {
    name:  "Pratap",
    age: 25,
    Designation: "Frontend Developer",
}

// myDetails.printDetails.call(brotherDetails);



// We Can also make this function as saparate function
let printDetails = function(state, country){
    console.log(this.name," ",state," ",country);
}

// printDetails.call(myDetails,"Gorakhpur","India");
// printDetails.call(brotherDetails,"Gorakhpur","India");

// Apply = We can pass the arrayList as argument to function like this.
printDetails.apply(myDetails,["Gorakhpur","India"]);
printDetails.apply(brotherDetails,["Gorakhpur","India"]);

// bind() => We can create copy of our function and we can invoke letter.

let myfunction = printDetails.bind(myDetails,"Delhi","India");
myfunction();