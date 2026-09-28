console.clear();

// EXERCISE 1
// Modify the array `exampleArray` so that it contains a number and a string.

const exampleArray = [55, "This is a String"];

// EXERCISE 2
// Nest an array inside `nestedArray`. After completing this, `nestedArray` should contain an array as one of its elements.

const nestedArray = ["example",["name",33,["mainzerStreet",21,99086]], 10, true];

// EXERCISE 3
// Change the value of `firstNumber` to equal the first value in the `numbers` array using bracket notation.

const numbers = [20, 10, 50];

const firstNumber = numbers[0]; //changing using the index of array

// EXERCISE 4
// Update the first fruit in `fruits` to be "mango" instead of "apple".

const fruits = ["apple", "banana", "grapefruit"];
fruits[0] = "mango";
// EXERCISE 5
// Set the value of `nestedNumber` to the fourth number in the `nestedNumbers` array using bracket notation.

const nestedNumbers = [10, [20, 30, [40, 50]]];

const nestedNumber = nestedNumbers [1][2][0]; 
// nestednumbers [1] accesses the secound item , [2] accesses the 3 item in the nestedarray, and [0] is the forest item of nested array inside

// EXERCISE 6
// Use the `.push()` array method to add "rat" to the end of `petsWithPush`.

const petsWithPush = ["dog", "cat", "rabbit"];
petsWithPush.push("rat"); // using push methode Arrayname.push();

// EXERCISE 7
// Use the `.pop()` method to remove the last item from `fruitsWithPop`.

const fruitsWithPop = ["apple", "banana", "mango"];
fruitsWithPop.pop(); 
// .pop() is deleting the last element of array
// EXERCISE 8
// Use the `.unshift()` array method to add "hamster" to the beginning of `unshiftedPets`.

const unshiftedPets = ["dog", "cat", "rabbit"];
unshiftedPets.unshift("hamster"); 
// .unshift() method adds a element at the first index of the array and pushed all the elemets to the right 
// EXERCISE 9
// Use the `.shift()` method to remove the first item from `shiftedFruits`.

const shiftedFruits = ["apple", "banana", "mango"];
shiftedFruits.shift();
// .shift() method shifts the first element out of array
export {
  exampleArray,
  nestedArray,
  firstNumber,
  fruits,
  nestedNumber,
  petsWithPush,
  fruitsWithPop,
  unshiftedPets,
  shiftedFruits,
};
