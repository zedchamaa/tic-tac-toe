<h1>Introduction</h1>

<p>We’re making a Tic Tac Toe game you can play in your browser!</p>

<p>Click <a href="https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe">here</a> to view the full assignment on The Odin Project's website.</p>

<p>You can view the completed project at https://tic-tac-toe.zedchamaa.com/</p>

<img width="100%" src="https://github.com/zedchamaa/tic-tac-toe/blob/main/assets/tic-tac-toe-game-zedchamaa.png" />

<h2>Assignment</h2>

<p><strong>1.</strong> Set up your project with HTML, CSS and Javascript files and get the Git repo all set up.</p>

<p><strong>2.</strong> You’re going to store the gameboard as an array inside of a Gameboard object, so start there! Your players are also going to be stored in objects… and you’re probably going to want an object to control the flow of the game itself.</p>

<ul>
  <li><p>Your main goal here is to have as little global code as possible. Try tucking everything away inside of a module or factory. Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. If you need multiples of something (players!), create them with factories.</p></li>
</ul>

<p><strong>3.</strong> Set up your HTML and write a JavaScript function that will render the contents of the gameboard array to the webpage (for now you can just manually fill in the array with "X"s and "O"s)</p>

<p><strong>4.</strong> Build the functions that allow players to add marks to a specific spot on the board, and then tie it to the DOM, letting players click on the gameboard to place their marker. Don’t forget the logic that keeps players from playing in spots that are already taken!</p>

<p>Think carefully about where each bit of logic should reside. Each little piece of functionality should be able to fit in the game, player or gameboard objects.. but take care to put them in “logical” places. Spending a little time brainstorming here can make your life much easier later!</p>

<p><strong>5.</strong> Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.</p>

<p><strong>6.</strong> Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that congratulates the winning player!</p>

<p><strong>7.</strong> Optional - If you’re feeling ambitious create an AI so that a player can play against the computer!</p>

<ul>
  <li><p>Start by just getting the computer to make a random legal move.</p></li>
  <li><p>Once you’ve gotten that, work on making the computer smart. It is possible to create an unbeatable AI using the minimax algorithm (read about it <a href="https://en.wikipedia.org/wiki/Minimax">here</a>, some googling will help you out with this one)</p></li>
  <li><p>If you get this running definitely come show it off in the chatroom. It’s quite an accomplishment!</p></li>
</ul>
