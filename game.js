import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
} from "./snake.js";

import {
  update as updateFood,
  draw as drawFood,
} from "./food.js";

let lastRenderedTime = 0;
const gameBoard = document.getElementById("game-board");
const 

function main(currentTime) {
  if(gameOver){
    return alert('loose')
  }
  window.requestAnimationFrame(main);
  const secondSinceLastRender = (currentTime - lastRenderedTime) / 1000;
  if (secondSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderedTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}


function checkDeath(){
  gameOver = outSideGrid(getSnakeHead()) ||  snakeIntersection();
}