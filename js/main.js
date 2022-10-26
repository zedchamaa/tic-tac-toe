/* Strict Mode */
"use strict";

const gameBoard = (function() {
  // retrieve the boxes as an array  
  const boxes = Array.from(document.getElementsByClassName('box'));
  
  // define the main variables
  let selectedBoxes = [];
  let x_Selections = [];
  let o_Selections = [];
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
// any of the following combinations wins the game
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
    updateMessagesX();
    x_Score += 1;
    updateScores();
    stopPlayersClicking();
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
    updateMessagesO();
    o_Score += 1;
    updateScores();
    stopPlayersClicking();
  }
  else if (selectedBoxes.length === 9) {
    updateTiesMessage();
    tiesScore += 1;
    updateTiesScore();
    stopPlayersClicking();
  }
}

// update messages of X
function updateMessagesX() {
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
  const mainMessages = document.querySelector('.main-messages');
  mainMessages.classList.remove('hide');

  const messagesMark = document.querySelector('.messages__mark');
  messagesMark.remove();

  const markSymbol = document.querySelector('#mark-symbol');
  markSymbol.classList.remove('messages__X-mark');
  markSymbol.classList.remove('messages__O-mark');
  markSymbol.classList.add('messages__ties');
  markSymbol.innerHTML = '<h1>' + `It's a tie!` + '</h1>';
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

// restart the game
const restart = document.querySelector('.restart');
restart.addEventListener('click', restartGame);

// reset the messages
function resetMessages() {
  const messages = document.querySelector('.main-messages');
  messages.classList.add('hide');
}

function restartGame() {
  selectedBoxes = [];
  x_Selections = [];
  o_Selections = [];
  resetMessages();
  boxes.forEach((box) => {
    let firstChild = box.firstChild.nextSibling;
    firstChild.classList.remove('box__X-mark'); 
    firstChild.classList.remove('box__O-mark'); 
  });
  allowPlayersToClick();
  startGame();
}
})()