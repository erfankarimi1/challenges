console.clear();

/*
1: Create the data for a book in an online store. Define variables for the following details:
  - The title of the book
  - The author of the book
  - The book's rating
  - The number of copies sold
*/

// --v-- write your code here --v--
  const bookTitle = "The Lord of JavaScript";
  const author = "Mario";
  let rating = 4.2;
  let sales = 120;
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Then:
- Increase the number of sales.
- Update the book's rating.
- Log all variables to the console again after making these updates.
*/

// --v-- write your code here --v--
console.log("Title: " + bookTitle);
console.log("Author: " + author);
console.log("Rating: " + rating);
console.log("Sales: " +sales);
// loged all the variables
console.log("--------------------------------------");

sales = 150;  //incresed the number of sales here 
rating = 4.8; // rating is updated 

console.log("Title: " + bookTitle);
console.log("Author: " + author);
console.log("Rating: " + rating);
console.log("Sales: " +sales);
console.log("--------------------------------------");

// --^-- write your code here --^--

/*
3: The logging code above is repetitive and hard to maintain.
   Refactor your code by doing the following:

 - Write a function called `logBookData` that logs all the book details to the console.
 - Replace the existing `console.log` statements with calls to this function.
 - Then, increase the number of sales two more times and log the updated details after each increase.
*/

// --v-- write your code here --v--
function logBookData(){
  console.log("Title: " +bookTitle);
  console.log("Author: " +author);        // this function log all the details 
  console.log("Rating: " +rating);
  console.log("Sales: " +sales);
}
logBookData(); // calling the function for the first time 
console.log("--------------------------------------");

sales = sales + 10; // Incresed the number of sales one
logBookData();
console.log("--------------------------------------");

sales = sales + 20; // Incresed the number of sales twice
logBookData();
// --^-- write your code here --^--
console.log("--------------------------------------");
