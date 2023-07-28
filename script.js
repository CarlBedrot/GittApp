'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let timer = 30;

let guessElement1 = document.querySelector('.guess');
let guessElement2 = document.querySelector('.player-two-guess');

let checkButton1 = document.querySelector('.check');
let checkButton2 = document.querySelector('.player-two-check');

let againButton = document.querySelector('.again');
let numberElement = document.querySelector('.number');
let scoreElement = document.querySelector('.score');
let messageElement = document.querySelector('.message');
let highscoreElement = document.querySelector('.highscore');
let timerElement = document.querySelector('.timer');

// Initialize the timer in the UI
timerElement.textContent = timer;

// Timer countdown function
function startTimer() {
    timer--;
    timerElement.textContent = timer;

    if (timer === 0) {
        clearInterval(countdown);
        messageElement.textContent = 'You ran out of time...';
        checkButton1.disabled = true;
        checkButton2.disabled = true;
    }
}

// Start the countdown when the page loads
let countdown = setInterval(startTimer, 1000);

// functions
numberElement.textContent = secretNumber;

function resetGame() {
    checkButton1.disabled = false;
    checkButton2.disabled = false;
    score = 20;
    scoreElement.textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    numberElement.textContent = secretNumber;
    messageElement.textContent = 'New round! Good luck :)';
    document.querySelector('body').style.backgroundColor = '#222';

    // Reset the timer
    clearInterval(countdown);
    timer = 30;
    timerElement.textContent = timer;
    countdown = setInterval(startTimer, 1000);
}

function handleGuess(guessElement, checkButton) {
    let guess = Number(guessElement.value);

    // Reset the timer
    clearInterval(countdown);
    timer = 30;
    timerElement.textContent = timer;
    countdown = setInterval(startTimer, 1000);

    if (!guess) {
        messageElement.textContent = '☢️ WARNING ☢️ THE INPUT PROVIDED IS NaN';
    } else if (guess === secretNumber) {
        messageElement.textContent = '🏆 yay, you won 🏆';
        guessElement.value = '';

        if (score > highscore) {
            highscore = score;
            highscoreElement.textContent = highscore;
        }

        checkButton.disabled = true;
        document.querySelector('body').style.backgroundColor = '#60b347';
    } else if (guess !== secretNumber && score > 0) {
        messageElement.textContent = guess < secretNumber ? 'Too low, try a higher number' : 'Too high, try a lower number';
        score--;
        scoreElement.textContent = score;
        guessElement.value = '';
    } else {
        messageElement.textContent = 'You lose...';
        guessElement.value = '';
    }
}

checkButton1.addEventListener('click', function () { handleGuess(guessElement1, checkButton1) });
checkButton2.addEventListener('click', function () { handleGuess(guessElement2, checkButton2) });
againButton.addEventListener('click', resetGame);
