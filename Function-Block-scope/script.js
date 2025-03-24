
function myFunction() {
    var x = 10; // Function-scoped variable
    if (true) {
      var y = 20; // Also function-scoped (not block-scoped)
      console.log(x); // 10 (accessible)
    }
    console.log(y); // 20 (accessible, because `var` is function-scoped)
  }
  myFunction();
  console.log(x); // Error: `x` is not defined (outside the function)


  function myFunction() {
    let x = 10; // Block-scoped variable
    if (true) {
      let y = 20; // Block-scoped variable
      console.log(x); // 10 (accessible)
    }
    console.log(y); // Error: `y` is not defined (outside the block)
  }
  myFunction();
  console.log(x); // Error: `x` is not defined (outside the function)