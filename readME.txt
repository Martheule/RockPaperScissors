# 🤘 Rock! 📄 Paper! ✂️ Scissors! - Choclate Edition! nomnomnom

##This is an exercise for WBS Coding School.

## Tools I Used
* HTML
* CSS
* JavaScript

## Where?
https://github.com/Martheule/RockPaperScissors

## Instructions for developing this
*The project must be completed individually without teammates.
*Use a single public GitHub repository, kept public for instructor code inspection. No instructors added as collaborators.
*PRs only
*During the final presentation, the student must explain their code line by line to the class. (RIP ME)
*Create a command-line Rock Paper Scissors game that: takes the player’s input from process.argv, randomly generates computer moves, determines the winner, and outputs the result.

No DOM, only node... <3


## EMOJI 4 life.

2025-06-11



## 🍫✨a short and clear summary of how and why this Chocolate Rock Paper Scissors game was built using JavaScript with a Flexbox-based layout in Tailwind CSS:

* The goal was to create a simple, fun, and responsive game where players select between three types of chocolate 
* (🍫 Dark, 🍬 Milk, 🍥 White) — a playful spin on the classic Rock Paper Scissors.
* We used:
* JavaScript for the game logic (choice selection, computer move, and winner calculation).
* Flexbox via Tailwind CSS for a clean, responsive layout that centers elements easily.
* Why Flexbox: lays out the chocolates in a row or column, depending on screen size.
* Grid would have defined rows/columns explicitly and places chocolates into those grid cells.
* Responsive: adaptable to any device's screen size.
* NodeJS because we don't want to depend on a Browser cache or given JavaScript.




## Deep sight into the code? 


//*

const userChoice = process.argv[2]?.toLowerCase();

*//

* Reads the player's input from the command line (like node rps.js rock)
* process.argv[2] is the 3rd value typed (your choice).
* ?. checks if input exists.
* .toLowerCase() makes sure input is lowercase (so "Rock" or "ROCK" also works).



## Stability in Life is goood...

//*

const choices = ['rock', 'paper', 'scissors'];

*//

* Defines the 3 possible valid choices in an array.
+ List to check if your input is valid, and to randomly pick by computer.



## Choices in the array - hmmm...

//*

const computerChoice = choices[Math.floor(Math.random() * 3)];

*//

* Picks a random choice for the computer!
* Math.random() gives a number between 0 and 1.
* times 3 gives a number from 0 up to (but not including) 3.
* Math.floor(...) turns it into 0, 1, or 2.
* That number picks one of the three choices in the array.



## Checks if the user's input is not one of the valid choices:

//*

if (!choices.includes(userChoice)) {

*//

* ! is a no command - if no choice included and then run function when user made a choice.



## Error Message for user:

//*

console.log('Please choose rock, paper, or scissors.');
  process.exit();


*//

* If the input is invalid, show an error message and stop the program.




## Showing both, the users's and computer's choices.:

//*

console.log(`You chose: ${userChoice}`);
console.log(`Computer chose: ${computerChoice}`);

*//



## If both picked the same, it's a tie:

//*

if (userChoice === computerChoice) {
  console.log("It's a draw!");
}

*//




##  Checks if the player wins:

//*

else if (
  (userChoice === 'rock' && computerChoice === 'scissors') ||
  (userChoice === 'scissors' && computerChoice === 'paper') ||
  (userChoice === 'paper' && computerChoice === 'rock')
) {
  console.log("You win!");
}

*//


* Rock beats scissors, Scissors beats paper, Paper beats rock
* If any of these are true, the user wins.




##   If it's not a draw and you didn't win — the computer must have won, right?

//*

else {
  console.log("Computer wins!");
}

*//


* If you saved this in a file called rps.js, run it in the terminal


Over and out. :-) 