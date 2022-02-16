const rock = document.querySelector('.rock');

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === 'rock' && computerChoice === 'scissors') {
    return 'player';
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    return 'player';
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    return 'player';
  }
  return 'computer';
}

let playerWins = 0;
let computerWins = 0;

function game() {
  let playerChoice;
  let computerChoice;
  let winner;

  playerChoice = ' ';
  computerChoice = computerPlay();
  winner = playRound(playerChoice, computerChoice);

  if (winner === 'player') playerWins += 1;
  else computerWins += 1;
}

rock.addEventListener('click', game);
