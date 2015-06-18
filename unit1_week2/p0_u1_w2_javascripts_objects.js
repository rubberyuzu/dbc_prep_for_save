// I paired by myself on this challenge.




// Pseudocode
// 1&2 assign secretNumber to 7.
// 3&4 assign password "just open the door".
// 5&6 assign allowedIn false.
// 7 assign members an array.
// 8&9 the array has to have at least 4 elements, first being "John", 4th being "Mary".


// __________________________________________
// Write your code below.
var secretNumber=7;
var password="just open the door";
var allowedIn=false;
var members=["John", "Yuzu", "Moe", "Mary"];





// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

// this code is pretty much clear both in terms of the names of the variables and the structure of the code!


// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// I had pretty much fun learning  js as it has much in common with Ruby!
// It was a really good experience coding on command line to understand how it works.
// One question I have is concerned with coding node.js on command line.
// When you mistype the code, sometimes three dots(...)appears and I do not know how 
// to handle them. How can you deal with this problem????
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

