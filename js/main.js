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


})()