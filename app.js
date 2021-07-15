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

getPuzzle(2)
  .then((puzzle) => {
    console.log(puzzle);
  })
  .catch((error) => {
    console.log(error);
  });

getLocation()
  .then((data) => {
    return getCountry(data.country);
  })
  .then((country) => {
    console.log(`You are now in ${country.name}`);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });
