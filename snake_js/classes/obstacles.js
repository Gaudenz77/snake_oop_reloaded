class Obstacle {
    constructor(board) {
      this.board = board;
      this.x;
      this.y;
  
      // initialize obstacle
      this.place();
    }
  
    // randomly place the obstacle
    place() {
      this.x = Math.floor(Math.random() * this.board.cols) * this.board.blockSize;
      this.y = Math.floor(Math.random() * this.board.rows) * this.board.blockSize;
    }
  
    // draw obstacle on set coordinates
    draw() {
      this.board.drawingContext.fillStyle = "white";
      this.board.drawingContext.fillRect(this.x, this.y, this.board.blockSize, this.board.blockSize);
    }
  
    // check if the snake collided with the obstacle
    collideWithSnake(snake) {
      if (snake.x === this.x && snake.y === this.y) {
        return true;
      }
      return false;
    }
  }
  