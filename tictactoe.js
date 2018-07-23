/*
 *  Let's Play Tic Tac Toe!
 *
 //  Board:
//  _____________
//	| 0 | 1 | 2 |
//  |---|---|---|
//  | 3 | 4 | 5 |
//	|---|---|---|
//	| 6 | 7 | 8 |
//  -------------
//
// We need to go through all columns like
//
// 012, 345, 678 - Horizontal
// 036, 147, 258 - Vertical
// 048, 246      - Diagonal
//
// If mark is present in "all columns" of "any one of the combinations" then user won
//
// Instead of going through each combination manually we can make use of loops,
// So that it can be used for any grids like 7 X 7
 */
    function TicTacToe() {
			const START = "X";
			const BOARD_SIZE = 3; // 3 X 3 board is drawn
			const EMPTY = "";
			const WINNING_COMBINATIONS = [
	      [0, 1, 2],
	      [3, 4, 5],
	      [6, 7, 8],
	      [0, 3, 6],
	      [1, 4, 7],
	      [2, 5, 8],
	      [0, 4, 8],
	      [2, 4, 6],
	    ];
			let marks = {
				X: "X",  // Player 1 mark
				O: "O",  // Player 2 mark
				count: 0 // keep track of moves made
			};
			let score = {
				X: 0,
				O: 0
			};
			let turn = "X";
			let squares = [];

			drawBoard = function() {
				let board = document.createElement('table');

				//Create 3 rows
				for (let i = 0; i < BOARD_SIZE; i++) {
			    let row = document.createElement('tr');
			    board.appendChild(row);
					//Create 3 columns
			    for (let j = 0; j < BOARD_SIZE; j++) {
			      let cell = document.createElement('td');
			      cell.addEventListener("click", markBoard);
			      row.appendChild(cell);
						squares.push(cell);
			    }
			  }
				document.getElementById("tictactoe-board").appendChild(board);
			}

			markBoard = function() {
				if (this.innerHTML !== EMPTY) {
					return;
				}
				marks.count += 1;
				this.innerHTML = turn;
				console.log(marks.count);
				checkGameStatus();
			}

			checkGameStatus = function() {
				if (isGameWon()) {
					score[turn] += 1;
					alert('Congratulations Player ' + turn + "! You Win! Super!");
					startNewGame();
			  } else if (marks.count === BOARD_SIZE * BOARD_SIZE) {
					alert("Draw :O");
					startNewGame();
			  } else {
			    turn = turn === "X" ? "O" : "X";
			    document.getElementById('turn').textContent = 'Player ' + turn + '. Its Your turn!\n';
			  }
			}

			startNewGame = function () {
			  score = {
			    "X": 0,
			    "O": 0
			  };
			  turn = "X";
			  squares.forEach(function (square) {
			    square.innerHTML = EMPTY;
			  });
				marks.count = 0;
			}

			isGameWon = function() {
				for(let row = 0; row < WINNING_COMBINATIONS.length; row++) {
					//console.log("a0: " + td[WINNING_COMBINATIONS[row][0]].innerHTML);
					//console.log("a1: " + td[WINNING_COMBINATIONS[row][1]].innerHTML );
					//console.log("a2: " + td[WINNING_COMBINATIONS[row][2]].innerHTML);

					if (squares[WINNING_COMBINATIONS[row][0]].innerHTML === turn &&
							squares[WINNING_COMBINATIONS[row][1]].innerHTML === turn &&
							squares[WINNING_COMBINATIONS[row][2]].innerHTML === turn) {
								return true;
					}
				}
				return false;
			}

			return {
				play: function() {
					drawBoard();
					startNewGame();
				}
			}
		}
