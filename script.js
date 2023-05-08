'use strict';
let secretNumber = randomInt()
let score = 20
let highScore = 0

const guessEl = document.querySelector(`.guess`)
const againEl = document.querySelector(`.again`)
const highScoreEl = document.querySelector(`.high-score`)
const checkEl = document.querySelector(`.check`)
const numberEl = document.querySelector(`.number`)

setScore(String(score))

checkEl.addEventListener('click', function() {
  setGuessedNumber(guessEl.value)
  setScore(String(score))
  const guess = Number(guessEl.value)

  if (!guess || guess < 0 || guess > 20) {
    displayMessage(`Not a valid number! ⛔`)
    setGuessedNumber(`⛔`)
  } else if (guess === secretNumber) {
    displayMessage(`You guessed right! 🥳`)
    winGame()
  } else {
    displayMessage(
        guess > secretNumber ? `Guess to high ⬆️` : `Guess to low ⬇️️`)
    evaluateFaultGuess()
  }
})

againEl.addEventListener(`click`, function() {
  setScore(`20`)
  setGuessedNumber(`?`)
  checkEl.disabled = false
  guessEl.disabled = false
  guessEl.value = ``
  secretNumber = randomInt()
  score = 20
  setBackground(`#222`)
  numberEl.style.width = `15rem`
  numberEl.style.fontSize = `6rem`
})

function randomInt() {
  return   Math.floor(Math.random() * (20 - 1 + 1) + 1)
}

function checkHighScore(newScore) {
  if (newScore > highScore) {
    highScoreEl.textContent = newScore
    highScore = newScore
  }
}

function evaluateFaultGuess() {
  score--
  setScore(String(score))
  if (score === 1) {
    looseGame()
  }
}

function looseGame() {
  checkEl.disabled = true
  guessEl.disabled = true
  score--
  setScore(score)
  displayMessage(`You loose! 😈`)
  setBackground(`#600909`)
}

function winGame() {
  checkEl.disabled = true
  guessEl.disabled = true
  checkHighScore(score)
  setBackground(`#176009`)
  numberEl.style.width = `30rem`
  numberEl.style.fontSize = `12rem`
}

function displayMessage(message) {
  document.querySelector(`.message`).textContent = message
}

function setBackground(color) {
  document.body.style.backgroundColor = color
}

function setGuessedNumber(number) {
  document.querySelector(`.number`).textContent = number
}

function setScore(score) {
  document.querySelector(`.score`).textContent = score
}