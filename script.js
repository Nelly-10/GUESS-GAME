'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';

let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    displayMessage();
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        
        if(score > 1) {
            displayMessage('No Number');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥You lost the game');
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess == secretNumber) {
        displayMessage('Correct Number');

        document.querySelector('body').style.backgroundColor = '#60b347';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if(score > 1) {
            displayMessage( guess > secretNumber ? 'Too high' : 'Too low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥You lost the game');
            document.querySelector('.score').textContent = 0;
        }
    } 
})


document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
})

