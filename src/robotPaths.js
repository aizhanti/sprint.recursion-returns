class Board {
  constructor(size) {
    this.board = [];
    for (let row = 0; row < size; row += 1) {
      this.board.push([]);
      for (let col = 0; col < size; col += 1) {
        this.board[row].push(false);
      }
    }
  }

  togglePiece(row, col) {
    this.board[row][col] = !this.board[row][col];
    return this.board;
  }
  hasBeenVisited(row, col) {
    return this.board[row][col];
  }
}

class RobotPaths {
  // initialize all your options
  // you may want to change this code later on, too
  constructor(size) {
    this.board = new Board(size);
    this.size = size;
    this.row = 0;
    this.col = 0;
    this.count = 0;
  }

  solve() {
    console.log(this.board);
    let startPoint = this.board.board[0][0];
    let endPoint = this.board.board[this.size - 1][this.size - 1];
    //recursive function goes here
    function findUniquePath() {}
    return this.count;
  }

  move(x, y) {
    this.board.togglePiece();
    //base case
    //add this.count if you get to endPoint
    //return if you can't move
    1, 2;
  }
}

module.exports = { RobotPaths };
