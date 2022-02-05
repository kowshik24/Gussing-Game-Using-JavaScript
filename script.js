'use strict';

// DOM - Document Object Model

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number !';

//console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.gue ss').value);
*/

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

//document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '❗⛔ No Number';
  } else if (guess < number) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too Less 😢';
      score -= 1;

      document.querySelector('.score').textContent = score;
      console.log(document.querySelector('.score').textContent);
    } else {
      document.querySelector('.message').textContent = 'You lost the game 🤯';
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High 😏😏';
      score -= 1;

      document.querySelector('.score').textContent = score;

      console.log(document.querySelector('.score').textContent);
    } else {
      document.querySelector('.message').textContent = 'You lost the game 🤯';
      document.querySelector('.score').textContent = 0;
      console.log(document.querySelector('.score').textContent);
    }
  } else if (guess === number) {
    document.querySelector('.message').textContent =
      '🎈✨🏆 Corret Number! 🔥🥂🥂';
    document.querySelector('.number').textContent = number;

    // When Player Wins

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
    }

    document.querySelector('.highscore').textContent = highScore;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...⏳⌛';

  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
