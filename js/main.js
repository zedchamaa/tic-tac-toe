/* Strict Mode */
"use strict";

// Create the game board object
const gameBoard = (function() {
  const gameBoard = {
    // the board has 9 possible selection slots
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    rounds: [
      {round: 1, player: 'You', mark: 'X', score: 0, playerOneSelection: [1]},
      {round: 2, player: 'CPU', mark: 'O', score: 0, playerTwoSelection: [2]},
      {round: 3, player: 'You', mark: 'X', score: 0, playerOneSelection: [1, 3]},
      {round: 4, player: 'CPU', mark: 'O', score: 0, playerTwoSelection: [2, 4]},
      {round: 5, player: 'You', mark: 'X', score: 0, playerOneSelection: [1, 3, 5]},
      {round: 6, player: 'CPU', mark: 'O', score: 0, playerTwoSelection: [2, 4, 6]},
      {round: 7, player: 'You', mark: 'X', score: 0, playerOneSelection: [1, 3, 5, 7]},
      {round: 8, player: 'CPU', mark: '0', score: 0, playerTwoSelection: [2, 4, 6, 8]},
      {round: 9, player: 'You', mark: 'X', score: 0, playerOneSelection: [1, 3, 5, 7, 9]},
    ],
    usedSelections: [],
    remainingSelections: []
    };

  // 1 - Pick playerOne's mark (X or O) - X always goes first
  // add click event listener to the X and 0 buttons to see which one has been selected by playerOne (you)

  const mark = 'X'; // TODO: delete
  // const mark = 'O'; // TODO: delete

  // 2 - Create players
  // This will create two objects which will be assigned to playerOne and playerTwo and contain the player name, selected mark, score and selections

  // create player one
  function createPlayerOne(player, mark, playerOneSelection) {
    return {
      player: player,
      mark: mark,
      playerOneSelection: playerOneSelection
    }
  }
  
  // create player two
  function createPlayerTwo(player, mark, playerTwoSelection) {
    return {
      player: player,
      mark: mark,
      playerTwoSelection: playerTwoSelection
    }
  }

  // 3 - Start new game versus CPU
  // add click event listener to the "New Game (VS CPU)" button to create playerOne and update its values

  startGameVsCPu(mark);
  displayTurn(mark); // show who's turn it is on the UI

  function startGameVsCPu(mark) {
    const playerOneSelection = [1];
    const playerTwoSelection = [3];
    const totalSelection = [...playerOneSelection, ...playerTwoSelection];
    const playerA = 'You';
    const playerB = 'CPU';

    if (mark === 'X') {
      const otherMark = 'O'; // create a variable to hold the other mark
      const playerOne =  createPlayerOne(playerA, mark, playerOneSelection);
      const roundOne = createPlayerOneRound(1, playerOne);
      console.log(roundOne); // TODO: delete
      console.log(playerOne); // TODO: delete
      const playerTwo =  createPlayerTwo(playerB, otherMark, playerTwoSelection);
      console.log(playerTwo); // TODO: delete
      updateRemainingSelections(totalSelection);
    }
     
    else if (mark === 'O') {
      const otherMark = 'X';
      const playerOne =  createPlayerOne(playerB, otherMark, playerOneSelection);
      const roundOne = createPlayerOneRound(1, playerOne);
      updateRemainingSelections(totalSelection);
      console.log(roundOne); // TODO: delete
      console.log(playerOne); // TODO: delete
      const playerTwo =  createPlayerTwo(playerA, mark, playerTwoSelection);
      console.log(playerTwo); // TODO: delete
    }
  }

  // 4 - Show who's turn it is now
  function displayTurn(mark) {
    if (mark === 'X') {
      // display X on the UI
    }
    else {
      // display Y on the UI
    }
  }

  // 5 - Create the rounds
  function createPlayerOneRound(roundNumber, playerOne) {
    return {
      roundNumber: roundNumber,
      playerOne: playerOne
    }
  }

  function createPlayerTwoRound(roundNumber, playerTwo) {
    return {
      roundNumber: roundNumber,
      playerTwo: playerTwo
    }
  }

  // 6 - Update selection with available spots
  function updateRemainingSelections(totalSelection) {

    console.log(totalSelection); // TODO: delete

    const board = gameBoard.board;
    console.log(board); // TODO: delete
    
    const remainingSelections = board.filter(n => !totalSelection.includes(n));
    
    console.log(remainingSelections); // TODO: delete
  }

  // 7 - When board.length >= 5, check for winners/losers/tie

  // 8 - Update scores

  // 9 - Display notifications

  // 10 - If playerOne wins, quit game or go to next round

  // 11 - If playerOne loses, quot game or go to next round

  // 12 - Restart game or cancel at anytime when refresh symbol is clicked

})()