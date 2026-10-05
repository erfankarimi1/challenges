console.clear();
console.log("================Password CHallenge==================")

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("----Welcome! You are logged in as Burnhilde1984");
} else {
  console.log("Access denied!");
}
console.log("================Even/odd CHallenge==================")

// Part 2: Even / Odd
const number = 6;
if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}
console.log("================Hotdog CHallenge==================")

// Part 3: Hotdogs
const numberOfHotdogs = 42;
let priceOfHotdogs;
if (numberOfHotdogs < 5) {
  priceOfHotdogs = 2;
  console.log("Price of each Hotdog" + priceOfHotdogs);
} else if (numberOfHotdogs < 100) {
  priceOfHotdogs = 1.5;
  console.log("Price of each Hotdog" + priceOfHotdogs);
} else if (numberOfHotdogs < 1000000) {
  priceOfHotdogs = 1;
  console.log("Price of each Hotdog" + priceOfHotdogs);
} else {
  priceOfHotdogs = 0.1;
  console.log("Price of each Hotdog" + priceOfHotdogs);
}
console.log("================Daytime CHallenge==================")
// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn" : "PartyTime!!!!";

console.log(statement);
console.log("================Greeting CHallenge==================")

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + (userName === "Archibald" ? "Coach" : userName) + "!";

console.log(greeting);
