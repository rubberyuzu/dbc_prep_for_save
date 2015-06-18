// This is a Solo Challenge. 
 
// There is a section below where you will write your code.
// Do not alter this object here.
 
 
var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}

/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.
Declare a variable "adam" as an empty object literal{}. 
 
2. Give adam a name property with the value "Adam".
Push the element called "name", which is "Adam", to "adam".
 
3. Add a spouse property to terah and assign it the value of adam.
In object literal "terah", add spouse into it as "adam".

4. Change the value of the terah weight property to 125.
Reassign the weight in the "terah" to 125.
 
5. Remove the eyeColor property from terah.
Delete "terah"'s element "eyeColor".
 
6. Add a spouse property to adam and assign it the value of terah.
Push the elment called "spouse" as the object literal "terah" to "adam".

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties
Declare a variable "children", which is an empty object literal.
Then push it into "terah" as "children".


8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".
Declare an empty object line called "carson". 
Add an "name" element , which is Carson.
And add the whole object literal to "children".

  
9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".
Declare an empty object line called "carter". 
Add an "name" element , which is Carter.
And add the whole object literal to "children".
 
10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".
Declare an empty object line called "colton". 
Add an "name" element , which is Colton.
And add the whole object literal to "children".

11. Add a children property to adam and assign it the value of terah children.
Push the "children" from terah into "adam" object literal as "AdamChildren".
 
*/
 
// __________________________________________
// Write your code below.
// 1
 var adam={}; 
// 2
adam.name="Adam";
// 3
terah.spouse=adam; 
// 4
terah.weight=125;
// 5
delete terah.eyeColor;
// 6
adam.spouse=terah;
// 7
var children = {};
terah.children=children;
// 8
var carson={};
carson.name="Carson";
children.carson=carson;

// 9
var carter={};
carter.name="Carter";
children.carter=carter;
// 10
var colton={};
colton.name="Colton";
children.colton=colton;
// 11
adam.AdamChildren= terah.children;

 
 
// __________________________________________
// Reflection: Use the reflection guidelines
// 
// I found out that I was confused about arrays and object literals.
// By getting some errors I noticed that I can't push or pop items from object literals.
// Also sometimes I misunderstood some instructions and could not figure it out until
// I saw the errors and the test codes.
// Test codes helped me a lot in correcting the code!
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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)
 
assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)
 
assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)
 
assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)
 
assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)
 
assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)
 
assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)
 
assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)
 
assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)
 
assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)
 
assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)
 
console.log("\nHere is your final terah object:")
console.log(terah)