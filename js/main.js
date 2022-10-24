/* Strict Mode */
"use strict";

const gameBoard = (function() {

  // retrieve the boxes as an array  
  const boxes = Array.from(document.getElementsByClassName('box'));
  
  // display a message that X goes first
  const turn = document.getElementById('turn');
  turn.textContent = 'X Goes First';


})()