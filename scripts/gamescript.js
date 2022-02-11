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

function game() {
  let playerChoice;
  let computerChoice;
  let winner;
  let playerWins = 0;
  let computerWins = 0;
  for (let i = 0; i < 2; i++) {
    computerChoice = computerPlay();
    console.log(computerChoice);
    playerChoice = prompt('Input Choice:').toLowerCase();
    winner = playRound(playerChoice, computerChoice);
    if (winner === 'player') {
      playerWins += 1;
    } else {
      computerWins += 1;
    }
    alert(`${winner} Wins!
Computer Score: ${computerWins} --- Player Score: ${playerWins}`);
  }
}

game();
