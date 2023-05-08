'use strict';

let rndInt = randomInt()

const guessElement = document.querySelector(`.guess`);
const againElement = document.querySelector(`.again`);
const messageElement = document.querySelector(`.message`);
const scoreElement = document.querySelector(`.score`);
const highscoreElement = document.querySelector(`.highscore`);
const checkElement = document.querySelector(`.check`);
const numberElement = document.querySelector(`.number`);

checkElement.addEventListener('click', function() {
  numberElement.textContent = guessElement.value
  const guess = Number(guessElement.value)

  if (!guess) {
    messageElement.textContent = `Not a number! ⛔`
    numberElement.textContent = `⛔`
  } else if (guess === rndInt) {
    messageElement.textContent = `You guessed right! 🥳`
    checkHighScore(Number(scoreElement.textContent))
    checkElement.disabled = true
    guessElement.disabled = true
    document.body.style.backgroundColor = `#176009`
  } else if (guess > rndInt) {
    messageElement.textContent = `Guess to high ⬆️`
    scoreElement.textContent--
  } else {
    messageElement.textContent = `Guess to low ⬇️️`
    scoreElement.textContent--
  }
})

againElement.addEventListener(`click`, function() {
  scoreElement.textContent = `20`
  numberElement.textContent = `?`
  checkElement.disabled = false
  guessElement.disabled = false
  guessElement.value = ``
  rndInt = randomInt()
  document.body.style.backgroundColor = `#222`
})

function randomInt() {
  return   Math.floor(Math.random() * (20 - 1 + 1) + 1)
}

function checkHighScore(newScore) {
  if (newScore > Number(highscoreElement.textContent)) {
    highscoreElement.textContent = newScore
  }
}

