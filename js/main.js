/* Strict Mode */
"use strict";

// Create the game board object
const gameBoard = (function() {
  const gameBoard = {
    // the board has 9 possible selection boxes
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    rounds: [],
    usedSelections: [],
    playerOneSelections: [],
    playerTwoSelections: [],
  };

  // create a round
  function createRound(round, player, mark, selection) {
    return {
      round: round,
      player: player,
      mark: mark,
      selection: selection
    }
  }

  // Main variables
  const board = gameBoard.board;
  const rounds = gameBoard.rounds;
  const usedSelections = gameBoard.usedSelections;
  const playerOneSelections = gameBoard.playerOneSelections;
  const playerTwoSelections = gameBoard.playerTwoSelections;





  // TODO: delete this section if no longer required
  // // Get the id value of the clicked box
  // const container =  document.querySelector('.container');
  // container.addEventListener('click', getBoxIdValue, {once: true});

  // function getBoxIdValue(event) {
  //   if (event.target !== event.currentTarget) {
  //     const clickedBox = event.target.id;
  //     console.log(clickedBox); // TODO: delete all the console logs when finished using them
  //     return clickedBox;
  //   }
  // }





  // Check if player one has won in round five
  function checkRoundFiveWinStatus(round, playerOneSelections) {
    if (playerOneSelections.includes(1) && playerOneSelections.includes(2) && playerOneSelections.includes(3) ||
      playerOneSelections.includes(4) && playerOneSelections.includes(5) && playerOneSelections.includes(6) ||
      playerOneSelections.includes(7) && playerOneSelections.includes(8) && playerOneSelections.includes(8) ||
      playerOneSelections.includes(1) && playerOneSelections.includes(4) && playerOneSelections.includes(7) ||
      playerOneSelections.includes(3) && playerOneSelections.includes(6) && playerOneSelections.includes(9) ||
      playerOneSelections.includes(2) && playerOneSelections.includes(5) && playerOneSelections.includes(8) ||
      playerOneSelections.includes(1) && playerOneSelections.includes(5) && playerOneSelections.includes(9) ||
      playerOneSelections.includes(7) && playerOneSelections.includes(5) && playerOneSelections.includes(3)
    ) {
      console.log('Player One has won the game!');
    }
    else {
      round++;
      createRoundSix(round);
    }
  }

  // Check if player two has won in round six
  function checkRoundSixWinStatus(round, playerTwoSelections) {
    if (playerTwoSelections.includes(1) && playerTwoSelections.includes(2) && playerTwoSelections.includes(3) ||
      playerTwoSelections.includes(4) && playerTwoSelections.includes(5) && playerTwoSelections.includes(6) ||
      playerTwoSelections.includes(7) && playerTwoSelections.includes(8) && playerTwoSelections.includes(8) ||
      playerTwoSelections.includes(1) && playerTwoSelections.includes(4) && playerTwoSelections.includes(7) ||
      playerTwoSelections.includes(3) && playerTwoSelections.includes(6) && playerTwoSelections.includes(9) ||
      playerTwoSelections.includes(2) && playerTwoSelections.includes(5) && playerTwoSelections.includes(8) ||
      playerTwoSelections.includes(1) && playerTwoSelections.includes(5) && playerTwoSelections.includes(9) ||
      playerTwoSelections.includes(7) && playerTwoSelections.includes(5) && playerTwoSelections.includes(3)
    ) {
      console.log('Player Two has won the game!');
    }
    else {
      round++;
      createRoundSeven(round);
    }
  }

  // Check if player one has won in round seven
  function checkRoundSevenWinStatus(round, playerOneSelections) {
    if (playerOneSelections.includes(1) && playerOneSelections.includes(2) && playerOneSelections.includes(3) ||
      playerOneSelections.includes(4) && playerOneSelections.includes(5) && playerOneSelections.includes(6) ||
      playerOneSelections.includes(7) && playerOneSelections.includes(8) && playerOneSelections.includes(8) ||
      playerOneSelections.includes(1) && playerOneSelections.includes(4) && playerOneSelections.includes(7) ||
      playerOneSelections.includes(3) && playerOneSelections.includes(6) && playerOneSelections.includes(9) ||
      playerOneSelections.includes(2) && playerOneSelections.includes(5) && playerOneSelections.includes(8) ||
      playerOneSelections.includes(1) && playerOneSelections.includes(5) && playerOneSelections.includes(9) ||
      playerOneSelections.includes(7) && playerOneSelections.includes(5) && playerOneSelections.includes(3)
    ) {
      console.log('Player One has won the game!');
    }
    else {
      round++;
      createRoundEight(round);
    }
  }

  // Check if player two has won in round eight
  function checkRoundEightWinStatus(round, playerTwoSelections) {
    if (playerTwoSelections.includes(1) && playerTwoSelections.includes(2) && playerTwoSelections.includes(3) ||
      playerTwoSelections.includes(4) && playerTwoSelections.includes(5) && playerTwoSelections.includes(6) ||
      playerTwoSelections.includes(7) && playerTwoSelections.includes(8) && playerTwoSelections.includes(8) ||
      playerTwoSelections.includes(1) && playerTwoSelections.includes(4) && playerTwoSelections.includes(7) ||
      playerTwoSelections.includes(3) && playerTwoSelections.includes(6) && playerTwoSelections.includes(9) ||
      playerTwoSelections.includes(2) && playerTwoSelections.includes(5) && playerTwoSelections.includes(8) ||
      playerTwoSelections.includes(1) && playerTwoSelections.includes(5) && playerTwoSelections.includes(9) ||
      playerTwoSelections.includes(7) && playerTwoSelections.includes(5) && playerTwoSelections.includes(3)
    ) {
      console.log('Player Two has won the game!');
    }
    else {
      round++;
      createRoundNine(round);
    }
  }

  // Check if player one has won in round nine
  function checkRoundNineWinStatus(round, playerOneSelections) {
    if (playerOneSelections.includes(1) && playerOneSelections.includes(2) && playerOneSelections.includes(3) ||
      playerOneSelections.includes(4) && playerOneSelections.includes(5) && playerOneSelections.includes(6) ||
      playerOneSelections.includes(7) && playerOneSelections.includes(8) && playerOneSelections.includes(8) ||
      playerOneSelections.includes(1) && playerOneSelections.includes(4) && playerOneSelections.includes(7) ||
      playerOneSelections.includes(3) && playerOneSelections.includes(6) && playerOneSelections.includes(9) ||
      playerOneSelections.includes(2) && playerOneSelections.includes(5) && playerOneSelections.includes(8) ||
      playerOneSelections.includes(1) && playerOneSelections.includes(5) && playerOneSelections.includes(9) ||
      playerOneSelections.includes(7) && playerOneSelections.includes(5) && playerOneSelections.includes(3)
    ) {
      console.log('Player One has won the game!');
    }
    else {
      console.log('No one won the game, it\'s a tie');
    }
  }

  // TODO: remember to delete this object if no longer required
  const players = {
    playerOne: 'Zed',
    playerOneMark: 'X',
    playerTwo: 'Roger',
    playerTwoMark: 'O'
  }
  
  // Kick off the game with round 1
  const round = 1;
  createRoundOne(round);
  
  // Create round 1
  function createRoundOne(round) {
    // // find which box was clicked // TODO: continue from here...
    // const container =  document.querySelector('.container');
    // container.addEventListener('click', getBoxIdValue, {once: true}) ;

    


    const playerOneSelection = 1; 
    const roundOne = createRound(round, players.playerOne, players.playerOneMark, playerOneSelection);

    rounds.push(roundOne);
    usedSelections.push(playerOneSelection);
    playerOneSelections.push(playerOneSelection);

    round++;
    createRoundTwo(round);
  }

  // create round 2
  function createRoundTwo(round) {
    // find which box was clicked // TODO: delete these 3 lines if no longer needed
    // const container =  document.querySelector('.container');
    // container.addEventListener('click', getBoxIdValue, {once: true}) ;

    const playerTwoSelection = 2;
    const roundTwo = createRound(round, players.playerTwo, players.playerTwoMark, playerTwoSelection);
    
    rounds.push(roundTwo);
    usedSelections.push(playerTwoSelection);
    playerTwoSelections.push(playerTwoSelection);

    round++;
    createRoundThree(round);
  }

  // create round 3
  function createRoundThree(round) {
    // find which box was clicked // TODO: delete these 3 lines if no longer needed
    // const container =  document.querySelector('.container');
    // container.addEventListener('click', getBoxIdValue, {once: true}) ;

    const playerOneSelection = 3;
    const roundThree = createRound(round, players.playerOne, players.playerOneMark, playerOneSelection);
    
    rounds.push(roundThree);
    usedSelections.push(playerOneSelection);
    playerOneSelections.push(playerOneSelection);
    
    round++;
    createRoundFour(round);
  }

  // create round 4
  function createRoundFour(round) {
    // find which box was clicked // TODO: delete these 3 lines if no longer needed
    // const container =  document.querySelector('.container');
    // container.addEventListener('click', getBoxIdValue, {once: true}) ;

    const playerTwoSelection = 4;
    const roundFour = createRound(round, players.playerTwo, players.playerTwoMark, playerTwoSelection);
    
    rounds.push(roundFour);
    usedSelections.push(playerTwoSelection);
    playerTwoSelections.push(playerTwoSelection);
   
    round++;
    createRoundFive(round);
  }

  // create round 5
  function createRoundFive(round) {
    // find which box was clicked // TODO: delete these 3 lines if no longer needed
    // const container =  document.querySelector('.container');
    // container.addEventListener('click', getBoxIdValue, {once: true}) ;

    const playerOneSelection = 5;
    const roundFive = createRound(round, players.playerOne, players.playerOneMark, playerOneSelection);
    
    rounds.push(roundFive);
    usedSelections.push(playerOneSelection);
    playerOneSelections.push(playerOneSelection);

    checkRoundFiveWinStatus(round, playerOneSelections);
  }

  // create round 6
  function createRoundSix(round) {
    // // find which box was clicked // TODO: delete these 3 lines if no longer needed
    // const container =  document.querySelector('.container');
    // container.addEventListener('click', getBoxIdValue, {once: true}) ;

    const playerTwoSelection = 6;
    const roundSix = createRound(round, players.playerTwo, players.playerTwoMark, playerTwoSelection);
    
    rounds.push(roundSix);
    usedSelections.push(playerTwoSelection);
    playerTwoSelections.push(playerTwoSelection);

    checkRoundSixWinStatus(round, playerTwoSelections);
  }

  // create round 7
  function createRoundSeven(round) {
    // // find which box was clicked // TODO: delete these 3 lines if no longer needed
    // const container =  document.querySelector('.container');
    // container.addEventListener('click', getBoxIdValue, {once: true}) ;

    const playerOneSelection = 7;
    const roundSeven = createRound(round, players.playerOne, players.playerOneMark, playerOneSelection);
    
    rounds.push(roundSeven);
    usedSelections.push(playerOneSelection);
    playerOneSelections.push(playerOneSelection);

    checkRoundSevenWinStatus(round, playerOneSelections);
  }

  // create round 8
  function createRoundEight(round) {
    // // find which box was clicked // TODO: delete these 3 lines if no longer needed
    // const container =  document.querySelector('.container');
    // container.addEventListener('click', getBoxIdValue, {once: true}) ;

    const playerTwoSelection = 8;
    const roundEight = createRound(round, players.playerTwo, players.playerTwoMark, playerTwoSelection);
    
    rounds.push(roundEight);
    usedSelections.push(playerTwoSelection);
    playerTwoSelections.push(playerTwoSelection);

    checkRoundEightWinStatus(round, playerTwoSelections);
  }

  // create round 9
  function createRoundNine(round) {
    // // find which box was clicked // TODO: delete these 3 lines if no longer needed
    // const container =  document.querySelector('.container');
    // container.addEventListener('click', getBoxIdValue, {once: true}) ;

    const playerOneSelection = 9;
    const roundNine = createRound(round, players.playerOne, players.playerOneMark, playerOneSelection);
    
    rounds.push(roundNine);
    usedSelections.push(playerOneSelection);
    playerOneSelections.push(playerOneSelection);

    checkRoundNineWinStatus(round, playerOneSelections);
  } 


  console.log(usedSelections);
  console.log(playerOneSelections);
  console.log(playerTwoSelections);

})()