// 1. Create a constructor function for the hangman game
// 2. Setup two attributes. One for the word itself. Another for the number of guesses allowed.
// 3. Create two instances of it and print both to the console

// 1. Set up the word instance property as an array of lower case letters
// 2. Set up another instance property to store guessed letters
// 3. Create a method that gives you the word puzzle back

const Hangman = function (word, guessesRemaining) {
    this.word = word.toLowerCase().split("")
    this.guessesRemaining = guessesRemaining
    this.guessedLetters = ['l','s']
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

const me = new Hangman('Alex Sanchez', 22)
console.log(me.getPuzzle());