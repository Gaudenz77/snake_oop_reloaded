
// board 
var board;

// food
var food;

// snake
var snake;

// direction
var direction;

var gameOver = false;



window.onload = function() {
    // prepare board with rows = 20, cols = 20 and blockSize 25
    board = new Board(20, 20, 25, "board");
    
    // prepare the food bit
    food = new Food(board);

    // prepare the snake
    snake = new Snake(board);

    // prepare direction object
    direction = new Direction();

    // add listeners for keyup and clicks on arrow button events
    addListeners(direction);
    // document.addEventListener("keyup", changeDirection);

    // start updating the situation on the board
    /*
        TODO: Make the update frequency configurable.
              This could be done by a range slider that
              allows to select a game level: The higher
              the level, the higher the update frequency -
              the harder the game.
    */
    setInterval(update, 1000/8);
}

function update() {
    if (gameOver) {
        return;
    }

    // draw empty board
    board.draw();

    // draw food
    food.draw();

    // check if snake hits the food ...

    if (snake.hit(food)) {
        // ... and add the food to the the tail of the snake
        snake.eat(food);
        // snakeBody.push([food.x, food.y])

        // place more food, but do not draw it yet
        food.place();
        // placeFood();
    }

    // shift the snake's body parts
    snake.shift();

    // move the head of the snake in the current direction
    snake.moveHead(direction);


    // draw the snake
    snake.draw();

    if (snake.leaveBoard()) {
        quitGame();
    }

    // check gameover condition 2: snake hits itself (goes backwards hitting itself)
    if (snake.hitItself()) {
        quitGame();
}
}

function quitGame() {
    gameOver = true;
    alert("Game Over");
    location.reload();
}

function addListeners(direction) {
    addKeyupListener(direction);
    addButtonClickListeners(direction);
}

function addKeyupListener(direction) {
    document.addEventListener("keyup", function(e) {
        direction.change(e);
    });
}

function addButtonClickListeners(direction) {
    document.getElementById("upBtn").addEventListener("click", function() {
        direction.change({code: "ArrowUp"});
    });
    
    document.getElementById("downBtn").addEventListener("click", function() {
        direction.change({code: "ArrowDown"});
    });
    
    document.getElementById("leftBtn").addEventListener("click", function() {
        direction.change({code: "ArrowLeft"});
    });
    
    document.getElementById("rightBtn").addEventListener("click", function() {
        direction.change({code: "ArrowRight"});
    });
}













// board
/* var blockSize = 25;

var board;
var context; */

// snake head

/* var snakeX = blockSize * 5;



var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeBody = []

var foodX;
var foodY;

var gameOver = false; */