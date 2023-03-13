/* class Board {
constructor(blockSize, rows, cols) {
    this.board = document.getElementById("board");
    this.rows = rows; 
    this.cols = cols;
    this.board.height = rows * blockSize;
    this.board.width = cols * blockSize;
    this.context = board.getContext("2d");
    this.context.fillStyle = "black";
    this.context.fillRect(0, 0, this.board.width, this.board.height);
    }};
// Example usage:
// new Board(25, 20, 20); */ 

class Board {
    
    constructor(board) {
        this.board = document.getElementById("board");
    this.x = rows; 
    this.y = cols;
    this.this.drawingContext = board.getContext("2d");
    this.context = board.getContext("2d");
    this.context.fillStyle = "black";
    this.context.fillRect(0, 0, this.board.rows, this.board.cols);
    };
     
        // initialize board

        initialize() {
            this.board;
           
        }
    
    
        
           
    // randomly placing

    

    // draw food on set coordinates

    draw() {
        
        this.board.drawingContext.fillStyle = "black";
        this.board.drawingContext.fillRect(this.x, this.y,this.board.cols * this.board.blockSize, this.board.rows * this.board.blockSize);
    } /*  draw() {
        this.board.drawingContext.fillStyle = "black";
        this.board.drawingContext.fillRect(0, 0, this.board.width, this.board.height);
    } */

}




