// Example usage:

const snakeGame = new SnakeBoardGame(25, 20, 20);

// board
var blockSize = 25;

var board;
var context;

// snake head

var snakeX = blockSize * 5;



var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeBody = []

var foodX;
var foodY;

var gameOver = false;