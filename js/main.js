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


})()