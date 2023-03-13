class Board {
    /**
     * @param {int} rows 
     * @param {int} cols 
     * @param {int} blockSize 
     * @param {string} canvasElementId 
     */
    constructor(rows, cols, blockSize, canvasElementId) {
            this.rows = rows;
            this.cols = cols;
            this.blockSize = blockSize;
            this.canvasElementId = canvasElementId;
            this.canvasElement; // was called "board" before
            this.drawingContext;
    // prepare the canvas element in 2d context 
    this.prepare();
    }
     
// initialize board
    /**
     * prepare the canvas 
     * 
     * this function depends on a html element and must be called by windows onload
     * 
     */
   
    prepare() {
        this.canvasElement = document.getElementById(this.canvasElementId);
        this.canvasElement.height = this.rows * this.blockSize;
        this.canvasElement.width = this.cols * this.blockSize;
        this.drawingContext = this.canvasElement.getContext("2d");
    }
   
    /**
     * 
     * draw the board
     * 
     */
          
    draw() {
        this.drawingContext.fillStyle = "black";
        this.drawingContext.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    }
}




