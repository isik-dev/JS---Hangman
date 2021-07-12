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

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guessesRemaining')
const game1 = new Hangman('Davidson LLC', 2)


puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage
console.log(game1.status);

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
    console.log(game1.status);
})


// Making an HTTP request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4) {
        const data = JSON.parse(e.target.responseText)
        console.log(data);
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle')
request.send()


