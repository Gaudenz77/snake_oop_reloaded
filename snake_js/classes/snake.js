class Snake {
    /**
     * constructor 
     * 
     * @param {Board} board 
     */
    constructor(board) {
        this.board = board;
        this.x;
        this.y;

        this.initialize();
    }
    // initialize snake

    initialize() {
        this.body = [];

        // set initial coordinates of the snakes head
        this.x = this.board.blockSize = 5;
        this.y = this.board.blockSize = 5;
    }

    /**
     * 
     * draws snake body
     * 
     */

    draw() {

        this.board.drawingContext.fillStyle = "lime";

        this.drawSquare(this.x, this.y);
 
        for (let i = 0; i < this.board.length; i++) { //samplebody= [[3, 5], [4, 5]]
            this.drawSquare(this.body[i][0], this.body[i][1]);

    }
}
    /**
     * 
     * @param {int} x 
     * @param {int} y 
     */
    drawSquare(x, y) {
        this.board.drawingContext.fillRect(x, y, this.board.blockSize, this.board.blockSize)
    }

    hit(food) {
        return this.x == food.x && this.y == food.y;
    }

    /**
     * 
     * @returns {Boolean}
     * 
     */
    hitItself() {
        if(!this.body.length) return false;

        for (let i = 0; i < this.body.length; i++) {
            if(this.x == this.body[i][0] && this.y == this.body[i][1]) {
                return true;
            }
        }
        return false;
        }


    eat(food) {
        this.body.push([food.x, food.y]);

        }

    update(direction) {


        // shift the snakes body parts

        this.shift();

        // move the head of the snake toward scurrent direction
        this.moveHead(direction);

        // draw the snake

        this.draw();

        }
        /**
         * 
         * shifts the snake body coordinates towards the tail and current tail coordinates are removed 
         * 
         * the current head coordinates of the snake are copied to the head
         * of the array
         * 
         */
        shift() {
            if(!this.body.length) return; // necessary if snake only has head coordinates

            for (let i = this.body.length - 1; i > 0; i--) {
                this.body[i] = this.body[i - 1];
            }

            this.body[0] = [this.x, this.y];
        }

         /**
         * 
         * moves snake head
         * @param {Direction} direction direction
         */
        moveHead(direction) {
        this.x += direction.x * this.board.blockSize;
        this.y += direction.y * this.board.blockSize;

        }

        leaveBoard() {
                if(this.x < 0 || this.x > this.board.cols * this.board.blockSize || 
                   this.y < 0 ||this.y > this.board.rows * this.board.blockSize) {
                return true;
            }
            else return false;
        }

    }
   








    
/*     moveHead(Direction, direction);
    
    draw();
    
    hit(Food, food);
    
    hitSelf();
    
    leaveBooard(); */
    
 
    