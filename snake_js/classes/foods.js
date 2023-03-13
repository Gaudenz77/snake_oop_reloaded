class Food  {
    constructor(board) {
        this.board = board;
        this.x;
        this.y;

// initialize food
        this.place();
    }

// randomly placing

    place() {
        this.x = Math.floor(Math.random() * this.board.cols) * this.board.blockSize;
        this.y  = Math.floor(Math.random() * this.board.rows) * this.board.blockSize;
    }

// draw food on set coordinates

    draw() {
        this.board.drawingContext.fillStyle = "red";
        this.board.drawingContext.fillRect(this.x, this.y, this.board.blockSize, this.board.blockSize);
    }
}

