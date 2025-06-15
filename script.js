const userChoice = process.argv[2]?.toLowerCase();
const choices = ["rock", "paper", "scissors"];
const computerChoice = choices[Math.floor(Math.random() * 3)];

if (!choices.includes(userChoice)) {
  console.log("Please choose rock, paper, or scissors.");
  process.exit();
}

console.log(`You chose: ${userChoice}`);
console.log(`Computer chose: ${computerChoice}`);

if (userChoice === computerChoice) {
  console.log("It's a draw!");
} else if (
  (userChoice === "rock" && computerChoice === "scissors") ||
  (userChoice === "scissors" && computerChoice === "paper") ||
  (userChoice === "paper" && computerChoice === "rock")
) {
  console.log("You win!");
} else {
  console.log("Computer wins!");
}
