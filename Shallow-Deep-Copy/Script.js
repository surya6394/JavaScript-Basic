const fruits = ['Apple', 'Mango', 'Banana'];

// console.log(fruits);

//It copies with the same memory Address
const myFruits = fruits;

myFruits.push('Grapes');  // It pushed this value to myFruits array but It updated also in fruits array.
fruits.push('Papaya');

// console.log(fruits);
// console.log(myFruits)


//Shallow Copy

const Name = ['Surya', 'Pratap', 'Nigam'];
// const myName = [].concat;

const myName = []
Object.assign(myName, Name);
myName.push('Rahul');

// myName.push('Ravi');


let details = {
    name: "Surya",
    age: 29,
    address: {
        city: "Maharajganj",
        state: "Uttar pradesh"
    },
    location: "Delhi"
}

const details2 = {...details}

// console.log(details2)



            // Deep copy

            // const details3 = structuredClone(details);

            // or

            const details3 = JSON.parse(JSON.stringify(details));

