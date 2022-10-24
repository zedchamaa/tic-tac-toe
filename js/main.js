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


})()