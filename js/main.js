function init() { //initializing function

  //"Global" variables
  var gInProg = 0; //checks game status. 0 = game not started; 1 = game in progress
  var turnNum = 0; //turn counter
  var gFilled = 0; //number of grids currently filled
  var maxTurns = document.querySelectorAll('.gsq').length;
  var x = []; //array used to store player x's grid square selections
  var o = []; //array used to store player o's grid square selections
  var gB = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  function start() {
    var sButton = document.querySelector('header img');
    sButton.addEventListener('click', function() {
      for (var i = 0; i < maxTurns; i++) {
        document.querySelectorAll('.gsq')[i].addEventListener('click', run); //all grids waiting for clicks
      }
      if (gInProg === 0) {
        gInProg = 1;
        sButton.addEventListener('click', function() {
          location.reload();
        });
      }
    });
  }
  start();

  function run() {
    var choice = event.target; //defines var choice as element that was most recently clicked
    var inGrid = choice.id.substring(1, 2);
    if (choice.innerText === '') {
      if (turnNum % 2 === 0) { //Player X's turn
        choice.innerText = 'X';
        gB[inGrid] = 1;
        gFilled += 1;
        vTurn();
        chWin(); //call function to check win, lose, or draw
        chEnd(); //call function to check if game has ended
      } else if (turnNum % 2 !== 0) { //Player O's turn
        choice.innerText = 'O';
        gB[inGrid] = 2;
        gFilled += 1;
        vTurn();
        chWin();
        chEnd();
      }
    } else {
      alert('Invalid choice. Please re-select.');
    }
  }

  function vTurn() { //basically a turn counter
    turnNum += 1;
  }

  function chWin() {
    if ((gB[0] === 1 && gB[1] === 1 && gB[2] === 1) || (gB[3] === 1 && gB[4] === 1 && gB[5] === 1) || (gB[6] === 1 && gB[7] === 1 && gB[8] === 1) || (gB[0] === 1 && gB[3] === 1 && gB[6] === 1) || (gB[1] === 1 && gB[4] === 1 && gB[7] === 1) || (gB[2] === 1 && gB[5] === 1 && gB[8] === 1) || (gB[0] === 1 && gB[4] === 1 && gB[8] === 1) || (gB[2] === 1 && gB[4] === 1 && gB[6] === 1)) {
      alert('Player X wins!');
      location.reload();
    } else if ((gB[0] === 2 && gB[1] === 2 && gB[2] === 2) || (gB[3] === 2 && gB[4] === 2 && gB[5] === 2) || (gB[6] === 2 && gB[7] === 2 && gB[8] === 2) || (gB[0] === 2 && gB[3] === 2 && gB[6] === 2) || (gB[1] === 2 && gB[4] === 2 && gB[7] === 2) || (gB[2] === 2 && gB[5] === 2 && gB[8] === 2) || (gB[0] === 2 && gB[4] === 2 && gB[8] === 2) || (gB[2] === 2 && gB[4] === 2 && gB[6] === 2)) {
      alert('Player O wins!');
      location.reload();
    }
  }

  function chEnd() { //check if the game has ended
    if (gFilled > maxTurns - 1) {
      alert('The game has ended with a draw!');
      location.reload();
    }
  }
}

window.addEventListener('load', init, false);
