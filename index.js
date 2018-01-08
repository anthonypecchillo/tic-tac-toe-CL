var prompt = require('prompt');

var TicTacToe = function() {
  this.player ='x';
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

TicTacToe.prototype.play = function() {
  this.startGame();
  this.printBoard();
}

var game = new TicTacToe();
game.play();