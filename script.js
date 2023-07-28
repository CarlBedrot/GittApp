'use strict';


let secretNumber = Math.trunc(Math.random() * 20) +1; 
let score = 20;
let highscore = 0; 
let timer = 30; 


const againButton = document.querySelector('.again'); 
const checkButton = document.querySelector('.check'); 
const numberElement = document.querySelector('.number'); 
const guessElement = document.querySelector('.guess'); 
const scoreElement = document.querySelector('.score');
const messageElemet = document.querySelector('.message');
const highscoreElement = document.querySelector('.highscore');
const timerElement = document.querySelector('.timer');

// Initialize the timer in the UI
timerElement.textContent = timer;

// Timer countdown function
function startTimer() {
    timer--;
    timerElement.textContent = timer;

    // Stop the timer when it reaches 0
    if(timer === 0) {
        clearInterval(countdown);
        messageElemet.textContent = 'You ran out of time...';
        checkButton.disabled = true; 
    }
}

// Start the countdown when the page loads
let countdown = setInterval(startTimer, 1000);

// functions
numberElement.textContent = secretNumber; 

function startAgain() { 
    checkButton.disabled = false;
    score = 20;
    scoreElement.textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) +1; 
    numberElement.textContent = secretNumber;
    messageElemet.textContent = 'New round! Good luck :)'
    document.querySelector('body').style.backgroundColor = '#222'
    
    // Reset the timer
    clearInterval(countdown); // Clear the previous interval
    timer = 30;
    timerElement.textContent = timer;
    
    // Start the countdown again
    countdown = setInterval(startTimer, 1000);
}


function guessCheck () { 
    let guess = Number(guessElement.value);

    // Reset the timer
    clearInterval(countdown); // Clear the previous interval
    timer = 30;
    timerElement.textContent = timer;

    // Start the countdown again
    countdown = setInterval(startTimer, 1000);

    if(!guess){ messageElemet.textContent = `☢️ WARNING ☢️
    THE INPUT PROVIDED IS NaN`
    }
    // if the guess is correct 
    else if(guess === secretNumber){ 
        messageElemet.textContent = '🏆 yay, you won 🏆';
        guessElement.value = '';
        console.log(score);
        if(score > highscore){ 
            highscore = score; 
            highscoreElement.textContent = highscore;
        }
        checkButton.disabled = true; 
        document.querySelector('body').style.backgroundColor = '#60b347';
    }
    // if the guess is over 
    else if(guess < secretNumber  && score > 0) {
        messageElemet.textContent = 'Too low, try a higher number'
        score --; 
        scoreElement.textContent = score;
        guessElement.value = '';
    }
    // if the guess is under 

    else if(guess > secretNumber && score > 0) {
        messageElemet.textContent = 'Too high, try a higher number';
        score --; 
        scoreElement.textContent = score;
        guessElement.value = '';
    }
    else { 
        messageElemet.textContent = 'You lose...'
        guessElement.value = '';
    }

}


checkButton.addEventListener('click', guessCheck);
againButton.addEventListener('click', startAgain);