console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  firstName: "Cory",
  lastName: "Anderson",
  age: 37, 
  job: "Investigator",
  hasSiblings: true, 
  shoeCount: 4, 
  favThreeFoods: ["Plantains", "Steak", "Burritos"]
  // TODO - add properties here
  }

console.log('A little about me:', me);
console.log(me.firstName); // Output: Cory
console.log(me.lastName); // Output: Anderson
console.log(me.age); // Output: 37
console.log(me.job); // Output: Investigator
console.log(me.hasSiblings); //Output: true
console.log(me.shoeCount) // Output: 4
console.log(me.favThreeFoods); // Output: Plantains, Steak, Burritos



/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/

let fullName = me.firstName + " " + me.lastName;
console.log(fullName); // Output: Cory Anderson


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/

console.log(me.favThreeFoods[0]); // Output: First favorite food: Plantains
console.log(me.favThreeFoods[me.favThreeFoods.length - 1]); // Output: Last favorite food Burritos


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/

console.log(me.shoeCount); // Output: Current shoe count
me.shoeCount = me.shoeCount + 1;
console.log(me.shoeCount); // Output: Updated shoe count


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/