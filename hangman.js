// 1. Create a constructor function for the hangman game
// 2. Setup two attributes. One for the word itself. Another for the number of guesses allowed.
// 3. Create two instances of it and print both to the console

// 1. Set up the word instance property as an array of lower case letters
// 2. Set up another instance property to store guessed letters
// 3. Create a method that gives you the word puzzle back

// Create a method for making a guess
// 1. Should accept a character for guessing
// 2. Should add unique guesses to list of guesses
// 3. Should decrement the guesses left if a unique guess isn't a match

// 1. Display the puzzle to the browser instead of the console
// 2. Display the guesses left to the browser instead of console
// 3. Seperate the Hangman definition from the rest of the app code (use app.js)

const Hangman = function (word, guessesRemaining) {
    this.word = word.toLowerCase().split("")
    this.guessesRemaining = guessesRemaining
    this.guessedLetters = []
  
    }


Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const uniqueGuess = !this.guessedLetters.includes(guess)
    const badGuess = !this.word.includes(guess)

    if (uniqueGuess) {
        this.guessedLetters.push(guess)
    }
    if (uniqueGuess && badGuess) {
        this.guessesRemaining--
    }
}



const me = new Hangman('Alex Sanchez', 2)

console.log(me.getPuzzle());
console.log(me.guessesRemaining);

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    me.makeGuess(guess)
    console.log(me.getPuzzle());
    console.log(me.guessesRemaining);
})