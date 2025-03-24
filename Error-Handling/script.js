
setTimeout(() => {
    console.log("Processing your request.....");
}, 1000)

// console.log(first);  // Execution will be stop here

setTimeout(() => {
    try {
        console.log("Fetching the Id and Password.....",surya);
    } catch (error) {
        console.log("first, Fetching the Id and Password.....",error)
    }
},2000);

setTimeout(() => {
    console.log("Updating the credentials......");
}, 3000);

setTimeout(() => {
    console.log("Id and Password has been hacked.......");
}, 4000);