'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';

let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        if(score > 0) {
            displayMessage('No number⛔');
            score--;
            document.querySelector('.score').textContent = score--;
        }else {
            document.querySelector('.score').textContent = 0;
            displayMessage('You lost the game 💥');
        }
    } else if (guess === secretNumber){
        displayMessage('Correct Number🎉');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (score > 0) {
            displayMessage(guess > secretNumber ? 'High Number' : 'Too low');
            score--;
            document.querySelector('.score').textContent = score--;
        } else {
            document.querySelector('.score').textContent = 0;
            displayMessage('You lost the game 💥');
        }
    }
})



document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    const secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    
})


