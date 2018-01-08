var prompt = require('readline-sync');

var TicTacToe = function() {
  this.player = 'x';
  this.moves = 0;
  this.board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
}

TicTacToe.prototype.startGame = function() {
  console.log('Let the game begin!');
}

TicTacToe.prototype.printBoard = function(board) {
  console.log(' _ _ _ ');
  console.log('|' + this.board[0][0] + '|' + this.board[0][1] + '|' + this.board[0][2] + '|');
  console.log('|— — —|');
  console.log('|' + this.board[1][0] + '|' + this.board[1][1] + '|' + this.board[1][2] + '|');
  console.log('|— — —|');
  console.log('|' + this.board[2][0] + '|' + this.board[2][1] + '|' + this.board[2][2] + '|');
  console.log(' ¯ ¯ ¯ ');
}

TicTacToe.prototype.printInvalidMove = function(message) {
  console.log(`Invalid input: ${message}`);
}

// NOT FINISHED!
TicTacToe.prototype.isPositionOccupied = function() {
  return false;
}

TicTacToe.prototype.isInvalidMove = function(move) {
  move = Number(move);

  if (move < 1 || move > 9) {
    this.printInvalidMove('Number must be between 1 and 9!');
    return true;
  } else if(Math.floor(move) !== move) {
    this.printInvalidMove('Number must be an integer!');
    return true;
  } else if(this.isPositionOccupied(move)) {
    this.printInvalidMove('That position is already occupied!');
    return true;
  } else {
    return false;
  }
}

TicTacToe.prototype.convertToRowCol = function(move) {
  var row = Math.floor((move - 1) / 3);
  var col = (move - 1) % 3;
  return {row, col};
}

TicTacToe.prototype.promptPlayerMove = function() {
  var move;

  do {
    move = prompt.question(`Player ${this.player}, it's your turn! Please choose a move (1-9): `);
  } while(this.isInvalidMove(move));

  return this.convertToRowCol(move);
}

TicTacToe.prototype.play = function() {
  this.startGame();
  this.printBoard();

  var {row, col} = this.promptPlayerMove();

  console.log('row: ', row);
  console.log('col: ', col);
}

var game = new TicTacToe();
game.play();