'use strict';


let secretNumber = Math.trunc(Math.random() * 20) +1; 
let score = 20;
let highscore = 0; 

const againButton = document.querySelector('.again'); 
const checkButton = document.querySelector('.check'); 
const numberElement = document.querySelector('.number'); 
const guessElement = document.querySelector('.guess'); 
const scoreElement = document.querySelector('.score');
const messageElemet = document.querySelector('.message');
const highscoreElement = document.querySelector('.highscore');

// functions
numberElement.textContent = secretNumber; 

function startAgain() { 
    checkButton.disabled = false;
    score = 20;
    scoreElement.textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) +1; 
    numberElement.textContent = secretNumber;
    messageElemet.textContent = 'New round! Good luck :)'
}

function guessCheck () { 
let guess = Number(guessElement.value);

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
    messageElemet.textContent = 'To low, try a higher number'
    score --; 
    scoreElement.textContent = score;
    guessElement.value = '';
}
// if the guess is under 

else if(guess > secretNumber && score > 0) {
    messageElemet.textContent = 'To high, try a higher number';
    score --; 
    scoreElement.textContent = score;
    guessElement.value = '';
}
else { 
    messageElemet.textContent = 'You loose...'
    guessElement.value = '';
}

}

checkButton.addEventListener('click', guessCheck);
againButton.addEventListener('click', startAgain);