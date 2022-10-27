/* Strict Mode */
"use strict";

const gameBoard = (function() {
  // retrieve the boxes as an array  
  const boxes = Array.from(document.getElementsByClassName('box'));
  
  // define the main variables
  let selectedBoxes = [];
  let x_Selections = [];
  let o_Selections = [];
  let x_WinningSelections = [];
  let o_WinningSelections = []; 
  const o_Text = 'O';
  const x_Text = 'X';
  let x_Score = 0;
  let o_Score = 0;
  let tiesScore = 0;
  let currentPlayer = x_Text;

  // find out which box was clicked and update the selected boxes array
  const boxClicked = (e) => {
    displayTurn();
    const box = e.target;
    const boxId = Number(e.target.id);
    if (currentPlayer === x_Text) x_Selections.push(boxId);
    if (currentPlayer === o_Text) o_Selections.push(boxId);
    selectedBoxes.splice(boxId, 0, boxId);
    markBox(box);
    checkWinStatus();
    switchPlayer();
  }

  // hide the first turn message
  function hideFirstTurnMessage() {
    const firstTurnMessage = document.querySelector('.messages__first-turn');
    firstTurnMessage.classList.add('hide');
  }

  // start the game
  function startGame() {
    // add a click event listener for each box
    boxes.forEach((box) => {
      box.addEventListener('click', boxClicked, {once: true});
      box.addEventListener('click', hideFirstTurnMessage);
    }); 
  }

  window.onload = startGame();

  // add the player's symbol to the clicked box  
  function markBox(box) {
    let firstChild = box.firstChild.nextSibling;
    if (currentPlayer === x_Text) firstChild.classList.add('box__X-mark'); 
    if (currentPlayer === o_Text) firstChild.classList.add('box__O-mark'); 
  }

  // display who's turn is it now
  function displayTurn() {
    let playerTurnMark = document.querySelector('.player-turn__mark');
    if (currentPlayer === x_Text) {
      playerTurnMark.src = '../assets/icon-o.svg';
    }
    else if (currentPlayer === o_Text) {
      playerTurnMark.src = '../assets/icon-x.svg';
    }
  }

  // switch player
  function switchPlayer() {
    if (currentPlayer === x_Text) {
      currentPlayer = o_Text;
    }
    else if (currentPlayer === o_Text) {
      currentPlayer = x_Text;
    }
  }

// check for wins, losses or ties
// any of the following combinations wins the round
// [0, 1, 2]
// [3, 4, 5]
// [6, 7, 8]
// [0, 3, 6]
// [1, 4, 7]
// [2, 5, 8]
// [0, 4, 8]
// [2, 4, 6]

function checkWinStatus() {

  if (
    (x_Selections.includes(0) && x_Selections.includes(1) && x_Selections.includes(2)) ||
    (x_Selections.includes(3) && x_Selections.includes(4) && x_Selections.includes(5)) ||
    (x_Selections.includes(6) && x_Selections.includes(7) && x_Selections.includes(8)) ||
    (x_Selections.includes(0) && x_Selections.includes(3) && x_Selections.includes(6)) ||
    (x_Selections.includes(1) && x_Selections.includes(4) && x_Selections.includes(7)) ||
    (x_Selections.includes(2) && x_Selections.includes(5) && x_Selections.includes(8)) ||
    (x_Selections.includes(0) && x_Selections.includes(4) && x_Selections.includes(8)) ||
    (x_Selections.includes(2) && x_Selections.includes(4) && x_Selections.includes(6))
  ) {
    x_Score += 1;
    updateScores();
    updateMessagesX();
    stopPlayersClicking();
    winningCombinationsX(x_Selections);
  }
  else if (
    (o_Selections.includes(0) && o_Selections.includes(1) && o_Selections.includes(2)) ||
    (o_Selections.includes(3) && o_Selections.includes(4) && o_Selections.includes(5)) ||
    (o_Selections.includes(6) && o_Selections.includes(7) && o_Selections.includes(8)) ||
    (o_Selections.includes(0) && o_Selections.includes(3) && o_Selections.includes(6)) ||
    (o_Selections.includes(1) && o_Selections.includes(4) && o_Selections.includes(7)) ||
    (o_Selections.includes(2) && o_Selections.includes(5) && o_Selections.includes(8)) ||
    (o_Selections.includes(0) && o_Selections.includes(4) && o_Selections.includes(8)) ||
    (o_Selections.includes(2) && o_Selections.includes(4) && o_Selections.includes(6))
  ) {
    o_Score += 1;
    updateScores();
    updateMessagesO();
    stopPlayersClicking();
    winningCombinationsO(o_Selections);
  }
  else if (selectedBoxes.length === 9) {
    tiesScore += 1;
    updateTiesScore();
    updateTiesMessage();
    stopPlayersClicking();
  }
}

// update messages of X
function updateMessagesX() {
  const tiesMessages = document.querySelector('.messages__ties');
  tiesMessages.classList.add('hide');

  const mainMessages = document.querySelector('.main-messages');
  mainMessages.classList.remove('hide');

  const messagesMark = document.querySelector('.messages__mark');
  messagesMark.src = '../assets/icon-x.svg';

  const markSymbol = document.querySelector('#mark-symbol');
  markSymbol.classList.remove('messages__O-mark');
  markSymbol.classList.add('messages__X-mark');
}

// update messages of O
function updateMessagesO() {
  const tiesMessages = document.querySelector('.messages__ties');
  tiesMessages.classList.add('hide');

  const mainMessages = document.querySelector('.main-messages');
  mainMessages.classList.remove('hide');

  const messagesMark = document.querySelector('.messages__mark');
  messagesMark.src = '../assets/icon-o.svg';

  const markSymbol = document.querySelector('#mark-symbol');
  markSymbol.classList.remove('messages__X-mark');
  markSymbol.classList.add('messages__O-mark');
}

// update the ties message
function updateTiesMessage() {
  const tiesMessages = document.querySelector('.messages__ties');
  tiesMessages.classList.remove('hide');
}

// update the scores of X and O
function updateScores() {
  const scoreX = document.getElementById('x-score');
  scoreX.textContent = x_Score;
  const scoreO = document.getElementById('o-score');
  scoreO.textContent = o_Score;
}

// update the ties score
function updateTiesScore() {
  const ties = document.getElementById('ties');
  ties.textContent = tiesScore;
}

// stop players from clicking until they restart the game
function stopPlayersClicking() {
  const board = document.querySelector('.board');
  board.classList.add('no-clicks');
}

// allow players to click the boxes when the game restarts
function allowPlayersToClick() {
  const board = document.querySelector('.board');
  board.classList.remove('no-clicks');
}

// target winning X combinations and update style
function updateWinningStylesX(x_WinningSelections) {
  let targetId;

  for (let i = 0; i < x_WinningSelections.length; i++) {
    targetId = x_WinningSelections[i];
    const target = document.getElementById(targetId);
    target.classList.add('box__X-winner');

    let firstChild = target.firstChild.nextSibling;
    firstChild.classList.remove('box__X-mark'); 
    firstChild.classList.add('box__X-mark-winner'); 
  }
}

// target winning O combinations and update style
function updateWinningStylesO(o_WinningSelections) {
  let targetId;
  
  for (let i = 0; i < o_WinningSelections.length; i++) {
    targetId = o_WinningSelections[i];
    const target = document.getElementById(targetId);
    target.classList.add('box__O-winner');

    let firstChild = target.firstChild.nextSibling;
    firstChild.classList.remove('box__O-mark'); 
    firstChild.classList.add('box__O-mark-winner'); 
  }
}

// find out the winning combinations of X
function winningCombinationsX(x_Selections) {
  if ((x_Selections.includes(0) && x_Selections.includes(1) && x_Selections.includes(2))) x_WinningSelections.push(0, 1, 2);
  if ((x_Selections.includes(3) && x_Selections.includes(4) && x_Selections.includes(5))) x_WinningSelections.push(3, 4, 5);
  if ((x_Selections.includes(6) && x_Selections.includes(7) && x_Selections.includes(8))) x_WinningSelections.push(6, 7, 8);
  if ((x_Selections.includes(0) && x_Selections.includes(3) && x_Selections.includes(6))) x_WinningSelections.push(0, 3, 6);
  if ((x_Selections.includes(1) && x_Selections.includes(4) && x_Selections.includes(7))) x_WinningSelections.push(1, 4, 7);
  if ((x_Selections.includes(2) && x_Selections.includes(5) && x_Selections.includes(8))) x_WinningSelections.push(2, 5, 8);
  if ((x_Selections.includes(0) && x_Selections.includes(4) && x_Selections.includes(8))) x_WinningSelections.push(0, 4, 8);
  if ((x_Selections.includes(2) && x_Selections.includes(4) && x_Selections.includes(6))) x_WinningSelections.push(2, 4, 6);
  updateWinningStylesX(x_WinningSelections);
}

// find out the winning combinations of O
function winningCombinationsO(o_Selections) {
  if ((o_Selections.includes(0) && o_Selections.includes(1) && o_Selections.includes(2))) o_WinningSelections.push(0, 1, 2);
  if ((o_Selections.includes(3) && o_Selections.includes(4) && o_Selections.includes(5))) o_WinningSelections.push(3, 4, 5);
  if ((o_Selections.includes(6) && o_Selections.includes(7) && o_Selections.includes(8))) o_WinningSelections.push(6, 7, 8);
  if ((o_Selections.includes(0) && o_Selections.includes(3) && o_Selections.includes(6))) o_WinningSelections.push(0, 3, 6);
  if ((o_Selections.includes(1) && o_Selections.includes(4) && o_Selections.includes(7))) o_WinningSelections.push(1, 4, 7);
  if ((o_Selections.includes(2) && o_Selections.includes(5) && o_Selections.includes(8))) o_WinningSelections.push(2, 5, 8);
  if ((o_Selections.includes(0) && o_Selections.includes(4) && o_Selections.includes(8))) o_WinningSelections.push(0, 4, 8);
  if ((o_Selections.includes(2) && o_Selections.includes(4) && o_Selections.includes(6))) o_WinningSelections.push(2, 4, 6);
  updateWinningStylesO(o_WinningSelections);
}

// reset winning combinations
function resetWinningCombinations() {
  x_WinningSelections = [];
  o_WinningSelections = [];
}

// restart the game
const restart = document.querySelector('.restart');
restart.addEventListener('click', restartGame);

// reset the messages
function resetMessages() {
  const messages = document.querySelector('.main-messages');
  messages.classList.add('hide');

  const tiesMessages = document.querySelector('.messages__ties');
  tiesMessages.classList.add('hide');
}

function restartGame() {
  selectedBoxes = [];
  x_Selections = [];
  o_Selections = [];
  resetMessages();
  resetWinningCombinations();
  boxes.forEach((box) => {
    let firstChild = box.firstChild.nextSibling;
    firstChild.classList.remove('box__X-mark'); 
    firstChild.classList.remove('box__O-mark'); 
    firstChild.classList.remove('box__X-mark-winner'); 
    firstChild.classList.remove('box__O-mark-winner'); 
  });
  boxes.forEach((box) => {
    box.classList.remove('box__X-winner'); 
    box.classList.remove('box__O-winner'); 
  });
  allowPlayersToClick();
  startGame();
}
})()