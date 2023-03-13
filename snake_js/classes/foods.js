
/* class Food  {
    
constructor(foodX, foodY, blockSize) {
    this.foodX = foodX; 
    this.foodY = foodY;
    this.blockSize = blockSize;
    this.context = board.getContext("2d");
    this.context.fillStyle = "red";
    this.context.fillRect(foodX, foodY, blockSize, blockSize);
    }};


new Food(5, 5, 5, 5);  */


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

