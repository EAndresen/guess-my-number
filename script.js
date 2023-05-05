'use strict';

let rndInt = randomInt()

const guess = document.querySelector(`.guess`);
const again = document.querySelector(`.again`);
const message = document.querySelector(`.message`);
const score = document.querySelector(`.score`);
const highscore = document.querySelector(`.highscore`);
const check = document.querySelector(`.check`);
const number = document.querySelector(`.number`);

check.addEventListener('click', function() {
  number.textContent = guess.value

  if (Number(guess.value) === rndInt) {
    message.textContent = `You guessed right! 🥳`
    checkHighScore(Number(score.textContent))
    check.disabled = true
    guess.disabled = true
    document.body.style.backgroundColor = `#176009`
  } else if (Number(guess.value) > rndInt) {
    message.textContent = `Guess to high ⬆️`
    score.textContent--
  } else {
    message.textContent = `Guess to low ⬇️️`
    score.textContent--
  }
})

again.addEventListener(`click`, function() {
  score.textContent = `20`
  number.textContent = `?`
  check.disabled = false
  guess.disabled = false
  guess.value = ``
  rndInt = randomInt()
  document.body.style.backgroundColor = `#222`
})

function randomInt() {
  return   Math.floor(Math.random() * (20 - 1 + 1) + 1)
}

function checkHighScore(newScore) {
  if (newScore > Number(highscore.textContent)) {
    highscore.textContent = newScore
  }
}

