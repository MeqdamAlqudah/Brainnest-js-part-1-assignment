const objChoice = { 0: 'Rock', 1: 'Paper', 2: 'Scissors' };
const computerPlay = () => {
  const choice = Math.floor(Math.random() * 3);
  return objChoice[choice];
};

const objWinner = { rock: 'paper', paper: 'scissors', scissors: 'rock' };

const result = { player: 0, computer: 0 };

const playRound = (playerSelection, computerSelection) => {
  const downCasePlayerSelection = playerSelection.toLowerCase();
  const downCaseComputerSelection = computerSelection.toLowerCase();
  if (!Object.keys(objWinner).includes(downCasePlayerSelection)) {
    return 'please enter a valid value';
  }
  if (objWinner[downCasePlayerSelection] === downCaseComputerSelection) {
    result.computer += 1;
    return `You Lose! ${downCaseComputerSelection} beats ${downCasePlayerSelection}`;
  } if (downCaseComputerSelection === downCasePlayerSelection) {
    return `Both of you choose ${downCaseComputerSelection} no winner!`;
  }
  result.player += 1;

  return `You Win! ${downCasePlayerSelection} beats ${downCaseComputerSelection}`;
};

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

const game = () => {
  const resultText = result.player > result.computer ? 'You won the game!!' : 'You lost the game!!';
  let playerGameSelection;
  let computerGameSelection;
  for (let i = 0; i < 5; i += 1) {
    playerGameSelection = prompt('Plase choose (Rock or Paper or scissors) ');
    computerGameSelection = computerPlay();
    console.log(playRound(playerGameSelection, computerGameSelection));
  }
  console.log(resultText);
};

game();