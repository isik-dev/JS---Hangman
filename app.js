// Primitive value: string, number, boolean, null, undefined -------> anything except for these in JavaScript is considered to be an Object

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null

// Among Primitive Values below three have Object Wrappers i.e. can be converted to an Object then accessed to their methods. Null and Undefined will never be an Object!
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

// HTTP (Hypertext Transfer Protocol)
// Request = what do we want to do
// Respons = What was actually done

const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guessesRemaining");
const game1 = new Hangman("Davidson LLC", 2);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.statusMessage;
  console.log(game1.status);
});

// we are calling getPuzzle here and fetching the return value into the puzzle variable !!!!!!!!!!!

getPuzzle("3", (error, puzzle) => {
  if (error) {
    console.log(`Error is: ${error}`);
  } else {
    console.log(puzzle);
  }
});

// getSquareIfEven((error, number) => {
//     if (error) {
//         console.log(`Error is: ${error}`);
//     } else {
//         console.log(number);
//     }
// })

// 1. Make a new request for all countries
// 2. Parse the responseText to get back the array of objects
// 3. Find your country object by its country code (alpha2Code property)
// 4. Print the full country name (name property)

// 1. Create a new function for getting country details
// 2. Call it with two arguments: country code, the callback function
// 3. Make the HTTP request and call the callback with country information
// 4. Use the callback to print the country name

// Making an HTTP request

getCountry("MX", (error, country) => {
  if (error) {
    console.log(`The error was: ${error}`);
  } else {
    console.log(`Country name: ${country.name}`);
  }
});
