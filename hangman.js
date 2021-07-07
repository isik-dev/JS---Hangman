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

// 1. Setup new 'status' property with an initial value of 'playing'
// 2. Create a method for recalculating status to 'playing', 'finished', or 'failed'
// 3. Call that method after a guess is processed
// 4. Use console.log to print the status

// Start the game and see 'playing'
// Make two incorrect guesses to see 'failed'
// Refresh the browser and guess 'c', 'a', and 't' to see 'finished'

// 1. Disable new guesses unless "playing"
// 2. Setup a new method to get back a status message

// Playing -> Guesses left: 3
// Failed -> Nice try! The word was "Cat".
// Finished -> Great work! You guessed the word.

const Hangman = function (word, guessesRemaining) {
    this.word = word.toLowerCase().split("")
    this.guessesRemaining = guessesRemaining
    this.guessedLetters = []
    this.status = 'playing'

  
    }

Hangman.prototype.updateMessage = function () {

    if (this.status === 'playing') {
        return `Guesses left: ${this.guessesRemaining}`
    } else if (this.status === 'failed') {
        return `Nice try! The word was "${this.word.join("")}"`
    } else {
        return 'Great work! You guessed the word'
    }
}

Hangman.prototype.updateStatus = function () {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

    if (this.guessesRemaining === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
}  


// The drawback of this alternative is: it is sensitive to the order of letters in guessedLetters
// Hangman.prototype.updateStatus = function () {
//     const aboveZero = this.guessesRemaining > 0
//     const foundAll = JSON.stringify(this.word) === JSON.stringify(this.guessedLetters)

//     if (aboveZero && foundAll) {
//         this.status = 'finished'
//     } else if (aboveZero) {
//         this.status = 'playing'
//     } else {
//         this.status = 'failed'
//     }
//     return this.status
// }


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
    if (this.status === 'playing') {
        guess = guess.toLowerCase()
        const uniqueGuess = !this.guessedLetters.includes(guess)
        const badGuess = !this.word.includes(guess)

        if (uniqueGuess) {
            this.guessedLetters.push(guess)
        }
        if (uniqueGuess && badGuess) {
            this.guessesRemaining--
        }
        this.updateStatus()
    }
    
}

 