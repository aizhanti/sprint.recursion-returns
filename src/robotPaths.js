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
    return this.board[row][col]; //true or false
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
    // let startPoint = this.board.board[0][0];
    // let endPoint = this.board.board[this.size - 1][this.size - 1];
    //recursive function goes here
    this.move(0, 0);
    console.log("new ", this.board);
    console.log("count", this.count);
    return this.count;
  }

  move(x, y) {
    if (x === this.size - 1 && y === this.size - 1) {
      //this.board.togglePiece(x, y);
      this.count++;
      return;
    }

    if (x < 0 || y < 0 || x >= this.size || y >= this.size) {
      return;
    }

    if (this.board.hasBeenVisited(x, y)) {
      return;
    }

    this.board.togglePiece(x, y);
    this.move(x + 1, y); //right
    this.move(x, y + 1); //down
    this.move(x - 1, y); //left
    this.move(x, y - 1); //up
    this.board.togglePiece(x, y);
  }
}

module.exports = { RobotPaths };
