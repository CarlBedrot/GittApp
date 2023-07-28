# Guess My Number!

// checking if push from branch results in pr
// Merge conflict time baby?

"Guess My Number!" is a fun and interactive guessing game where players get to test their luck and numerical intuition by guessing a number between 1 and 20. This is a two-player game where players take turns guessing the number. The core game idea IS NOT MY OWN. I started this project by coding along in a course on udemy. My own updates are the highscore page and the time limit for each round.

## Overview

The application is created using vanilla JavaScript, HTML5 and CSS3. The application generates a random secret number between 1 and 20 and players have to guess that number. Each player has a score which decreases by 1 with each incorrect guess. The game also maintains a highscore to keep track of the best score. The user can also access the highscore page by pressing the link in the top right corner. To store the current highscores I will use local storage. Therefore, anyone who plays this game will have their own score board.

## Game Interface

The interface is straightforward and user-friendly. The game features a header where the secret number is displayed once a player wins the game. The header also contains a button to restart the game for another round. The main part of the interface is divided into two sections, each representing one player. Each section includes an input field for the player's guess and a "Check" button to submit the guess.

## Game Rules

1. The game generates a secret random number between 1 and 20.

2. Each player has to guess the secret number.

3. If a player guesses correctly, they win the game and their score becomes the new highscore if it's higher than the current highscore.

4. If a player's guess is too high or too low, their score decreases by 1.

5. If a player's score reaches 0, they lose the game.

## File Structure

- `index.html`: This is the main HTML document. Contains the game's markup.

- `styles.css`: Contains the CSS for the game. The game uses the 'Press Start 2P' font from Google Fonts and follows a retro color scheme with a mix of dark and vibrant colors.

- `script.js`: This is the JavaScript file. Contains the game's logic.

## How to Run the Application

1. Clone the repository or download the files.

2. Open `index.html` in your web browser.

## Contributors

This application is open for contributions. Kindly fork the project and submit a pull request.

## License

This project is licensed under the terms of the MIT license.

## Bugs and Issues

If you encounter any bugs or issues, feel free to open an issue in the repository.

Enjoy the game and may the odds be ever in your favor!
