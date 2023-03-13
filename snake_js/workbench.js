// board
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

// snake head

var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeBody = []

/* var foodX;
var foodY; */

/* class Food {
  constructor() {
    this.x = 0;
    this.y = 0;
  }}; */


function Food(x, y) {
    this.x = x;
    this.y = y;
  }

  var foods = [];

function createFoods() {
  for (var i = 0; i < 5; i++) {
    var foodX = Math.floor(Math.random() * cols) * blockSize;
    var foodY = Math.floor(Math.random() * rows) * blockSize;
    var food = new Food(foodX, foodY);
    foods.push(food);
  }
}


var gameOver = false;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); // used for drawing on board
  
    createFoods();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 1000/10) // redraw all 100 millisecs
    
  }

  function placeFood() {
    foods = []
    for(let i = 0; i < 5; i++) {
      let x = Math.floor(Math.random() * cols) * blockSize;
      let y = Math.floor(Math.random() * rows) * blockSize;
      foods.push(new Food(x, y));
    }
  }
  

  function update() {
    if(gameOver) {
      return;
    }
  
    context.fillStyle = "black";
    context.fillRect(0, 0,board.width, board.height);
  
    for(let i = 0; i < foods.length; i++) {
      let food = foods[i];
      context.fillStyle = "red";// check if all food has been eaten
    if (foods.length == 0) {
        alert("You won!");
        location.reload(); // restart game
    }
      context.fillRect(food.x, food.y, blockSize, blockSize);
  
      if(snakeX == food.x && snakeY == food.y) {
        snakeBody.push([food.x, food.y]);
        foods.splice(i, 1); // remove the eaten food
      }
    }
  
    for (let i = snakeBody.length - 1; i > 0; i--) {
      snakeBody[i] = snakeBody[i - 1];
    }
  
    if(snakeBody.length) {
      snakeBody[0] = [snakeX, snakeY];
    }
  
    context.fillStyle = "lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for(i = 0; i < snakeBody.length; i++) {
      context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }
  

    // check if all food has been eaten
    if (foods.length == 0) {
      alert("You won!");
      location.reload(); // restart game
  }
    // gameover conditions
    if(snakeX < 0 || snakeX > cols*blockSize || snakeY < 0 || snakeY > rows*blockSize) {
      gameOver = true;
      alert("Game Over");
      location.reload();
    }
  
    for(let i = 0; i < snakeBody.length; i++) {
      if(snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
        gameOver = true;
        alert("Game Over");
        location.reload();          
      } 
    }
  }
  

function changeDirection(e) {

    if(e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }

    else if(e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }

    else if(e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }

    else if(e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
};

var upBtn = document.getElementById("upBtn");
upBtn.addEventListener("click", function() {
    changeDirection({ code: "ArrowUp" });
});

var downBtn = document.getElementById("downBtn");
downBtn.addEventListener("click", function() {
    changeDirection({ code: "ArrowDown" });
});

var leftBtn = document.getElementById("leftBtn");
leftBtn.addEventListener("click", function() {
    changeDirection({ code: "ArrowLeft" });
});

var rightBtn = document.getElementById("rightBtn");
rightBtn.addEventListener("click", function() {
    changeDirection({ code: "ArrowRight" });
});

// (0 - 1) * cols -> (0 - 19.9999) -> (0-19) *25
function placeFood() {
    foodX  = Math.floor(Math.random() * cols) * blockSize;
    foodY  = Math.floor(Math.random() * rows) * blockSize;
}

// ---------------------------------------------------------------- Brfore Multiple Foods


// ----------------------------------------------------------------


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


