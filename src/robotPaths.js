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
    return this.count;
  }

  canMove(x, y) {
    if (x >= 0 && y >= 0 && x < this.size && y < this.size) {
      //if it has been visited, we can't move (which is why we negate)
      return !this.board.hasBeenVisited(x, y);
    }
    return false;
  }

  checkRight(x, y) {
    // 0,0
    x = x + 1;
    return this.canMove(x, y); //1,0
  }

  checkLeft(x, y) {
    x = x - 1;
    return this.canMove(x, y);
  }

  checkUp(x, y) {
    y = y + 1;
    return this.canMove(x, y);
  }

  checkDown(x, y) {
    y = y - 1;
    return this.canMove(x, y);
  }

  move(x, y) {
    this.board.togglePiece(x, y);
    //0,0
    if (x === this.size - 1 && y === this.size - 1) {
      this.board.togglePiece(x, y);
      return this.count++;
      // x = 0;
      // y = 0;
      //this.move(x, y);
    } else if (this.checkRight(x, y)) {
      //-1,0
      x = x + 1;
      this.move(x, y);
    } else if (this.checkDown(x, y)) {
      y = y - 1;
      this.move(x, y);
    } else if (this.checkLeft(x, y)) {
      x = x - 1;
      this.move(x, y);
    } else if (this.checkUp(x, y)) {
      y = y + 1;
      this.move(x, y);
    }

    //base case
    //add this.count if you get to endPoint
    //return if you can't move
  }
}

module.exports = { RobotPaths };
