function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound() {
  if (playerChoice === 'rock' && computerChoice === 'scissors') {
    return 'player';
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    return 'player';
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    return 'player';
  }
  return 'computer';
}

function game() {}
