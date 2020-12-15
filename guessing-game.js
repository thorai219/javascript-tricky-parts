function guessingGame() {
  const answer = Math.floor(Math.random() * 100);
  let guessed = false;
  let numOfGuesses = 0;

  return function guess(num) {
    if (guessed) return "You've won already!";
    numOfGuesses++;
    if (num === answer) {
      guessed = true;
      let guesses = numOfGuesses === 1 ? "guess" : "guesses";
      return `You win! You guessed ${num} in ${numOfGuesses} ${guesses}`;
    }
    if (num < answer) return `${num} is too low!`;
    if (num > answer) return `${num} is too high!`;
  };
}

module.exports = { guessingGame };
