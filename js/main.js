/* Strict Mode */
"use strict";

const gameBoard = (function() {

  // retrieve the boxes as an array  
  const boxes = Array.from(document.getElementsByClassName('box'));
  
  // display a message that X goes first
  const turn = document.getElementById('turn');
  turn.textContent = 'X Goes First';

  // define the main variables
  let selectedBoxes = [];
  const x_Selections = [];
  const o_Selections = [];
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
    console.log(x_Selections);
    console.log(o_Selections);

    selectedBoxes.splice(boxId, 0, boxId);
    // console.log(selectedBoxes); // TODO: delete
    markBox(box);
    checkWinStatus();
    switchPlayer();
  }

  // add a click event listener for each box
  boxes.forEach((box) => {
    box.addEventListener('click', boxClicked, {once: true});
  }); 

  // add the player's symbol to the clicked box  
  function markBox(box) {
    if (currentPlayer === x_Text) box.innerText = x_Text; 
    if (currentPlayer === o_Text) box.innerText = o_Text;
  }

  // display who's turn is it now
  function displayTurn() {
    if (currentPlayer === x_Text) {
      turn.textContent = 'O Turn';
    }
    else if (currentPlayer === o_Text) {
      turn.textContent = 'X Turn';
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
  else {
    // FIXME: start from here
    tiesScore += 1;
    updateTiesScore(); 
  }
}

// update messages of X
function updateMessagesX() {
  const messages = document.getElementById('messages');
  messages.textContent = 'X Takes The Round';
}

// update messages of O
function updateMessagesO() {
  const messages = document.getElementById('messages');
  messages.textContent = 'O Takes The Round';
}

// update the scores of X and O
function updateScores() {
  const scoreX = document.getElementById('x-score');
  scoreX.textContent = `The score of X is ${x_Score}`;
  const scoreO = document.getElementById('o-score');
  scoreO.textContent = `The score of O is ${o_Score}`;
}

// update the ties score
function updateTiesScore() {
  const ties = document.getElementById('ties');
  ties.textContent = `${tiesScore} ties`;
}

// stop players from clicking until they restart the game
function stopPlayersClicking() {
  const board = document.getElementById('board');
  board.classList.add('no-clicks');
}


})()