const computerChoiseDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('img');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()

}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 ) 
  if (randomNumber === 0) {
    computerChoice = 'Rock'
  }
  else if (randomNumber === 1) {
    computerChoice = 'Paper'
  }
  else if (randomNumber === 2) {
    computerChoice = 'Scissors'
  }
  computerChoiseDisplay.innerHTML = computerChoice
  
  
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'Draw!';
  }
  if (computerChoice === 'Rock' && userChoice === 'Paper') {
    result = 'You win!';
  }
  if (computerChoice === 'Rock' && userChoice === 'Scissors') {
    result = 'Computer win!';
  }
  if (computerChoice === 'Paper' && userChoice === 'Rock') {
    result = 'Computer win!';
  }
  if (computerChoice === 'Paper' && userChoice === 'Scissors') {
    result = 'You win!';
  }
  if (computerChoice === 'Scissors' && userChoice === 'Paper') {
    result = 'Computer win!';
  }
  if (computerChoice === 'Scissors' && userChoice === 'Rock') {
    result = 'You win!'
  }
  resultDisplay.innerHTML = result;
}
